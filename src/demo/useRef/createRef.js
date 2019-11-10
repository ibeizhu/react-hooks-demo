import React, { useRef, createRef, useState } from 'react';

export default function UseRefDiffWithCreateRef() {
  const [renderIndex, setRenderIndex] = useState(1);
  const refFromUseRef = useRef();
  const refFromCreateRef = createRef();

  // useRef 只会在第一次初始化
  if (!refFromUseRef.current) {
    refFromUseRef.current = renderIndex;
  }
  // createRef 每次 render 都会重新初始化
  if (!refFromCreateRef.current) {
    refFromCreateRef.current = renderIndex;
  }
  return (
    <div className="App">
      renderIndex: {renderIndex}
      <br />
      refFromUseRef.current: {refFromUseRef.current}
      <br />
      refFromCreateRef.current: {refFromCreateRef.current}
      <br />
      <button onClick={() => setRenderIndex(prev => prev + 1)}>renderIndex + 1 重新渲染</button>
    </div>
  );
}
