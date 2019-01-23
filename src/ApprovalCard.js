import React from 'react';
import faker from 'faker';
import Buttons from './Buttons';

const ApprovalCard = props => {
  return (
    <div className="ui card">
      {/* props.children = <CommentDetail/> */} 
      <div className="content">{props.children}</div>  
      <div className="extra content"> 
        <Buttons messagePositive="Approve" messageNegative="Reject" />
      </div>
    </div>
  );
};

export default ApprovalCard;