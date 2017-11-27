import React from 'react'

/*
*  Checkbox component
*  id - name of the component
*  placeholder - placeholder description
*  checked - if the checkbox is ticked
*/
const Checkbox = ({ id, checked }) => ( 
  <input type='checkbox' id={ id } className='form-check-input' defaultChecked={ checked } />
)

export default Checkbox