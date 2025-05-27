import React, { useState } from 'react';
import './PokemonCard.css';
import PedroMorisco from './PedroMorisco.png';

const PokemonCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="card-container">
      <div 
        className={`pokemon-card ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="nature-effects">
          <div className="leaf leaf-1">🍃</div>
          <div className="leaf leaf-2">🌿</div>
          <div className="leaf leaf-3">🍀</div>
        </div>
        
        <div className="card-content">
          <img 
            src={PedroMorisco} 
            alt="Pedro Morisco" 
            className="pokemon-image"
          />
        </div>
        
        {isHovered && <div className="hover-glow"></div>}
      </div>
    </div>
  );
};

export default PokemonCard;