import React from 'react';
import { solutions } from '../../mockData';
import { ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const FeaturedWork = () => {
  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section id="work" className="work-section" data-testid="work-section">
      <div className="work-orb work-orb-left"></div>
      <div className="work-orb work-orb-right"></div>

      <div className="work-container">
        <div ref={headerRef} className={`work-header reveal ${headerVisible ? 'is-visible' : ''}`}>
          <div className="section-badge">
            <span className="badge-dot"></span>
            <span>What We Build</span>
          </div>
          <h2 className="section-title">
            Solusi yang
            <br />
            <span className="gradient-text">Kami Rancang</span>
          </h2>
          <p className="section-description">
            Bukan sekadar deliverable — kami membangun fondasi digital yang dirancang
            <br className="desktop-br" />
            untuk mendukung pertumbuhan jangka panjang.
          </p>
        </div>

        <div className="work-grid">
          {solutions.map((sol, index) => (
            <article
              key={sol.id}
              className="work-card"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`solution-card-${sol.id}`}
            >
              <div className="work-card-border"></div>
              <div className="work-card-inner">
                <div className="work-category">{sol.category}</div>
                <h3 className="work-title">{sol.title}</h3>
                <p className="work-description">{sol.description}</p>

                <div className="work-footer">
                  <div className="work-focus">
                    <span className="focus-label">Focus</span>
                    <span className="focus-text">{sol.focus}</span>
                  </div>
                  <div className="work-arrow" aria-hidden="true">
                    <ArrowUpRight size={18} strokeWidth={2} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx="true">{`
        .work-section {
          padding: 140px 40px;
          background: linear-gradient(180deg, #07071a 0%, #0a0a1f 100%);
          position: relative;
          overflow: hidden;
        }

        .work-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
          opacity: 0.3;
        }

        .work-orb-left {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(102, 126, 234, 0.4) 0%, transparent 70%);
          top: 10%;
          left: -150px;
        }

        .work-orb-right {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.35) 0%, transparent 70%);
          bottom: 5%;
          right: -150px;
        }

        .work-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .work-header {
          text-align: center;
          margin-bottom: 90px;
        }

        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 9px 20px;
          background: rgba(102, 126, 234, 0.08);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(102, 126, 234, 0.2);
          border-radius: 50px;
          font-size: 12px;
          font-weight: 600;
          color: #a7b2ff;
          margin-bottom: 28px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          background: #8b98f7;
          border-radius: 50%;
          box-shadow: 0 0 10px #8b98f7;
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }

        .section-title {
          font-size: 60px;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 24px;
          letter-spacing: -2px;
        }

        .section-description {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.7;
          max-width: 760px;
          margin: 0 auto;
        }

        .desktop-br {
          display: block;
        }

        .work-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 26px;
        }

        .work-card {
          position: relative;
          padding: 1px;
          border-radius: 22px;
          background: linear-gradient(
            145deg,
            rgba(167, 178, 255, 0.15) 0%,
            rgba(167, 178, 255, 0.03) 50%,
            rgba(139, 92, 246, 0.12) 100%
          );
          opacity: 0;
          transform: translateY(30px);
          animation: card-reveal 0.9s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        @keyframes card-reveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .work-card:hover {
          transform: translateY(-8px);
        }

        .work-card-border {
          position: absolute;
          inset: -50%;
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            transparent 300deg,
            rgba(167, 178, 255, 0.5) 340deg,
            rgba(139, 92, 246, 0.7) 360deg,
            transparent 360deg
          );
          opacity: 0;
          transition: opacity 0.5s ease;
          animation: border-spin 7s linear infinite;
          pointer-events: none;
        }

        @keyframes border-spin {
          to { transform: rotate(360deg); }
        }

        .work-card:hover .work-card-border {
          opacity: 1;
        }

        .work-card-inner {
          position: relative;
          z-index: 2;
          padding: 40px 36px 32px;
          background: linear-gradient(
            145deg,
            rgba(15, 15, 35, 0.92) 0%,
            rgba(20, 20, 45, 0.88) 100%
          );
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-radius: 21px;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .work-category {
          display: inline-block;
          align-self: flex-start;
          padding: 6px 14px;
          background: rgba(102, 126, 234, 0.12);
          border: 1px solid rgba(102, 126, 234, 0.25);
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
          color: #a7b2ff;
          margin-bottom: 22px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .work-title {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 14px;
          color: #ffffff;
          letter-spacing: -0.8px;
          line-height: 1.2;
        }

        .work-description {
          font-size: 15px;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 28px;
          flex: 1;
        }

        .work-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding-top: 22px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .work-focus {
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex: 1;
          min-width: 0;
        }

        .focus-label {
          font-size: 10px;
          font-weight: 700;
          color: rgba(167, 178, 255, 0.7);
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .focus-text {
          font-size: 13.5px;
          color: rgba(255, 255, 255, 0.85);
          font-weight: 500;
          line-height: 1.4;
        }

        .work-arrow {
          width: 40px;
          height: 40px;
          min-width: 40px;
          background: rgba(102, 126, 234, 0.1);
          border: 1px solid rgba(102, 126, 234, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #a7b2ff;
          transition: background 0.4s ease, transform 0.4s ease, color 0.4s ease, border-color 0.4s ease;
        }

        .work-card:hover .work-arrow {
          background: rgba(102, 126, 234, 0.25);
          border-color: rgba(167, 178, 255, 0.5);
          color: #ffffff;
          transform: scale(1.1) rotate(8deg);
        }

        @media (max-width: 1024px) {
          .section-title {
            font-size: 48px;
          }
        }

        @media (max-width: 768px) {
          .work-section {
            padding: 90px 20px;
          }

          .work-header {
            margin-bottom: 60px;
          }

          .work-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .section-title {
            font-size: 36px;
            letter-spacing: -1px;
          }

          .section-description {
            font-size: 15px;
          }

          .desktop-br {
            display: none;
          }

          .work-card-inner {
            padding: 32px 26px 26px;
          }

          .work-title {
            font-size: 22px;
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturedWork;
