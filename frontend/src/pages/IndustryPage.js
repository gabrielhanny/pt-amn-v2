import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import industriesData from '../data/industriesData';

const IndustryPage = () => {
  const { slug } = useParams();
  const industry = industriesData[slug];

  if (!industry) {
    return (
      <main className="industry-page">
        <section className="industry-not-found">
          <p className="eyebrow">Industry Not Found</p>
          <h1>Page Not Available</h1>
          <p>The industry page you are looking for does not exist.</p>

          <Link to="/" className="back-link">
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </section>

        <IndustryStyles />
      </main>
    );
  }

  const capabilities = [
    'Brand Strategy',
    'Digital Campaign',
    'Website Experience',
    'Automation & AI',
  ];

  return (
    <main className="industry-page">
      <section className="industry-hero">
        <div className="industry-background-glow" />

        <div className="industry-container">
          <Link to="/" className="back-link">
            <ArrowLeft size={18} />
            Back to AMN
          </Link>

          <div className="industry-grid">
            <div className="industry-copy">
              <p className="eyebrow">Industries / {industry.title}</p>

              <h1>{industry.headline}</h1>

              <p className="industry-description">{industry.description}</p>

              <div className="capability-list">
                {capabilities.map((item) => (
                  <div className="capability-item" key={item}>
                    <CheckCircle2 size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a href="/#contact" className="industry-cta">
                Start a Conversation
                <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="industry-visual">
              <img src={industry.image} alt={industry.title} />
              <div className="visual-overlay" />
            </div>
          </div>
        </div>
      </section>

      <section className="industry-section">
        <div className="industry-container">
          <p className="eyebrow">Our Approach</p>

          <div className="approach-grid">
            <h2>Built for brands ready to move forward.</h2>

            <p>
              AMN designs digital experiences that combine strategic thinking,
              creative execution, technology, and scalable systems. This page is
              prepared as an industry placeholder and can evolve into real case
              studies as AMN grows with future partners.
            </p>
          </div>
        </div>
      </section>

      <section className="industry-section industry-dark-card-section">
        <div className="industry-container">
          <div className="industry-dark-card">
            <p className="eyebrow">Future Case Study Space</p>
            <h2>Designed as a flexible industry showcase.</h2>
            <p>
              As AMN builds more partnerships, this section can be updated with
              selected work, campaign outcomes, testimonials, and real growth
              stories from this industry.
            </p>

            <a href="/#work" className="industry-secondary-link">
              View What We Build
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <IndustryStyles />
    </main>
  );
};

const IndustryStyles = () => (
  <style jsx="true">{`
    .industry-page {
      min-height: 100vh;
      background: #07071a;
      color: #ffffff;
      overflow: hidden;
    }

    .industry-container {
      width: min(1180px, calc(100% - 48px));
      margin: 0 auto;
      position: relative;
      z-index: 2;
    }

    .industry-hero {
      position: relative;
      min-height: 100vh;
      padding: 130px 0 90px;
      background:
        radial-gradient(circle at 15% 20%, rgba(102, 126, 234, 0.22), transparent 34%),
        radial-gradient(circle at 88% 30%, rgba(236, 72, 153, 0.16), transparent 30%),
        linear-gradient(180deg, #08081c 0%, #07071a 100%);
    }

    .industry-background-glow {
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba(167, 178, 255, 0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(167, 178, 255, 0.05) 1px, transparent 1px);
      background-size: 88px 88px;
      mask-image: linear-gradient(to bottom, black 0%, transparent 90%);
      opacity: 0.45;
    }

    .back-link {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      color: rgba(255, 255, 255, 0.7);
      text-decoration: none;
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 52px;
      transition: color 0.3s ease, transform 0.3s ease;
    }

    .back-link:hover {
      color: #ffffff;
      transform: translateX(-4px);
    }

    .industry-grid {
      display: grid;
      grid-template-columns: 1fr 0.9fr;
      gap: 70px;
      align-items: center;
    }

    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: #a7b2ff;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      margin: 0 0 22px;
    }

    .eyebrow::before {
      content: '';
      width: 6px;
      height: 6px;
      border-radius: 999px;
      background: #a7b2ff;
      box-shadow: 0 0 18px rgba(167, 178, 255, 0.9);
    }

    .industry-copy h1 {
      max-width: 760px;
      font-size: clamp(48px, 7vw, 96px);
      line-height: 0.96;
      letter-spacing: -0.06em;
      margin: 0 0 28px;
      background: linear-gradient(135deg, #ffffff 0%, #a78bfa 52%, #ec4899 100%);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }

    .industry-description {
      max-width: 620px;
      color: rgba(255, 255, 255, 0.68);
      font-size: 18px;
      line-height: 1.8;
      margin: 0 0 34px;
    }

    .capability-list {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 14px;
      max-width: 560px;
      margin-bottom: 38px;
    }

    .capability-item {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 14px 16px;
      border-radius: 14px;
      border: 1px solid rgba(167, 178, 255, 0.14);
      background: rgba(255, 255, 255, 0.04);
      color: rgba(255, 255, 255, 0.78);
      font-size: 14px;
    }

    .capability-item svg {
      color: #a78bfa;
    }

    .industry-cta,
    .industry-secondary-link {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      color: #ffffff;
      text-decoration: none;
      font-weight: 700;
      padding: 15px 22px;
      border-radius: 14px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      box-shadow: 0 14px 40px rgba(102, 126, 234, 0.28);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .industry-cta:hover,
    .industry-secondary-link:hover {
      transform: translateY(-3px);
      box-shadow: 0 22px 55px rgba(102, 126, 234, 0.42);
    }

    .industry-visual {
      position: relative;
      overflow: hidden;
      border-radius: 34px;
      border: 1px solid rgba(167, 178, 255, 0.18);
      background: rgba(255, 255, 255, 0.04);
      box-shadow:
        0 28px 80px rgba(0, 0, 0, 0.42),
        0 0 80px rgba(124, 58, 237, 0.16);
    }

    .industry-visual img {
      display: block;
      width: 100%;
      height: min(70vh, 720px);
      object-fit: cover;
      transform: scale(1.01);
    }

    .visual-overlay {
      position: absolute;
      inset: 0;
      background:
        linear-gradient(180deg, transparent 0%, rgba(7, 7, 26, 0.18) 100%),
        radial-gradient(circle at 70% 20%, rgba(255, 255, 255, 0.16), transparent 34%);
      pointer-events: none;
    }

    .industry-section {
      position: relative;
      padding: 100px 0;
      background: #07071a;
    }

    .approach-grid {
      display: grid;
      grid-template-columns: 0.8fr 1fr;
      gap: 70px;
      align-items: start;
    }

    .approach-grid h2,
    .industry-dark-card h2 {
      font-size: clamp(34px, 5vw, 64px);
      line-height: 1.02;
      letter-spacing: -0.05em;
      margin: 0;
    }

    .approach-grid p,
    .industry-dark-card p {
      color: rgba(255, 255, 255, 0.66);
      font-size: 18px;
      line-height: 1.85;
      margin: 0;
    }

    .industry-dark-card-section {
      padding-top: 20px;
    }

    .industry-dark-card {
      position: relative;
      overflow: hidden;
      border-radius: 34px;
      border: 1px solid rgba(167, 178, 255, 0.16);
      background:
        radial-gradient(circle at 20% 20%, rgba(102, 126, 234, 0.18), transparent 36%),
        radial-gradient(circle at 90% 70%, rgba(236, 72, 153, 0.16), transparent 34%),
        rgba(255, 255, 255, 0.04);
      padding: 56px;
    }

    .industry-dark-card h2 {
      max-width: 760px;
      margin-bottom: 24px;
    }

    .industry-dark-card p {
      max-width: 720px;
      margin-bottom: 34px;
    }

    .industry-not-found {
      min-height: 100vh;
      display: grid;
      place-content: center;
      text-align: center;
      padding: 40px;
      background: #07071a;
    }

    .industry-not-found h1 {
      font-size: clamp(40px, 7vw, 80px);
      margin: 0 0 18px;
    }

    .industry-not-found p {
      color: rgba(255, 255, 255, 0.65);
      margin-bottom: 28px;
    }

    @media (max-width: 980px) {
      .industry-grid,
      .approach-grid {
        grid-template-columns: 1fr;
      }

      .industry-hero {
        padding-top: 110px;
      }

      .industry-visual img {
        height: 560px;
      }
    }

    @media (max-width: 640px) {
      .industry-container {
        width: min(100% - 32px, 1180px);
      }

      .industry-copy h1 {
        font-size: 46px;
      }

      .capability-list {
        grid-template-columns: 1fr;
      }

      .industry-visual {
        border-radius: 24px;
      }

      .industry-visual img {
        height: 460px;
      }

      .industry-dark-card {
        padding: 30px;
        border-radius: 24px;
      }
    }
  `}</style>
);

export default IndustryPage;