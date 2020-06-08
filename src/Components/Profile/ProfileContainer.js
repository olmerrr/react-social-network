import React from 'react';
import Profile from '../Profile/Profile';
import {getUserProfile} from '../../redux/profile-reducer';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';

 
class ProfileContainer extends React.Component{
  componentDidMount(){
    let userId = this.props.match.params.userId;
    if (!userId){
      userId = 2;
    }
    this.props.getUserProfile(userId)
  }
  render(){
   
    return (
   
      <Profile {... this.props} profile = {this.props.profile} />
    )
  };
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer); 
// => {
//   if(this.props.isAuth === false)
//    return(
//     <Redirect to={'Login'}/>
//   );
//   return <ProfileContainer {...props}/>
// };

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});
// let  WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default compose(connect(mapStateToProps, {getUserProfile}),
  withRouter,
  withAuthRedirect) (ProfileContainer);

// export default compose(connect(mapStateToProps, mapDispatchToProps),
//         withAuthRedirect)(Dialogs);
