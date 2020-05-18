import React from 'react';
import Style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import MessageItem from './MessageItem/MessageItem.jsx';
import { updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import { sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import storeContext from '../../storeContext';

let DialogsContainer = () => {
  return (
    <storeContext.Consumer>{
      (store) => {
        let state = store.getState().dialogsPage;

        let onSendMessageClick = () => {
          store.dispatch(sendMessageCreator());
        }
        let onNewMessageChange = (body) => {
          store.dispatch(updateNewMessageBodyCreator(body));
        };
        return(
      <Dialogs updateNewMessageBody={onNewMessageChange}
        sendMessage={onSendMessageClick}
        dialogsPage={state} />
        )
      }
    }
    </storeContext.Consumer>
  )
}
export default DialogsContainer;