import React from 'react'

/*
*   Form Button component
*   type - button type e.g. submit or reset
*   children - button text
*   variation - button color e.g. success, danger, warning
*/
const FormButton = ({ type='submit', children='Submit', variation='primary' }) => {
  let className = `btn`
  if (variation) {
    className += ` btn-${variation}`
  }
  return (
    <button type={ type } className={className}>{ children }</button>
  )
}

export default FormButton