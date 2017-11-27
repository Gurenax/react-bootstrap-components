import React from 'react'

/*
*   ButtonGroup component
*   children - any component under Button Group
*/
const ButtonGroup = ({ children }) => ( 
  <div className='btn-group' role='group'>
    {children}
  </div>
)

export default ButtonGroup