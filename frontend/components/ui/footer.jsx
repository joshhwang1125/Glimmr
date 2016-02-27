var React = require('react');


var Footer = React.createClass({

  render: function() {

    return (
      <div className="foot">
        <ul className ="foot-list">
          <li className="foot-li"><a href="https://github.com/joshhwang1125"><i className="fa fa-folder-open-o"></i> Portfolio</a></li>
          <li className="foot-li"><a href="https://github.com/joshhwang1125"><i className="fa fa-github"></i> Github</a></li>
          <li className="foot-li"><a href="https://www.linkedin.com/in/joshua-hwang-863a948a"><i className="fa fa-linkedin"></i> Linkedin</a></li>
        </ul>
      </div>
    );
  }
});

module.exports = Footer;

