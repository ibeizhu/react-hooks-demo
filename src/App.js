import React from 'react';
import './App.css';

import UseStateDemo from './demo/useState';
import UseEffectDemo from './demo/useEffect';
import UseLifeCircleDemo from './demo/useLifeCircle';
import UseMemoDemo from './demo/useMemo';
import UseRefDemo from './demo/useRef';
import UseRefDiffWithCreateRefDemo from './demo/useRef/createRef';
import UseThisDemo from './demo/useThis';
import UseReducerDemo from './demo/useReducer';
import UseDomDemo from './demo/useDom';
import UsePreviousDemo from './demo/usePrevious';
import UseContextDemo from './demo/useContext';

function App() {
  return (
    <div>
      <UseRefDiffWithCreateRefDemo />
    </div>
  );
}

export default App;
