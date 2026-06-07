import React from 'react';
import { Package, Landmark, Route, ShoppingCart, Building2 } from 'lucide-react';

const industries = [
  {
    title: 'Consumer & Commerce Brands',
    description:
      'For lifestyle, beauty, F&B, retail, and product-driven businesses that need stronger market presence and customer movement.',
    icon: Package,
  },
  {
    title: 'B2B, Tech & Digital Services',
    description:
      'For service-driven and technology-enabled brands building trust, clarity, lead generation, and digital growth systems.',
    icon: Landmark,
  },
  {
    title: 'Public, Mobility & Infrastructure',
    description:
      'For public-facing organizations, mobility, infrastructure, and large-scale audience engagement initiatives.',
    icon: Route,
  },
  {
    title: 'Marketplace & Live Commerce',
    description:
      'For brands growing through marketplace activation, live commerce, affiliate, creator-led conversion, and product content.',
    icon: ShoppingCart,
  },
  {
    title: 'Corporate & Growth Organizations',
    description:
      'For organizations that need sharper communication, better digital experience, operational systems, and measurable activation.',
    icon: Building2,
  },
];

const IndustriesPreview = () => {
  return (
    <section className="industries-preview" data-testid="industries-preview">
      <div className="industries-bg"></div>
      <div className="industries-overlay"></div>
      <div className="industries-noise"></div>

      <div className="industries-glow industries-glow-one"></div>
      <div className="industries-glow industries-glow-two"></div>

      <div className="industries-container">
        <div className="industries-header">
          <div className="industries-label">
            <span className="industries-line"></span>
            <span>Industries We Serve</span>
          </div>

          <h2 className="industries-title">
            Relevant for Brands
            <br />
            <span>Preparing for Scale</span>
          </h2>

          <p className="industries-description">
            Hypernusa works across sectors where connected growth systems create
            measurable business movement.
          </p>
        </div>

        <div className="industries-grid">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <article className="industry-card" key={industry.title}>
                <div className="industry-card-glow"></div>

                <div className="industry-icon">
                  <Icon size={24} strokeWidth={1.7} />
                </div>

                <div className="industry-content">
                  <h3>{industry.title}</h3>
                  <p>{industry.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <style jsx="true">{`
        .industries-preview {
          position: relative;
          padding: 170px 0;
          overflow: hidden;
          background: #050510;
          isolation: isolate;
        }

        .industries-bg {
          position: absolute;
          inset: 0;
          background: url('/images/industries-city-bg.jpg') center/cover no-repeat;
          z-index: 0;
          opacity: 0.42;
          filter: brightness(0.86) saturate(1.16) contrast(1.04);
          transform: scale(1.02);
        }

        .industries-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            linear-gradient(
              180deg,
              rgba(5, 5, 16, 0.28) 0%,
              rgba(5, 5, 16, 0.78) 100%
            ),
            linear-gradient(
              90deg,
              rgba(5, 5, 16, 0.58) 0%,
              rgba(5, 5, 16, 0.18) 50%,
              rgba(5, 5, 16, 0.58) 100%
            ),
            radial-gradient(
              circle at 18% 22%,
              rgba(102, 126, 234, 0.16),
              transparent 34%
            ),
            radial-gradient(
              circle at 86% 64%,
              rgba(236, 72, 153, 0.13),
              transparent 34%
            );
        }

        .industries-noise {
          position: absolute;
          inset: 0;
          z-index: 2;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E");
          opacity: 0.035;
          pointer-events: none;
          mix-blend-mode: overlay;
        }

        .industries-container {
          position: relative;
          z-index: 4;
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .industries-header {
          max-width: 900px;
          margin-bottom: 74px;
        }

        .industries-label {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 30px;
        }

        .industries-line {
          width: 52px;
          height: 1px;
          background: linear-gradient(90deg, rgba(167, 178, 255, 0.75), transparent);
        }

        .industries-label span:last-child {
          font-size: 13px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.58);
          font-weight: 700;
        }

        .industries-title {
          margin: 0;
          font-size: clamp(52px, 7vw, 92px);
          line-height: 0.95;
          letter-spacing: -0.06em;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.96);
          text-shadow: 0 18px 60px rgba(0, 0, 0, 0.42);
        }

        .industries-title span {
          background: linear-gradient(135deg, #ffffff 0%, #a78bfa 45%, #ec4899 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .industries-description {
          max-width: 760px;
          margin-top: 42px;
          font-size: 20px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.68);
          font-weight: 300;
          text-shadow: 0 10px 34px rgba(0, 0, 0, 0.38);
        }

        .industries-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 20px;
        }

        .industry-card {
          position: relative;
          min-height: 300px;
          padding: 30px;
          border-radius: 26px;
          overflow: hidden;
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.03));
          border: 1px solid rgba(167, 178, 255, 0.16);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.07),
            0 24px 60px rgba(0, 0, 0, 0.24);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          transition:
            transform 0.45s cubic-bezier(0.4, 0, 0.2, 1),
            border-color 0.45s ease,
            background 0.45s ease;
        }

        .industry-card:nth-child(1),
        .industry-card:nth-child(2),
        .industry-card:nth-child(3) {
          grid-column: span 2;
        }

        .industry-card:nth-child(4),
        .industry-card:nth-child(5) {
          grid-column: span 3;
        }

        .industry-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 20% 0%, rgba(167, 178, 255, 0.16), transparent 34%),
            radial-gradient(circle at 90% 20%, rgba(236, 72, 153, 0.12), transparent 32%);
          opacity: 0;
          transition: opacity 0.45s ease;
          pointer-events: none;
        }

        .industry-card:hover {
          transform: translateY(-8px);
          border-color: rgba(167, 178, 255, 0.3);
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.04));
        }

        .industry-card:hover::before {
          opacity: 1;
        }

        .industry-card-glow {
          position: absolute;
          width: 160px;
          height: 160px;
          top: -80px;
          right: -60px;
          border-radius: 999px;
          background: rgba(139, 92, 246, 0.12);
          filter: blur(42px);
          opacity: 0;
          transition: opacity 0.45s ease;
        }

        .industry-card:hover .industry-card-glow {
          opacity: 1;
        }

        .industry-icon {
          position: relative;
          z-index: 2;
          width: 54px;
          height: 54px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #a7b2ff;
          background: rgba(167, 178, 255, 0.1);
          border: 1px solid rgba(167, 178, 255, 0.16);
          margin-bottom: 82px;
          transition: transform 0.45s ease, background 0.45s ease, color 0.45s ease;
        }

        .industry-card:hover .industry-icon {
          transform: rotate(-8deg) scale(1.05);
          background: rgba(167, 178, 255, 0.18);
          color: #ffffff;
        }

        .industry-content {
          position: relative;
          z-index: 2;
        }

        .industry-content h3 {
          margin: 0 0 18px;
          font-size: 28px;
          line-height: 1.08;
          letter-spacing: -0.045em;
          color: #ffffff;
          font-weight: 400;
        }

        .industry-content p {
          margin: 0;
          font-size: 15px;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.64);
        }

        .industries-glow {
          position: absolute;
          border-radius: 999px;
          filter: blur(120px);
          pointer-events: none;
          z-index: 2;
        }

        .industries-glow-one {
          width: 340px;
          height: 340px;
          background: rgba(102, 126, 234, 0.14);
          top: 120px;
          left: 8%;
        }

        .industries-glow-two {
          width: 300px;
          height: 300px;
          background: rgba(236, 72, 153, 0.1);
          bottom: 120px;
          right: 8%;
        }

        @media (max-width: 980px) {
          .industries-grid {
            grid-template-columns: 1fr;
          }

          .industry-card:nth-child(n) {
            grid-column: auto;
          }

          .industry-card {
            min-height: auto;
          }

          .industry-icon {
            margin-bottom: 72px;
          }
        }

        @media (max-width: 768px) {
          .industries-preview {
            padding: 120px 0;
          }

          .industries-bg {
            opacity: 0.66;
            background-position: center;
            filter: brightness(1.08) saturate(1.18) contrast(1.02);
            transform: scale(1.04);
          }

          .industries-overlay {
            background:
              linear-gradient(
                180deg,
                rgba(5, 5, 16, 0.18) 0%,
                rgba(5, 5, 16, 0.56) 100%
              ),
              linear-gradient(
                90deg,
                rgba(5, 5, 16, 0.28) 0%,
                rgba(5, 5, 16, 0.1) 50%,
                rgba(5, 5, 16, 0.28) 100%
              ),
              radial-gradient(
                circle at 50% 32%,
                rgba(102, 126, 234, 0.18),
                transparent 46%
              ),
              radial-gradient(
                circle at 72% 48%,
                rgba(236, 72, 153, 0.14),
                transparent 42%
              );
          }

          .industries-container {
            padding: 0 24px;
          }

          .industries-header {
            margin-bottom: 56px;
          }

          .industries-label {
            margin-bottom: 26px;
          }

          .industries-label span:last-child {
            font-size: 11px;
          }

          .industries-title {
            font-size: 50px;
            line-height: 1;
          }

          .industries-description {
            margin-top: 32px;
            font-size: 17px;
            line-height: 1.8;
          }

          .industry-card {
            padding: 28px;
          }

          .industry-content h3 {
            font-size: 28px;
          }
        }

        @media (max-width: 480px) {
          .industries-preview {
            padding: 96px 0;
          }

          .industries-bg {
            opacity: 0.72;
            background-position: center top;
            filter: brightness(1.16) saturate(1.2) contrast(1.02);
          }

          .industries-overlay {
            background:
              linear-gradient(
                180deg,
                rgba(5, 5, 16, 0.14) 0%,
                rgba(5, 5, 16, 0.48) 100%
              ),
              linear-gradient(
                90deg,
                rgba(5, 5, 16, 0.22) 0%,
                rgba(5, 5, 16, 0.08) 50%,
                rgba(5, 5, 16, 0.22) 100%
              );
          }

          .industries-title {
            font-size: 42px;
          }

          .industries-description {
            font-size: 16px;
          }

          .industry-icon {
            margin-bottom: 56px;
          }

          .industry-content h3 {
            font-size: 25px;
          }
        }
      `}</style>
    </section>
  );
};

export default IndustriesPreview;