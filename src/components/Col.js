import React from 'react'

/*
*   Col component
*   children - components inside the Row component
*   size - size of screen (i.e. sm, md, lg, xl)
*   span - column span
*/
const Col = ({ children, size, span, options }) => {
  let className = 'col'
  if (!!size) {
    className += `-${size}`
  }
  if (!!span) {
    className += `-${span}`
  }
  if (!!options) {
    className += ` ${options}`
  }
  return (
    <div class={ className }>
      {children}
    </div>
  )
}

export default Col