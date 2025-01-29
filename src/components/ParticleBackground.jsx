import React from 'react';
import Particles from 'react-tsparticles';
import particlesConfig from '../config/particlesConfig';

const ParticleBackground = () => {
  return (
    <div className="particle-background-container">
      <Particles options={particlesConfig} />
    </div>
  );
};

export default ParticleBackground;