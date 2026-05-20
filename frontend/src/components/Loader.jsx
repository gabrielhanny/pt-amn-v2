import React, { useEffect, useState } from 'react';

const Loader = ({ fadeOut = false }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`loader-container ${fadeOut ? 'is-leaving' : ''}`} data-testid="loader">
      {/* Soft purple energy field */}
      <div className="loader-energy-field"></div>
      <div className="loader-energy-ring"></div>
      <div className="loader-grain"></div>

      <div className={`loader-letters ${visible ? 'visible' : ''}`}>
        <span className="letter" style={{ animationDelay: '0s' }}>A</span>
        <span className="letter" style={{ animationDelay: '0.12s' }}>M</span>
        <span className="letter" style={{ animationDelay: '0.24s' }}>N</span>
      </div>

      <div className="loader-tagline">
        <span className="tagline-line"></span>
        <span>Digital Growth Partner</span>
        <span className="tagline-line"></span>
      </div>
    </div>
  );
};

export default Loader;
