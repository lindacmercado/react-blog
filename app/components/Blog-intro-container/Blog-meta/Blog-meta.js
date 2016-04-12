import React from 'react';
require('./Blog-meta.css');



const BlogMeta = ({metaInfo}) => {
    let textColor = metaInfo.textColor;
    let style = textColor !== null ? {color: textColor} : "";
    return (


        <div>
            <div>
                <h2>{metaInfo.username}</h2>
                <p >{metaInfo.intro}</p>
                <h2 style={style} >{metaInfo.likeCount} Likes</h2>
            </div>
        </div>
    );
};

BlogMeta.propTypes = {
    metaInfo: React.PropTypes.object.isRequired
};



export default BlogMeta