import React from 'react';
import { Workflow, Bot, Brain, Gauge } from 'lucide-react';
import { automationFeatures } from '../../mockData';

const iconMap = {
  'workflow': Workflow,
  'bot': Bot,
  'brain': Brain,
  'gauge': Gauge
};

const Automation = () => {
  return (
    <section id="automation" className="automation-section">
      <div className="automation-blur-orb"></div>
      <div className="automation-container">
        <div className="automation-content">
          <div className="automation-text">
            <div className="section-badge">
              <span className="badge-dot"></span>
              <span>Automation &amp; AI</span>
            </div>
            <h2 className="section-title">
              Masa Depan Bisnis
              <br />
              <span className="gradient-text">Dimulai dari Sekarang</span>
            </h2>
            <p className="section-description">
              Implementasi sistem otomasi dan AI agents untuk meningkatkan efisiensi operasional,
              menghemat waktu, dan memaksimalkan produktivitas tim Anda.
            </p>
          </div>

          <div className="automation-features">
            {automationFeatures.map((feature, index) => {
              const IconComponent = iconMap[feature.icon];
              return (
                <div key={feature.id} className="automation-feature" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="feature-icon-wrapper">
                    <IconComponent className="feature-icon" size={24} />
                  </div>
                  <div className="feature-content">
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .automation-section {
          padding: 140px 40px;
          background: linear-gradient(180deg, #0a0a1f 0%, #07071a 100%);
          position: relative;
          overflow: hidden;
        }

        .automation-blur-orb {
          position: absolute;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%);
          filter: blur(120px);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .automation-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        .automation-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
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
          font-size: 52px;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 24px;
          letter-spacing: -1px;
        }

        .section-description {
          font-size: 17px;
          color: var(--color-text-secondary);
          line-height: 1.8;
        }

        .automation-features {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .automation-feature {
          display: flex;
          gap: 20px;
          padding: 28px;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          transition: transform 0.3s ease, border-color 0.3s ease, background 0.3s ease;
          animation: fade-in-left 0.8s ease backwards;
        }

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .automation-feature:hover {
          transform: translateX(8px);
          border-color: rgba(102, 126, 234, 0.5);
          background: rgba(255, 255, 255, 0.05);
        }

        .feature-icon-wrapper {
          min-width: 56px;
          height: 56px;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .automation-feature:hover .feature-icon-wrapper {
          transform: scale(1.1);
        }

        .feature-icon {
          color: #667eea;
        }

        .feature-content {
          flex: 1;
        }

        .feature-title {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 8px;
          color: var(--color-text-primary);
        }

        .feature-description {
          font-size: 14px;
          line-height: 1.6;
          color: var(--color-text-secondary);
        }

        @media (max-width: 1024px) {
          .automation-content {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .section-title {
            font-size: 44px;
          }
        }

        @media (max-width: 768px) {
          .automation-section {
            padding: 80px 20px;
          }

          .section-title {
            font-size: 36px;
          }

          .section-description {
            font-size: 16px;
          }

          .automation-feature {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
};

export default Automation;
