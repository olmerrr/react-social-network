import React from 'react';
import AsideStyle from './Aside.module.css';
import {NavLink} from  "react-router-dom";

export default props => (
  <aside className={AsideStyle.Aside}>
    <nav className="nav">
      <ul className={AsideStyle.posts}>
        <li>
          <NavLink to ="/profile" activeClassName={ AsideStyle.activeLink}>Profile</NavLink>
        </li>
        <li>
          <NavLink to = "/dialogs" activeClassName={ AsideStyle.activeLink}>Messages</NavLink>  
        </li>
          <li>
            <NavLink to = "/news" activeClassName={ AsideStyle.activeLink}>News</NavLink>  
        </li>
          <li>
            <NavLink to = "/musics"activeClassName={ AsideStyle.activeLink}>Musics</NavLink>  
        </li>
          <li>
            <NavLink to = "/settings"activeClassName={ AsideStyle.activeLink}>Settings</NavLink>
          </li>
      </ul>
    </nav>
</aside>
  )
