import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import {findDOMNode} from 'react-dom';

const TextInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  // 暴露方法给外部组件调用
  // useImperativeHandle 应当与 forwardRef 一起使用
  useImperativeHandle(ref, () => ({
    focusInput: handleFocus
  }));

  // ref 不能既导出方法，又导出 dom ref
  return (
    <div ref={ref}>
      <br />
      <input ref={inputRef} type="text" />
      <br />
      <br />
      <button onClick={handleFocus}>内部调用 Focus the input</button>
      <br />
    </div>
  );
});

function Parent() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    console.log(typeof findDOMNode)
    console.log(inputRef.current)
    // 调用子组件方法
    inputRef.current.focusInput();
  };

  return (
    <div>
      <TextInput ref={inputRef} />
      <br />
      <button onClick={handleFocus}>父组件调用子组件focusInput</button>
    </div>
  );
}

export default Parent;
