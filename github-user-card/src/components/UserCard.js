import React from 'react';

class UserCard extends React.Component {
  state = {
    followersHidden: true,
  }

  handleClick = (e) => {
    this.setState({
      followersHidden: !this.state.followersHidden
    });
  }

  render() {
    return <div className='card'>
      <img 
        src={this.props.userData['avatar_url']} 
        alt={`Github user ${this.props.userData.login}`} 
      />
      <div className='card-info'>
        <h3 className='name'>{this.props.userData.name}</h3>
        <p className='username'>{this.props.userData.login}</p>
        <p>Location: {this.props.userData.location || 'none'}</p>
        <p>Profile: <a 
          href={this.props.userData['html_url']}>{this.props.userData['html_url']}</a>
        </p>
        <p>Followers: {this.props.userData.followers}</p>
        <button 
          onClick={this.handleClick}
          >{this.state.followersHidden ? 'Show' : 'Hide'} Followers
        </button>
        {
          !this.state.followersHidden && (
            this.props.followers.length
            ? <ul className='followers'>
                {
                  this.props.followers.map(follower => {
                    return <li key={follower.id}><a href={follower['html_url']}>{follower.login}</a></li>
                  })
                }
              </ul> 
            : <p>No followers to show</p> 
          )
        }
        <p>Following: {this.props.userData.following}</p>
        <p>Bio: {this.props.userData.bio || 'none'}</p>
      </div>
    </div>
  }
}

export default UserCard;