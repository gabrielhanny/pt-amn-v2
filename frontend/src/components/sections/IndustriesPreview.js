import React from 'react';
import {
  Package,
  Landmark,
  Route,
  ShoppingCart,
  Building2,
} from 'lucide-react';

const industries = [
  {
    title: 'Consumer Brands',
    description:
      'For lifestyle, beauty, F&B, retail, and product-driven brands that need stronger market presence and customer movement.',
    icon: Package,
  },
  {
    title: 'Financial, Tech & Digital Services',
    description:
      'For service-driven and technology-enabled brands building trust, clarity, and digital growth systems.',
    icon: Landmark,
  },
  {
    title: 'Mobility, Infrastructure & Public Brands',
    description:
      'For brands operating across public movement, urban infrastructure, mobility, and large-scale audience engagement.',
    icon: Route,
  },
  {
    title: 'Commerce & Marketplace-Driven Brands',
    description:
      'For brands growing through marketplace, live commerce, affiliate, creator-led conversion, and product content systems.',
    icon: ShoppingCart,
  },
  {
    title: 'Corporate & B2B Brands',
    description:
      'For organizations that need sharper communication, digital experience, operational systems, and measurable activation.',
    icon: Building2,
  },
];

const IndustriesPreview = () => {
  return (
    <section className="industries-preview" data-testid="industries-preview">
      <div className="industries-glow industries-glow-one"></div>
      <div className="industries-glow industries-glow-two"></div>

      <div className="industries-container">
        <div className="industries-header">
          <div className="industries-label">
            <span className="industries-line"></span>
            <span>Industries Preview</span>
          </div>

          <h2 className="industries-title">
            Built for Brands Across
            <br />
            <span>Growth-Driven Industries</span>
          </h2>
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
          background:
            radial-gradient(circle at 18% 22%, rgba(102, 126, 234, 0.11), transparent 30%),
            radial-gradient(circle at 86% 64%, rgba(236, 72, 153, 0.09), transparent 32%),
            linear-gradient(180deg, #050510 0%, #080818 100%);
          isolation: isolate;
        }

        .industries-preview::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(167, 178, 255, 0.022) 1px, transparent 1px),
            linear-gradient(90deg, rgba(167, 178, 255, 0.022) 1px, transparent 1px);
          background-size: 88px 88px;
          opacity: 0.45;
          pointer-events: none;
        }

        .industries-container {
          position: relative;
          z-index: 3;
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
          background: linear-gradient(90deg, rgba(167, 178, 255, 0.7), transparent);
        }

        .industries-label span:last-child {
          font-size: 13px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.5);
          font-weight: 600;
        }

        .industries-title {
          margin: 0;
          font-size: clamp(52px, 7vw, 92px);
          line-height: 0.95;
          letter-spacing: -0.06em;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.96);
        }

        .industries-title span {
          background: linear-gradient(135deg, #ffffff 0%, #a78bfa 45%, #ec4899 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
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
            linear-gradient(145deg, rgba(255, 255, 255, 0.055), rgba(255, 255, 255, 0.025));
          border: 1px solid rgba(167, 178, 255, 0.12);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.05),
            0 24px 60px rgba(0, 0, 0, 0.2);
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
            radial-gradient(circle at 20% 0%, rgba(167, 178, 255, 0.15), transparent 34%),
            radial-gradient(circle at 90% 20%, rgba(236, 72, 153, 0.1), transparent 32%);
          opacity: 0;
          transition: opacity 0.45s ease;
          pointer-events: none;
        }

        .industry-card:hover {
          transform: translateY(-8px);
          border-color: rgba(167, 178, 255, 0.28);
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.035));
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
          background: rgba(139, 92, 246, 0.1);
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
          background: rgba(167, 178, 255, 0.09);
          border: 1px solid rgba(167, 178, 255, 0.14);
          margin-bottom: 82px;
          transition: transform 0.45s ease, background 0.45s ease, color 0.45s ease;
        }

        .industry-card:hover .industry-icon {
          transform: rotate(-8deg) scale(1.05);
          background: rgba(167, 178, 255, 0.16);
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
          color: rgba(255, 255, 255, 0.58);
        }

        .industries-glow {
          position: absolute;
          border-radius: 999px;
          filter: blur(120px);
          pointer-events: none;
          z-index: 1;
        }

        .industries-glow-one {
          width: 340px;
          height: 340px;
          background: rgba(102, 126, 234, 0.12);
          top: 120px;
          left: 8%;
        }

        .industries-glow-two {
          width: 300px;
          height: 300px;
          background: rgba(236, 72, 153, 0.08);
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

          .industries-container {
            padding: 0 24px;
          }

          .industries-title {
            font-size: 54px;
            line-height: 1;
          }

          .industry-card {
            padding: 28px;
          }

          .industry-content h3 {
            font-size: 28px;
          }
        }
      `}</style>
    </section>
  );
};

export default IndustriesPreview;