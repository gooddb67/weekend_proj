import React from 'react';

const CreateHouseForm = (props) =>
  <form onSubmit={props.onSubmit}>
    <label>House </label>
    <input id="create-input" type="text" onChange={props.inputChange} value={props.currentInput} placeholder="<Name> of <Homeland>" />
    <input type="submit" value="Create House"/>
  </form>

export default CreateHouseForm
