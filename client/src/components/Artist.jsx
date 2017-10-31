import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ArtistDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Info = styled.div`
  width: 80%;
  text-align: left;
`

const BandPic = styled.div`
  width: 100%;
  background-color: lightgray;
  max-height: 500px;
  img{
    max-height: 500px;
    max-width: 100vw;
  }
`

const SongsList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`

const Song = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 200px;
  background-color: lightgray;
  margin: 20px 30px;
  justify-content: space-between;
  h4, h6{
    padding-left: 20px;
  }
`

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
      <ArtistDiv>
        <BandPic>
          <img src={this.state.artist.photo_url} alt={this.state.artist.name} />
        </BandPic>
        <Info>
          <div>
            <h1>{this.state.artist.name}</h1>
            <h3>Nationality: {this.state.artist.nationality}</h3>
          </div>
          <SongsList>
            {this.state.songs.map((song, index) => {
              return (
                <Song key={song.id}>
                  <div>
                    <h4>{song.title}</h4>
                    <h6>Album: {song.album}</h6>
                  </div>
                  <audio controls src={song.preview_url}></audio>
                </Song>
              )
            })}
          </SongsList>
        </Info>
      </ArtistDiv>
    );
  }
}

export default Artist;