import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import ArtistList from './components/ArtistList';
import Artist from './components/Artist';
import axios from 'axios';

class App extends Component {
  state = {
    artists: []
  }

  async componentWillMount() {
    try {
      const response = await axios.get('/api/artists');
      const artists = response.data
      await this.setState({ artists: artists })
    } catch (err) { console.log(err) }
  }

  render() {

    const ArtistListComponent = () => { return <ArtistList artists={this.state.artists} /> }

    return (
      <Router>
        <div>
          <div>
            <h1>Tunr</h1>
            <Navbar />
          </div>
          <Switch>
            <Route exact path="/" render={ArtistListComponent} />
            <Route path="/artists/:artistId" component={Artist} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
