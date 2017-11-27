import React from 'react'

/*
*  Checkbox component
*  id - name of the component
*  description - text beside checkbox
*  checked - if the checkbox is ticked
*/
const Checkbox = ({ id, description, checked }) => ( 
  <label class="custom-control custom-checkbox">
    <input id={ id } name={ id } type="checkbox" class="custom-control-input" defaultChecked={ checked } />
    <span class="custom-control-indicator"></span>
    <span class="custom-control-description">{ description }</span>
  </label>
)

export default Checkbox