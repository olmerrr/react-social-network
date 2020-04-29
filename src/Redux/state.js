import {rerenderEntireTree} from '../render';
let state = {
  profilePage: {
    postsData : [
      {id: 1, message: 'Give more JSX', likeCount: 5},
      {id: 2, message: 'Hello Friend!!', likeCount: 33},
      {id: 3, message: 'Why?', likeCount: 0}
      ]
    },
  dialogsPage: {
    messages : [
      {id: 1,message: "Привет, куда пропал?"},
      {id: 2,message: "Пошли  в кино?"},
      {id: 3,message: "цштвф ыгзук"},
      {id: 4,message: "Скинь реферат"},
      {id: 5,message: "Что с Юлей?"}
    ],
    dialogs : [
      {id: 1,name: 'Дима'},
      {id: 2,name: 'Тома'},
      {id: 3,name: 'Юлия'},
      {id: 4,name: 'Вася'},
      {id: 5,name: 'Мария'}
    ]
  }
  };
 export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likeCount: 0
  };
  state.profilePage.postsData.push(newPost);
  rerenderEntireTree(state);
}

export default state;