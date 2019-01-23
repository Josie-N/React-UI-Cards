import React from 'react';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import WarningMessage from './WarningMessage';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <WarningMessage
          message="Super"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          // author="Sam"
          // timeAgo="Today at 4:00PM" 
          // comment="Looking great!"
          // avatar={faker.image.avatar()} 
      />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          // author="Alex"
          // timeAgo="Today at 6:45PM" 
          // comment="Looks like it still needs a bit of work."
          // avatar={faker.image.avatar()} 
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          // author="Jane"
          // timeAgo="Yesterday at 1:16AM" 
          // comment="Would recommend."
          // avatar={faker.image.avatar()} 
        />
      </ApprovalCard>
    </div>
  );
};

export default App;