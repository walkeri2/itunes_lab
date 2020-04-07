import React from "react"
import SongSelector from "../components/SongSelector"
import SongDetail from "../components/SongDetail"

class MusicContainer extends React.Component{
  constructor(props){
    super(props);
    this.state={
      songs:[],
      selectedSongId: ""
    }
    this.handleSongSelected = this.handleSongSelected.bind(this);
  }

  componentDidMount(){
    const url="https://itunes.apple.com/gb/rss/topsongs/limit=20/json";

    fetch(url)
      .then(res => res.json())
      .then(songs => this.setState({songs: songs.feed.entry}))
      .catch(err => console.error);
  }

  handleSongSelected(id){
    this.setState({ selectedSongId: id})
  }

  render(){
    const selectedSong = this.state.songs.find(song => song.id.attributes['im:id'] === this.state.selectedSongId)

    return(
      <div>
      <SongSelector songs={this.state.songs} onSongSelected={this.handleSongSelected}/>
      <SongDetail song={selectedSong}/>
      </div>
    )
  }

}


export default MusicContainer;
