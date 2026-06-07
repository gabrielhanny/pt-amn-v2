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
      'Brand communication, digital activation, content ecosystem, and audience engagement shaped through public-facing campaigns.',
    year: '2025',
  },
  {
    project: 'Marketplace & Live Commerce Enablement',
    category: 'Commerce Growth',
    industry: 'Retail / Marketplace',
    description:
      'Commerce-focused activation supporting marketplace growth, live selling, creator ecosystem, and sales-oriented content.',
    year: '2025',
  },
  {
    project: 'Growth Automation & CRM Experience',
    category: 'CRM & Automation',
    industry: 'Technology / Operations',
    description:
      'Workflow automation, CRM structure, dashboard, and reporting systems designed to support scalable growth operations.',
    year: '2026',
  },
];

const WorkPage = () => {
  return (
    <>
      <Navbar />

      <main className="work-page">
        <section className="work-hero">
          <div className="work-hero-bg"></div>
          <div className="work-hero-overlay"></div>
          <div className="work-noise"></div>

          <div className="work-container">
            <div className="work-label">
              <span className="work-line"></span>
              <span>Selected Experience</span>
            </div>

            <h1>
              Experience Shaped
              <br />
              <span>Across Campaign, Commerce & Growth</span>
            </h1>

            <p>
              A selection of campaign, commerce, digital transformation,
              automation, and growth-related experience that shapes how
              Hypernusa approaches every project today.
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
          z-index: 4;
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .work-hero {
          position: relative;
          padding: 190px 0 140px;
          overflow: hidden;
          background: #050510;
          isolation: isolate;
        }

        .work-hero-bg {
          position: absolute;
          inset: 0;
          background: url('/images/workpage-city-bg.jpg') center/cover no-repeat;
          z-index: 0;
           opacity: 0.72;

  filter:
    brightness(1.08)
    saturate(1.18)
    contrast(1.03);

  transform: scale(1.02);
        }

       .work-hero-overlay {
  background:
    linear-gradient(
      180deg,
      rgba(5, 5, 16, 0.12) 0%,
      rgba(5, 5, 16, 0.52) 100%
    ),

    linear-gradient(
      90deg,
      rgba(5, 5, 16, 0.34) 0%,
      rgba(5, 5, 16, 0.10) 50%,
      rgba(5, 5, 16, 0.34) 100%
    ),

    radial-gradient(
      circle at 18% 22%,
      rgba(102, 126, 234, 0.16),
      transparent 34%
    ),

    radial-gradient(
      circle at 86% 54%,
      rgba(236, 72, 153, 0.12),
      transparent 32%
    );
}

        .work-noise {
          position: absolute;
          inset: 0;
          z-index: 2;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E");
          opacity: 0.02;
          pointer-events: none;
          mix-blend-mode: overlay;
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
          opacity: 0.32;
          pointer-events: none;
          z-index: 2;
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
          background: linear-gradient(90deg, rgba(167, 178, 255, 0.75), transparent);
        }

        .work-label span:last-child {
          font-size: 13px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.58);
          font-weight: 700;
        }

        .work-hero h1 {
          margin: 0;
          max-width: 1120px;
          font-size: clamp(52px, 7vw, 96px);
          line-height: 0.95;
          letter-spacing: -0.06em;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.96);
          text-shadow: 0 18px 60px rgba(0, 0, 0, 0.42);
        }

        .work-hero h1 span {
          background: linear-gradient(135deg, #ffffff 0%, #a78bfa 45%, #ec4899 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .work-hero p {
          max-width: 820px;
          margin-top: 44px;
          font-size: 21px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.68);
          font-weight: 300;
          text-shadow: 0 10px 34px rgba(0, 0, 0, 0.38);
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
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.03));
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

        .work-card::before {
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

        .work-card:hover {
          transform: translateY(-8px);
          border-color: rgba(167, 178, 255, 0.3);
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.04));
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
          background: rgba(139, 92, 246, 0.12);
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
            radial-gradient(circle at 20% 20%, rgba(167, 178, 255, 0.24), transparent 34%),
            radial-gradient(circle at 80% 60%, rgba(236, 72, 153, 0.18), transparent 34%),
            linear-gradient(135deg, rgba(255,255,255,0.09), rgba(255,255,255,0.03));
          border: 1px solid rgba(167, 178, 255, 0.14);
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
          color: rgba(255,255,255,0.8);
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
          color: rgba(167, 178, 255, 0.78);
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
          color: rgba(255, 255, 255, 0.64);
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

          .work-hero-bg {
            opacity: 0.66;
            background-position: center;
            filter: brightness(1.08) saturate(1.18) contrast(1.02);
            transform: scale(1.04);
          }

          .work-hero-overlay {
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

        @media (max-width: 480px) {
          .work-hero {
            padding: 132px 0 92px;
          }

          .work-hero-bg {
            opacity: 0.72;
            background-position: center top;
            filter: brightness(1.16) saturate(1.2) contrast(1.02);
          }

          .work-hero-overlay {
            background:
              linear-gradient(
                180deg,
                rgba(5, 5, 16, 0.14) 0%,
                rgba(5, 5, 16, 0.5) 100%
              ),
              linear-gradient(
                90deg,
                rgba(5, 5, 16, 0.22) 0%,
                rgba(5, 5, 16, 0.08) 50%,
                rgba(5, 5, 16, 0.22) 100%
              );
          }

          .work-hero h1 {
            font-size: 42px;
          }

          .work-thumbnail {
            height: 160px;
          }

          .work-card h2 {
            font-size: 28px;
          }
        }
      `}</style>
    </>
  );
};

export default WorkPage;