import React from 'react'

/*
*   Progress component
*   value - progress value out of 100
*   striped - enable to add striped design to progress bar
*   animated - enable to add animation to progress bar
*   color - color of the progress bar e.g. success, info, warning, danger
*/
const Progress = ({ value, striped, animated, color }) => {
  let percent = value+'%'
  let className = 'progress-bar'

  if (!!striped) {
    className += ' progress-bar-striped'
  }
  if (!!animated) {
    className += ' progress-bar-animated'
  }
  if (!!color) {
    className += ` bg-${color}`
  }

  return ( 
    <div className="progress">
      <div className={ className } role="progressbar" style={{width: percent}} aria-valuenow={value} aria-valuemin={value} aria-valuemax="100">
        {percent}
      </div>
    </div>
  )
}

export default Progress