import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {addPost} from './Redux/state';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter } from "react-router-dom";

export let rerenderEntireTree = (state) => {
      ReactDOM.render(
            <BrowserRouter>
               <App state = {state}
                    addPost  = {addPost}/>
            </BrowserRouter>,document.getElementById('root')
      );
 }

