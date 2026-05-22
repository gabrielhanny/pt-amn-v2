import React from 'react';
import {
  Megaphone,
  BarChart3,
  MonitorSmartphone,
  ShoppingBag,
  BrainCircuit,
  ArrowRight,
} from 'lucide-react';

const solutions = [
  {
    number: '01',
    title: 'Creative & Campaign',
    description:
      'Brand communication, campaign strategy, integrated campaigns, content ecosystem, and creative activation.',
    icon: Megaphone,
  },
  {
    number: '02',
    title: 'Media & Performance',
    description:
      'Media planning direction, performance marketing, campaign amplification, influencer/KOL marketing, and reporting.',
    icon: BarChart3,
  },
  {
    number: '03',
    title: 'Experience & Tech',
    description:
      'Website, landing page, microsite, CRM, MarTech, automation, SEO foundation, and digital experience.',
    icon: MonitorSmartphone,
  },
  {
    number: '04',
    title: 'Commerce Growth',
    description:
      'Live commerce, affiliate growth, marketplace activation, creator commerce, product content, and commerce tracking.',
    icon: ShoppingBag,
  },
  {
    number: '05',
    title: 'Data & AI Operations',
    description:
      'AI assistant, lead qualification, automated reporting, workflow automation, CRM/data structuring, and AI-powered growth operations.',
    icon: BrainCircuit,
  },
];

const SolutionsOverview = () => {
  return (
    <section className="solutions-overview" data-testid="solutions-overview">
      <div className="solution-glow solution-glow-one"></div>
      <div className="solution-glow solution-glow-two"></div>

      <div className="solutions-container">
        <div className="solutions-header">
          <div className="solutions-label">
            <span className="solutions-line"></span>
            <span>Solutions Overview</span>
          </div>

          <h2 className="solutions-title">
            Solutions That
            <br />
            <span>Move Brands Forward</span>
          </h2>

          <p className="solutions-intro">
            We combine creative thinking, media direction, digital experience,
            commerce growth, and AI-powered operations to help brands activate
            growth with clarity and control.
          </p>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <article className="solution-card" key={solution.title}>
                <div className="solution-card-glow"></div>

                <div className="solution-card-top">
                  <span className="solution-number">{solution.number}</span>

                  <div className="solution-icon">
                    <Icon size={24} strokeWidth={1.7} />
                  </div>
                </div>

                <h3>{solution.title}</h3>

                <p>{solution.description}</p>
              </article>
            );
          })}
        </div>

        <a href="/solutions" className="solutions-cta">
          Explore Solutions
          <ArrowRight size={18} />
        </a>
      </div>

      <style jsx="true">{`
        .solutions-overview {
          position: relative;
          padding: 170px 0;
          background:
            radial-gradient(circle at 18% 18%, rgba(102, 126, 234, 0.12), transparent 34%),
            radial-gradient(circle at 86% 54%, rgba(236, 72, 153, 0.1), transparent 30%),
            linear-gradient(180deg, #080818 0%, #050510 100%);
          overflow: hidden;
          isolation: isolate;
        }

        .solutions-overview::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(167, 178, 255, 0.022) 1px, transparent 1px),
            linear-gradient(90deg, rgba(167, 178, 255, 0.022) 1px, transparent 1px);
          background-size: 86px 86px;
          opacity: 0.5;
          pointer-events: none;
        }

        .solution-glow {
          position: absolute;
          border-radius: 999px;
          filter: blur(120px);
          pointer-events: none;
          z-index: 1;
        }

        .solution-glow-one {
          width: 360px;
          height: 360px;
          background: rgba(102, 126, 234, 0.12);
          top: 120px;
          left: 8%;
        }

        .solution-glow-two {
          width: 320px;
          height: 320px;
          background: rgba(236, 72, 153, 0.1);
          bottom: 160px;
          right: 8%;
        }

        .solutions-container {
          position: relative;
          z-index: 3;
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .solutions-header {
          max-width: 880px;
          margin-bottom: 70px;
        }

        .solutions-label {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 30px;
          font-size: 13px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.5);
          font-weight: 600;
        }

        .solutions-line {
          width: 52px;
          height: 1px;
          background: linear-gradient(90deg, rgba(167, 178, 255, 0.7), transparent);
        }

        .solutions-title {
          margin: 0;
          font-size: clamp(52px, 7vw, 94px);
          line-height: 0.95;
          letter-spacing: -0.06em;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.96);
        }

        .solutions-title span {
          background: linear-gradient(135deg, #ffffff 0%, #a78bfa 45%, #ec4899 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .solutions-intro {
          max-width: 780px;
          margin-top: 42px;
          font-size: 20px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.62);
          font-weight: 300;
        }

        .solutions-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 20px;
        }

        .solution-card {
          position: relative;
          min-height: 320px;
          padding: 30px;
          border-radius: 26px;
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.055), rgba(255, 255, 255, 0.025));
          border: 1px solid rgba(167, 178, 255, 0.13);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.06),
            0 24px 60px rgba(0, 0, 0, 0.2);
          overflow: hidden;
          transition:
            transform 0.45s cubic-bezier(0.4, 0, 0.2, 1),
            border-color 0.45s ease,
            background 0.45s ease;
        }

        .solution-card:nth-child(1),
        .solution-card:nth-child(2),
        .solution-card:nth-child(3) {
          grid-column: span 2;
        }

        .solution-card:nth-child(4),
        .solution-card:nth-child(5) {
          grid-column: span 3;
        }

        .solution-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 20% 0%, rgba(167, 178, 255, 0.16), transparent 34%),
            radial-gradient(circle at 90% 20%, rgba(236, 72, 153, 0.11), transparent 32%);
          opacity: 0;
          transition: opacity 0.45s ease;
          pointer-events: none;
        }

        .solution-card:hover {
          transform: translateY(-8px);
          border-color: rgba(167, 178, 255, 0.28);
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.035));
        }

        .solution-card:hover::before {
          opacity: 1;
        }

        .solution-card-glow {
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

        .solution-card:hover .solution-card-glow {
          opacity: 1;
        }

        .solution-card-top {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 62px;
        }

        .solution-number {
          font-size: 13px;
          letter-spacing: 0.18em;
          color: rgba(167, 178, 255, 0.7);
          font-weight: 700;
        }

        .solution-icon {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #a7b2ff;
          background: rgba(167, 178, 255, 0.09);
          border: 1px solid rgba(167, 178, 255, 0.14);
          transition: transform 0.45s ease, background 0.45s ease, color 0.45s ease;
        }

        .solution-card:hover .solution-icon {
          transform: rotate(-8deg) scale(1.05);
          background: rgba(167, 178, 255, 0.16);
          color: #ffffff;
        }

        .solution-card h3 {
          position: relative;
          z-index: 2;
          margin: 0 0 18px;
          font-size: 24px;
          line-height: 1.15;
          letter-spacing: -0.03em;
          color: #ffffff;
        }

        .solution-card p {
          position: relative;
          z-index: 2;
          margin: 0;
          font-size: 15px;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.58);
        }

        .solutions-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 54px;
          color: #ffffff;
          text-decoration: none;
          font-size: 15px;
          font-weight: 700;
          padding: 16px 24px;
          border-radius: 14px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          box-shadow: 0 14px 40px rgba(102, 126, 234, 0.28);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .solutions-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 54px rgba(102, 126, 234, 0.42);
        }

        @media (max-width: 980px) {
          .solutions-grid {
            grid-template-columns: 1fr;
          }

          .solution-card:nth-child(n) {
            grid-column: auto;
          }
        }

        @media (max-width: 768px) {
          .solutions-overview {
            padding: 120px 0;
          }

          .solutions-container {
            padding: 0 24px;
          }

          .solutions-title {
            font-size: 54px;
            line-height: 1;
          }

          .solutions-intro {
            font-size: 17px;
            line-height: 1.8;
          }

          .solution-card {
            min-height: auto;
            padding: 26px;
          }

          .solution-card-top {
            margin-bottom: 44px;
          }
        }
      `}</style>
    </section>
  );
};

export default SolutionsOverview;