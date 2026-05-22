import React from 'react';

const BrandStatement = () => {
  return (
    <section className="brand-statement" data-testid="brand-statement">
      <div className="brand-orbit brand-orbit-one">
        <span className="orbit-dot orbit-dot-one"></span>
      </div>

      <div className="brand-orbit brand-orbit-two">
        <span className="orbit-dot orbit-dot-two"></span>
      </div>

      <div className="brand-glow brand-glow-one"></div>
      <div className="brand-glow brand-glow-two"></div>

      <div className="brand-container">
        <div className="brand-label">
          <span className="brand-line"></span>
          <span className="brand-mini-title">Brand Statement</span>
        </div>

        <h2 className="brand-title">
          From Visibility
          <br />
          to <span>Market Movement</span>
        </h2>

        <p className="brand-description">
          Visibility is no longer enough. Brands need connected systems
          that turn attention into engagement, engagement into action,
          and action into measurable growth.
        </p>

        <p className="brand-supporting">
          AMN is built to connect strategy, creative execution, media,
          commerce, technology, automation, and reporting into one
          growth activation system.
        </p>
      </div>

      <style jsx="true">{`
        .brand-statement {
          position: relative;
          padding: 180px 0;
          background:
            radial-gradient(circle at 88% 34%, rgba(139, 92, 246, 0.14), transparent 30%),
            radial-gradient(circle at 14% 16%, rgba(102, 126, 234, 0.12), transparent 34%),
            linear-gradient(180deg, #050510 0%, #080818 100%);
          overflow: hidden;
          isolation: isolate;
        }

        .brand-statement::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(167, 178, 255, 0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(167, 178, 255, 0.025) 1px, transparent 1px);
          background-size: 90px 90px;
          opacity: 0.45;
          pointer-events: none;
        }

        .brand-container {
          position: relative;
          z-index: 4;
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .brand-label {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 32px;
        }

        .brand-line {
          width: 52px;
          height: 1px;
          background: linear-gradient(90deg, rgba(167, 178, 255, 0.7), transparent);
        }

        .brand-mini-title {
          font-size: 13px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.5);
          font-weight: 600;
        }

        .brand-title {
          max-width: 960px;
          margin: 0;
          font-size: clamp(52px, 7vw, 96px);
          line-height: 0.95;
          letter-spacing: -0.06em;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.96);
        }

        .brand-title span {
          background: linear-gradient(135deg, #ffffff 0%, #a78bfa 45%, #ec4899 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .brand-description {
          max-width: 780px;
          margin-top: 52px;
          font-size: 24px;
          line-height: 1.7;
          letter-spacing: -0.02em;
          color: rgba(255, 255, 255, 0.78);
          font-weight: 300;
        }

        .brand-supporting {
          max-width: 720px;
          margin-top: 34px;
          font-size: 17px;
          line-height: 1.9;
          color: rgba(255, 255, 255, 0.52);
          font-weight: 400;
        }

        .brand-orbit {
          position: absolute;
          border-radius: 999px;
          pointer-events: none;
          z-index: 2;
          border: 1px solid rgba(167, 178, 255, 0.16);
          box-shadow:
            inset 0 0 40px rgba(139, 92, 246, 0.05),
            0 0 60px rgba(139, 92, 246, 0.06);
        }

        .brand-orbit::before {
          content: '';
          position: absolute;
          inset: 18%;
          border-radius: inherit;
          border: 1px solid rgba(236, 72, 153, 0.08);
        }

        .brand-orbit-one {
          width: 720px;
          height: 720px;
          top: 82px;
          right: -250px;
          animation: rotateOrbit 54s linear infinite;
        }

        .brand-orbit-two {
          width: 420px;
          height: 420px;
          bottom: 42px;
          left: -145px;
          opacity: 0.8;
          animation: rotateOrbitReverse 42s linear infinite;
        }

        .orbit-dot {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: #a7b2ff;
          box-shadow:
            0 0 16px rgba(167, 178, 255, 0.9),
            0 0 36px rgba(139, 92, 246, 0.65);
        }

        .orbit-dot-one {
          top: 18%;
          right: 16%;
        }

        .orbit-dot-two {
          bottom: 20%;
          left: 18%;
        }

        .brand-glow {
          position: absolute;
          border-radius: 999px;
          filter: blur(120px);
          pointer-events: none;
          z-index: 1;
        }

        .brand-glow-one {
          width: 360px;
          height: 360px;
          background: rgba(124, 92, 255, 0.16);
          top: 90px;
          right: 8%;
        }

        .brand-glow-two {
          width: 280px;
          height: 280px;
          background: rgba(255, 92, 214, 0.1);
          bottom: 40px;
          left: 8%;
        }

        @keyframes rotateOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes rotateOrbitReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @media (max-width: 768px) {
          .brand-statement {
            padding: 120px 0;
          }

          .brand-container {
            padding: 0 24px;
          }

          .brand-title {
            font-size: 54px;
            line-height: 1;
          }

          .brand-description {
            margin-top: 36px;
            font-size: 18px;
            line-height: 1.8;
          }

          .brand-supporting {
            margin-top: 28px;
            font-size: 15px;
            line-height: 1.8;
          }

          .brand-orbit-one {
            width: 460px;
            height: 460px;
            right: -260px;
            top: 60px;
          }

          .brand-orbit-two {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default BrandStatement;