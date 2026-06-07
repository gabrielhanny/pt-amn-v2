import React from 'react';
import { Target, Network, BarChart3 } from 'lucide-react';

const pillars = [
  {
    number: '01',
    title: 'Growth First',
    description:
      'Every engagement begins with business objectives, customer movement, market realities, and growth priorities.',
    icon: Target,
  },
  {
    number: '02',
    title: 'Connected Systems',
    description:
      'Strategy, content, media, commerce, technology, automation, and reporting work as one growth ecosystem.',
    icon: Network,
  },
  {
    number: '03',
    title: 'Measurable Execution',
    description:
      'Every initiative is tracked through clear deliverables, performance indicators, and optimization cycles.',
    icon: BarChart3,
  },
];

const HowAMNWork = () => {
  return (
    <section className="how-work" data-testid="how-amn-work">
      <div className="how-bg"></div>
      <div className="how-overlay"></div>
      <div className="how-noise"></div>

      <div className="how-glow how-glow-one"></div>
      <div className="how-glow how-glow-two"></div>

      <div className="how-container">
        <div className="how-header">
          <div className="how-label">
            <span className="how-line"></span>
            <span>Our Working Approach</span>
          </div>

          <h2 className="how-title">
            Designed for Growth.
            <br />
            <span>Built for Execution.</span>
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
          background: #080818;
          isolation: isolate;
        }

        .how-bg {
          position: absolute;
          inset: 0;
          background: url('/images/how-city-bg.jpg') center/cover no-repeat;
          z-index: 0;
          opacity: 0.42;
          filter: brightness(0.88) saturate(1.18) contrast(1.04);
          transform: scale(1.02);
        }

        .how-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            linear-gradient(
              180deg,
              rgba(8, 8, 24, 0.28) 0%,
              rgba(8, 8, 24, 0.76) 100%
            ),
            linear-gradient(
              90deg,
              rgba(8, 8, 24, 0.56) 0%,
              rgba(8, 8, 24, 0.18) 50%,
              rgba(8, 8, 24, 0.56) 100%
            ),
            radial-gradient(
              circle at 18% 20%,
              rgba(102, 126, 234, 0.16),
              transparent 34%
            ),
            radial-gradient(
              circle at 88% 62%,
              rgba(236, 72, 153, 0.14),
              transparent 34%
            );
        }

        .how-noise {
          position: absolute;
          inset: 0;
          z-index: 2;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E");
          opacity: 0.035;
          pointer-events: none;
          mix-blend-mode: overlay;
        }

        .how-container {
          position: relative;
          z-index: 4;
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
          background: linear-gradient(90deg, rgba(167, 178, 255, 0.75), transparent);
        }

        .how-label span:last-child {
          font-size: 13px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.58);
          font-weight: 700;
        }

        .how-title {
          margin: 0;
          font-size: clamp(52px, 7vw, 92px);
          line-height: 0.95;
          letter-spacing: -0.06em;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.96);
          text-shadow: 0 18px 60px rgba(0, 0, 0, 0.42);
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

        .pillar-card::before {
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

        .pillar-card:hover {
          transform: translateY(-8px);
          border-color: rgba(167, 178, 255, 0.3);
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.04));
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
          background: rgba(139, 92, 246, 0.12);
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
          margin-bottom: 108px;
        }

        .pillar-top span {
          font-size: 13px;
          letter-spacing: 0.18em;
          color: rgba(167, 178, 255, 0.78);
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
          background: rgba(167, 178, 255, 0.1);
          border: 1px solid rgba(167, 178, 255, 0.16);
          transition: transform 0.45s ease, background 0.45s ease, color 0.45s ease;
        }

        .pillar-card:hover .pillar-icon {
          transform: rotate(-8deg) scale(1.05);
          background: rgba(167, 178, 255, 0.18);
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
          color: rgba(255, 255, 255, 0.64);
        }

        .how-glow {
          position: absolute;
          border-radius: 999px;
          filter: blur(120px);
          pointer-events: none;
          z-index: 2;
        }

        .how-glow-one {
          width: 340px;
          height: 340px;
          background: rgba(102, 126, 234, 0.14);
          top: 120px;
          left: 8%;
        }

        .how-glow-two {
          width: 300px;
          height: 300px;
          background: rgba(236, 72, 153, 0.1);
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
            margin-bottom: 72px;
          }
        }

        @media (max-width: 768px) {
          .how-work {
            padding: 120px 0;
          }

          .how-bg {
            opacity: 0.66;
            background-position: center;
            filter: brightness(1.08) saturate(1.18) contrast(1.02);
            transform: scale(1.04);
          }

          .how-overlay {
            background:
              linear-gradient(
                180deg,
                rgba(8, 8, 24, 0.18) 0%,
                rgba(8, 8, 24, 0.56) 100%
              ),
              linear-gradient(
                90deg,
                rgba(8, 8, 24, 0.28) 0%,
                rgba(8, 8, 24, 0.1) 50%,
                rgba(8, 8, 24, 0.28) 100%
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

          .how-container {
            padding: 0 24px;
          }

          .how-header {
            margin-bottom: 56px;
          }

          .how-label {
            margin-bottom: 26px;
          }

          .how-label span:last-child {
            font-size: 11px;
          }

          .how-title {
            font-size: 50px;
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

        @media (max-width: 480px) {
          .how-work {
            padding: 96px 0;
          }

          .how-bg {
            opacity: 0.72;
            background-position: center top;
            filter: brightness(1.16) saturate(1.2) contrast(1.02);
          }

          .how-overlay {
            background:
              linear-gradient(
                180deg,
                rgba(8, 8, 24, 0.14) 0%,
                rgba(8, 8, 24, 0.48) 100%
              ),
              linear-gradient(
                90deg,
                rgba(8, 8, 24, 0.22) 0%,
                rgba(8, 8, 24, 0.08) 50%,
                rgba(8, 8, 24, 0.22) 100%
              );
          }

          .how-title {
            font-size: 42px;
          }

          .pillar-top {
            margin-bottom: 56px;
          }

          .pillar-content h3 {
            font-size: 28px;
          }
        }
      `}</style>
    </section>
  );
};

export default HowAMNWork;