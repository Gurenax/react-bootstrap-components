import React from 'react'

/*
*   RadioButton component
*   id - name of specific radio button
*   group - group name of radio button
*   value - value of radio button
*   description - text beside radio button
*   selected - determines if radio button is selected by default
*/
const RadioButton = ({ id, group, value, description, selected, disabled }) =>  {
  let className = 'form-check'
  if (!!disabled) {
    className += ' disabled'
  }
  return (
    <div className={className}>
      <label className="form-check-label">
        <input className="form-check-input" id={ id } name={ group } type="radio" value={value} defaultChecked={ selected } disabled={ disabled } />
        { description }
      </label>
    </div>
  )
}

export default RadioButton