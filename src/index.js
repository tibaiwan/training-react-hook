import React from 'react';
import ReactDOM from 'react-dom';
// import { UseStateExample } from './01useState/Index';
import { UseEffectExample } from './02useEffect/Index';

ReactDOM.render(
  <React.StrictMode>
    {/* <UseStateExample /> */}
    <UseEffectExample />
  </React.StrictMode>,
  document.getElementById('root')
);
