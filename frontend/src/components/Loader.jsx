import React, { useEffect, useState } from 'react';

const Loader = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div className="loader-container">
      <div className="loader-blur-bg"></div>
      <div className={`loader-letters ${visible ? 'visible' : ''}`}>
        <span className="letter letter-a" style={{ animationDelay: '0s' }}>A</span>
        <span className="letter letter-m" style={{ animationDelay: '0.2s' }}>M</span>
        <span className="letter letter-n" style={{ animationDelay: '0.4s' }}>N</span>
      </div>
      <div className="loader-tagline">
        <p>Digital Growth Partner</p>
      </div>
    </div>
  );
};

export default Loader;
