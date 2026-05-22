import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const works = [
  {
    category: 'Campaign & Digital',
    title: 'Public Brand Activation Campaign',
    description:
      'Integrated campaign execution combining digital communication, content ecosystem, and audience activation strategy.',
    year: '2025',
  },
  {
    category: 'Commerce Growth',
    title: 'Marketplace & Live Commerce Enablement',
    description:
      'Commerce-focused activation supporting conversion movement, creator ecosystem, and marketplace growth operations.',
    year: '2025',
  },
  {
    category: 'CRM & Automation Systems',
    title: 'Growth Automation & CRM Experience',
    description:
      'Operational workflow, automation structure, and reporting systems designed to support scalable growth operations.',
    year: '2026',
  },
];

const SelectedExperience = () => {
  return (
    <section
      className="selected-experience"
      data-testid="selected-experience"
    >
      <div className="experience-glow experience-glow-one"></div>
      <div className="experience-glow experience-glow-two"></div>

      <div className="experience-container">
        <div className="experience-header">
          <div className="experience-label">
            <span className="experience-line"></span>
            <span>Selected Experience</span>
          </div>

          <h2 className="experience-title">
            Selected Experience
            <br />
            <span>from the People Behind AMN</span>
          </h2>

          <p className="experience-description">
            A selection of campaign, digital, content, commerce, public brand,
            and growth-related experience shaped by the people behind AMN.
          </p>
        </div>

        <div className="experience-grid">
          {works.map((work, index) => (
            <article className="experience-card" key={index}>
              <div className="experience-card-overlay"></div>

              <div className="experience-card-top">
                <span className="experience-category">
                  {work.category}
                </span>

                <span className="experience-year">
                  {work.year}
                </span>
              </div>

              <div className="experience-card-content">
                <h3>{work.title}</h3>

                <p>{work.description}</p>
              </div>

              <div className="experience-link">
                <span>Experience Preview</span>

                <ArrowUpRight size={18} />
              </div>
            </article>
          ))}
        </div>

        <a href="/work" className="experience-cta">
          View Selected Work
        </a>
      </div>

      <style jsx="true">{`
        .selected-experience {
          position: relative;
          padding: 180px 0;
          overflow: hidden;
          background:
            radial-gradient(circle at top right,
              rgba(139, 92, 246, 0.14),
              transparent 30%),
            linear-gradient(180deg, #050510 0%, #080818 100%);
        }

        .selected-experience::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(167, 178, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(167, 178, 255, 0.02) 1px, transparent 1px);
          background-size: 88px 88px;
          opacity: 0.45;
          pointer-events: none;
        }

        .experience-container {
          position: relative;
          z-index: 3;
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .experience-header {
          max-width: 880px;
          margin-bottom: 80px;
        }

        .experience-label {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 30px;
        }

        .experience-line {
          width: 52px;
          height: 1px;
          background:
            linear-gradient(
              90deg,
              rgba(167, 178, 255, 0.7),
              transparent
            );
        }

        .experience-label span:last-child {
          font-size: 13px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.48);
          font-weight: 600;
        }

        .experience-title {
          margin: 0;
          font-size: clamp(52px, 7vw, 92px);
          line-height: 0.95;
          letter-spacing: -0.06em;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.96);
        }

        .experience-title span {
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

        .experience-description {
          max-width: 760px;
          margin-top: 42px;
          font-size: 20px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.62);
          font-weight: 300;
        }

        .experience-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .experience-card {
          position: relative;
          min-height: 460px;
          padding: 34px;
          border-radius: 28px;
          overflow: hidden;

          background:
            linear-gradient(
              145deg,
              rgba(255, 255, 255, 0.06),
              rgba(255, 255, 255, 0.025)
            );

          border: 1px solid rgba(167, 178, 255, 0.12);

          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.05),
            0 24px 60px rgba(0, 0, 0, 0.2);

          transition:
            transform 0.45s cubic-bezier(0.4, 0, 0.2, 1),
            border-color 0.45s ease;
        }

        .experience-card::before {
          content: '';
          position: absolute;
          inset: 0;

          background:
            radial-gradient(
              circle at top left,
              rgba(167, 178, 255, 0.18),
              transparent 34%
            ),
            radial-gradient(
              circle at bottom right,
              rgba(236, 72, 153, 0.12),
              transparent 34%
            );

          opacity: 0;
          transition: opacity 0.45s ease;
        }

        .experience-card:hover {
          transform: translateY(-10px);
          border-color: rgba(167, 178, 255, 0.26);
        }

        .experience-card:hover::before {
          opacity: 1;
        }

        .experience-card-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              180deg,
              transparent 0%,
              rgba(0, 0, 0, 0.36) 100%
            );
        }

        .experience-card-top {
          position: relative;
          z-index: 2;

          display: flex;
          align-items: center;
          justify-content: space-between;

          margin-bottom: 220px;
        }

        .experience-category {
          font-size: 13px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(167, 178, 255, 0.8);
          font-weight: 600;
        }

        .experience-year {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.42);
        }

        .experience-card-content {
          position: relative;
          z-index: 2;
        }

        .experience-card h3 {
          margin: 0 0 18px;

          font-size: 32px;
          line-height: 1.08;
          letter-spacing: -0.04em;
          color: #ffffff;
          font-weight: 400;
        }

        .experience-card p {
          margin: 0;

          font-size: 15px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.6);
        }

        .experience-link {
          position: relative;
          z-index: 2;

          display: flex;
          align-items: center;
          justify-content: space-between;

          margin-top: 42px;

          color: #ffffff;
          font-size: 14px;
          font-weight: 600;
        }

        .experience-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          margin-top: 52px;

          padding: 16px 28px;

          border-radius: 14px;

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
            0 14px 40px rgba(102, 126, 234, 0.28);

          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease;
        }

        .experience-cta:hover {
          transform: translateY(-3px);

          box-shadow:
            0 20px 52px rgba(102, 126, 234, 0.42);
        }

        .experience-glow {
          position: absolute;
          border-radius: 999px;
          filter: blur(120px);
          pointer-events: none;
          z-index: 1;
        }

        .experience-glow-one {
          width: 340px;
          height: 340px;
          background: rgba(102, 126, 234, 0.12);
          top: 100px;
          left: 8%;
        }

        .experience-glow-two {
          width: 280px;
          height: 280px;
          background: rgba(236, 72, 153, 0.08);
          bottom: 100px;
          right: 8%;
        }

        @media (max-width: 980px) {
          .experience-grid {
            grid-template-columns: 1fr;
          }

          .experience-card {
            min-height: auto;
          }

          .experience-card-top {
            margin-bottom: 100px;
          }
        }

        @media (max-width: 768px) {
          .selected-experience {
            padding: 120px 0;
          }

          .experience-container {
            padding: 0 24px;
          }

          .experience-title {
            font-size: 54px;
            line-height: 1;
          }

          .experience-description {
            font-size: 17px;
            line-height: 1.8;
          }

          .experience-card {
            padding: 28px;
          }

          .experience-card h3 {
            font-size: 28px;
          }
        }
      `}</style>
    </section>
  );
};

export default SelectedExperience;