import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import calculatorApp from './reducers/Reducers.js';
import App from "./App.js";

import {
  male,
  female
} from './actions/action.js';
import '../scss/style.scss'

let store = createStore(calculatorApp);
//console.log(store.getState());

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById("root")
);