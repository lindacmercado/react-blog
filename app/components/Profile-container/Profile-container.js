import React from 'react';
import Profile from './Profile/Profile';
import PhotoGrid from './Image-block/Image-block';
import {getUserInfo, getPosts} from '../../utils/helpers';
//require('./Profile-container.css');
import {connect} from 'react-redux';
import {likeBlog, unLikeBlog} from '../../Redux/Like';

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
               <Profile user = {this.state.userInfo}
                 like={this.props.like} likeBlog={this.props.likeBlog} unLikeBlog={this.props.unLikeBlog}/>
               <PhotoGrid cardData = {this.state.cardData} />

             </div>
           )
         }
       }

         function stateToProps(state){
           return {
             like: state.like
           }
         }

         var connectedProfileContainer = connect(stateToProps,
           {likeBlog: likeBlog, unLikeBlog: unLikeBlog})(ProfileContainer)

export default connectedProfileContainer
