import React from 'react';
import Style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import MessageItem from './MessageItem/MessageItem.jsx';
import {updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import {sendMessageCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

let DialogsContainer = (props) => {

  let state = props.store.getState().dialogsPage;


  let onSendMessageClick = ()=> {
    props.store.dispatch(sendMessageCreator());
  }
  let onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body));
   };
  return <Dialogs updateNewMessageBody = {onNewMessageChange}
                  sendMessage = {onSendMessageClick}
                  dialogsPage = {state} />
}
export default DialogsContainer;