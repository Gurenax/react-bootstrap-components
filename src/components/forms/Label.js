import React from 'react'

/*
*   Label component
*   forId - id of target component to be labeled
*   children - any component under label (e.g. text for label)
*/
const Label = ({ forId, children }) => ( 
  <label for={ forId }>{ children }</label>
)

export default Label