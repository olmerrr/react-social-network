import React from 'react';
import HeaderStyle from'./Header.module.css';
import { NavLink } from 'react-router-dom';
import HeaderContainer from './HeaderContainer';
export default props => (
  <header className={HeaderStyle.Header}>
    <div className = {HeaderStyle.headerContainer}>
      <img src="https://i0.wp.com/www.broadbandtvnews.com/wp-content/uploads/2018/01/Premier-League-2017.png?fit=1200%2C900&ssl=1" className={HeaderStyle.Header__logo} alt="Header__logo"/>
      <div className = {HeaderStyle.loginBlock}>
        {props.isAuth ? props.login
                      : <NavLink to ={'/login'}>Login</NavLink>
                    }
      </div>
    </div>
  </header>
  )
