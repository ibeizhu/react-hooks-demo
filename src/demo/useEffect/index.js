import React, { useEffect, useState, useLayoutEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log(`invoke every time`);
  });

  useEffect(() => {
    console.log(`only invoke by 'time' changed`, time);
  }, [time]);

  useEffect(() => {
    console.log(`only invoke by 'count' changed`, time);
  }, [count]);

  useEffect(() => {
    console.log(`only invoke by 'count' and 'time' changed`, time, count);
  }, [count, time]);

  const handleResize = e => {
    console.log(e);
  };
  useEffect(() => {
    // 绑定事件
    document.addEventListener('resize', handleResize);
    return () => {
      // 注销事件
      document.removeEventListener('resize', handleResize);
    };
  },[]);

  // 其函数签名与 useEffect 相同，但它会在所有的 DOM 变更之后同步调用 effect。
  // 可以使用它来读取 DOM 布局并同步触发重渲染。
  // 在浏览器执行绘制之前，useLayoutEffect 内部的更新计划将被同步刷新。
  // 尽可能使用标准的 useEffect 以避免阻塞视觉更新。
  useLayoutEffect(() => {
    console.log(`useLayoutEffect You clicked ${count} times`);
  });

  return (
    <div>
      <p>count: {count}</p>
      <p>time: {time}</p>
      <br />
      <button onClick={() => setCount(count + 1)}>点击 count + 1</button>
      <br />
      <button onClick={() => setTime(time + 1)}>点击 time + 1</button>
    </div>
  );
}
