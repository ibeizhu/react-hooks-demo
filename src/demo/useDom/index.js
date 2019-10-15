import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import {findDOMNode} from 'react-dom';

const TextInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);
  const compRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => ({
    // 导出方法
    focusInput: handleFocus,
    // 导出当前 dom 节点
    compRef: compRef
  }));
  
  return (
    <div ref={compRef}>
      <input ref={inputRef} type="text" />
      <br />
      <button onClick={handleFocus}>内部调用 Focus the input</button>
    </div>
  );
});

export default function Parent() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    // 获取 TextInput 组件的 dom 节点
    const node = findDOMNode(inputRef.current.compRef.current);
    console.log(node);
    // 调用 TextInput 组件方法
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