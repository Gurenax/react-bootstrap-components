import React from 'react'

/*
*   Col component
*   children - components inside the Row component
*   size - size of screen (i.e. sm, md, lg, xl)
*   span - column span
*   className - optional classes
*/
const Col = ({ children, size, span, className }) => {
  let classes = 'col'
  if (!!size) classes += `-${size}`
  if (!!span) classes += `-${span}`
  if (!!className) classes += ` ${className}`
  return (
    <div className={ classes }>
      {children}
    </div>
  )
}

export default Col