
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
  rerenderEntireTree  () {
  console.log('State is changed');
  },
 addPost  (){
    const newPost = {
      id: 5,
      message: state.profilePage.newPostText,
      likeCounts: 112
    };
    state.profilePage.posts.push(newPost);  
    state.profilePage.newPostText = ' ';
    rerenderEntireTree(state);
  },
  updateNewPostText (newText){
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
  },
  subscribe  (observer){
    rerenderEntireTree = observer; //patern
  }
};

export default store;
window.store = store;

