import React from 'react'

/*
*   FormGroup component
*   children - any component under FormGroup
*   type - type of form group (default: group)
*/
const FormGroup = ({ children, type='group' }) => {
  let formGroupType = `form-${type}`
  return (
    <div className={formGroupType}>
      { children }
    </div>
  )
}

export default FormGroup