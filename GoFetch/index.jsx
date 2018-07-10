import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';

class App extends Component {
  state = {
    url: '',
  };

  async componentDidMount() {
    const resp = await axios.get(
      'https://api.giphy.com/v1/gifs/search?api_key=v9E9Mk5b3fTKoaQSA8t2NwCJS97SsQuz&q=cat&limit=1&offset=0&rating=G&lang=en',
    );
    this.setState({
      url: resp.data.data[0].url,
    });
  }

  render() {
    const { url } = this.state;
    return (
      <div>
        <Button variant="contained" color="primary">
          {url}
        </Button>
      </div>

    );
  }
}

export default App;
