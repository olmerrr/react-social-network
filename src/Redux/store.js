const ADD_POST ='ADD-POST' ;
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
      ]
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
    }
  } 
};



export const addPostActionCreator = () =>({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) =>{
  return {type: UPDATE_NEW_POST_TEXT,newText: text}
}; 
export default store;
window.store = store;

