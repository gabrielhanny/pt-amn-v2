import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="hero-section" data-testid="hero-section">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      <div className="noise-overlay"></div>

      <div className="hero-container">
        <div className="hero-badge" data-testid="hero-badge">
          <span className="badge-dot"></span>
          <span>Growth Activation Agency</span>
        </div>

        <h1 className="hero-title" data-testid="hero-title">
          HYPERNUSA
          <br />
          <span className="gradient-text">
            Building The System Behind Brand Growth
          </span>
        </h1>

        <p className="hero-description" data-testid="hero-description">
          Strategy. Creative. Commerce. Technology. Automation.
          <br className="desktop-br" />
          We help brands turn marketing activity into measurable business movement.
        </p>

        <div className="hero-cta-group">
          <a href="/lets-talk" className="btn-primary" data-testid="hero-cta-primary">
            Let&apos;s Talk
            <ArrowRight size={20} className="btn-icon" />
          </a>

          <a href="/solutions" className="btn-secondary" data-testid="hero-cta-secondary">
            Explore Solutions
          </a>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line"></div>
      </div>

      <style jsx="true">{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 140px 40px 110px;
          background: #0a1225;
          isolation: isolate;
        }

       .hero-bg {
  position: absolute;
  inset: 0;
  background: url('/images/hero-city-bg.jpg') center/cover no-repeat;
  z-index: 0;
  transform: scale(1.02);
  filter: brightness(1.18) saturate(1.18) contrast(1.05);
}
        .hero-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      90deg,
      rgba(10, 18, 37, 0.72) 0%,
      rgba(10, 18, 37, 0.42) 45%,
      rgba(10, 18, 37, 0.68) 100%
    ),
    linear-gradient(
      180deg,
      rgba(10, 18, 37, 0.32) 0%,
      rgba(10, 18, 37, 0.78) 100%
    ),
    radial-gradient(
      circle at 28% 45%,
      rgba(102, 120, 225, 0.22),
      transparent 34%
    ),
    radial-gradient(
      circle at 75% 48%,
      rgba(228, 73, 164, 0.18),
      transparent 34%
    );
  z-index: 1;
}

        .noise-overlay {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E");
          opacity: 0.04;
          pointer-events: none;
          mix-blend-mode: overlay;
          z-index: 2;
        }

        .hero-container {
          max-width: 1180px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 10;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 22px;
          background: rgba(255, 255, 255, 0.075);
          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 999px;
          font-size: 13px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.88);
          margin-bottom: 34px;
          animation: fade-in-up 1s ease;
          box-shadow: 0 12px 38px rgba(10, 18, 37, 0.28);
        }

        .badge-dot {
          width: 7px;
          height: 7px;
          background: #e449a4;
          border-radius: 50%;
          box-shadow: 0 0 16px rgba(228, 73, 164, 0.8);
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }

          50% {
            opacity: 0.5;
            transform: scale(0.82);
          }
        }

        .hero-title {
          font-size: clamp(56px, 8vw, 118px);
          font-weight: 800;
          line-height: 0.98;
          margin-bottom: 34px;
          letter-spacing: -0.055em;
          animation: fade-in-up 1s ease 0.2s backwards;
          color: #ffffff;
          text-shadow: 0 18px 60px rgba(0, 0, 0, 0.45);
        }

        .hero-title .gradient-text {
          display: inline-block;
          font-size: clamp(34px, 4.7vw, 72px);
          line-height: 1.05;
          letter-spacing: -0.045em;
        }

        .hero-description {
          font-size: 20px;
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.75;
          margin-bottom: 48px;
          max-width: 920px;
          margin-left: auto;
          margin-right: auto;
          animation: fade-in-up 1s ease 0.4s backwards;
          text-shadow: 0 10px 34px rgba(0, 0, 0, 0.4);
        }

        .hero-cta-group {
          display: flex;
          gap: 18px;
          justify-content: center;
          flex-wrap: wrap;
          animation: fade-in-up 1s ease 0.6s backwards;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 18px 36px;
          background: linear-gradient(135deg, #6678e1 0%, #e449a4 100%);
          color: white;
          text-decoration: none;
          border-radius: 12px;
          font-weight: 700;
          font-size: 15px;
          transition:
            transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
            box-shadow 0.4s ease;
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          box-shadow: 0 12px 34px rgba(102, 120, 225, 0.32);
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #7c8ff4 0%, #f05ab3 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .btn-primary > * {
          position: relative;
          z-index: 1;
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 48px rgba(228, 73, 164, 0.36);
        }

        .btn-primary:hover::before {
          opacity: 1;
        }

        .btn-icon {
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .btn-primary:hover .btn-icon {
          transform: translateX(5px);
        }

        .btn-secondary {
          padding: 18px 36px;
          background: rgba(255, 255, 255, 0.07);
          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);
          border: 1px solid rgba(255, 255, 255, 0.14);
          color: white;
          text-decoration: none;
          border-radius: 12px;
          font-weight: 700;
          font-size: 15px;
          transition: all 0.4s ease;
          display: inline-block;
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.11);
          border-color: rgba(228, 73, 164, 0.42);
          transform: translateY(-3px);
        }

        .desktop-br {
          display: block;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 5;
        }

        .scroll-line {
          width: 1px;
          height: 56px;
          background: linear-gradient(
            180deg,
            transparent,
            rgba(255, 255, 255, 0.7),
            transparent
          );
          animation: scroll-line-pulse 2.5s ease-in-out infinite;
        }

        @keyframes scroll-line-pulse {
          0%, 100% {
            opacity: 0.3;
            transform: translateY(0);
          }

          50% {
            opacity: 1;
            transform: translateY(10px);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            min-height: 92vh;
            padding: 124px 20px 86px;
          }

          .hero-bg {
            background-position: center;
            transform: scale(1.04);
          }

         .hero-overlay {
  background:
    linear-gradient(
      180deg,
      rgba(10, 18, 37, 0.5) 0%,
      rgba(10, 18, 37, 0.86) 100%
    ),
    linear-gradient(
      90deg,
      rgba(10, 18, 37, 0.72) 0%,
      rgba(10, 18, 37, 0.48) 50%,
      rgba(10, 18, 37, 0.72) 100%
    ),
    radial-gradient(
      circle at 50% 38%,
      rgba(102, 120, 225, 0.2),
      transparent 42%
    ),
    radial-gradient(
      circle at 70% 50%,
      rgba(228, 73, 164, 0.14),
      transparent 38%
    );
}

          .hero-badge {
            font-size: 12px;
            padding: 8px 16px;
            margin-bottom: 28px;
          }

          .hero-title {
            font-size: 48px;
            letter-spacing: -1.8px;
            margin-bottom: 28px;
          }

          .hero-title .gradient-text {
            font-size: 30px;
            line-height: 1.12;
            letter-spacing: -1.2px;
          }

          .hero-description {
            font-size: 16px;
            line-height: 1.7;
            margin-bottom: 38px;
          }

          .desktop-br {
            display: none;
          }

          .scroll-indicator {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            padding: 116px 20px 74px;
          }

          .hero-title {
            font-size: 40px;
          }

          .hero-title .gradient-text {
            font-size: 25px;
          }

          .hero-description {
            font-size: 15px;
          }

          .btn-primary,
          .btn-secondary {
            padding: 16px 28px;
            font-size: 14px;
            width: 100%;
            justify-content: center;
          }

          .hero-cta-group {
            flex-direction: column;
            gap: 12px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;