import React from 'react';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import WarningMessage from './WarningMessage';

class App extends React.Component {
  render() {
  const { commentData } = this.props;
  const commentDetails = commentData.map(comment => 
    <ApprovalCard><CommentDetail
    author={comment.author}
    timeAgo={comment.timeAgo}
    comment={comment.message}
    avatar="https://via.placeholder.com/200"
    /></ApprovalCard>)

  return (
    <div className="ui container comments">
      <ApprovalCard>
        <WarningMessage
          message="Super"
        />
      </ApprovalCard>
      {commentDetails}
    </div>
  );
  }
};

export default App;
