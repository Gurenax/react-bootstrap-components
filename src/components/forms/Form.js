import React from 'react'

const Form = ({ children, action, method='POST' }) => ( 
  <form action={action} method={method}>
    { children }
  </form>
)

export default Form