import React from 'react'

/*
*   Image component
*   className - class option for the image tag
*   image - url to an image
*   imageAlt - alternate text for the image
*/
const Image = ({ className, imageUrl, imageAlt }) => {
  return ( 
    <img className="card-img-top" src={ imageUrl } alt={ imageAlt } />
  )
}

export default Image