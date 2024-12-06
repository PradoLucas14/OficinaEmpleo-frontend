import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import "./Hero.css";

function Hero() {
  const redirectTo = (url) => {
    window.location.href = url;
  };

  return (
    <div className='hero'>
      <div className='hero-overlay'>
        <div className="hero-columns">
          {/* Columna con texto */}
          <div className="column column-text">
            <p>Bienvenidos a la</p>
            <h1>Oficina de empleo de Alderetes.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis odit dolores reprehenderit.</p>
            <div className='redesHero'>
              <button 
                className='RedHero' 
                onClick={() => redirectTo('https://www.instagram.com')}>
                <i className="fab fa-instagram"></i><p>Instagram</p>
              </button>
              <button 
                className='RedHero' 
                onClick={() => redirectTo('https://www.facebook.com')}>
                <i className="fab fa-facebook"></i><p>Facebook</p>
              </button>
            </div>
          </div>
          {/* Columna vacía */}
          <div className="column column-empty"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
