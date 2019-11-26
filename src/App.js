import React from "react";
import "./App.css";

import UseStateDemo from "./demo/useState";
import UseEffectDemo from "./demo/useEffect";
import UseEffectDiffWithLayoutEffectDemo from "./demo/useEffect/diffLayout";
import UseLifeCircleDemo from "./demo/useLifeCircle";
import UseMemoDemo from "./demo/useMemo";
import UseRefDemo from "./demo/useRef";
import UseRefDiffCreateRefDemo from "./demo/useRef/diffRef";
import UseThisDemo from "./demo/useThis";
import UseReducerDemo from "./demo/useReducer";
import UseDomDemo from "./demo/useDom";
import UsePreviousDemo from "./demo/usePrevious";
import UseContextDemo from "./demo/useContext";

function App() {
  return (
    <div>
      <UseEffectDiffWithLayoutEffectDemo />
    </div>
  );
}

export default App;
