import React from 'react'

const FormGroup = ({ children, type='group' }) => {
  let formGroupType = `form-${type}`
  return (
    <div className={formGroupType}>
      { children }
    </div>
  )
}

export default FormGroup