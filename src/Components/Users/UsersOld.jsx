import React from 'react';
import style from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../../src/assets/images/def-face.webp';

let Users = (props) => {
  let getUsers = () =>{
  if (props.users.length === 0) {
          axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                  props.setUsers(response.data.items);
                });
        }
      }
  
  return (
    <div>
      <button onClick= {getUsers}>Get user </button>
      {props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="usersAvatar" className={style.usersAvatar} />
          </div>
          <div>
            {(u.followed) ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                        : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
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

export default Users;