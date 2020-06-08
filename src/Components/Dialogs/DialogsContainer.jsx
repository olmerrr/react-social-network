import React from 'react';
import DialogItem from './DialogItem/DialogItem.jsx';
import MessageItem from './MessageItem/MessageItem.jsx';
import { updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import { sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';

let AuthRedirectComponent = withAuthRedirect(Dialogs); 

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage : ()=>{
      dispatch(sendMessageCreator());
    }
  }
}

// (props) => {
//   if(this.props.isAuth === false)
//    return(
//     <Redirect to={'Login'}/>
//   );
//   return <DialogsContainer {...props}/>
// };

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
export default DialogsContainer;