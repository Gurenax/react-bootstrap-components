import React from 'react'
import Button from './Button'
import Image from './Image'

/*
*   Card component
*   imageUrl - url to an image
*   imageAlt - alternate text for the image
*   title - title of the card
*   text - text description/content
*   buttonUrl - url for the button
*   buttonText - text inside button
*   buttonColor - color of the button e.g. primary, success, warning, danger
*/
const Card = ({ imageUrl='...', imageAlt, title, text, buttonUrl='#', buttonText='Click Me', buttonColor='primary' }) => {
  return ( 
    <div className="card" style={{width: 20 + 'rem'}} >
      <Image className="card-img-top" imageUrl={ imageUrl } alt={ imageAlt } />
      <div className="card-body">
        <h4 className="card-title">{ title }</h4>
        <p className="card-text">{ text }</p>
        <Button title={ buttonText } href={ buttonUrl } variation={ buttonColor } />
      </div>
    </div>
  )
}

export default Card