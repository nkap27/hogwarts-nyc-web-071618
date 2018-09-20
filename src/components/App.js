import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogsContainer from './HogsContainer'

// CHECK * create an index displaying all hog tiles
// CHECK * render each hog name and picture in a tile
// * show the hog's details upon a user's click
// * allow users to sort the hogs based on name and weight and filter the hogs that are greased

class App extends Component {
  constructor(){
    super()
    this.state = {
      allHogs: hogs
    }
  }
  render() {
    return (
      <div className="App">
          < Nav />
        < HogsContainer hogsObj={this.state.allHogs}/>
      </div>
    )
  }
}




export default App;
