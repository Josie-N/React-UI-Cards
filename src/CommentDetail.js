import React from 'react';
import faker from 'faker';
import commentData from './commentData';

const CommentDetail = props => {
  const test = commentInfo.map(comment => {
    return (
      <div>
        <div className="comment">
          <a href="/" className="avatar">
            <img alt="avatar" src={props.comment.avatar} />
          </a>
        </div>
        <div className="content">
          <a href="/" className="author">
            {props.comment.author}
          </a>
          <div className="date-metadata">
            <span className="date">{props.comment.timeAgo}</span>
          </div>
          <div className="text">{props.comment.message}</div>
        </div>
      </div>
    )
  })


  return (
    <div>
     {test}
    </div>
  );
};

export default CommentDetail;