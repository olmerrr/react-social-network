
import React from 'react';
import AsideStyle from'./Aside.module.css';

export default props => (
  <aside className={AsideStyle.Aside}> 
    <nav className="nav">
      <ul className = {AsideStyle.posts}>
        <li>
          Profile
        </li>
        <li>
          Messages
        </li>
        <li>
          News
        </li>
        <li>
          Music
        </li>
        <li>
          Settings
        </li>
      </ul>
    </nav>
</aside>
  )
