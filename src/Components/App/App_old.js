import React, { Component } from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {name: 'nameOne', artist: 'artistOne', album: 'albumOne'},
        {name: 'nameTwo', artist: 'artistTwo', album: 'albumTwo'},
        {name: 'nameThree', artist: 'artistThree', album: 'albumThree'}
      ],
      playlistName: 'New Playlist',
      playlistTracks: []
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.every(pltrack => pltrack !== track)) {
      let currentPlaylistArray = this.state.playlistTracks.concat(track);
      this.setState({ playlistTracks: currentPlaylistArray });
    }
  }

  removeTrack(track) {
    let currentPlaylistArray = this.state.playlistTracks.filter(pltrack => pltrack !== track);
    this.setState({ playlistTracks: currentPlaylistArray });
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name});
  }

  savePlaylist() {
    let trackURIs = [];
    this.playlistTracks.forEach(trackURI => trackURIs.push(trackURI));
  }

  search(term) {
    console.log(term);
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
              onSearch={this.search}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
