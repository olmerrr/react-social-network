const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
        dialogs  : [
          {id :'1', name: 'Maxim'},
          {id :'2', name: 'Oxana'},
          {id :'3', name: 'Slavik'}
        ],
          messages  : [
          { message: "Дайте джазу" },
          { message: "Куда?"},
          { message: "Поехали на море"}
        ],
        newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
       case UPDATE_NEW_MESSAGE_BODY:{
           return       {...state,
                        newMessageBody : action.body};
          }
           
       case SEND_MESSAGE:{
        let body = state.newMessageBody;
        return  {
                ...state,
                newMessageBody : '',
                messages:[...state.messages, {id: 6, message: body}]
          };
          }
           default:
           return state;
   } 
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;