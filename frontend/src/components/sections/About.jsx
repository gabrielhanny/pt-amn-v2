import React from 'react';
import { Target, Users, Zap } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const About = () => {
  const [headerRef, headerVisible] = useScrollReveal();
  const [cardsRef, cardsVisible] = useScrollReveal();

  return (
    <section id="about" className="about-section" data-testid="about-section">
      <div className="about-bg-orb"></div>

      {/* Digital Pulse Energy - subtle waveform behind cards */}
      <div className="pulse-energy-wrap" aria-hidden="true">
        <svg className="pulse-energy" viewBox="0 0 1200 200" preserveAspectRatio="none">
          <defs>
            <linearGradient id="aboutPulseTrack" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(167, 178, 255, 0)" />
              <stop offset="50%" stopColor="rgba(167, 178, 255, 0.18)" />
              <stop offset="100%" stopColor="rgba(167, 178, 255, 0)" />
            </linearGradient>
            <linearGradient id="aboutPulseTraveler" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(167, 178, 255, 0)" />
              <stop offset="50%" stopColor="rgba(192, 132, 252, 0.95)" />
              <stop offset="100%" stopColor="rgba(167, 178, 255, 0)" />
            </linearGradient>
            <filter id="aboutPulseGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Soft static track */}
          <path
            d="M 0,100 C 200,60 300,140 400,100 C 500,60 700,140 800,100 C 900,60 1000,140 1200,100"
            stroke="url(#aboutPulseTrack)"
            strokeWidth="1"
            fill="none"
            className="pulse-track"
          />

          {/* Animated pulse traveler */}
          <path
            d="M 0,100 C 200,60 300,140 400,100 C 500,60 700,140 800,100 C 900,60 1000,140 1200,100"
            stroke="url(#aboutPulseTraveler)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            filter="url(#aboutPulseGlow)"
            className="pulse-traveler"
          />
        </svg>
      </div>

      <div className="about-container">
        <div ref={headerRef} className={`about-header reveal ${headerVisible ? 'is-visible' : ''}`}>
          <div className="section-badge">
            <span className="badge-dot"></span>
            <span>Tentang AMN</span>
          </div>
          <h2 className="section-title">
            Partner Digital Growth
            <br />
            <span className="gradient-text">Untuk Bisnis Indonesia</span>
          </h2>
          <p className="section-description">
            AMN menggabungkan strategi eksekusi digital, pemikiran kreatif, otomasi,
            <br className="desktop-br" />
            dan teknologi modern untuk membantu bisnis bertumbuh secara profesional.
          </p>
        </div>

        <div ref={cardsRef} className={`about-cards reveal ${cardsVisible ? 'is-visible' : ''}`}>
          <div className="about-card glass-effect pulse-react pulse-react-1">
            <div className="card-icon-wrapper">
              <Target className="card-icon" size={32} />
            </div>
            <h3 className="card-title">Strategi Terukur</h3>
            <p className="card-description">
              Setiap keputusan didukung oleh data dan analisis mendalam untuk memastikan hasil yang optimal dan terukur.
            </p>
          </div>

          <div className="about-card glass-effect pulse-react pulse-react-2">
            <div className="card-icon-wrapper">
              <Users className="card-icon" size={32} />
            </div>
            <h3 className="card-title">Tim Profesional</h3>
            <p className="card-description">
              Tim multidisiplin yang berpengalaman dalam digital marketing, teknologi, dan creative execution.
            </p>
          </div>

          <div className="about-card glass-effect pulse-react pulse-react-3">
            <div className="card-icon-wrapper">
              <Zap className="card-icon" size={32} />
            </div>
            <h3 className="card-title">Teknologi Modern</h3>
            <p className="card-description">
              Mengimplementasikan teknologi terkini termasuk AI dan automation untuk efisiensi maksimal.
            </p>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .about-section {
          padding: 140px 40px;
          background: linear-gradient(180deg, #07071a 0%, #0a0a1f 100%);
          position: relative;
          overflow: hidden;
        }

        .about-bg-orb {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%);
          filter: blur(100px);
          top: 50%;
          right: -200px;
          transform: translateY(-50%);
          pointer-events: none;
        }

        /* ===== Digital Pulse Energy ===== */
        .pulse-energy-wrap {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 18%;
          height: 240px;
          pointer-events: none;
          z-index: 1;
          opacity: 0.85;
        }

        .pulse-energy {
          width: 100%;
          height: 100%;
          display: block;
        }

        .pulse-track {
          opacity: 0.5;
        }

        .pulse-traveler {
          stroke-dasharray: 220 1300;
          stroke-dashoffset: 1520;
          animation: pulse-travel 9s cubic-bezier(0.45, 0, 0.55, 1) infinite,
                     pulse-breathe 4.5s ease-in-out infinite;
        }

        @keyframes pulse-travel {
          0%   { stroke-dashoffset: 1520; }
          100% { stroke-dashoffset: -220; }
        }

        @keyframes pulse-breathe {
          0%, 100% { opacity: 0.55; }
          50%      { opacity: 1; }
        }

        .about-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .about-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 9px 20px;
          background: rgba(102, 126, 234, 0.08);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(102, 126, 234, 0.2);
          border-radius: 50px;
          font-size: 12px;
          font-weight: 600;
          color: #a7b2ff;
          margin-bottom: 28px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          background: #8b98f7;
          border-radius: 50%;
          box-shadow: 0 0 10px #8b98f7;
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }

        .section-title {
          font-size: 60px;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 24px;
          letter-spacing: -2px;
        }

        .section-description {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.7;
          max-width: 760px;
          margin: 0 auto;
        }

        .desktop-br {
          display: block;
        }

        .about-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          position: relative;
          z-index: 2;
        }

        .about-card {
          padding: 44px 36px;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.5s ease, border-color 0.5s ease, background 0.5s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .about-card::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 20px;
          padding: 1px;
          background: linear-gradient(145deg, rgba(167, 178, 255, 0.3), transparent 50%, rgba(139, 92, 246, 0.3));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }

        .about-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.4);
          background: rgba(255, 255, 255, 0.05);
        }

        .about-card:hover::before {
          opacity: 1;
        }

        /* ===== Pulse Reaction (synced to traveler) ===== */
        /* Traveler loops every 9s. Pulse traverses card area roughly:
           card 1 lit ~1.5s, card 2 lit ~4.5s, card 3 lit ~7.5s */
        .pulse-react {
          position: relative;
        }

        .pulse-react::after {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 20px;
          padding: 1px;
          background: linear-gradient(145deg, rgba(192, 132, 252, 0.45), rgba(167, 178, 255, 0.25) 50%, rgba(192, 132, 252, 0.45));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          pointer-events: none;
          animation: card-pulse-react 9s ease-in-out infinite;
        }

        .pulse-react-1::after { animation-delay: 0s; }
        .pulse-react-2::after { animation-delay: 3s; }
        .pulse-react-3::after { animation-delay: 6s; }

        @keyframes card-pulse-react {
          0%, 12%, 100% { opacity: 0; }
          16%, 20%      { opacity: 0.7; }
          28%           { opacity: 0; }
        }

        /* Icon glow reaction synced to the traveler */
        .pulse-react .card-icon-wrapper {
          animation: icon-pulse-react 9s ease-in-out infinite;
        }

        .pulse-react-1 .card-icon-wrapper { animation-delay: 0s; }
        .pulse-react-2 .card-icon-wrapper { animation-delay: 3s; }
        .pulse-react-3 .card-icon-wrapper { animation-delay: 6s; }

        @keyframes icon-pulse-react {
          0%, 12%, 100% {
            box-shadow: 0 0 0 0 rgba(167, 178, 255, 0);
            background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%);
          }
          18% {
            box-shadow: 0 0 28px 4px rgba(192, 132, 252, 0.35);
            background: linear-gradient(135deg, rgba(102, 126, 234, 0.35) 0%, rgba(192, 132, 252, 0.35) 100%);
          }
          28% {
            box-shadow: 0 0 0 0 rgba(167, 178, 255, 0);
            background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%);
          }
        }

        /* On hover, freeze pulse react so hover state takes precedence */
        .about-card:hover.pulse-react::after { opacity: 0; }
        .about-card:hover .card-icon-wrapper { animation: none; }

        .card-icon-wrapper {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          transition: background 0.3s ease;
        }

        .about-card:hover .card-icon-wrapper {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.3) 100%);
        }

        .card-icon {
          color: #667eea;
        }

        .card-title {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 16px;
          color: var(--color-text-primary);
        }

        .card-description {
          font-size: 15px;
          line-height: 1.7;
          color: var(--color-text-secondary);
        }

        @media (max-width: 1024px) {
          .about-cards {
            grid-template-columns: repeat(2, 1fr);
          }

          .section-title {
            font-size: 48px;
          }
        }

        @media (max-width: 768px) {
          .about-section {
            padding: 90px 20px;
          }

          .about-cards {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .section-title {
            font-size: 36px;
            letter-spacing: -1px;
          }

          .section-description {
            font-size: 15px;
          }

          .desktop-br {
            display: none;
          }

          .about-card {
            padding: 30px 26px;
          }

          .card-title {
            font-size: 20px;
          }

          .card-description {
            font-size: 14px;
          }

          /* Hide horizontal pulse on stacked layout - feels misaligned */
          .pulse-energy-wrap {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
