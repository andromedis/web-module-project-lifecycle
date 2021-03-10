import React from 'react';
import axios from 'axios';

import Container from '@material-ui/core/Container';

import UserCard from './components/UserCard';

class App extends React.Component {
  state = {
    userData: {},
    followers: [],
  }
  
  componentDidMount() {
    axios.get('https://api.github.com/users/andromedis')
      .then(res => {
        console.log(res.data);
        this.setState({
          userData: res.data
        });
      })
      .catch(err => {
        console.error(err);
      });

    axios.get('https://api.github.com/users/andromedis/followers')
      .then(res => {
        console.log(res.data);
        this.setState({
          followers: res.data
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return <Container maxWidth='sm'>
      <UserCard userData={this.state.userData} followers={this.state.followers}/>
    </Container>
  }
}

export default App;
