import React from 'react'

const Label = ({ forId, children }) => ( 
  <label for={ forId }>{ children }</label>
)

export default Label