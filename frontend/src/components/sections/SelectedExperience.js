import React, { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const SelectedExperience = () => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('hypernusa_language') || 'en';

    setLanguage(savedLanguage);

    const handleLanguageChange = (event) => {
      setLanguage(event.detail);
    };

    window.addEventListener('hypernusa-language-change', handleLanguageChange);

    return () => {
      window.removeEventListener('hypernusa-language-change', handleLanguageChange);
    };
  }, []);

  const copy = {
    en: {
      label: 'Cross-Industry Experience',
      titleLine1: 'Built by People',
      titleLine2: 'Behind Hypernusa',
      description:
        'Our team brings experience across brand campaigns, digital activation, creative production, commerce, automation, and growth projects for diverse industries.',
      preview: 'Experience Preview',
      cta: 'View Selected Work',
      works: [
        {
          category: 'Campaign & Digital',
          title: 'Public Brand Activation Campaign',
          description:
            'Brand communication, digital activation, content ecosystem, and audience engagement shaped through public-facing campaigns.',
          year: '2025',
        },
        {
          category: 'Commerce Growth',
          title: 'Marketplace & Live Commerce Enablement',
          description:
            'Commerce-focused activation supporting marketplace growth, live selling, creator ecosystem, and sales-oriented content.',
          year: '2025',
        },
        {
          category: 'CRM & Automation',
          title: 'Growth Automation & CRM Experience',
          description:
            'Workflow automation, CRM structure, dashboard, and reporting systems designed to support scalable growth operations.',
          year: '2026',
        },
      ],
    },

    id: {
      label: 'Pengalaman Lintas Industri',
      titleLine1: 'Dibangun oleh Tim',
      titleLine2: 'di Balik Hypernusa',
      description:
        'Tim kami membawa pengalaman dalam kampanye brand, aktivasi digital, produksi kreatif, commerce, otomasi, dan proyek pertumbuhan di berbagai industri.',
      preview: 'Lihat Pengalaman',
      cta: 'Lihat Karya Terpilih',
      works: [
        {
          category: 'Kampanye & Digital',
          title: 'Kampanye Aktivasi Brand Publik',
          description:
            'Komunikasi brand, aktivasi digital, ekosistem konten, dan engagement audiens melalui kampanye yang menyasar publik.',
          year: '2025',
        },
        {
          category: 'Pertumbuhan Commerce',
          title: 'Marketplace & Live Commerce Enablement',
          description:
            'Aktivasi commerce untuk mendukung pertumbuhan marketplace, live selling, creator ecosystem, dan konten berorientasi penjualan.',
          year: '2025',
        },
        {
          category: 'CRM & Otomasi',
          title: 'Growth Automation & CRM Experience',
          description:
            'Workflow automation, struktur CRM, dashboard, dan sistem pelaporan untuk mendukung operasional pertumbuhan yang scalable.',
          year: '2026',
        },
      ],
    },
  };

  const currentCopy = copy[language];

  return (
    <section className="selected-experience" data-testid="selected-experience">
      <div className="experience-bg"></div>
      <div className="experience-overlay"></div>
      <div className="experience-noise"></div>

      <div className="experience-glow experience-glow-one"></div>
      <div className="experience-glow experience-glow-two"></div>

      <div className="experience-container">
        <div className="experience-header">
          <div className="experience-label">
            <span className="experience-line"></span>
            <span>{currentCopy.label}</span>
          </div>

          <h2 className="experience-title">
            {currentCopy.titleLine1}
            <br />
            <span>{currentCopy.titleLine2}</span>
          </h2>

          <p className="experience-description">{currentCopy.description}</p>
        </div>

        <div className="experience-grid">
          {currentCopy.works.map((work, index) => (
            <article className="experience-card" key={`${work.title}-${index}`}>
              <div className="experience-card-overlay"></div>

              <div className="experience-card-top">
                <span className="experience-category">{work.category}</span>
                <span className="experience-year">{work.year}</span>
              </div>

              <div className="experience-card-content">
                <h3>{work.title}</h3>
                <p>{work.description}</p>
              </div>

              <div className="experience-link">
                <span>{currentCopy.preview}</span>
                <ArrowUpRight size={18} />
              </div>
            </article>
          ))}
        </div>

        <a href="/work" className="experience-cta">
          {currentCopy.cta}
        </a>
      </div>

      <style jsx="true">{`
        .selected-experience {
          position: relative;
          padding: 180px 0;
          overflow: hidden;
          background: #050510;
          isolation: isolate;
        }

        .experience-bg {
          position: absolute;
          inset: 0;
          background: url('/images/selected-city-bg.jpg') center/cover no-repeat;
          z-index: 0;
          opacity: 0.4;
          filter: brightness(0.86) saturate(1.18) contrast(1.04);
          transform: scale(1.02);
        }

        .experience-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            linear-gradient(
              180deg,
              rgba(5, 5, 16, 0.28) 0%,
              rgba(5, 5, 16, 0.78) 100%
            ),
            linear-gradient(
              90deg,
              rgba(5, 5, 16, 0.58) 0%,
              rgba(5, 5, 16, 0.2) 50%,
              rgba(5, 5, 16, 0.58) 100%
            ),
            radial-gradient(
              circle at 16% 18%,
              rgba(102, 126, 234, 0.16),
              transparent 34%
            ),
            radial-gradient(
              circle at 86% 54%,
              rgba(236, 72, 153, 0.13),
              transparent 32%
            );
        }

        .experience-noise {
          position: absolute;
          inset: 0;
          z-index: 2;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E");
          opacity: 0.035;
          pointer-events: none;
          mix-blend-mode: overlay;
        }

        .experience-container {
          position: relative;
          z-index: 4;
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .experience-header {
          max-width: 880px;
          margin-bottom: 80px;
        }

        .experience-label {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 30px;
        }

        .experience-line {
          width: 52px;
          height: 1px;
          background: linear-gradient(90deg, rgba(167, 178, 255, 0.7), transparent);
        }

        .experience-label span:last-child {
          font-size: 13px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.56);
          font-weight: 700;
        }

        .experience-title {
          margin: 0;
          font-size: clamp(52px, 7vw, 92px);
          line-height: 0.95;
          letter-spacing: -0.06em;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.96);
          text-shadow: 0 18px 60px rgba(0, 0, 0, 0.42);
        }

        .experience-title span {
          background: linear-gradient(135deg, #ffffff 0%, #a78bfa 45%, #ec4899 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .experience-description {
          max-width: 760px;
          margin-top: 42px;
          font-size: 20px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.68);
          font-weight: 300;
          text-shadow: 0 10px 34px rgba(0, 0, 0, 0.38);
        }

        .experience-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

       .experience-card {
  position: relative;
  min-height: 380px;
  padding: 34px;
  border-radius: 28px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.07),
      rgba(255, 255, 255, 0.03)
    );
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


        .experience-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              circle at top left,
              rgba(167, 178, 255, 0.18),
              transparent 34%
            ),
            radial-gradient(
              circle at bottom right,
              rgba(236, 72, 153, 0.12),
              transparent 34%
            );
          opacity: 0;
          transition: opacity 0.45s ease;
        }

        .experience-card:hover {
          transform: translateY(-10px);
          border-color: rgba(167, 178, 255, 0.3);
          background:
            linear-gradient(
              145deg,
              rgba(255, 255, 255, 0.09),
              rgba(255, 255, 255, 0.04)
            );
        }

        .experience-card:hover::before {
          opacity: 1;
        }

        .experience-card-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              180deg,
              transparent 0%,
              rgba(0, 0, 0, 0.32) 100%
            );
        }

        .experience-card-top {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 90px;
}

        .experience-category {
          font-size: 13px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(167, 178, 255, 0.84);
          font-weight: 700;
        }

        .experience-year {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.46);
          white-space: nowrap;
        }

        .experience-card-content {
  position: relative;
  z-index: 2;
}

        .experience-card h3 {
          margin: 0 0 18px;
          font-size: 32px;
          line-height: 1.08;
          letter-spacing: -0.04em;
          color: #ffffff;
          font-weight: 400;
        }

        .experience-card p {
          margin: 0;
          font-size: 15px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.64);
        }

      .experience-link {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 36px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
}
        .experience-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 52px;
          padding: 16px 28px;
          border-radius: 14px;
          text-decoration: none;
          color: #ffffff;
          font-size: 15px;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea 0%, #ec4899 100%);
          box-shadow: 0 14px 40px rgba(102, 126, 234, 0.28);
          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease;
        }

        .experience-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 52px rgba(236, 72, 153, 0.34);
        }

        .experience-glow {
          position: absolute;
          border-radius: 999px;
          filter: blur(120px);
          pointer-events: none;
          z-index: 2;
        }

        .experience-glow-one {
          width: 340px;
          height: 340px;
          background: rgba(102, 126, 234, 0.14);
          top: 100px;
          left: 8%;
        }

        .experience-glow-two {
          width: 280px;
          height: 280px;
          background: rgba(236, 72, 153, 0.1);
          bottom: 100px;
          right: 8%;
        }

        @media (max-width: 980px) {
          .experience-grid {
            grid-template-columns: 1fr;
          }

          .experience-card {
    min-height: auto;
  }

  .experience-card-top {
    margin-bottom: 56px;
  }
        }

        @media (max-width: 768px) {
          .selected-experience {
            padding: 120px 0;
          }

          .experience-bg {
            opacity: 0.66;
            background-position: center;
            filter: brightness(1.08) saturate(1.18) contrast(1.02);
            transform: scale(1.04);
          }

          .experience-overlay {
            background:
              linear-gradient(
                180deg,
                rgba(5, 5, 16, 0.18) 0%,
                rgba(5, 5, 16, 0.58) 100%
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

          .experience-container {
            padding: 0 24px;
          }

          .experience-header {
            margin-bottom: 56px;
          }

          .experience-label {
            margin-bottom: 26px;
          }

          .experience-label span:last-child {
            font-size: 11px;
          }

          .experience-title {
            font-size: 50px;
            line-height: 1;
          }

          .experience-description {
            margin-top: 32px;
            font-size: 17px;
            line-height: 1.8;
          }

          .experience-card {
            padding: 28px;
          }

          .experience-card h3 {
            font-size: 28px;
          }
        }

        @media (max-width: 480px) {
          .selected-experience {
            padding: 96px 0;
          }

          .experience-bg {
            opacity: 0.72;
            background-position: center top;
            filter: brightness(1.16) saturate(1.2) contrast(1.02);
          }

          .experience-overlay {
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

          .experience-title {
            font-size: 42px;
          }

          .experience-description {
            font-size: 16px;
          }

          .experience-card-top {
            align-items: flex-start;
          }

          .experience-card h3 {
            font-size: 25px;
          }

          .experience-cta {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default SelectedExperience;