const ADD_POST ='ADD-POST' ,
      UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
      UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY',
      SEND_MESSAGE = 'SEND-MESSAGE';

let  store = {
  _state : {
    profilePage: {
      posts : [
        {message:"Hello React", likeCounts : "22"},
        {message:"Give more JSX", likeCounts : "8"},
        {message:"Wood in Ukraine super!", likeCounts : "2"},
      ],
      newPostText: 'it kamasutra'
    },
    dialogsPage: {
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
    },

    sitebar:{
      friends: [
         { name: "Denis" }, 
         { name: "Bogdan"},
         { name: 'Denis Zaryada'}
      ]
    }
  },
  _callSubscriber () {
    console.log('State is changed');
  },

  getState (){
    return this._state;
  },
  subscribe  (observer){
    this._callSubscriber = observer; //patern
  },
  dispatch(action){
    if (action.type === ADD_POST){
    let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likeCounts: 112
      };
      this._state.profilePage.posts.push(newPost);  
      this._state.profilePage.newPostText = ' ';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT){
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY){
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE){
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = ' ';
      this._state.dialogsPage.messages.push({message: body });
      this._callSubscriber(this._state);

    } 
  } 
};



export const addPostActionCreator = () =>({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) =>{
  return {type: UPDATE_NEW_POST_TEXT,newText: text}
};

export const sendMessageCreator = () =>({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (body) =>{
  return {type: UPDATE_NEW_MESSAGE_BODY,body:body }
}; 

export default store;
window.store = store;

