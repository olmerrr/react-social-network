import React from 'react';
import Style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import MessageItem from './MessageItem/MessageItem.jsx';


let Dialogs = (props) => {


  let dialogsElements = props.state.dialogs.map((dialog) =>
    <DialogItem name={dialog.name} id={dialog.id} />
  );
  let messagesElements = props.state.messages.map((message) =>
    <MessageItem message={message.message} id={message.id} />
  );



  let addDialog = () => {
    let text = newDialogElement.current.value;
    console.log(text);
  }
  let newDialogElement = React.createRef();

  return (
    <div>
    <div className={Style.dialogsWrapper}>
      <div className={Style.namesWrapper}>
        <div className={Style.namesTitle}>Names</div>
        {dialogsElements}
      </div>
      <div className={Style.messagesWrapper}>
        <div className={Style.messagesTitle}>Messages</div>
        {messagesElements}
      </div>

    </div>
    <div className={Style.AnswerWrapper}>
      <textarea ref={newDialogElement} className={Style.dlialogTextArea}>
        Ответьте вашим друзьям
      </textarea>
      <button onClick={addDialog} className={Style.AnswerBtn}>Answer</button>
      </div>
    </div>
  )
}
export default Dialogs;