import React from 'react';
import { Link } from 'react-router-dom';

const ArtistList = (props) => {
  return (
    <div>
      <h1>All Artists</h1>
      {
        props.artists.map((artist, index) => {
          return (
            <div key={index}>
              <Link to={`/artists/${artist.id}`}>{artist.name}</Link>
            </div>
          )
        })
      }
    </div>
  );
}

export default ArtistList;