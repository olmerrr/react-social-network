import  {authAPI} from '../api/api';
const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    usersId : null,
    email: null,
    login: null,
    isAuth: false
  };

  const authReducer = (state = initialState, action) => {
    switch(action.type) {
      
      case SET_USER_DATA:
        return {
          ...state,
          ...action.data,
              isAuth: true
            } 
       
      default:
      return state;
    }
}
// AC - ActionCreater
export const setAuthUserData = (usersId,email,login) => ({type: 'SET_USER_DATA', data: {usersId,email,login}});

export const getAuthUserData = () => (dispatch) =>{
  authAPI.me().then(response => {
    if (response.data.resultCode === 0){
      let {id,email, login} = response.data.data; //деструкторизация
      dispatch(setAuthUserData(id,email, login));
    }
  });
}
export default authReducer;