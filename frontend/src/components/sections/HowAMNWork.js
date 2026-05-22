import React from 'react';
import { Target, Network, ShieldCheck } from 'lucide-react';

const pillars = [
  {
    number: '01',
    title: 'Strategy-Led',
    description:
      'Every activation starts from business objective, audience movement, market context, and growth logic.',
    icon: Target,
  },
  {
    number: '02',
    title: 'System-Driven',
    description:
      'We connect campaign, content, media, web, commerce, automation, and reporting into one working system.',
    icon: Network,
  },
  {
    number: '03',
    title: 'Feasibility-Based',
    description:
      'Every project is scoped with clear deliverables, timeline, cost structure, delivery capacity, and execution governance.',
    icon: ShieldCheck,
  },
];

const HowAMNWork = () => {
  return (
    <section className="how-work" data-testid="how-amn-work">
      <div className="how-glow how-glow-one"></div>
      <div className="how-glow how-glow-two"></div>

      <div className="how-container">
        <div className="how-header">
          <div className="how-label">
            <span className="how-line"></span>
            <span>How AMN Work</span>
          </div>

          <h2 className="how-title">
            Built for Strategy.
            <br />
            <span>Governed for Execution.</span>
          </h2>
        </div>

        <div className="pillar-grid">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <article className="pillar-card" key={pillar.title}>
                <div className="pillar-card-glow"></div>

                <div className="pillar-top">
                  <span>{pillar.number}</span>

                  <div className="pillar-icon">
                    <Icon size={24} strokeWidth={1.7} />
                  </div>
                </div>

                <div className="pillar-content">
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <style jsx="true">{`
        .how-work {
          position: relative;
          padding: 170px 0;
          overflow: hidden;
          background:
            radial-gradient(circle at 20% 20%, rgba(102, 126, 234, 0.1), transparent 30%),
            radial-gradient(circle at 90% 70%, rgba(139, 92, 246, 0.12), transparent 34%),
            linear-gradient(180deg, #080818 0%, #050510 100%);
          isolation: isolate;
        }

        .how-work::before {
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

        .how-container {
          position: relative;
          z-index: 3;
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .how-header {
          max-width: 900px;
          margin-bottom: 74px;
        }

        .how-label {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 30px;
        }

        .how-line {
          width: 52px;
          height: 1px;
          background: linear-gradient(90deg, rgba(167, 178, 255, 0.7), transparent);
        }

        .how-label span:last-child {
          font-size: 13px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.5);
          font-weight: 600;
        }

        .how-title {
          margin: 0;
          font-size: clamp(52px, 7vw, 92px);
          line-height: 0.95;
          letter-spacing: -0.06em;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.96);
        }

        .how-title span {
          background: linear-gradient(135deg, #ffffff 0%, #a78bfa 45%, #ec4899 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .pillar-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .pillar-card {
          position: relative;
          min-height: 380px;
          padding: 34px;
          border-radius: 28px;
          overflow: hidden;
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.025));
          border: 1px solid rgba(167, 178, 255, 0.12);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.05),
            0 24px 60px rgba(0, 0, 0, 0.2);
          transition:
            transform 0.45s cubic-bezier(0.4, 0, 0.2, 1),
            border-color 0.45s ease,
            background 0.45s ease;
        }

        .pillar-card::before {
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

        .pillar-card:hover {
          transform: translateY(-8px);
          border-color: rgba(167, 178, 255, 0.28);
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.035));
        }

        .pillar-card:hover::before {
          opacity: 1;
        }

        .pillar-card-glow {
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

        .pillar-card:hover .pillar-card-glow {
          opacity: 1;
        }

        .pillar-top {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 118px;
        }

        .pillar-top span {
          font-size: 13px;
          letter-spacing: 0.18em;
          color: rgba(167, 178, 255, 0.72);
          font-weight: 700;
        }

        .pillar-icon {
          width: 54px;
          height: 54px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #a7b2ff;
          background: rgba(167, 178, 255, 0.09);
          border: 1px solid rgba(167, 178, 255, 0.14);
          transition: transform 0.45s ease, background 0.45s ease, color 0.45s ease;
        }

        .pillar-card:hover .pillar-icon {
          transform: rotate(-8deg) scale(1.05);
          background: rgba(167, 178, 255, 0.16);
          color: #ffffff;
        }

        .pillar-content {
          position: relative;
          z-index: 2;
        }

        .pillar-content h3 {
          margin: 0 0 18px;
          font-size: 34px;
          line-height: 1.05;
          letter-spacing: -0.045em;
          color: #ffffff;
          font-weight: 400;
        }

        .pillar-content p {
          margin: 0;
          font-size: 16px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.6);
        }

        .how-glow {
          position: absolute;
          border-radius: 999px;
          filter: blur(120px);
          pointer-events: none;
          z-index: 1;
        }

        .how-glow-one {
          width: 340px;
          height: 340px;
          background: rgba(102, 126, 234, 0.12);
          top: 120px;
          left: 8%;
        }

        .how-glow-two {
          width: 300px;
          height: 300px;
          background: rgba(236, 72, 153, 0.08);
          bottom: 120px;
          right: 8%;
        }

        @media (max-width: 980px) {
          .pillar-grid {
            grid-template-columns: 1fr;
          }

          .pillar-card {
            min-height: auto;
          }

          .pillar-top {
            margin-bottom: 90px;
          }
        }

        @media (max-width: 768px) {
          .how-work {
            padding: 120px 0;
          }

          .how-container {
            padding: 0 24px;
          }

          .how-title {
            font-size: 54px;
            line-height: 1;
          }

          .pillar-card {
            padding: 28px;
          }

          .pillar-content h3 {
            font-size: 30px;
          }

          .pillar-content p {
            font-size: 15px;
          }
        }
      `}</style>
    </section>
  );
};

export default HowAMNWork;