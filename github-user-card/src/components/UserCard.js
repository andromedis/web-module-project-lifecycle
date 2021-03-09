import React from 'react';

class UserCard extends React.Component {

  render() {
    return <div className='card'>
      <img 
        src={this.props.userData['avatar_url']} 
        alt={`profile photo for Github user ${this.props.userData.login}`} 
      />
      <div className='card-info'>
        <h3 className='name'>{this.props.userData.name}</h3>
        <p className='username'>{this.props.userData.login}</p>
        <p>Location: {this.props.userData.location}</p>
        <p>Profile: 
          <a href={this.props.userData.url}>{this.props.userData.url}</a>
        </p>
        <p>Followers: {this.props.userData.followers}</p>
        <p>Following: {this.props.userData.following}</p>
        <p>Bio: {this.props.userData.bio}</p>
      </div>
    </div>
  }
}

export default UserCard;