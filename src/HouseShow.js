import React from 'react';

const HouseShow = (props) =>{
const showHouse = !props.houses ? props.houses : props.houses.filter((house) => house.name === props.currentHouse )
  return(
null  )

}

HouseShow.defaultProps = {
  houses: [],
  currentFilter: null
}

export default HouseShow

// !props.filter ? props.houseData :
