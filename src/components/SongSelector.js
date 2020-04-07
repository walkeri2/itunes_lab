import React from 'react';

const SongSelector = (props) => {
  const options = props.songs.map(songs => {
    return <option value={songs.id.attributes['im:id']}    key={songs.id.attributes['im:id']}>{songs.title.label}</option>
  })

    function handleChange(event) {
    props.onSongSelected(event.target.value);
  }

  return (
    <select id="song-selector" onChange={handleChange} defaultValue="default">
      <option disabled value="default">Choose a song...</option>
      {options}
    </select>
  )
}

export default SongSelector;
