import React from 'react';
import DialogsStyle from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import MessageItem from './MessageItem/MessageItem.jsx';


let Dialogs = (props) => {
  

  let dialogsElements = props.state.dialogs.map( (dialog) =>
    <DialogItem name = {dialog.name} id = {dialog.id} />
  ); 
  let messagesElements = props.state.messages.map( (message) =>
    <MessageItem message = {message.message} id = {message.id} />
  ); 



  let addDialog = () => {
    let text = newDialogElement.current.value;
    console.log(text);
  }
  let newDialogElement = React.createRef();
  
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
      <div>
        <textarea ref = {newDialogElement} >
        </textarea>
        <button onClick = {addDialog}>Add</button>
      </div>
    </div>
  )
}
export default Dialogs;