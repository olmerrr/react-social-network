import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import state, { addPost, updateNewPostText, subscribe } from './redux/state';
import App from './App';
import { Route, BrowserRouter } from "react-router-dom";

let rerenderEntireTree = (state) => {
      ReactDOM.render(
            <BrowserRouter>
               <App state = {state}
                    addPost = {addPost}
                    updateNewPostText = {updateNewPostText}
                  />
            </BrowserRouter>,document.getElementById('root')
      );
 }

rerenderEntireTree(state);
subscribe(rerenderEntireTree);
