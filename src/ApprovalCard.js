import React from 'react';
import faker from 'faker';

const ApprovalCard = props => {
  return (
    <div className="ui card">
      {/* props.children = <CommentDetail/> */} 
      <div className="content">{props.children}</div>  
      <div className="extra content"> 
        <div className="ui two buttons">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Reject</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;