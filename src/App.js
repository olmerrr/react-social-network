import React from 'react';
import './App.css';
import { Route, BrowserRouter } from "react-router-dom";
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import News from './components/Aside/News/News';
import Musics from './components/Aside/Musics/Musics';
import Settings from './components/Aside/Settings/Settings';

const App = (props) => {
  

  return (
          <div className="App-wrapper">
        <Header />
        <div className="app_inner">
          <Aside />
          <Route path="/dialogs" render = { () => <Dialogs state = {props.state.dialogsPage}/>} />
          <Route path='/profile'
                           render={ () => 
                           <Profile
                               profilePage={props.state.profilePage}
                               dispatch = {props.dispatch}
                               /> 
                            }/> <Route path="/news" component = {News} />
          <Route path="/musics" component = {Musics} />
          <Route path="/settings" component = {Settings} />
        </div>
      </div>
  );
}

export default App;
