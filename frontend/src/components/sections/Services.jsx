import React from 'react';
import { Megaphone, Share2, Code, Zap, Cpu, BarChart3 } from 'lucide-react';
import { services } from '../../mockData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const iconMap = {
  'megaphone': Megaphone,
  'share-2': Share2,
  'code': Code,
  'zap': Zap,
  'cpu': Cpu,
  'bar-chart-3': BarChart3
};

const Services = () => {
  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section id="services" className="services-section" data-testid="services-section">
      <div className="services-bg-orb"></div>
      <div className="services-container">
        <div ref={headerRef} className={`services-header reveal ${headerVisible ? 'is-visible' : ''}`}>
          <div className="section-badge">
            <span className="badge-dot"></span>
            <span>Layanan Kami</span>
          </div>
          <h2 className="section-title">
            Solusi Digital
            <br />
            <span className="gradient-text">Yang Komprehensif</span>
          </h2>
          <p className="section-description">
            Dari strategi hingga eksekusi, kami menyediakan layanan end-to-end
            <br className="desktop-br" />
            untuk transformasi digital bisnis Anda.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div key={service.id} className="service-card glass-effect card-hover" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="service-number">
                  {String(service.id).padStart(2, '0')}
                </div>
                <div className="service-icon-wrapper">
                  <IconComponent className="service-icon" size={36} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-arrow">
                  <span>→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx="true">{`
        .services-section {
          padding: 140px 40px;
          background: linear-gradient(180deg, #0a0a1f 0%, #07071a 100%);
          position: relative;
          overflow: hidden;
        }

        .services-bg-orb {
          position: absolute;
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, transparent 70%);
          filter: blur(120px);
          top: 20%;
          left: -250px;
          pointer-events: none;
        }

        .services-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .services-header {
          text-align: center;
          margin-bottom: 80px;
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

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .service-card {
          padding: 40px;
          position: relative;
          overflow: hidden;
          animation: fade-in-up 0.8s ease backwards;
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .service-number {
          position: absolute;
          top: 30px;
          right: 30px;
          font-size: 48px;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.03);
          transition: color 0.3s ease;
        }

        .service-card:hover .service-number {
          color: rgba(102, 126, 234, 0.1);
        }

        .service-icon-wrapper {
          width: 72px;
          height: 72px;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          transition: transform 0.3s ease, background 0.3s ease;
        }

        .service-card:hover .service-icon-wrapper {
          transform: scale(1.1);
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.3) 100%);
        }

        .service-icon {
          color: #667eea;
        }

        .service-title {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 16px;
          color: var(--color-text-primary);
        }

        .service-description {
          font-size: 15px;
          line-height: 1.7;
          color: var(--color-text-secondary);
          margin-bottom: 24px;
        }

        .service-arrow {
          font-size: 24px;
          color: #667eea;
          opacity: 0;
          transform: translateX(-10px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .service-card:hover .service-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .section-title {
            font-size: 48px;
          }
        }

        @media (max-width: 768px) {
          .services-section {
            padding: 80px 20px;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .section-title {
            font-size: 36px;
          }

          .section-description {
            font-size: 16px;
          }

          .desktop-br {
            display: none;
          }

          .service-card {
            padding: 32px;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
