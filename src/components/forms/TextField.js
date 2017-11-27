import React from 'react'

/*
*  TextField component
*  id - name of the component
*  type - text, email, password
*  placeholder - placeholder description
*/
const TextField = ({ id, type, placeholder, value }) => ( 
  <input type={ type } id={ id } placeholder={ placeholder } className='form-control' value={ value } />
)

export default TextField