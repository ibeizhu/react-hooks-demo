import React, { useEffect, useRef } from 'react';

export default function useThis() {
  // internalRef.current 默认值为 {}
  const internalRef = useRef({});
  // internalRef.current 类似于 this 变量
  const self = internalRef.current;

  if (self.didMount) {
    console.log('componentDidMount', self.didMount);
  }

  useEffect(() => {
    self.didMount = true;
  }, []);

  return (
    <div>
      <p>如何使用this 变量</p>
    </div>
  );
}
