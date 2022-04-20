import React from 'react';
import ReactDOM from 'react-dom';
import App1 from './App1';
import Store from "./Store"
import {Provider} from "react-redux"

ReactDOM.render(
  <Provider store={Store}>
    <App1/>
  </Provider>,
  document.getElementById('root')
);



