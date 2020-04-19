import React from 'react';
import './App.css';
import  Header from './Components/Header/Header';
import Aside from './Components/Aside/Aside';
import Profile from './Components/Profile/Profile';
function App() {
  return (
    <div className="App-wrapper">
      <Header/>
      <Aside/>
      <Profile/>
    </div>
  );
}

export default App;
