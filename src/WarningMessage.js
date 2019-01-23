import React from 'react';

class WarningMessage extends React.Component {
  render () {
    return (
      <div>
        <h4>{this.props.message} Warning</h4>
        <p>Are you sure you want to do this?</p>
      </div>
    );
  }
};

export default WarningMessage;