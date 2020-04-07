import React from 'react';

const SongDetail = (props) => {
  if (!props.song) return null;
  return (
    <div>
    <h3>{props.song.title.label} </h3>
    <img src={props.song['im:image'][2].label} width ="400"/>
    </div>
  );
}

export default SongDetail;
