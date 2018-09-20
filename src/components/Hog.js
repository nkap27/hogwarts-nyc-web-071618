import React from 'react'

class Hog extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      clicked: false,
    }
  }
  handleClick = (event) => {
    this.setState({
      clicked: true,
      })
      console.log(event)
    }
  }
  render(){
    return(
      <div onClick={this.props.handleClick} className="pigTile">
        <h3 className="smallHeader">{this.props.name}</h3>
        <img alt="mean" src={require('../hog-imgs/' + this.props.name.toLowerCase().split(" ").join("_") + '.jpg')} />
      </div>
    )
  }
}

export default Hog
