import React from 'react';
import {connect} from "react-redux";
import {follow, setCurrentPage, setUsers, setUsersTotalCount, unfollow, toggleIsFetching} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from '../../common/Preloader/Preloader';
import {usersAPI} from '../../api/api';
class UsersContainer extends React.Component {
    
    componentDidMount() {
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => { debugger;
                this.props.toggleIsFetching(false); 
                this.props.setUsers(data.items);
                this.props.setUsersTotalCount(data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(pageNumber, this.props.pageSize)
           .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            });
    }

    render() {
        // есть такая конструкция как <> </> без тегов
        return <div>
                    <div>{this.props.isFetching ? <Preloader/>: null}</div> 
                    <Users totalUsersCount={this.props.totalUsersCount}
                                pageSize={this.props.pageSize}
                                currentPage={this.props.currentPage}
                                onPageChanged={this.onPageChanged}
                                users={this.props.users}
                                follow={this.props.follow}
                                unfollow={this.props.unfollow}
                    />
    </div>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

//connect автоматически обертывает данные 
export default connect(mapStateToProps, {
    follow:follow,
    unfollow:unfollow,
    setUsers: setUsers,
    setCurrentPage: setCurrentPage,
    setUsersTotalCount: setUsersTotalCount,
    toggleIsFetching: toggleIsFetching
})(UsersContainer);