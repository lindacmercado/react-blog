/**
 * Created by Ben on 4/7/16.
 */
import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
require('./Blog-link.css');


const BlogLink = ({blogInfo}) => {
    let userProfileLink = 'prfolie/' + blogInfo.id;
    return (
        <div>
            <Link to={`/profile/${blogInfo.id}`}>view profile</Link>
        </div>
    );
};

BlogLink.propTypes = {
    blogInfo: React.PropTypes.object.isRequired
};



export default BlogLink