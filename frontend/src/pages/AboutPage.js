import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/sections/Footer';
import { Target, Layers3, Network, ShieldCheck, ArrowRight } from 'lucide-react';

const differences = [
  {
    title: 'Strategy-Led',
    description:
      'We start from brand objective, business context, audience movement, and growth logic.',
    icon: Target,
  },
  {
    title: 'Creative + Commerce + Tech Integrator',
    description:
      'We connect campaign, content, media, commerce, web, CRM, automation, and reporting into one growth direction.',
    icon: Layers3,
  },
  {
    title: 'System-Driven',
    description:
      'We work with scope clarity, project governance, timeline, quality gate, and delivery accountability.',
    icon: Network,
  },
  {
    title: 'Feasibility-Based',
    description:
      'Every project is reviewed based on scope, delivery capacity, cost structure, timeline, and commercial feasibility.',
    icon: ShieldCheck,
  },
];

const AboutPage = () => {
  return (
    <>
      <Navbar />

      <main className="about-page">
        <section className="about-hero">
          <div className="about-glow about-glow-one"></div>
          <div className="about-glow about-glow-two"></div>

          <div className="about-container">
            <div className="about-label">
              <span className="about-line"></span>
              <span>About AMN</span>
            </div>

            <h1>
              A Growth Activation Agency
              <br />
              <span>Built for the Next Business Move</span>
            </h1>

            <p>
              AMN connects strategy, creative execution, media, commerce,
              technology, and AI-powered operations to help brands move from
              visibility to measurable growth.
            </p>
          </div>
        </section>

        <section className="who-we-are">
          <div className="about-container who-grid">
            <div>
              <div className="about-label">
                <span className="about-line"></span>
                <span>Who We Are</span>
              </div>

              <h2>We Are AMN</h2>
            </div>

            <p>
              AMN is a growth activation agency built to help brands create
              connected systems for campaign, content, media, commerce, digital
              experience, automation, and reporting.
            </p>
          </div>
        </section>

        <section className="different-section">
          <div className="about-container">
            <div className="section-header">
              <div className="about-label">
                <span className="about-line"></span>
                <span>What Makes AMN Different</span>
              </div>

              <h2>
                Strategy-Led,
                <br />
                <span>System-Driven, Feasibility-Based</span>
              </h2>
            </div>

            <div className="difference-grid">
              {differences.map((item) => {
                const Icon = item.icon;

                return (
                  <article className="difference-card" key={item.title}>
                    <div className="difference-glow"></div>

                    <div className="difference-icon">
                      <Icon size={24} strokeWidth={1.7} />
                    </div>

                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="operating-model">
          <div className="about-container operating-box">
            <div className="about-label">
              <span className="about-line"></span>
              <span>Operating Model</span>
            </div>

            <h2>
              Built as a
              <br />
              <span>Growth Engine</span>
            </h2>

            <p>
              AMN holds the strategy, client relationship, scope lock, project
              governance, quality standard, reporting, and commercial structure.
              Delivery can be supported by internal or external partners based
              on project scope.
            </p>
          </div>
        </section>

        <section className="about-cta">
          <div className="about-container cta-box">
            <h2>
              Let&apos;s Build the Next
              <br />
              Growth Move Together
            </h2>

            <a href="/lets-talk" className="cta-button">
              Let&apos;s Talk
              <ArrowRight size={20} />
            </a>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx="true">{`
        .about-page {
          min-height: 100vh;
          background: #050510;
          color: #ffffff;
          overflow: hidden;
        }

        .about-container {
          position: relative;
          z-index: 3;
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .about-hero {
          position: relative;
          padding: 180px 0 130px;
          background:
            radial-gradient(circle at 20% 20%, rgba(102, 126, 234, 0.14), transparent 32%),
            radial-gradient(circle at 88% 50%, rgba(236, 72, 153, 0.1), transparent 30%),
            linear-gradient(180deg, #07071a 0%, #050510 100%);
          overflow: hidden;
        }

        .about-hero::before,
        .different-section::before,
        .operating-model::before {
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

        .about-label {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 32px;
        }

        .about-line {
          width: 52px;
          height: 1px;
          background: linear-gradient(90deg, rgba(167, 178, 255, 0.7), transparent);
        }

        .about-label span:last-child {
          font-size: 13px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.5);
          font-weight: 600;
        }

        .about-hero h1,
        .section-header h2,
        .who-grid h2,
        .operating-box h2,
        .cta-box h2 {
          margin: 0;
          font-size: clamp(52px, 7vw, 96px);
          line-height: 0.95;
          letter-spacing: -0.06em;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.96);
        }

        .about-hero h1 span,
        .section-header h2 span,
        .operating-box h2 span {
          background: linear-gradient(135deg, #ffffff 0%, #a78bfa 45%, #ec4899 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .about-hero p {
          max-width: 820px;
          margin-top: 44px;
          font-size: 21px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.64);
          font-weight: 300;
        }

        .who-we-are {
          padding: 150px 0;
          background: linear-gradient(180deg, #050510 0%, #080818 100%);
        }

        .who-grid {
          display: grid;
          grid-template-columns: 0.8fr 1fr;
          gap: 80px;
          align-items: start;
        }

        .who-grid p {
          margin: 12px 0 0;
          font-size: 22px;
          line-height: 1.85;
          color: rgba(255, 255, 255, 0.66);
          font-weight: 300;
        }

        .different-section {
          position: relative;
          padding: 160px 0;
          background:
            radial-gradient(circle at 16% 16%, rgba(102, 126, 234, 0.1), transparent 30%),
            radial-gradient(circle at 90% 70%, rgba(236, 72, 153, 0.08), transparent 32%),
            linear-gradient(180deg, #080818 0%, #050510 100%);
          overflow: hidden;
        }

        .section-header {
          max-width: 920px;
          margin-bottom: 76px;
        }

        .difference-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .difference-card {
          position: relative;
          min-height: 330px;
          padding: 32px;
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

        .difference-card::before {
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

        .difference-card:hover {
          transform: translateY(-8px);
          border-color: rgba(167, 178, 255, 0.28);
        }

        .difference-card:hover::before {
          opacity: 1;
        }

        .difference-glow {
          position: absolute;
          width: 160px;
          height: 160px;
          top: -80px;
          right: -60px;
          border-radius: 999px;
          background: rgba(139, 92, 246, 0.1);
          filter: blur(42px);
        }

        .difference-icon {
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
        }

        .difference-card h3 {
          position: relative;
          z-index: 2;
          margin: 0 0 18px;
          font-size: 30px;
          line-height: 1.08;
          letter-spacing: -0.045em;
          color: #ffffff;
          font-weight: 400;
        }

        .difference-card p {
          position: relative;
          z-index: 2;
          margin: 0;
          font-size: 15px;
          line-height: 1.78;
          color: rgba(255, 255, 255, 0.58);
        }

        .operating-model {
          position: relative;
          padding: 150px 0;
          background:
            radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.12), transparent 32%),
            linear-gradient(180deg, #050510 0%, #080818 100%);
          overflow: hidden;
        }

        .operating-box {
          padding: 72px 40px;
          border-radius: 34px;
          background: linear-gradient(145deg, rgba(255,255,255,0.055), rgba(255,255,255,0.025));
          border: 1px solid rgba(167, 178, 255, 0.12);
          box-shadow: 0 24px 70px rgba(0,0,0,0.22);
        }

        .operating-box p {
          max-width: 850px;
          margin-top: 42px;
          font-size: 20px;
          line-height: 1.85;
          color: rgba(255, 255, 255, 0.64);
          font-weight: 300;
        }

        .about-cta {
          padding: 150px 0;
          background: linear-gradient(180deg, #080818 0%, #050510 100%);
        }

        .cta-box {
          text-align: center;
        }

        .cta-box h2 {
          font-size: clamp(48px, 6vw, 82px);
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-top: 46px;
          padding: 18px 34px;
          border-radius: 16px;
          text-decoration: none;
          color: #ffffff;
          font-size: 15px;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          box-shadow: 0 16px 48px rgba(102, 126, 234, 0.3);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .cta-button:hover {
          transform: translateY(-4px);
          box-shadow: 0 24px 60px rgba(102, 126, 234, 0.42);
        }

        .about-glow {
          position: absolute;
          border-radius: 999px;
          filter: blur(120px);
          pointer-events: none;
          z-index: 1;
        }

        .about-glow-one {
          width: 360px;
          height: 360px;
          background: rgba(102, 126, 234, 0.12);
          top: 120px;
          left: 8%;
        }

        .about-glow-two {
          width: 300px;
          height: 300px;
          background: rgba(236, 72, 153, 0.08);
          bottom: 140px;
          right: 8%;
        }

        @media (max-width: 980px) {
          .who-grid,
          .difference-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .about-container {
            padding: 0 24px;
          }

          .about-hero {
            padding: 150px 0 100px;
          }

          .who-we-are,
          .different-section,
          .operating-model,
          .about-cta {
            padding: 110px 0;
          }

          .about-hero h1,
          .section-header h2,
          .who-grid h2,
          .operating-box h2 {
            font-size: 54px;
            line-height: 1;
          }

          .about-hero p,
          .who-grid p,
          .operating-box p {
            font-size: 17px;
            line-height: 1.8;
          }

          .difference-card {
            min-height: auto;
            padding: 26px;
          }

          .difference-icon {
            margin-bottom: 52px;
          }

          .operating-box {
            padding: 34px 26px;
            border-radius: 26px;
          }
        }
      `}</style>
    </>
  );
};

export default AboutPage;