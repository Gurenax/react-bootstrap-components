import React from 'react'

const Card = ({ image='...', imageAlt, title, text, buttonLink='#', buttonText='Click Me' }) => {
  return ( 
    <div className="card" style={{width: 20 + 'rem'}} >
      <img className="card-img-top" src={ image } alt={imageAlt} />
      <div className="card-body">
        <h4 className="card-title">{ title }</h4>
        <p className="card-text">{ text }</p>
        <a href={ buttonLink } className="btn btn-primary">{ buttonText }</a>
      </div>
    </div>
  )
}

export default Card