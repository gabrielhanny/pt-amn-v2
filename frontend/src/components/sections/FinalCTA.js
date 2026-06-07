import React from 'react';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="final-cta" data-testid="final-cta">
      <div className="final-cta-bg"></div>
      <div className="final-cta-overlay"></div>

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
          <span>Let&apos;s Build</span>
        </div>

        <h2 className="cta-title">
          Let&apos;s Build
          <br />
          <span>What Moves</span>
          <br />
          Your Brand Next
        </h2>

        <p className="cta-description">
          Ready to move from fragmented activity to connected growth? We connect
          strategy, creative direction, campaign activation, commerce, technology,
          automation, AI, and performance learning into one growth ecosystem built
          for your brand.
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
          background: #050510;
          isolation: isolate;
        }

        .final-cta-bg {
          position: absolute;
          inset: 0;
          background: url('/images/finalcta-city-bg.jpg') center/cover no-repeat;
          z-index: 0;
          opacity: 0.34;
          filter: brightness(0.82) saturate(1.12) contrast(1.04);
          transform: scale(1.03);
        }

        .final-cta-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            linear-gradient(
              180deg,
              rgba(5, 5, 16, 0.18) 0%,
              rgba(5, 5, 16, 0.72) 100%
            ),
            radial-gradient(
              circle at center,
              rgba(102, 126, 234, 0.18),
              transparent 38%
            ),
            radial-gradient(
              circle at 60% 40%,
              rgba(236, 72, 153, 0.14),
              transparent 34%
            );
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
          background: linear-gradient(90deg, rgba(167, 178, 255, 0.7), transparent);
        }

        .cta-label span:last-child {
          font-size: 13px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.58);
          font-weight: 700;
        }

        .cta-title {
          margin: 0;
          font-size: clamp(64px, 9vw, 140px);
          line-height: 0.9;
          letter-spacing: -0.07em;
          font-weight: 280;
          color: rgba(255, 255, 255, 0.98);
          text-shadow: 0 22px 70px rgba(0, 0, 0, 0.46);
        }

        .cta-title span {
          background: linear-gradient(135deg, #ffffff 0%, #a78bfa 45%, #ec4899 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .cta-description {
          max-width: 820px;
          margin: 42px auto 0;
          font-size: 20px;
          line-height: 1.85;
          color: rgba(255, 255, 255, 0.68);
          font-weight: 300;
          text-shadow: 0 10px 34px rgba(0, 0, 0, 0.38);
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
          background: linear-gradient(135deg, #667eea 0%, #ec4899 100%);
          box-shadow: 0 16px 48px rgba(102, 126, 234, 0.3);
          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease;
        }

        .cta-button:hover {
          transform: translateY(-4px);
          box-shadow: 0 24px 60px rgba(236, 72, 153, 0.34);
        }

        .cta-orbit {
          position: absolute;
          border-radius: 999px;
          border: 1px solid rgba(167, 178, 255, 0.12);
          pointer-events: none;
          z-index: 2;
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
          z-index: 2;
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
          box-shadow: 0 0 12px rgba(167, 178, 255, 0.8);
          animation: floatParticle 12s ease-in-out infinite;
          z-index: 3;
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

          .final-cta-bg {
            opacity: 0.58;
            background-position: center;
            filter: brightness(1.08) saturate(1.16) contrast(1.02);
          }

          .final-cta-overlay {
            background:
              linear-gradient(
                180deg,
                rgba(5, 5, 16, 0.12) 0%,
                rgba(5, 5, 16, 0.52) 100%
              ),
              radial-gradient(
                circle at center,
                rgba(102, 126, 234, 0.14),
                transparent 42%
              );
          }

          .cta-container {
            padding: 0 24px;
          }

          .cta-label span:last-child {
            font-size: 11px;
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

        @media (max-width: 480px) {
          .final-cta {
            padding: 118px 0;
          }

          .final-cta-bg {
            opacity: 0.66;
            background-position: center top;
            filter: brightness(1.16) saturate(1.18) contrast(1.02);
          }

          .final-cta-overlay {
            background:
              linear-gradient(
                180deg,
                rgba(5, 5, 16, 0.1) 0%,
                rgba(5, 5, 16, 0.46) 100%
              ),
              radial-gradient(
                circle at center,
                rgba(102, 126, 234, 0.12),
                transparent 44%
              );
          }

          .cta-title {
            font-size: 50px;
          }

          .cta-description {
            font-size: 16px;
          }

          .cta-button {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default FinalCTA;