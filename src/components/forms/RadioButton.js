import React from 'react'

/*
*   RadioButton component
*   id - name of specific radio button
*   group - group name of radio button
*   description - text beside radio button
*   selected - determines if radio button is selected by default
*/
const RadioButton = ({ id, group, description, selected }) => ( 
  <label class="custom-control custom-radio">
    <input id={ id } name={ group } type="radio" class="custom-control-input" defaultChecked={ selected } />
    <span class="custom-control-indicator"></span>
    <span class="custom-control-description">{ description }</span>
  </label>
)

export default RadioButton