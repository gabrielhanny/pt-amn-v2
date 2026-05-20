import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contact" className="cta-section">
      <div className="cta-blur-orb orb-left"></div>
      <div className="cta-blur-orb orb-right"></div>
      
      <div className="cta-container">
        <div className="cta-card glass-effect">
          <div className="cta-badge">
            <Sparkles size={16} className="badge-icon" />
            <span>Mari Bertumbuh Bersama</span>
          </div>
          
          <h2 className="cta-title">
            Siap Mengembangkan
            <br />
            <span className="gradient-text">Bisnis Anda?</span>
          </h2>
          
          <p className="cta-description">
            Konsultasikan kebutuhan digital bisnis Anda bersama tim kami.
            <br className="desktop-br" />
            Dapatkan strategi yang tepat untuk pertumbuhan maksimal.
          </p>

          <div className="cta-buttons">
            <a href="mailto:hello@amnindonesia.com" className="btn-primary">
              Mulai Konsultasi
              <ArrowRight size={20} className="btn-icon" />
            </a>
            <a href="https://wa.me/6285236724068" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              WhatsApp Kami
            </a>
          </div>

          <div className="cta-info">
            <div className="info-item">
              <div className="info-label">Email</div>
              <div className="info-value">hello@amnindonesia.com</div>
            </div>
            <div className="info-divider"></div>
            <div className="info-item">
              <div className="info-label">Phone</div>
              <div className="info-value">+62 852 3672 4068</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .cta-section {
          padding: 120px 40px;
          background: linear-gradient(180deg, #1a1a2e 0%, #0f0f1e 100%);
          position: relative;
          overflow: hidden;
        }

        .cta-blur-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.3;
          pointer-events: none;
        }

        .orb-left {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, #667eea 0%, transparent 70%);
          top: 0;
          left: -200px;
        }

        .orb-right {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, #764ba2 0%, transparent 70%);
          bottom: 0;
          right: -200px;
        }

        .cta-container {
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        .cta-card {
          padding: 80px 60px;
          text-align: center;
          border: 1px solid rgba(102, 126, 234, 0.3);
        }

        .cta-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: rgba(102, 126, 234, 0.15);
          border: 1px solid rgba(102, 126, 234, 0.3);
          border-radius: 50px;
          font-size: 13px;
          font-weight: 600;
          color: #667eea;
          margin-bottom: 32px;
        }

        .badge-icon {
          color: #667eea;
        }

        .cta-title {
          font-size: 64px;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 28px;
          letter-spacing: -1px;
        }

        .cta-description {
          font-size: 18px;
          color: var(--color-text-secondary);
          line-height: 1.8;
          margin-bottom: 48px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .desktop-br {
          display: block;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 60px;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 18px 36px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          text-decoration: none;
          border-radius: 12px;
          font-weight: 600;
          font-size: 16px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(102, 126, 234, 0.5);
        }

        .btn-icon {
          transition: transform 0.3s ease;
        }

        .btn-primary:hover .btn-icon {
          transform: translateX(5px);
        }

        .btn-secondary {
          padding: 18px 36px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          text-decoration: none;
          border-radius: 12px;
          font-weight: 600;
          font-size: 16px;
          transition: background 0.3s ease, border-color 0.3s ease;
          display: inline-block;
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .cta-info {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 48px;
          flex-wrap: wrap;
          padding-top: 48px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .info-item {
          text-align: center;
        }

        .info-label {
          font-size: 12px;
          color: var(--color-text-secondary);
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
        }

        .info-value {
          font-size: 16px;
          color: var(--color-text-primary);
          font-weight: 600;
        }

        .info-divider {
          width: 1px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 1024px) {
          .cta-title {
            font-size: 52px;
          }
        }

        @media (max-width: 768px) {
          .cta-section {
            padding: 80px 20px;
          }

          .cta-card {
            padding: 60px 40px;
          }

          .cta-title {
            font-size: 40px;
          }

          .cta-description {
            font-size: 16px;
          }

          .desktop-br {
            display: none;
          }

          .cta-info {
            gap: 32px;
          }
        }

        @media (max-width: 480px) {
          .cta-card {
            padding: 40px 24px;
          }

          .cta-title {
            font-size: 32px;
          }

          .btn-primary, .btn-secondary {
            width: 100%;
            justify-content: center;
          }

          .cta-buttons {
            flex-direction: column;
          }

          .info-item {
            min-width: 100%;
          }

          .info-divider {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default CTA;
