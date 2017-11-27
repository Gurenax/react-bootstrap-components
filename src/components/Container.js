import React from 'react'

const Container = ({ children, variation }) => {
  let className = 'container'
  if (!!variation) {
    className += `-${variation}`
  }
  return (
    <div class={ className }>
      {children}
    </div>
  )
}

export default Container