import React from 'react'

const Container = ({ children, variation, options }) => {
  let className = 'container'
  if (!!variation) {
    className += `-${variation}`
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

export default Container