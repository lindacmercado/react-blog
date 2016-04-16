import React from 'react';
import {usersBlogData} from '../../utils/helpers'
import BlogImage from './Blog-image/Blog-image';
import BlogMeta from './Blog-meta/Blog-meta';
require('./Blog-intro-container.css');

class BlogIntroContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      usersBlogData: []
    }
  }
  componentDidMount(){
    this.init()
  }
  init(){
    usersBlogData().then(function(data){
      this.setState({
        usersBlogData: data.data
      })
    }.bind(this));
  }

  render(){
          return (
              <div>
                  {this.state.usersBlogData.map((data) => {
                      return (
                          <div key={data.id}>
                              <BlogMeta metaInfo={data} />
                              <BlogImage blogInfo={data}/>
                          </div>
                      )
                  })}

              </div>
          )
      }


}






export default BlogIntroContainer
