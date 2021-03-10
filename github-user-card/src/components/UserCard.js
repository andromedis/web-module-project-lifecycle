import React from 'react';

import { withStyles } from '@material-ui/styles'
import { Card, CardHeader, CardContent, CardActions, Avatar, Typography, Box, Link, Button, List, ListItem } from '@material-ui/core';

const styles = {
  avatar: {
    height: '4.5rem',
    width: '4.5rem',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  details: {
    padding: '8px',
  },
};

class UserCard extends React.Component {
  state = {
    followersHidden: true,
  }

  handleClick = () => {
    this.setState({
      followersHidden: !this.state.followersHidden
    });
  }

  render() {
    const { classes } = this.props;

    return <Card className='card'>
      <CardHeader
        avatar={<Avatar 
          className={classes.avatar}
          src={this.props.userData['avatar_url']} 
          alt={`Github user ${this.props.userData.login}`}
          variant='rounded'
        />}
        title={
          <Typography variant='h4'>
          {this.props.userData.name}
          </Typography>
        }
        subheader={
          <Typography variant='h5'>
            {this.props.userData.login}
          </Typography>
        }
      />

      <CardContent className={classes.content}>

        <Box className={classes.details}>
          <Typography 
            variant='body1'>
            Location: {this.props.userData.location || 'none'}
          </Typography>

          <Typography 
            variant='body1'>
            Profile: <Link 
              href={this.props.userData['html_url']} 
              onClick={e => e.preventDefault} 
              color='textSecondary'>
                {this.props.userData['html_url']}
            </Link>
          </Typography>

          <Typography 
            variant='body1'>
            Bio: {this.props.userData.bio || 'none'}
          </Typography>

          <Typography 
            variant='body1'>
            Followers: {this.props.userData.followers}
          </Typography>

          <Typography 
            variant='body1'>
            Following: {this.props.userData.following}
          </Typography>
        </Box>

        <Box>
          <CardActions>
            <Button onClick={this.handleClick} variant='contained'>
              {this.state.followersHidden ? 'Show' : 'Hide'} Followers
            </Button>
          </CardActions>

          {
            !this.state.followersHidden && (
              this.props.followers.length
              ? <List dense className={classes.followerList}>
                  {
                    this.props.followers.map(follower => {
                      return (
                        <ListItem key={follower.id}>
                          <Link 
                            href={follower['html_url']} 
                            onClick={e => e.preventDefault} 
                            color='textSecondary'>
                              {follower.login}
                          </Link>
                        </ListItem>
                      )
                    })
                  }
                </List>
              : <Typography 
                  variant='body1'>
                  No followers to show
                </Typography> 
            )
          }
        </Box>

      </CardContent>

    </Card>
  }
}

export default withStyles(styles)(UserCard);