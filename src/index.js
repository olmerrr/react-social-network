import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux/redux-store';
import App from './App';
import {Provider} from "react-redux";
import { Route, BrowserRouter } from "react-router-dom";

let rerenderEntireTree = (state) => {
      ReactDOM.render(
            <BrowserRouter>
                  <Provider store = {store}>
                        <App/>
                  </Provider>
            </BrowserRouter>, document.getElementById('root')
      );
}
rerenderEntireTree();
// rerenderEntireTree(store.getState());
// store.subscribe(() => {
//       let state = store.getState();
//       rerenderEntireTree(state);
// });
