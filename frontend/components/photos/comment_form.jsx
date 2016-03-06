var React = require('react'),
    ApiUtil = require('../../util/api_util.js'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    hashHistory = require('react-router').hashHistory;

var CommentForm = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function () {
    return {
      body: ""
    }
  },

  handleSubmit: function (e) {
    e.preventDefault();

    var commentParams = {
      comment: {
        user_id: currentUserId,
        photo_id: this.props.photoId,
        body: this.state.body
      }
    };


    ApiUtil.createComment(commentParams);
    this.setState({ body: "" });
  },

  render: function () {
    var authorPic = { backgroundImage: "url('http://res.cloudinary.com/dcqvnxgiy/image/upload/w_135,h_135,c_fill/" + this.props.currentUser.profile_pic + "')" };
    var action;

    return (
      <div className="comment-wrap">
        <div className="photo">
          <div className="avatar" style={authorPic} ></div>
        </div>
        <div className="comment-block">
          <form onSubmit={this.handleSubmit}>
            <textarea name="text" cols="30" rows="3" valueLink={this.linkState("body")} placeholder="Add comment..."></textarea>
            <div className="bottom-comment">
              <input type="submit" value="Submit"/>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = CommentForm;


