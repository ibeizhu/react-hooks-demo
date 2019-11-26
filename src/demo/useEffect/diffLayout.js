import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import "./index.css";

const EffectDemo = ({ boxRef, children }) => {
  const msgRef = useRef(null);
  useEffect(() => {
    const rect = boxRef.current.getBoundingClientRect();
    msgRef.current.style.top = `${rect.height + rect.top}px`;
  }, []);

  return (
    <span ref={msgRef} className="msg1">
      {children}
    </span>
  );
};

const LayoutEffectDemo = ({ boxRef, children }) => {
  const msgRef = useRef(null);
  useLayoutEffect(() => {
    const rect = boxRef.current.getBoundingClientRect();
    msgRef.current.style.top = `${rect.height + rect.top}px`;
  }, []);

  return (
    <span ref={msgRef} className="msg2">
      {children}
    </span>
  );
};

const App = () => {
  const [show, setShow] = useState(false);
  const boxRef = useRef(null);

  return (
    <div>
      <div ref={boxRef} className="box" onClick={() => setShow(prev => !prev)}>
        Click me
      </div>
      {show && <EffectDemo boxRef={boxRef}>Effect</EffectDemo>}
      {show && <LayoutEffectDemo boxRef={boxRef}>LayoutEffect</LayoutEffectDemo>}
    </div>
  );
};

export default App;
