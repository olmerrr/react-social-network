import React from 'react';
import style from './Users.module.css';
let Users = (props) => {
  if (props.users.length === 0 ){
    props.setUsers(
      [
        { id: 1, imageUsers: 'https://onlinesportsblog.com/wp-content/uploads/2018/07/ryan-giggs-manchester-united-champions-league_t5ss7d1s92dg1hmyrqs7eehsa.jpg', followed: false, fullName: "Dmitry", status: "React rules", location: { city: 'Minsk', country: 'Belarus' } },
        { id: 2, imageUsers: 'https://onlinesportsblog.com/wp-content/uploads/2018/07/ryan-giggs-manchester-united-champions-league_t5ss7d1s92dg1hmyrqs7eehsa.jpg', followed: true, fullName: "Denis", status: "I bue new car Ford Mustang", location: { city: 'Kiev', country: 'Ukraine' } },
        { id: 3, imageUsers: 'https://onlinesportsblog.com/wp-content/uploads/2018/07/ryan-giggs-manchester-united-champions-league_t5ss7d1s92dg1hmyrqs7eehsa.jpg', followed: false, fullName: "Vovka", status: "Angular, what adout Angular?", location: { city: 'Kiev', country: 'Ukraine' } }
      ]
    )
  }
  return (
    <div>
      {props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <img src={u.imageUsers} alt="usersAvatar" className={style.usersAvatar} />
          </div>
          <div>
            {u.followed ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
              : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
          </div>
        </span>
        <span>
          <div>{u.fullName}</div>
          <div>{u.status}</div>
        </span>
        <span>
          <div>{u.location.country}</div>
          <div>{u.location.city}</div>

        </span>
      </div>)}
    </div>
  )
}

export default Users;