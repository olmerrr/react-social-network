import React from 'react';
import Style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import MessageItem from './MessageItem/MessageItem.jsx';
import {updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import {sendMessageCreator} from '../../redux/dialogs-reducer';


let Dialogs = (props) => {

  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);
  let messagesElements = state.messages.map((message) => <MessageItem message={message.message} id={message.id} />);

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = ()=> {
    props.store.dispatch(sendMessageCreator());
  }
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
   };
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
        <textarea onChange = {onNewMessageChange} placeholder="Enter your message"  
                  className={Style.dlialogTextArea} value={newMessageBody}>
        </textarea>

        <button onClick={onSendMessageClick} className={Style.AnswerBtn}>Send message</button>
      </div>
    </div>
  )
}
export default Dialogs;