import React from 'react'

/*
*  Checkbox component
*  id - name of the component
*  description - text beside checkbox
*  checked - if the checkbox is ticked
*/
const Checkbox = ({ id, description, checked, disabled=false }) => {
  let className = 'form-check'
  if (!!disabled) {
    className += ' disabled'
  }
  return (
    <div className={className}>
      <label className="form-check-label" >
        <input className="form-check-input" id={ id } name={ id } type="checkbox" defaultChecked={ checked } disabled={ disabled } />
        { description }
      </label>
    </div>
  )
}

export default Checkbox