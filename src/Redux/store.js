
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
  getState (){
    return this._state;
  },
  callSubscriber () {
    console.log('State is changed');
  },
 addPost  (){
  const newPost = {
      id: 5,
      
      message: this._state.profilePage.newPostText,
      likeCounts: 112
    };
    this._state.profilePage.posts.push(newPost);  
    this._state.profilePage.newPostText = ' ';
    this._callSubscriber(this._state);
  },
  updateNewPostText (newText){
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe  (observer){
    this._callSubscriber = observer; //patern
  }
};

export default store;
window.store = store;

