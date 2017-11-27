import React from 'react'

const Label = ({ forId, children, type='text' }) => {
  let className = 'col-form-label'
  if (type==='checkbox') {
    className='form-check-label'
  }

  return ( 
  <label className={ className } for={ forId }>{ children }</label>
  )
}

export default Label