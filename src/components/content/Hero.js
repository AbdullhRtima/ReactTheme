import React from 'react'

const Hero=({ children })=>  {
    return (
      <div className="hero">
        <div className="hero-body">{children}</div>
      </div>
    );
  }
  
export default Hero ;