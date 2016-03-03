import React from 'react';

export default class Profilepic extends React.Component {
  render () {
    return (
      <div style={{width: this.props.size, height: this.props.size, marginLeft: 'auto', marginRight: 'auto', marginBottom: '15px'}}>
        <img src={this.props.picture} className="profile-pic" />
      </div>
    );
  }
};

Profilepic.propTypes = {
  size: React.PropTypes.string.isRequired,
  picture: React.PropTypes.string.isRequired
};