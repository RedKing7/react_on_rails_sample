import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ArtLis = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

const Band = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 150px;
  background-color: lightgray;
  margin: 20px 50px;
  padding: 0px;
  a{
    font-size: 25px;
    text-decoration: none;
    color: black;
    background-color: lightgray;
  }
  a:hover{
    color: blue;
    border-bottom: 3px solid;
  }
  div{
    display: block;
    width: auto;
    height: auto;
    max-width:300px;
    max-height:150px;
    background-color: black;
    img{
      max-width:300px;
      max-height:150px;
    }
  }
`

const ArtistList = (props) => {
  return (
    <ArtLis>
      {
        props.artists.map((artist, index) => {
          return (
            <Band key={index}>
              <div>
                <img src={artist.photo_url} alt="" />
              </div>
              <Link to={`/artists/${artist.id}`}>{artist.name}</Link>
            </Band>
          )
        })
      }
    </ArtLis>
  );
}

export default ArtistList;