import React from 'react';
import DialogsStyle from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import MessageItem from './MessageItem/MessageItem.jsx';


let Dialogs = (props) => {

  let dialogsElements = props.dialogs.map( (dialog) =>
    <DialogItem name = {dialog.name} id = {dialog.id} />
  ); 

  let messagesElements = props.messages.map( (message) =>
    <MessageItem message = {message.message} id = {message.id} />
  ); 
  
  return (
    <div className={DialogsStyle.dialogsWrapper}>
      <div className={DialogsStyle.namesWrapper}>
        <div className={DialogsStyle.namesTitle}>Names</div>
        {dialogsElements}
      </div>
      <div className={DialogsStyle.messagesWrapper}>
        <div className={DialogsStyle.messagesTitle}>Messages</div>
        {messagesElements}       
      </div>
    </div>
  )
}
export default Dialogs;