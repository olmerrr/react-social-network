import React from 'react';
import './App.css';
import { Route, BrowserRouter } from "react-router-dom";
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Profile from './components/Profile/Profile.jsx';
import Users from './components/Users/Users';
import Musics from './components/Aside/Musics/Musics';
import Settings from './components/Aside/Settings/Settings';
import DialogsContainer from './components/./Dialogs/./DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
  return (
          <div className="App-wrapper">
        <Header />
        <div className="app_inner">
          <Aside />
          <Route path="/dialogs" render = { () => <DialogsContainer/>} />
          <Route path='/profile'render={ () => <Profile/> }/>
          <Route path="/users" render = {()=> <UsersContainer/>} />
          <Route path="/musics" component = {Musics} />
          <Route path="/settings" component = {Settings} />
        </div>
      </div>
  );
}

export default App;
