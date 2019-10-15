import React, { useState, useRef, useEffect } from 'react';

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export default function Counter() {
  const [count, setCount] = useState(0);
  const previousCount = usePrevious(count);

  return (
    <div>
      <p>count: {count}</p>
      <p>previousCount: {previousCount}</p>
      <button onClick={() => setCount(count + 1)}>点击 count + 1</button>
    </div>
  );
}
