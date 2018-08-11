import React from 'react';

const ReviewCard = props => {
  const { author, date, review } = props;
  return (
    <div className="card horizontal reviews">
      <div className="card-stacked">
        <div className="card-content space-between">
          <p className="destination-text">{author}</p>
          <p>{date}</p>
        </div>
        <div className="card-action">
          <p className="grey-text text-darken-1">{review}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
