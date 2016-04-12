import React from 'react';
require('./Profile.css');


const Profile = ({user}) => {
    let style = user.textColor !== null ? {color: user.textColor} : "";
    return (
        <div>
            <div>
            <img src={user.image} alt={user.username}/>
            </div>
            <div>
                <h1>{user.username}</h1>
                <p>{user.intro}</p>
                <div>
                  <div></div>
                    <h1 style={style}>{user.likeCount}</h1>
                </div>


            </div>
        </div>
    );
};


Profile.propTypes = {
    user: React.PropTypes.object.isRequired
};



export default Profile