import React from 'react';
import  Style from './Post.module.css';

export default props => (
<div>
  <p className = {Style.postsLegend}><span>Post message:</span>  {props.message}</p>
  <img src="https://img.favpng.com/1/22/9/homer-simpson-bart-simpson-marge-simpson-lisa-simpson-png-favpng-LCcx4qNJsQjThsHZt6JCpymuy.jpg" alt="avatar"
  className={Style.post_img}/>
  <span className = {Style.likeCount}> {props.likeCounts}</span>
</div>

  )
