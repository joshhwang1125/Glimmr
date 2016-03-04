var React = require('react'),
    CommentStore = require('../../stores/comment_store'),
    CommentItem = require('./comment_item'),
    hashHistory = require('react-router').hashHistory;

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
    // var uploaderPic;
    // var followBackground;
    // var followButton = "";
    // uploaderPic = { backgroundImage: "url('http://res.cloudinary.com/dcqvnxgiy/image/upload/w_135,h_135,c_fill/" + this.props.uploader.profile_pic + "')" };
    // followBackground = { backgroundImage: "url('http://res.cloudinary.com/dcqvnxgiy/image/upload/w_155,h_155,c_fill/14578-green-gradient-1280x800-abstract-wallpaper_cdcg3y.jpg')" };

    // if (this.props.uploader.id === currentUserId) {
    //   followButton = (<div className="self-uploader-pic" style={uploaderPic}>

    //                   </div>)
    // } else if (this.state.followId === undefined) {
    //   followButton = (<div className="uploader-pic" style={uploaderPic} onClick={this.handleFollow}>
    //                     <span className="uploader-text">FOLLOW</span>
    //                   </div>)
    // } else {
    //   followButton = (<div className="uploader-pic" style={uploaderPic} onClick={this.handleUnfollow}>
    //                     <span className="uploader-text">UNFOLLOW</span>
    //                   </div>)
    // };

    return (
      <div className="comments">
          {this.state.photoComments.map(function (comment) {
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