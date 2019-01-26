import React from 'react';

class CommentDetail extends React.Component {
  render() {
    return(
      <div>
        <div className="comment">
          <a href="/" className="avatar">
          <img alt="avatar" src={this.props.avatar} />
          </a>
        </div>
        <div className="content">
          <a href="/" className="author">
            {this.props.author}
          </a>
          <div className="date-metadata">
            <span className="date">{this.props.timeAgo}</span>
          </div>
          <div className="text">{this.props.message}</div>
        </div>
      </div>
    )
  }
}

export default CommentDetail;
