import React from 'react';
import Profile from './Profile/Profile';
import PhotoGrid from './Image-block/Image-block';
import {getUserInfo, getPosts} from '../../utils/helpers';
require('./Profile-container.css');
import connect from 'react-redux';
import likeBlog from './Redux/Like';
import unLikeBlog from '/Redux/Like';

class ProfileContainer extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      cardData: [],
      userInfo: {}
    }
  }
    componentDidMount(){
           getUserInfo(this.props.params.userid).then(function(data){
               this.setState({
                   userInfo: data.data
               })
           }.bind(this));

           getPosts().then(function(data){
               this.setState({
                   cardData: data.data
               })
           }.bind(this));
         }

         render() {
           return(
             <div>
               <Profile user = {this.state.userInfo} />
               <PhotoGrid cardData = {this.state.cardData} />

             </div>
           )
         }

}

export default ProfileContainer
