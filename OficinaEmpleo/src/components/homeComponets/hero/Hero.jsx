import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css';
import "./Hero.css" 

function Hero() {
  return (
    <div className='hero'>
        <div className='hero-overlay'>
            <div className="hero-columns">
            {/* Columna con texto */}
            <div className="column column-text">
                <h2>Bienvenidos a la</h2>
                <h1>Oficina de empleo de Alderetes.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis odit dolores reprehenderit.</p>
                <div className='redesHero'>
                    <button className='RedHero'>
                        <i className="fab fa-instagram"></i><p>Instagram</p>
                    </button>
                    <button className='RedHero'>
                        <i className="fab fa-facebook"></i><p>Facebook</p>
                    </button>
                </div>
            </div>
            {/* Columna vacía */}
            <div className="column column-empty"></div>
            </div>
        </div>
    </div>
  )
}

export default Hero
