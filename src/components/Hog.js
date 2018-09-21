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
      clicked: !this.state.clicked,
      })

    }

  render(){
    return(
      <div onClick={this.handleClick} className="pigTile">
        <h3 className="smallHeader">{this.props.name}</h3>
        <img alt="mean" src={require('../hog-imgs/' + this.props.name.toLowerCase().split(" ").join("_") + '.jpg')} />
        {this.state.clicked ?
        <div>
          <p className="hoggyText">weight as a ratio of hog to fridge: {this.props.weight}</p>
          <p className="achievementText">highest medal achieved: {this.props.medal}</p>
        </div>
        : null}
      </div>
    )
  }
}

export default Hog
