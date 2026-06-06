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
  <span className="loader-company-name">
    PT. ANAK MUDA NUSANTARA
  </span>
</div>

<div className="loader-tagline">
  <span className="tagline-line"></span>
  <span>Growth Activation Agency</span>
  <span className="tagline-line"></span>
</div>
    </div>
  );
};

export default Loader;
