import React from 'react';
require('./image-block.css');

const PhotoGrid = ({cardData}) => {
  return (
    <div>
      <div>
        {cardData.map((data) => {
          return (
            <div key={data.id}>
              <div>
                <img src={data.link} alt={data.name} />
              </div>
              <div>
                <p>{data.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

PhotoGrid.propTypes = {
  cardData: React.PropTypes.array.isRequired
};

export default PhotoGrid
