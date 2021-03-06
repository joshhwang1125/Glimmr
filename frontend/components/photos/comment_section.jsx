var React = require('react'),
    CommentStore = require('../../stores/comment_store'),
    CommentItem = require('./comment_item'),
    CommentForm = require('./comment_form'),
    hashHistory = require('react-router').hashHistory;

Array.prototype.sortBy = function(p) {
  return this.slice(0).sort(function(a,b) {
    return (a[p] > b[p]) ? 1 : (a[p] < b[p]) ? -1 : 0;
  });
};

var CommentSection = React.createClass({
  getInitialState: function () {
    return {
      photoComments: CommentStore.currentPhotoComments(parseInt(this.props.photo.id))
    };
  },
  componentDidMount: function () {
    this.commentListener = CommentStore.addListener(this._onCommentsChange);
  },
  componentWillUnmount: function () {
    this.commentListener.remove();
  },

   _onCommentsChange: function () {
    this.setState({ photoComments: CommentStore.currentPhotoComments(parseInt(this.props.photo.id)) });
  },




  render: function () {

    return (
      <div className="comments">
          <CommentForm photoId={this.props.photo.id}
                        currentUser={this.props.currentUser} />
          {this.state.photoComments.sortBy('created_at').map(function (comment) {
              return <CommentItem key={comment.id}
                    commentId={comment.id}
                    author={comment.user}
                    authorId={comment.user_id}
                    body={comment.body}
                    createdAt={comment.created_at} />;
            })
          }
      </div>
    );
  }
});

module.exports = CommentSection;