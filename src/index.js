import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import App from './App';
// import User from "./User/User";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>

,document.getElementById('root'));

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// import User from "./User/User";

// ReactDOM.render(
//     <User />,
//   document.getElementById('root'));
