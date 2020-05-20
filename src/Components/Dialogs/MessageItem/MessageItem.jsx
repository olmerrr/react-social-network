import React from 'react';
import Style from './MessageItem.module.css';

let MessageItem = (props) =>{
  return (
      <div className={Style.dialog}>{props.message} </div>
  )
}

export default MessageItem;