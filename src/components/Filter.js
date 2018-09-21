import React from 'react'

class Filter extends React.Component {
  render() {
    return(
      <div>
        <select onChange={this.props.handleChange} className="achievementText">
          <option value="name">name</option>
          <option value="greased">greased</option>
          <option value="ungreased">ungreased</option>
          <option value="weight">weight</option>
        </select>
      </div>
    )
  }
}

export default Filter;
