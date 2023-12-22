import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {LoginComponent} from  './components/login/loginComponent.js';
import {NetflixIndex} from './Netflix/Netflix-index/Netflix-index.js'
import { DataBindingComponent } from './components/login/DataBinding/dataBindingComponent.js';
import { DataBindingComponent2 } from './components/login/DataBinding/dataBindingComponent2.js';
import { DataBindingComponent3 } from './components/login/DataBinding/dataBindingComponent3.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {<DataBindingComponent3/>}
    {/* {<DataBindingComponent2/>} */}
    {/* {<DataBindingComponent/>} */}
    {/* <NetflixIndex /> */}
    {/* <LoginComponent/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
