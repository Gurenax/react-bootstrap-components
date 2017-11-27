import React from 'react'

/*
*   Row component
*   children - components inside the Row component
*   options - optional classes
*/
const Row = ({ children, options }) => {
  let className = 'row'
  if (!!options) className += ` ${options}`
  return (
    <div className={ className }>
      {children}
    </div>
  )
}

export default Row