import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ArtistList from './components/ArtistList';
import Artist from './components/Artist';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <h1>Tunr</h1>
            <div>
              <Link to='/'>Artists</Link>
              <Link to='/artist/1'>Single Artist</Link>
            </div>
          </div>
          <Route exact path='/' component={ArtistList} />
          <Route path='/artist/:id' component={Artist} />
        </div>
      </Router>
    );
  }
}

export default App;
