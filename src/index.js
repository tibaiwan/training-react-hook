import React from 'react';
import ReactDOM from 'react-dom';
import { UseStateExample } from './01useState/Index';
import { UseEffectExample } from './02useEffect/Index';
import { UseContextExample } from './03useContext/Index';
import { UseReducerExample } from './04useReducer/Index';

ReactDOM.render(
  <React.StrictMode>
    {/* <UseStateExample /> */}
    {/* <UseEffectExample /> */}
    {/* <UseContextExample /> */}
    <UseReducerExample />
  </React.StrictMode>,
  document.getElementById('root')
);
