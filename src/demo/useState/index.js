import React, { Component, useState, useRef, useEffect } from 'react'

// demo1 
// function Counter () {
//   // Declare a new state variable, which we'll call "count"
//   const [count, setCount] = useState(1) 

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   )
// }

// capturevalues
// demo2
// class Counter extends Component {
//   state = { count: 0 };

//   log = () => {
//     this.setState({
//       count: this.state.count + 1
//     });
//     setTimeout(() => {
//       console.log(this.state.count);
//     }, 3000);
//   };

//   render() {
//     return (
//       <div>
//         <p>You clicked {this.state.count} times</p>
//         <button onClick={this.log}>Click me</button>
//       </div>
//     );
//   }
// }

// demo3 
// function Counter() {
//   const [count, setCount] = useState(0);

//   const log = () => {
//     setCount(count + 1);

//     setTimeout(() => {
//       console.log(count);
//     }, 3000);
//   };

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={log}>Click me</button>
//     </div>
//   );
// }

// demo4
// function Counter() {
//   const count = useRef(0);
//   const count1 = useRef({});

//   const log = () => {
//     count1.current.name;
//     setTimeout(() => {
//       console.log(count.current);
//     }, 3000);
//   };

//   return (
//     <div>
//       <button onClick={log}>Click me</button>
//     </div>
//   );
// }

// demo5 
// 自定义 hooks
function useCurrentValue(value) {
  const ref = useRef(0);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref;
}

function Counter() {
  const [count, setCount] = useState(0);
  const currentCount = useCurrentValue(count);

  const log = () => {
    setCount(count + 1);
    setTimeout(() => {
      console.log(currentCount.current);
    }, 3000);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={log}>Click me</button>
    </div>
  );
}


export default Counter