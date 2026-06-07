import React from 'react';

const BrandStatement = () => {
  return (
    <section className="brand-statement" data-testid="brand-statement">
      <div className="brand-bg"></div>
      <div className="brand-overlay"></div>
      <div className="brand-noise"></div>

      <div className="brand-container">
        <div className="brand-label">
          <span className="brand-line"></span>
          <span className="brand-mini-title">Brand Statement</span>
        </div>

        <h2 className="brand-title">
          Visibility is easy.
          <br />
          <span>Movement is harder.</span>
        </h2>

        <p className="brand-description">
          Modern brands do not lack activity. They need connected systems that
          turn attention into engagement, engagement into action, and action into
          measurable growth.
        </p>

        <p className="brand-supporting">
          Hypernusa connects strategy, creative, commerce, technology, automation,
          and reporting into one growth activation system — so every campaign,
          content, channel, website, and workflow has a clear role in moving the
          brand forward.
        </p>
      </div>

      <style jsx="true">{`
        .brand-statement {
          position: relative;
          padding: 170px 0;
          background: #0a1225;
          overflow: hidden;
          isolation: isolate;
        }

       .brand-bg {
  position: absolute;
  inset: 0;
  background: url('/images/brand-city-bg.jpg') center/cover no-repeat;

  filter:
    brightness(1.22)
    saturate(1.20)
    contrast(1.06);

  transform: scale(1.02);
}

       .brand-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;

  background:
    linear-gradient(
      90deg,
      rgba(10, 18, 37, 0.72) 0%,
      rgba(10, 18, 37, 0.38) 48%,
      rgba(10, 18, 37, 0.68) 100%
    ),

    linear-gradient(
      180deg,
      rgba(10, 18, 37, 0.28) 0%,
      rgba(10, 18, 37, 0.72) 100%
    ),

    radial-gradient(
      circle at 22% 45%,
      rgba(102, 120, 225, 0.18),
      transparent 34%
    ),

    radial-gradient(
      circle at 82% 40%,
      rgba(228, 73, 164, 0.14),
      transparent 32%
    );
}

        .brand-noise {
          position: absolute;
          inset: 0;
          z-index: 2;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E");
          opacity: 0.035;
          pointer-events: none;
          mix-blend-mode: overlay;
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
          background: linear-gradient(90deg, rgba(255, 255, 255, 0.75), transparent);
        }

        .brand-mini-title {
          font-size: 13px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.6);
          font-weight: 700;
        }

        .brand-title {
          max-width: 1040px;
          margin: 0;
          font-size: clamp(56px, 7.4vw, 104px);
          line-height: 0.98;
          letter-spacing: -0.06em;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.96);
          text-shadow: 0 18px 60px rgba(0, 0, 0, 0.45);
        }

        .brand-title span {
          background: linear-gradient(135deg, #ffffff 0%, #6678e1 42%, #e449a4 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .brand-description {
          max-width: 820px;
          margin-top: 48px;
          font-size: 24px;
          line-height: 1.7;
          letter-spacing: -0.02em;
          color: rgba(255, 255, 255, 0.82);
          font-weight: 500;
          text-shadow: 0 12px 38px rgba(0, 0, 0, 0.38);
        }

        .brand-supporting {
          max-width: 760px;
          margin-top: 32px;
          font-size: 17px;
          line-height: 1.9;
          color: rgba(255, 255, 255, 0.62);
          font-weight: 400;
          text-shadow: 0 10px 34px rgba(0, 0, 0, 0.34);
        }

       @media (max-width: 768px) {
  .brand-statement {
    padding: 118px 0;
  }

  .brand-bg {
    background-position: center;
    filter: brightness(1.24) saturate(1.16) contrast(1.03);
    transform: scale(1.04);
  }

  .brand-overlay {
    background:
      linear-gradient(
        180deg,
        rgba(10, 18, 37, 0.28) 0%,
        rgba(10, 18, 37, 0.58) 100%
      ),
      linear-gradient(
        90deg,
        rgba(10, 18, 37, 0.38) 0%,
        rgba(10, 18, 37, 0.18) 50%,
        rgba(10, 18, 37, 0.38) 100%
      ),
      radial-gradient(
        circle at 50% 36%,
        rgba(102, 120, 225, 0.22),
        transparent 44%
      ),
      radial-gradient(
        circle at 72% 48%,
        rgba(228, 73, 164, 0.15),
        transparent 40%
      );
  }

  .brand-container {
    padding: 0 24px;
  }

  .brand-label {
    margin-bottom: 26px;
  }

  .brand-mini-title {
    font-size: 11px;
  }

  .brand-title {
    font-size: 48px;
    line-height: 1.02;
    letter-spacing: -0.045em;
  }

  .brand-description {
    margin-top: 34px;
    font-size: 18px;
    line-height: 1.75;
  }

  .brand-supporting {
    margin-top: 26px;
    font-size: 15px;
    line-height: 1.8;
  }
}

       @media (max-width: 480px) {
  .brand-statement {
    padding: 96px 0;
  }

  .brand-bg {
    background-position: center top;
    filter: brightness(1.32) saturate(1.18) contrast(1.02);
  }

  .brand-overlay {
    background:
      linear-gradient(
        180deg,
        rgba(10, 18, 37, 0.22) 0%,
        rgba(10, 18, 37, 0.52) 100%
      ),
      linear-gradient(
        90deg,
        rgba(10, 18, 37, 0.3) 0%,
        rgba(10, 18, 37, 0.12) 50%,
        rgba(10, 18, 37, 0.3) 100%
      ),
      radial-gradient(
        circle at 50% 34%,
        rgba(102, 120, 225, 0.2),
        transparent 46%
      ),
      radial-gradient(
        circle at 72% 48%,
        rgba(228, 73, 164, 0.13),
        transparent 42%
      );
  }

  .brand-title {
    font-size: 39px;
  }

  .brand-description {
    font-size: 17px;
  }
    .brand-supporting {
  font-size: 15px;
  line-height: 1.65;
  margin-top: 22px;
}
}
      `}</style>
    </section>
  );
};

export default BrandStatement;