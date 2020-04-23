import React from 'react';
import AsideStyle from './Aside.module.css';
import {NavLink} from  "react-router-dom";

export default props => (
  <aside className={AsideStyle.Aside}>
    <nav className="nav">
      <ul className={AsideStyle.posts}>
        <li>
          <NavLink to ="/profile" activeClassName={ AsideStyle.active_link}>Profile</NavLink>
        </li>
        <li>
          <NavLink to = "/dialogs" activeClassName={ AsideStyle.active_link}>Messages</NavLink>  
        </li>
          <li>
            <NavLink to = "/news" activeClassName={ AsideStyle.active_link}>News</NavLink>  
        </li>
          <li>
            <NavLink to = "/musics"activeClassName={ AsideStyle.active_link}>Musics</NavLink>  
        </li>
          <li>
            <NavLink to = "/settings"activeClassName={ AsideStyle.active_link}>Settings</NavLink>
          </li>
      </ul>
    </nav>
</aside>
  )
