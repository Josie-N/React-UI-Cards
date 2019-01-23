import React from 'react';

class Buttons extends React.Component {
  render() {
    return (
      <div className="ui two buttons">
        <div className="ui basic green button">{this.props.messagePositive}</div>
        <div className="ui basic red button">{this.props.messageNegative}</div>
      </div>
    );
  }
};

export default Buttons;