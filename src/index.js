import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail 
        author="Sam" 
        timeAgo="Today at 4:00PM" 
        comment="Looking great!"
        avatar={faker.image.avatar()} 
      />
      <CommentDetail 
        author="Alex" 
        timeAgo="Today at 6:45PM" 
        comment="Looks like it still needs a bit of work."
        avatar={faker.image.avatar()} 
      />
      <CommentDetail 
        author="Jane" 
        timeAgo="Yesterday at 1:16AM" 
        comment="Would recommend."
        avatar={faker.image.avatar()} 
      />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);