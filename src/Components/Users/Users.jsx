import React from 'react';
import style from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../../src/assets/images/def-face.webp';

class Users extends React.Component{
  // constructor (props){
  //   super(props);
  // }
  componentDidMount(){ // жизненный цикл 
//ajax req
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
    .then(response => {
      this.props.setUsers(response.data.items);
    });
//ajax req
  }
  render(){
    return (
      <div>
     <div>
          <span>1</span>
          <span className={style.selectedPage}>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
      </div>
        {this.props.users.map(u => <div key={u.id}>
          <span>
            <div>
              <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="usersAvatar" className={style.usersAvatar} />
            </div>
            <div>
              {(u.followed) ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => {this.props.follow(u.id) }}>Follow</button>}
            </div>
          </span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
          {/* <span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
  
          </span> */}
        </div>)}
      </div>
    )
  }
}
export default Users;