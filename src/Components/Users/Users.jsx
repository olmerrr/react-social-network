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
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?
              page=${this.props.currentPage}&count=${this.props.pageSize}`)
    .then(response => {
    this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);

    });
  }
 onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

  render(){
    let pagesCount = Math.ceil(this.props.totalUsersCount  / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i ++){
      pages.push(i);
    }
    
    return (
      <div>
             <div className={style.wrapperPages}>
                { pages.map( p => {
                    return <span className={this.props.currentPage ===  p && style.selectedPage }
                     onClick={(e) => {this.onPageChanged(p) ; }}>
                                <span>/{p}</span>
                           </span>
                })}
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