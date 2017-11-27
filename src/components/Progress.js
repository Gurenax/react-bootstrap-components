import React from 'react'

const Progress = ({ value }) => {
  let percent = value+'%'
  let className = 'progress-bar progress-bar-striped'

  if ( value >= 100 ) {
    className += ' bg-danger'
  }
  else if ( value >= 75 ) {
    className += ' bg-warning'
  }
  else if ( value >= 50 ) {
    className += ' bg-info'
  }
  else if ( value >= 25 ) {
    className += ' bg-success'
  }

  return ( 
    <div class="progress">
      <div class={ className } role="progressbar" style={{width: percent}} aria-valuenow={value} aria-valuemin={value} aria-valuemax="100">
        {percent}
      </div>
    </div>
  )
}

export default Progress