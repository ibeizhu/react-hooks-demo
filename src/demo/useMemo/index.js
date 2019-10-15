import React, { useEffect, useState, useCallback, useMemo } from 'react';

function Counter(props) {
  console.log('Counter render');
  return (
    <div>
      <p>count: {props.count}</p>
    </div>
  );
}

function Time(props) {
  console.log('Time render');
  return (
    <div>
      <p>time: {props.time}</p>
    </div>
  );
}

export default function Demo() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(10);

  // 开销大的函数或者组件可以放置在这里
  // 只在依赖的count1, count2变化时，返回新的函数
  const calculateCount = useMemo(() => {
    console.log('return new calculateCount function');
    return () => {
      if (count1 && count2) {
        return count1 * count2;
      }
      return count1 + count2;
    };
  }, [count1, count2]);

  // // 开销大的函数或者组件可以放置在这里
  // // 只在依赖的count1, count2变化时，返回新的函数
  // const calculateCount = useCallback(() => {
  //   if (count1 && count2) {
  //     return count1 * count2;
  //   }
  //   return count1 + count2;
  // }, [count1, count2]);

  useEffect(() => {
    const result = calculateCount();
    console.log('calculateCount', result);
  }, [calculateCount]);

  // 用于实现 shouldComponentUpdate
  // 与 Class Component 不同点：当前是在组件外做比较
  const child1 = useMemo(() => <Counter count={count} />, [count]);
  const child2 = useMemo(() => <Time time={time} />, [time]);

  return (
    <div>
      <p>count: {count}</p>
      <p>time: {time}</p>
      <p>count2: {count2}</p>
      <br />
      <button onClick={() => setCount(count + 1)}>count + 1</button>
      <br />
      <button onClick={() => setCount2(count2 + 1)}>count2 + 1</button>
      <br />
      <button onClick={() => setTime(time + 1)}>time + 1</button>
      <br />
      {child1}
      {child2}
    </div>
  );
}
