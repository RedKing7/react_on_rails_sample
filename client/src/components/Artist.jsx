import React, { Component } from 'react';
import axios from 'axios';

class Artist extends Component {
  state = {
    artist: {},
    songs: []
  }

  async componentWillMount() {
    try {
      const artistId = this.props.match.params.artistId;
      const response = await axios.get(`/api/artists/${artistId}`)
      await this.setState({ artist: response.data })
      const songResponse = await axios.get(`/api/artists/${artistId}/songs`)
      await this.setState({ songs: songResponse.data })
    } catch (err) { console.log(err) }
  }

  render() {
    return (
      <div>
        <img src={this.state.artist.photo_url} alt={this.state.artist.name} />
        <h1>{this.state.artist.name}</h1>
        {this.state.songs.map((song, index) => {
          return (
            <div key={song.id}>
              <h4>{song.title}</h4>
              <audio controls src={song.preview_url}></audio>
            </div>
          )
        })}
      </div>
    );
  }
}

export default Artist;