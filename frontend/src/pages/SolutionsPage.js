import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/sections/Footer';
import {
  Megaphone,
  BarChart3,
  MonitorSmartphone,
  ShoppingBag,
  BrainCircuit,
  RefreshCcw,
  Rocket,
  Workflow,
  Users,
  Bot,
  ArrowRight,
} from 'lucide-react';

const solutionCategories = [
  {
    number: '01',
    title: 'Creative & Campaign',
    icon: Megaphone,
    services:
      'Brand communication strategy, campaign strategy, integrated campaigns, content ecosystem, social media management direction, content production direction, campaign asset development.',
  },
  {
    number: '02',
    title: 'Media & Performance',
    icon: BarChart3,
    services:
      'Media planning direction, performance marketing, ads management, campaign amplification, influencer/KOL marketing, campaign management, media analytics & reporting.',
  },
  {
    number: '03',
    title: 'Experience & Tech',
    icon: MonitorSmartphone,
    services:
      'Website development, landing page, microsite, digital experience design, SEO foundation, CRM setup, WhatsApp automation, lead capture system, reporting dashboard.',
  },
  {
    number: '04',
    title: 'Commerce Growth',
    icon: ShoppingBag,
    services:
      'Live commerce direction, TikTok/Shopee Live support, affiliate growth strategy, marketplace activation, creator/UGC direction, product content, commerce campaign calendar.',
  },
  {
    number: '05',
    title: 'Data & AI Operations',
    icon: BrainCircuit,
    services:
      'AI customer service assistant, AI sales assistant, AI FAQ assistant, lead qualification automation, automated reporting, internal knowledge assistant, CRM & data structuring.',
  },
];

const engagementModels = [
  {
    title: 'Growth Activation Loop',
    icon: RefreshCcw,
    description:
      'Monthly growth partnership for brands that need consistent strategy, content system, media support, reporting, and optimization.',
  },
  {
    title: 'Integrated Campaign / Launch Kit',
    icon: Rocket,
    description:
      'Campaign sprint for product launch, brand activation, market entry, or digital campaign rollout.',
  },
  {
    title: 'Web & Automation Sprint',
    icon: Workflow,
    description:
      'Scope-based sprint for website, landing page, CRM, automation, dashboard, and AI workflow.',
  },
  {
    title: 'Commerce & Affiliate Growth',
    icon: Users,
    description:
      'Commerce activation for brands growing through live commerce, affiliate, marketplace, and creator-led conversion.',
  },
  {
    title: 'AI-Powered Growth Operations',
    icon: Bot,
    description:
      'AI and automation setup for lead qualification, reporting, customer service, sales support, and workflow acceleration.',
  },
];

const SolutionsPage = () => {
  return (
    <>
      <Navbar />

      <main className="solutions-page">
        <section className="solutions-hero">
          <div className="page-glow page-glow-one"></div>
          <div className="page-glow page-glow-two"></div>

          <div className="page-container">
            <div className="page-label">
              <span className="page-line"></span>
              <span>Solutions</span>
            </div>

            <h1>
              Connected Solutions
              <br />
              <span>for Brand Growth</span>
            </h1>

            <p>
              From campaign strategy and media performance to digital experience,
              commerce growth, and AI-powered operations, AMN builds connected
              systems that help brands move with clarity.
            </p>
          </div>
        </section>

        <section className="solution-philosophy">
          <div className="page-container philosophy-grid">
            <h2>
              Not Just Services.
              <br />
              <span>A Connected Growth System.</span>
            </h2>

            <p>
              Growth does not happen from one channel alone. It needs strategy,
              creative execution, media, commerce, technology, data, and
              operations working in the same direction.
            </p>
          </div>
        </section>

        <section className="solution-categories">
          <div className="page-container">
            <div className="section-header">
              <div className="page-label">
                <span className="page-line"></span>
                <span>Solution Categories</span>
              </div>

              <h2>
                Capabilities Built
                <br />
                <span>to Move Brands Forward</span>
              </h2>
            </div>

            <div className="categories-grid">
              {solutionCategories.map((item) => {
                const Icon = item.icon;

                return (
                  <article className="solution-card" key={item.title}>
                    <div className="card-glow"></div>

                    <div className="card-top">
                      <span>{item.number}</span>
                      <div className="card-icon">
                        <Icon size={24} strokeWidth={1.7} />
                      </div>
                    </div>

                    <h3>{item.title}</h3>
                    <p>{item.services}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="engagement-models">
          <div className="page-container">
            <div className="section-header">
              <div className="page-label">
                <span className="page-line"></span>
                <span>Engagement Models</span>
              </div>

              <h2>
                Flexible Ways
                <br />
                <span>to Build Growth Together</span>
              </h2>
            </div>

            <div className="models-grid">
              {engagementModels.map((item) => {
                const Icon = item.icon;

                return (
                  <article className="model-card" key={item.title}>
                    <div className="model-icon">
                      <Icon size={22} strokeWidth={1.7} />
                    </div>

                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="solutions-cta-section">
          <div className="page-container cta-box">
            <h2>
              Ready to connect your next
              <br />
              growth system?
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
        .solutions-page {
          min-height: 100vh;
          background: #050510;
          color: #ffffff;
          overflow: hidden;
        }

        .page-container {
          position: relative;
          z-index: 3;
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .solutions-hero {
          position: relative;
          padding: 180px 0 130px;
          background:
            radial-gradient(circle at 20% 20%, rgba(102, 126, 234, 0.14), transparent 32%),
            radial-gradient(circle at 88% 50%, rgba(236, 72, 153, 0.1), transparent 30%),
            linear-gradient(180deg, #07071a 0%, #050510 100%);
          overflow: hidden;
        }

        .solutions-hero::before,
        .solution-categories::before,
        .engagement-models::before {
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

        .page-label {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 32px;
        }

        .page-line {
          width: 52px;
          height: 1px;
          background: linear-gradient(90deg, rgba(167, 178, 255, 0.7), transparent);
        }

        .page-label span:last-child {
          font-size: 13px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.5);
          font-weight: 600;
        }

        .solutions-hero h1,
        .section-header h2,
        .philosophy-grid h2,
        .cta-box h2 {
          margin: 0;
          font-size: clamp(52px, 7vw, 96px);
          line-height: 0.95;
          letter-spacing: -0.06em;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.96);
        }

        .solutions-hero h1 span,
        .section-header h2 span,
        .philosophy-grid h2 span {
          background: linear-gradient(135deg, #ffffff 0%, #a78bfa 45%, #ec4899 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .solutions-hero p {
          max-width: 800px;
          margin-top: 44px;
          font-size: 21px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.64);
          font-weight: 300;
        }

        .solution-philosophy {
          padding: 150px 0;
          background: linear-gradient(180deg, #050510 0%, #080818 100%);
        }

        .philosophy-grid {
          display: grid;
          grid-template-columns: 1fr 0.85fr;
          gap: 80px;
          align-items: start;
        }

        .philosophy-grid p {
          margin: 12px 0 0;
          font-size: 22px;
          line-height: 1.85;
          color: rgba(255, 255, 255, 0.66);
          font-weight: 300;
        }

        .solution-categories,
        .engagement-models {
          position: relative;
          padding: 160px 0;
          overflow: hidden;
          background:
            radial-gradient(circle at 16% 16%, rgba(102, 126, 234, 0.1), transparent 30%),
            radial-gradient(circle at 90% 70%, rgba(236, 72, 153, 0.08), transparent 32%),
            linear-gradient(180deg, #080818 0%, #050510 100%);
        }

        .engagement-models {
          background:
            radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.1), transparent 30%),
            linear-gradient(180deg, #050510 0%, #080818 100%);
        }

        .section-header {
          max-width: 900px;
          margin-bottom: 76px;
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 20px;
        }

        .solution-card {
          position: relative;
          min-height: 360px;
          padding: 30px;
          border-radius: 26px;
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

        .solution-card:nth-child(1),
        .solution-card:nth-child(2),
        .solution-card:nth-child(3) {
          grid-column: span 2;
        }

        .solution-card:nth-child(4),
        .solution-card:nth-child(5) {
          grid-column: span 3;
        }

        .solution-card::before,
        .model-card::before {
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

        .solution-card:hover,
        .model-card:hover {
          transform: translateY(-8px);
          border-color: rgba(167, 178, 255, 0.28);
        }

        .solution-card:hover::before,
        .model-card:hover::before {
          opacity: 1;
        }

        .card-glow {
          position: absolute;
          width: 160px;
          height: 160px;
          top: -80px;
          right: -60px;
          border-radius: 999px;
          background: rgba(139, 92, 246, 0.1);
          filter: blur(42px);
        }

        .card-top {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 70px;
        }

        .card-top span {
          font-size: 13px;
          letter-spacing: 0.18em;
          color: rgba(167, 178, 255, 0.72);
          font-weight: 700;
        }

        .card-icon,
        .model-icon {
          width: 54px;
          height: 54px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #a7b2ff;
          background: rgba(167, 178, 255, 0.09);
          border: 1px solid rgba(167, 178, 255, 0.14);
        }

        .solution-card h3,
        .model-card h3 {
          position: relative;
          z-index: 2;
          margin: 0 0 18px;
          font-size: 30px;
          line-height: 1.08;
          letter-spacing: -0.045em;
          color: #ffffff;
          font-weight: 400;
        }

        .solution-card p,
        .model-card p {
          position: relative;
          z-index: 2;
          margin: 0;
          font-size: 15px;
          line-height: 1.78;
          color: rgba(255, 255, 255, 0.58);
        }

        .models-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 18px;
        }

        .model-card {
          position: relative;
          min-height: 320px;
          padding: 28px;
          border-radius: 24px;
          overflow: hidden;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.055), rgba(255, 255, 255, 0.025));
          border: 1px solid rgba(167, 178, 255, 0.12);
          transition:
            transform 0.45s cubic-bezier(0.4, 0, 0.2, 1),
            border-color 0.45s ease;
        }

        .model-icon {
          position: relative;
          z-index: 2;
          margin-bottom: 76px;
        }

        .model-card h3 {
          font-size: 24px;
        }

        .solutions-cta-section {
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

        @media (max-width: 1100px) {
          .models-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 980px) {
          .philosophy-grid,
          .categories-grid {
            grid-template-columns: 1fr;
          }

          .solution-card:nth-child(n) {
            grid-column: auto;
          }
        }

        @media (max-width: 768px) {
          .page-container {
            padding: 0 24px;
          }

          .solutions-hero {
            padding: 150px 0 100px;
          }

          .solution-philosophy,
          .solution-categories,
          .engagement-models,
          .solutions-cta-section {
            padding: 110px 0;
          }

          .solutions-hero h1,
          .section-header h2,
          .philosophy-grid h2 {
            font-size: 54px;
            line-height: 1;
          }

          .solutions-hero p,
          .philosophy-grid p {
            font-size: 17px;
            line-height: 1.8;
          }

          .solution-card,
          .model-card {
            min-height: auto;
            padding: 26px;
          }

          .card-top,
          .model-icon {
            margin-bottom: 52px;
          }

          .models-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default SolutionsPage;