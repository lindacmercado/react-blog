import React from 'react';
//require('./Blog-meta.css');


const BlogMeta = ({metaInfo}) => {
   return (
       <div>
           <div>
           <h2>{metaInfo.username}</h2>

           </div>
       </div>
   );
};

BlogMeta.propTypes = {
   metaInfo: React.PropTypes.object.isRequired
};



export default BlogMeta
