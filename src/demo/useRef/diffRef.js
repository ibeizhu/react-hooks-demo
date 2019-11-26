import React, {
  useRef,
  createRef,
  Component,
  useEffect,
  useImperativeHandle,
  forwardRef
} from "react";

class ClassDemo extends Component {
  constructor(props) {
    super(props);
    this.rootRef2 = createRef();
  }
  render() {
    return (
      <div>
        <div
          ref={r => {
            this.rootRef1 = r;
          }}
        ></div>
        <div ref={this.rootRef2}></div>
        <div ref="rootRef3"></div>
      </div>
    );
  }
}

const HooksDemo = forwardRef((props, ref) => {
  const rootRef = useRef();
  useImperativeHandle(ref, () => ({
    rootRef: rootRef,
    reset: () => {}
  }));
  return <div ref={rootRef}></div>;
});

export default function Demo() {
  const ref1 = useRef();
  const ref2 = useRef();

  useEffect(() => {
    setTimeout(() => {
      // 比较两个不同写法的组件 在 ref 调用上是否有差别
      console.log(ref1);
      console.log(ref2);
    }, 2000);
  }, []);

  return (
    <div>
      <ClassDemo ref={ref1}></ClassDemo>
      <HooksDemo ref={ref2}></HooksDemo>
    </div>
  );
}
