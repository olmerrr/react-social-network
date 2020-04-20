import React from 'react';
import  PostStyle from './Post.module.css';

export default props => (
<div>
  <p>Hello</p>
  <img src="https://img.favpng.com/1/22/9/homer-simpson-bart-simpson-marge-simpson-lisa-simpson-png-favpng-LCcx4qNJsQjThsHZt6JCpymuy.jpg" alt="avatar"
  className={PostStyle.post_img}/>
  <span  className={PostStyle.post_like}>Like</span>
</div>

  )
