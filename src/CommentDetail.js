import React from 'react';
import faker from 'faker';

const CommentDetail = props => {
  const avatarImage = faker.image.avatar();
  return (
    <div>
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={avatarImage}/>
        </a>
      </div>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="date-metadata">
          <span className="date">{props.timeAgo}</span>
        </div>
        <div className="text">{props.comment}</div>
      </div>
    </div>
  );
};

export default CommentDetail;