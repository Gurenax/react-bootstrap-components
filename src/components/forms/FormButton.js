import React from 'react'

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