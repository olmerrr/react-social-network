import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postsData = [
  {id: 1, message: 'Give more JSX', likeCount: 5},
  {id: 2, message: 'Hello Friend!!', likeCount: 33},
  {id: 3, message: 'Why?', likeCount: 0}
];

ReactDOM.render(
  <React.StrictMode>
    <App postsData = {postsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
