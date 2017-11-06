import React from 'react';

const HouseFilter = ({filters, handleChange}) => {
  return(
    <select onChange={handleChange}>
      <option value="Select">Select</option>
      {filters.map(filter =>
        <option key={filter.name} value={filter.name}>{filter.name}</option>
      )}
    </select>
  )
}

HouseFilter.defaultProps = {
  filters: [],
  handleChange: function() {}
}

export default HouseFilter
