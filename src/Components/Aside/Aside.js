import React from 'react';
import AsideStyle from './Aside.module.css';

export default props => (
  <aside className={AsideStyle.Aside}>
    <nav className="nav">
      <ul className={AsideStyle.posts}>
        <li>
          <a href="/profile">Profile</a>
        </li>
        <li>
          <a href="/dialogs">Messages</a>  
        </li>
          <li>
            <a href="/news">News</a>  
        </li>
          <li>
            <a href="/musics">Musics</a>  
        </li>
          <li>
            <a href="/settings">Settings</a>
          </li>
      </ul>
    </nav>
</aside>
  )
