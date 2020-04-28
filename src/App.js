import React from 'react';
import './App.css';
import { Route, BrowserRouter } from "react-router-dom";
import Header from './Components/Header/Header';
import Aside from './Components/Aside/Aside';
import Profile from './Components/Profile/Profile.jsx';
import Dialogs from './Components/Dialogs/Dialogs.jsx';
import News from './Components/Aside/News/News';
import Musics from './Components/Aside/Musics/Musics';
import Settings from './Components/Aside/Settings/Settings';

const App = (props) => {
  

  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <Header />
        <div className="app_inner">
          <Aside />
          <Route path="/dialogs" render = { () => <Dialogs state = {props.state.dialogsPage}/>} />
          <Route path="/profile" render = { () => <Profile state = {props.state.profilePage}/>} />          
          <Route path="/news" component = {News} />
          <Route path="/musics" component = {Musics} />
          <Route path="/settings" component = {Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
