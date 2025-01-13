'use client';
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  const handleScroll = (event: WheelEvent) => {
    setCount(count + event.deltaY);
  };
  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => {
      window.removeEventListener('wheel', handleScroll);
    }
  })

  return (
    <div>
      <h1>Welcome to the E-commerce Site</h1>
      <p>you have moved {count} spots</p>
      <button onClick={() => setCount(count + 1)}>Move 1 Spot</button>
    </div>
  );
};
