import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/sections/Footer';
import { ArrowUpRight } from 'lucide-react';

const works = [
  {
    project: 'Public Brand Activation',
    category: 'Campaign & Digital',
    industry: 'Public / Brand Activation',
    description:
      'Campaign and digital activation experience shaped around audience movement, communication flow, and brand presence.',
    year: '2025',
  },
  {
    project: 'Commerce Growth Enablement',
    category: 'Commerce Growth',
    industry: 'Retail / Marketplace',
    description:
      'Marketplace, creator-led commerce, and conversion-oriented activation experience designed for scalable commerce movement.',
    year: '2025',
  },
  {
    project: 'CRM & Automation Systems',
    category: 'Experience & Tech',
    industry: 'Technology / Operations',
    description:
      'Operational workflow, automation structure, and reporting systems designed to support scalable growth operations.',
    year: '2026',
  },
];

const WorkPage = () => {
  return (
    <>
      <Navbar />

      <main className="work-page">
        <section className="work-hero">
          <div className="work-glow work-glow-one"></div>
          <div className="work-glow work-glow-two"></div>

          <div className="work-container">
            <div className="work-label">
              <span className="work-line"></span>
              <span>Selected Work</span>
            </div>

            <h1>
              Work Built Around
              <br />
              <span>Brand Movement and Measurable Growth</span>
            </h1>

            <p>
              A collection of campaign, digital, commerce, media, and
              growth-related experience shaped by the people behind AMN.
            </p>
          </div>
        </section>

        <section className="work-listing">
          <div className="work-container">
            <div className="work-grid">
              {works.map((work) => (
                <article className="work-card" key={work.project}>
                  <div className="work-card-glow"></div>

                  <div className="work-thumbnail">
                    <span>{work.category}</span>
                  </div>

                  <div className="work-meta">
                    <span>{work.industry}</span>
                    <span>{work.year}</span>
                  </div>

                  <h2>{work.project}</h2>

                  <p>{work.description}</p>

                  <div className="work-card-footer">
                    <span>Experience Preview</span>
                    <ArrowUpRight size={18} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx="true">{`
        .work-page {
          min-height: 100vh;
          background: #050510;
          color: #ffffff;
          overflow: hidden;
        }

        .work-container {
          position: relative;
          z-index: 3;
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .work-hero {
          position: relative;
          padding: 180px 0 130px;
          overflow: hidden;
          background:
            radial-gradient(circle at 20% 20%, rgba(102, 126, 234, 0.14), transparent 32%),
            radial-gradient(circle at 88% 50%, rgba(236, 72, 153, 0.1), transparent 30%),
            linear-gradient(180deg, #07071a 0%, #050510 100%);
        }

        .work-hero::before,
        .work-listing::before {
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

        .work-label {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 32px;
        }

        .work-line {
          width: 52px;
          height: 1px;
          background: linear-gradient(90deg, rgba(167, 178, 255, 0.7), transparent);
        }

        .work-label span:last-child {
          font-size: 13px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.5);
          font-weight: 600;
        }

        .work-hero h1 {
          margin: 0;
          max-width: 1100px;
          font-size: clamp(52px, 7vw, 96px);
          line-height: 0.95;
          letter-spacing: -0.06em;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.96);
        }

        .work-hero h1 span {
          background: linear-gradient(135deg, #ffffff 0%, #a78bfa 45%, #ec4899 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .work-hero p {
          max-width: 800px;
          margin-top: 44px;
          font-size: 21px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.64);
          font-weight: 300;
        }

        .work-listing {
          position: relative;
          padding: 150px 0 180px;
          background:
            radial-gradient(circle at 16% 16%, rgba(102, 126, 234, 0.1), transparent 30%),
            radial-gradient(circle at 90% 70%, rgba(236, 72, 153, 0.08), transparent 32%),
            linear-gradient(180deg, #050510 0%, #080818 100%);
          overflow: hidden;
        }

        .work-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .work-card {
          position: relative;
          min-height: 560px;
          padding: 28px;
          border-radius: 28px;
          overflow: hidden;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.055), rgba(255, 255, 255, 0.025));
          border: 1px solid rgba(167, 178, 255, 0.12);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.05),
            0 24px 60px rgba(0, 0, 0, 0.2);
          transition:
            transform 0.45s cubic-bezier(0.4, 0, 0.2, 1),
            border-color 0.45s ease;
        }

        .work-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 20% 0%, rgba(167, 178, 255, 0.16), transparent 34%),
            radial-gradient(circle at 90% 20%, rgba(236, 72, 153, 0.1), transparent 32%);
          opacity: 0;
          transition: opacity 0.45s ease;
          pointer-events: none;
        }

        .work-card:hover {
          transform: translateY(-8px);
          border-color: rgba(167, 178, 255, 0.28);
        }

        .work-card:hover::before {
          opacity: 1;
        }

        .work-card-glow {
          position: absolute;
          width: 180px;
          height: 180px;
          top: -80px;
          right: -60px;
          border-radius: 999px;
          background: rgba(139, 92, 246, 0.1);
          filter: blur(42px);
        }

        .work-thumbnail {
          position: relative;
          z-index: 2;
          height: 190px;
          border-radius: 22px;
          margin-bottom: 26px;
          display: flex;
          align-items: flex-end;
          padding: 22px;
          background:
            radial-gradient(circle at 20% 20%, rgba(167, 178, 255, 0.22), transparent 34%),
            radial-gradient(circle at 80% 60%, rgba(236, 72, 153, 0.16), transparent 34%),
            linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02));
          border: 1px solid rgba(167, 178, 255, 0.12);
          overflow: hidden;
        }

        .work-thumbnail::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 42px 42px;
          opacity: 0.55;
        }

        .work-thumbnail span {
          position: relative;
          z-index: 2;
          font-size: 12px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.78);
          font-weight: 700;
        }

        .work-meta {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 34px;
          color: rgba(167, 178, 255, 0.72);
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-weight: 700;
        }

        .work-card h2 {
          position: relative;
          z-index: 2;
          margin: 0 0 18px;
          font-size: 32px;
          line-height: 1.08;
          letter-spacing: -0.045em;
          color: #ffffff;
          font-weight: 400;
        }

        .work-card p {
          position: relative;
          z-index: 2;
          margin: 0;
          font-size: 15px;
          line-height: 1.78;
          color: rgba(255, 255, 255, 0.58);
        }

        .work-card-footer {
          position: absolute;
          left: 28px;
          right: 28px;
          bottom: 28px;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.08);
          color: #ffffff;
          font-size: 14px;
          font-weight: 700;
        }

        .work-glow {
          position: absolute;
          border-radius: 999px;
          filter: blur(120px);
          pointer-events: none;
          z-index: 1;
        }

        .work-glow-one {
          width: 360px;
          height: 360px;
          background: rgba(102, 126, 234, 0.12);
          top: 120px;
          left: 8%;
        }

        .work-glow-two {
          width: 300px;
          height: 300px;
          background: rgba(236, 72, 153, 0.08);
          bottom: 140px;
          right: 8%;
        }

        @media (max-width: 980px) {
          .work-grid {
            grid-template-columns: 1fr;
          }

          .work-card {
            min-height: 520px;
          }
        }

        @media (max-width: 768px) {
          .work-container {
            padding: 0 24px;
          }

          .work-hero {
            padding: 150px 0 100px;
          }

          .work-listing {
            padding: 110px 0;
          }

          .work-hero h1 {
            font-size: 54px;
            line-height: 1;
          }

          .work-hero p {
            font-size: 17px;
            line-height: 1.8;
          }

          .work-card {
            min-height: 540px;
            padding: 24px;
          }

          .work-card-footer {
            left: 24px;
            right: 24px;
            bottom: 24px;
          }
        }
      `}</style>
    </>
  );
};

export default WorkPage;