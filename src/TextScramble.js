import React, { useEffect, useRef } from 'react';

const TextScramble = ({ phrases }) => {
  const elRef = useRef(null);
  const frameRequest = useRef(null);
  const frame = useRef(0);
  const queue = useRef([]);
  const resolve = useRef(null);

  const chars = '!<>-_\\/[]{}—=+*^?#________';

  const update = () => {
    let output = '';
    let complete = 0;
    for (let i = 0, n = queue.current.length; i < n; i++) {
      let { from, to, start, end, char } = queue.current[i];
      if (frame.current >= end) {
        complete++;
        output += to;
      } else if (frame.current >= start) {
        if (!char || Math.random() < 0.28) {
          char = chars[Math.floor(Math.random() * chars.length)];
          queue.current[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    elRef.current.innerHTML = output;
    if (complete === queue.current.length) {
      resolve.current();
    } else {
      frameRequest.current = requestAnimationFrame(update);
      frame.current++;
    }
  };

  const setText = (newText) => {
    const oldText = elRef.current.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((res) => (resolve.current = res));
    queue.current = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      queue.current.push({ from, to, start, end });
    }
    cancelAnimationFrame(frameRequest.current);
    frame.current = 0;
    update();
    return promise;
  };

  useEffect(() => {
    let counter = 0;
    const next = () => {
      setText(phrases[counter]).then(() => {
        setTimeout(next, 11235);
      });
      counter = (counter + 1) % phrases.length;
    };
    next();
    return () => cancelAnimationFrame(frameRequest.current);
  }, [phrases]);

  return <span ref={elRef}></span>;
};

export default TextScramble;