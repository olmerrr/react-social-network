const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
    posts : [
      {message:"Hello React", likeCounts : "22"},
      {message:"Give more JSX", likeCounts : "8"},
      {message:"Glory - glory MU!", likeCounts : "2"},
    ],
    newPostText: 'it kamasutra'
  };

  const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST:{
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCounts: 1
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT:{
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
            default:
            return state;
    
}
}
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text });
export default profileReducer;