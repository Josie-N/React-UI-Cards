import React from 'react';
import ReactDOM from 'react-dom';
import { commentInfo } from "./commentData.json"
import App from "./App";

ReactDOM.render(
  <App commentData = {commentInfo}/>,
  document.querySelector('#root')
);
