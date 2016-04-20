import React from 'react';
//require('./Profile.css');

const Profile = ({user, like, likeBlog, unLikeBlog}) => {
    return (
        <div>
            <div>
            <img src={user.image} alt={user.username}/>
            </div>
            <div>
                <h1>{user.username}</h1>
                <p>{user.intro}</p>
                <div>
                    <h1>{user.likeCount}</h1>
                    <h3>Like: {like}</h3>
                    <button onClick={()=>likeBlog()}>LIKE</button>
                    <button onClick={()=>unLikeBlog()}>UNLIKE</button>
            </div>
        </div>
      </div>

    );
};


Profile.propTypes = {
    user: React.PropTypes.object.isRequired
};



export default Profile
