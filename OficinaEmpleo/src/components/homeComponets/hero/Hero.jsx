import React from 'react'
import "./Hero.css" 

function Hero() {
  return (
    <div className='hero'>
        <div className='hero-overlay'>
            <div className="hero-columns">
            {/* Columna con texto */}
            <div className="column column-text">
                <h2>Bienvenidos</h2>
                <p>Este es un ejemplo de texto para la columna izquierda.</p>
            </div>
            {/* Columna vacía */}
            <div className="column column-empty"></div>
            </div>
        </div>
    </div>
  )
}

export default Hero
