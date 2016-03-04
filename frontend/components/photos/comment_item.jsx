var React = require('react'),
    CommentStore = require('../../stores/comment_store'),
    hashHistory = require('react-router').hashHistory;

var CommentItem = React.createClass({



  render: function () {
    return (
      <div>
        {this.props.author}
      </div>
    );
  }
});

module.exports = CommentItem;

// <div class="comment-wrap">
//   <div class="photo">
//     <div class="avatar" style="background-image: url('https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg')"></div>
//   </div>
//   <div class="comment-block">
//       <p class="comment-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto temporibus iste nostrum dolorem natus recusandae incidunt voluptatum. Eligendi voluptatum ducimus architecto tempore, quaerat explicabo veniam fuga corporis totam reprehenderit quasi
//           sapiente modi tempora at perspiciatis mollitia, dolores voluptate. Cumque, corrupti?</p>
//       <div class="bottom-comment">
//           <div class="comment-date">Aug 24, 2014 @ 2:35 PM</div>
//           <ul class="comment-actions">
//               <li class="complain">Complain</li>
//               <li class="reply">Reply</li>
//           </ul>
//       </div>
//   </div>
// </div>