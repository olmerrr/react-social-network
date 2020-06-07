import React from 'react';
import Profile from '../Profile/Profile';
import {getUserProfile} from '../../redux/profile-reducer';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { Redirect } from 'react-router-dom';

 
class ProfileContainer extends React.Component{
  componentDidMount(){
    let userId = this.props.match.params.userId;
    if (!userId){
      userId = 2;
    }
    this.props.getUserProfile(userId)
  }
  render(){
    if(this.props.isAuth === false) return(
      <Redirect to={'Login'}/>
    );
    return (
        <Profile {... this.props} profile = {this.props.profile} />
    )
  };
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
});
let  WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);