import React from 'react';
import axios from 'axios';

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
      })
  }

  render() {
    return <div>

    </div>
  }
}

export default App;
