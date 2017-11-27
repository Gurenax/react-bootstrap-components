import React from 'react'

/*
*   Alert component
*   children - any component inside the alert component
*   type - type of alert e.g. danger, info, warning, success
*/
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