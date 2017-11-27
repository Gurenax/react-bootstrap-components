import React from 'react'

/*
*   Container component
*   children - any component under Container component
*   variation - type of container e.g. fluid
*   options - any other class name for container
*/
const Container = ({ children, variation, options }) => {
  let className = 'container'
  if (!!variation) className += `-${variation}`
  if (!!options) className += ` ${options}`
  return (
    <div className={ className }>
      {children}
    </div>
  )
}

export default Container