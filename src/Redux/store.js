import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let  store = {
  _state : {
    profilePage: {
      posts : [
        {message:"Hello React", likeCounts : "22"},
        {message:"Give more JSX", likeCounts : "8"},
        {message:"Glory - glory MU!", likeCounts : "2"},
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

    sidebar:{
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
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
};


export default store;
window.store = store;

