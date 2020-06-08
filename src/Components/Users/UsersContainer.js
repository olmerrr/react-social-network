import React from 'react';
import {connect} from "react-redux";
import {follow, setCurrentPage, unfollow, toggleFollowingProgress} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from '../../common/Preloader/Preloader';
import {getUsers} from "../../redux/users-reducer";
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';

class UsersContainer extends React.Component {
    
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
        this.props.setCurrentPage(pageNumber);
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
                                followingInProgress={this.props.followingInProgress}
         
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
        isFetching: state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress
    }
}
let AuthRedirectComponent = withAuthRedirect(UsersContainer);
//connect автоматически обертывает данные 
// export default 
    
// })(AuthRedirectComponent);
export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
    follow:follow,
    unfollow:unfollow,
    setCurrentPage: setCurrentPage,
    toggleFollowingProgress: toggleFollowingProgress,
    getUsers:getUsers})) (UsersContainer);