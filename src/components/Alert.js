import React from 'react'

const Alert = ({ children, type }) => {
  let className = 'alert'
  className += ` alert-${type}`

  return ( 
    <div className={ className } role='alert'>
      { children }
    </div>
  )
}

export default Alert