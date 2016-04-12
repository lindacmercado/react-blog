import React from 'react';

const BlogMeta = ({metaInfo}) => {
    return (
        <div>
            <div>
                <h2>{metaInfo.username}</h2>
                <p >{metaInfo.intro}</p>
                <h2>{metaInfo.likeCount} Likes</h2>
            </div>
        </div>
    );
};

BlogMeta.propTypes = {
    metaInfo: React.PropTypes.object.isRequired
};



export default BlogMeta
