import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogsContainer from './HogsContainer'
import Filter from './Filter'

// CHECK * create an index displaying all hog tiles
// CHECK * render each hog name and picture in a tile
// CHECK * show the hog's details upon a user's click
// * allow users to sort the hogs based on name and weight and filter the hogs that are greased

class App extends Component {
  constructor(){
    super()
    this.state = {
      allHogs: hogs,
      filters: {
        option: 'name'
      }
    }
  }

  handleChange = (event) => {

    const greasedHogs = hogs.filter(hog => hog.greased === true)
    const ungreasedHogs = hogs.filter(hog => hog.greased === false)

    if (event.target.value === "greased") {
      this.setState({
        allHogs: greasedHogs
      })
    }

    if (event.target.value === "ungreased") {
      this.setState({
        allHogs: ungreasedHogs
      })
    }
  }

  render() {
    return (
      <div className="App">
        < Nav />
        < Filter handleChange={this.handleChange}/>
        < HogsContainer hogsObj={this.state.allHogs}/>
      </div>
    )
  }
}




export default App;
