import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {addPost} from './Redux/state';
import state from './Redux/state';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter } from "react-router-dom";

// addPost('TOdey i add new Post from props');
ReactDOM.render(
      <BrowserRouter>
         <App state = {state}
              addPost  = {addPost}/>
      </BrowserRouter>,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
