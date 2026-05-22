import React from 'react';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="final-cta" data-testid="final-cta">
      <div className="cta-orbit orbit-one"></div>
      <div className="cta-orbit orbit-two"></div>

      <div className="cta-glow glow-one"></div>
      <div className="cta-glow glow-two"></div>

      <div className="cta-particles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="cta-container">
        <div className="cta-label">
          <span className="cta-line"></span>
          <span>Final CTA</span>
        </div>

        <h2 className="cta-title">
          Let&apos;s Build
          <br />
          <span>What Moves</span>
          <br />
          Your Brand Next
        </h2>

        <p className="cta-description">
          Strategy, creative execution, digital experience, commerce growth,
          automation, and AI-powered operations connected into one measurable
          growth system.
        </p>

        <a href="/lets-talk" className="cta-button">
          Let&apos;s Talk
          <ArrowRight size={20} />
        </a>
      </div>

      <style jsx="true">{`
        .final-cta {
          position: relative;
          overflow: hidden;
          padding: 220px 0;
          background:
            radial-gradient(circle at 50% 50%, rgba(102, 126, 234, 0.14), transparent 34%),
            radial-gradient(circle at 70% 20%, rgba(236, 72, 153, 0.12), transparent 28%),
            linear-gradient(180deg, #050510 0%, #090918 100%);
          isolation: isolate;
        }

        .final-cta::before {
          content: '';
          position: absolute;
          inset: 0;

          background-image:
            linear-gradient(rgba(167, 178, 255, 0.022) 1px, transparent 1px),
            linear-gradient(90deg, rgba(167, 178, 255, 0.022) 1px, transparent 1px);

          background-size: 88px 88px;

          opacity: 0.35;
          pointer-events: none;
        }

        .cta-container {
          position: relative;
          z-index: 5;

          width: 100%;
          max-width: 1100px;

          margin: 0 auto;
          padding: 0 40px;

          text-align: center;
        }

        .cta-label {
          display: inline-flex;
          align-items: center;
          gap: 14px;

          margin-bottom: 34px;
        }

        .cta-line {
          width: 52px;
          height: 1px;

          background:
            linear-gradient(
              90deg,
              rgba(167, 178, 255, 0.7),
              transparent
            );
        }

        .cta-label span:last-child {
          font-size: 13px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.52);
          font-weight: 600;
        }

        .cta-title {
          margin: 0;

          font-size: clamp(64px, 9vw, 140px);
          line-height: 0.9;
          letter-spacing: -0.07em;
          font-weight: 280;

          color: rgba(255, 255, 255, 0.98);
        }

        .cta-title span {
          background:
            linear-gradient(
              135deg,
              #ffffff 0%,
              #a78bfa 45%,
              #ec4899 100%
            );

          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .cta-description {
          max-width: 760px;

          margin: 42px auto 0;

          font-size: 20px;
          line-height: 1.9;
          color: rgba(255, 255, 255, 0.6);
          font-weight: 300;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;

          margin-top: 52px;

          padding: 18px 34px;

          border-radius: 16px;

          text-decoration: none;
          color: #ffffff;

          font-size: 15px;
          font-weight: 700;

          background:
            linear-gradient(
              135deg,
              #667eea 0%,
              #764ba2 100%
            );

          box-shadow:
            0 16px 48px rgba(102, 126, 234, 0.3);

          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease;
        }

        .cta-button:hover {
          transform: translateY(-4px);

          box-shadow:
            0 24px 60px rgba(102, 126, 234, 0.42);
        }

        .cta-orbit {
          position: absolute;
          border-radius: 999px;
          border: 1px solid rgba(167, 178, 255, 0.12);

          pointer-events: none;
          z-index: 1;
        }

        .orbit-one {
          width: 820px;
          height: 820px;

          top: 50%;
          left: 50%;

          transform: translate(-50%, -50%);

          animation: rotateOrbit 44s linear infinite;
        }

        .orbit-two {
          width: 520px;
          height: 520px;

          top: 50%;
          left: 50%;

          transform: translate(-50%, -50%);

          border-color: rgba(236, 72, 153, 0.08);

          animation: rotateOrbitReverse 30s linear infinite;
        }

        .cta-orbit::before {
          content: '';

          position: absolute;
          inset: 18%;

          border-radius: inherit;

          border: 1px solid rgba(255, 255, 255, 0.04);
        }

        .cta-glow {
          position: absolute;
          border-radius: 999px;

          filter: blur(120px);

          pointer-events: none;
          z-index: 1;
        }

        .glow-one {
          width: 420px;
          height: 420px;

          background: rgba(102, 126, 234, 0.16);

          top: 50%;
          left: 50%;

          transform: translate(-50%, -50%);
        }

        .glow-two {
          width: 320px;
          height: 320px;

          background: rgba(236, 72, 153, 0.12);

          top: 40%;
          left: 58%;

          transform: translate(-50%, -50%);
        }

        .cta-particles span {
          position: absolute;

          width: 4px;
          height: 4px;

          border-radius: 999px;

          background: rgba(255, 255, 255, 0.6);

          box-shadow:
            0 0 12px rgba(167, 178, 255, 0.8);

          animation: floatParticle 12s ease-in-out infinite;
        }

        .cta-particles span:nth-child(1) {
          top: 22%;
          left: 20%;
          animation-delay: 0s;
        }

        .cta-particles span:nth-child(2) {
          top: 70%;
          left: 18%;
          animation-delay: 2s;
        }

        .cta-particles span:nth-child(3) {
          top: 28%;
          right: 18%;
          animation-delay: 4s;
        }

        .cta-particles span:nth-child(4) {
          bottom: 22%;
          right: 24%;
          animation-delay: 6s;
        }

        @keyframes rotateOrbit {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes rotateOrbitReverse {
          from {
            transform: translate(-50%, -50%) rotate(360deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(0deg);
          }
        }

        @keyframes floatParticle {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.3;
          }

          50% {
            transform: translateY(-18px);
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .final-cta {
            padding: 140px 0;
          }

          .cta-container {
            padding: 0 24px;
          }

          .cta-title {
            font-size: 64px;
            line-height: 0.92;
          }

          .cta-description {
            font-size: 17px;
            line-height: 1.8;
          }

          .orbit-one {
            width: 520px;
            height: 520px;
          }

          .orbit-two {
            width: 320px;
            height: 320px;
          }
        }
      `}</style>
    </section>
  );
};

export default FinalCTA;