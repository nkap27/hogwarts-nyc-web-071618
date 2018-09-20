import React from 'react'
import Hog from './Hog'
// import v4 from 'UUID'


function HogsContainer(props) {
  // function handleClick(event){
  //
  // }

  const hogList = props.hogsObj.map(hogItem => {
      return < Hog key={hogItem.name} {...hogItem} />
      console.log(this)
    })

  return(
    <div>
      { hogList }
    </div>
    )
  }

export default HogsContainer
