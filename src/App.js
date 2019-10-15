import React from 'react';
import './App.css';

import UseStateDemo from './demo/useState';
import UseEffectDemo from './demo/useEffect';
import UseLifeCircleDemo from './demo/useLifeCircle';
import UseMemoDemo from './demo/useMemo';
import UseRefDemo from './demo/useRef';
import UseThisDemo from './demo/useThis';
import UseReducerDemo from './demo/useReducer';
import UseDomDemo from './demo/useDom';
import UsePreviousDemo from './demo/usePrevious';

function App() {
  return (
    <div>
      <UseLifeCircleDemo />
    </div>
  );
}

export default App;
