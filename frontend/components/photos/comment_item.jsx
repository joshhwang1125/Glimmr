var React = require('react'),
    hashHistory = require('react-router').hashHistory;

var CommentItem = React.createClass({
  handleCommenterClick: function (e) {
    e.preventDefault();


    hashHistory.push("/users/" + this.props.authorId + "/userPhotos");
  },

  handleDeleteClick: function (e) {
    e.preventDefault();
    var confirmation = confirm("Are you sure you want to delete this comment?");
    if (confirmation === true) {
      ApiUtil.deleteComment(this.props.commentId);
    }
  },

  render: function () {
    var authorPic = { backgroundImage: "url('http://res.cloudinary.com/dcqvnxgiy/image/upload/w_135,h_135,c_fill/" + this.props.author.profile_pic + "')" };
    var action;

    if (this.props.authorId === currentUserId) {
      action = (<li className="delete-comment" onClick={this.handleDeleteClick}>Delete</li>)
    } else {
      action = (<li className="reply">Reply</li>)
    }
    return (
      <div className="comment-wrap">
        <div className="photo">
          <div className="avatar" style={authorPic} onClick={this.handleCommenterClick}></div>
        </div>
        <div className="comment-block">
          <p className="comment-text">{this.props.body}</p>
          <div className="bottom-comment">
            <div className="comment-date">{this.props.createdAt}</div>
            <ul className="comment-actions">
                {action}

            </ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = CommentItem;

