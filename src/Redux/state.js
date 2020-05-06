import {rerenderEntireTree} from '../render';

let state = {
  profilePage: {
    posts : [
      {message:"Hello React", likeCounts : "22"},
      {message:"Give more JSX", likeCounts : "8"},
      {message:"Wood in Ukraine super!", likeCounts : "2"},
    ],
    newPostText: 'it kamasutra'
  },
  DialogsPage: {
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
};

window.state= state;

export let addPost = ()=>{
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likeCounts: 112
  };
  state.profilePage.posts.push(newPost);  
  state.profilePage.newPostText = ' ';
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText)=>{
 
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};
export default state;