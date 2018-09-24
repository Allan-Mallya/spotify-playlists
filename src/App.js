import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultStyle = {
  color: '#fff',
}

let fakeserverData = {
                      user : {
                        name:'Allan',
                        playlists: [
                        {
                          name: 'MyFavs',
                          songs: [{name:'Yo', duration: 1234},{name : ' yo yo yoy oii',duration: 45623},{name: 'killa cam',duration: 12345}]
                       },
                       {
                          name: 'MyFavs',
                          songs: [{name:'Yo', duration: 1234},{name : ' yo yo yoy oii',duration: 45623},{name: 'killa cam',duration: 12345}]
                       },
                       {
                          name: 'MyFavs',
                          songs: [{name:'Yo', duration: 1234},{name : ' yo yo yoy oii',duration: 45623},{name: 'killa cam',duration: 12345}]
                       },
                       {
                          name: 'MyFavs',
                          songs: [{name:'Yo', duration: 1234},{name : ' yo yo yoy oii',duration: 45623},{name: 'killa cam',duration: 12345}]
                       }
                       ]
                     }
                    };



class PlaylistCounter extends Component{
  render() {
    return (
            <div style={{...defaultStyle, width: '40%', display: 'inline-block'}} 
            className="aggregate">
              <h2>{this.props.playlists.length} Playlists</h2>
            </div>
      );
  }
}


class HoursCounter extends Component{
  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist)=>{
      return songs.concat(eachPlaylist.songs)
    },[]);

    let totalhours = Math.floor((allSongs.reduce((sum,eachSong)=> {return sum + eachSong.duration},0))/3600)
    
    return (
            <div style={{...defaultStyle, width: '40%', display: 'inline-block'}} 
            className="aggregate">
              <h2>{totalhours} Hours</h2>
            </div>
      );
  }
}


class Filter extends Component{

  render() {
    return (
          <div style={defaultStyle}>
            <img/>
              <input type = 'text'/>
          </div>

      );
  }}

class Playlist extends Component{
  render() {
    return(
        <div style={{...defaultStyle, width: '25%', display: 'inline-block'}}>
          <img/>
            <h3> Playlist Name</h3>
            <ul><li>Song 1</li><li>Song 2</li><li>Song 3</li><li>Song 4</li></ul>
        </div>
      )
    }
  }


class App extends Component {

  constructor(){
    super();
    this.state = {serverData: {}}
  }


  componentDidMount(){
    setTimeout(() =>
    {
    this.setState({serverData: fakeserverData})
    }, 1000);
  }

  render() {
    let name = "Allan";
    //let color = {green};
    return (
      <div className="App">

      {this.state.serverData.user ?
        <div>

          <h1 style={{...defaultStyle, 'font-size' : '54px'}}>
          {this.state.serverData.user.name}'s Playlist
          </h1>

          <PlaylistCounter playlists= {this.state.serverData.user.playlists} /> 

          <HoursCounter playlists= {this.state.serverData.user.playlists} /> 

          <Filter/>

          <Playlist/>

          <Playlist/>

          <Playlist/>

      </div> : <h1 style = {{...defaultStyle}}> Loading...</h1>
    }
    </div>
    );
  }
}

export default App;
