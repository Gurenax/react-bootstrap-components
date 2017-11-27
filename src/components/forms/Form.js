import React from 'react'

/*
*   Form component
*   children - any component under Form component
*   url - url where the form will be submitted
*   method - submit method i.e. GET or POST
*/
const Form = ({ children, url, method='POST' }) => ( 
  <form action={url} method={method}>
    { children }
  </form>
)

export default Form