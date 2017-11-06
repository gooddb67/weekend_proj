import React from 'react';


const HouseInfo = (props) => {


  const selectedHouse = !props.filter ? props.houseData : props.houseData.find(item => item.name === props.filter)

  return (
      <div>
        <a href={selectedHouse.url}><p>{selectedHouse.name}</p></a>
      </div>
    );
  }


HouseInfo.defaultProps = {
  houseData: [],
  filter: null
}



export default HouseInfo
