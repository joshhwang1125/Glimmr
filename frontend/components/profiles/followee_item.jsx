var React = require('react'),
    hashHistory = require('react-router').hashHistory;

var FolloweeItem = React.createClass({


  handleClick: function (e) {
    e.preventDefault();
    hashHistory.push("/users/" + this.props.followee.id + "/userPhotos");
  },
  render: function () {
    var followeePic;

    // followeePic = { backgroundImage: "url('http://res.cloudinary.com/dcqvnxgiy/image/upload/w_145,h_145,c_fill/" + this.props.followee.profile_pic };
    return (
      <div className="follow-thumb nd-wrap nd-style-6" onClick={this.handleClick}>
        <img src={"http://res.cloudinary.com/dcqvnxgiy/image/upload/w_145,h_145,c_fill/" + this.props.followee.profile_pic }></img>
        <div className="nd-content">
          <div className="nd-content_inner">
            <div className="nd-content_inner1">
              <h3 className="nd-title"><span>{this.props.followee.username}</span></h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = FolloweeItem;

// <div className="photo-thumb nd-wrap nd-style-6" onClick={this.handleClick}>
//   <img src={"http://res.cloudinary.com/dcqvnxgiy/image/upload/w_145,h_145,c_fill/" + this.props.followee.profile_pic + "')" }></img>
//   <div className="nd-content">
//     <div className="nd-content_inner">
//       <div className="nd-content_inner1">
//         <h3 className="nd-title"><span>{this.props.followee.username}</span></h3>

//       </div>
//     </div>
//   </div>
// </div>