import React, { useReducer } from 'react';

/**
 * 参考组件 use-undo
 * 通过 useReducer 实现简单的 undo redo 功能
 * https://github.com/xxhomey19/use-undo/blob/master/index.js
 * @param {*} initialCount
 */

 
function init(initialCount) {
  return { count: initialCount };
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}

export default function Counter() {
  const initialCount = 1;
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'reset', payload: initialCount })}>Reset</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}
