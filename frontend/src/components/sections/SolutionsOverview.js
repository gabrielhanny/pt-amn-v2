import React, { useEffect, useState } from 'react';
import {
  Megaphone,
  BarChart3,
  MonitorSmartphone,
  ShoppingBag,
  BrainCircuit,
  ArrowRight,
} from 'lucide-react';

const solutionIcons = {
  Megaphone,
  BarChart3,
  MonitorSmartphone,
  ShoppingBag,
  BrainCircuit,
};

const SolutionsOverview = () => {
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
      label: 'Service Universe',
      titleLine1: 'Five Ways We Help',
      titleLine2: 'Brands Grow',
      intro:
        'From strategy and campaign activation to technology, commerce, automation, and AI-powered operations.',
      cta: 'Explore Solutions',
      solutions: [
        {
          number: '01',
          title: 'Growth Activation Loop',
          description:
            'An integrated monthly growth system that aligns strategy, content, campaigns, and performance.',
          icon: 'Megaphone',
        },
        {
          number: '02',
          title: 'Campaign & Launch Kit',
          description:
            'Launch campaigns with clear messaging, creative assets, amplification, and measurable outcomes.',
          icon: 'BarChart3',
        },
        {
          number: '03',
          title: 'Web & Automation Sprint',
          description:
            'Websites, CRM, dashboards, automation workflows, and digital infrastructure.',
          icon: 'MonitorSmartphone',
        },
        {
          number: '04',
          title: 'Commerce & Affiliate Growth',
          description:
            'Marketplace activation, live commerce, affiliate programs, and creator growth.',
          icon: 'ShoppingBag',
        },
        {
          number: '05',
          title: 'AI-Powered Growth Ops',
          description:
            'AI assistants, workflow automation, lead qualification, and reporting systems.',
          icon: 'BrainCircuit',
        },
      ],
    },

    id: {
      label: 'Ruang Layanan',
      titleLine1: 'Lima Cara Kami Membantu',
      titleLine2: 'Brand Bertumbuh',
      intro:
        'Dari strategi dan aktivasi kampanye hingga teknologi, komersial, otomasi, dan operasional berbasis AI.',
      cta: 'Lihat Solusi',
      solutions: [
        {
          number: '01',
          title: 'Growth Activation Loop',
          description:
            'Sistem pertumbuhan bulanan yang menghubungkan strategi, konten, kampanye, dan performa.',
          icon: 'Megaphone',
        },
        {
          number: '02',
          title: 'Campaign & Launch Kit',
          description:
            'Aktivasi kampanye dengan pesan yang jelas, aset kreatif, amplifikasi, dan hasil yang terukur.',
          icon: 'BarChart3',
        },
        {
          number: '03',
          title: 'Web & Automation Sprint',
          description:
            'Website, CRM, dashboard, workflow automation, dan infrastruktur digital untuk operasional.',
          icon: 'MonitorSmartphone',
        },
        {
          number: '04',
          title: 'Commerce & Affiliate Growth',
          description:
            'Aktivasi marketplace, live commerce, program afiliasi, dan pertumbuhan creator ecosystem.',
          icon: 'ShoppingBag',
        },
        {
          number: '05',
          title: 'AI-Powered Growth Ops',
          description:
            'AI assistant, workflow automation, kualifikasi lead, dan sistem pelaporan yang lebih efisien.',
          icon: 'BrainCircuit',
        },
      ],
    },
  };

  const currentCopy = copy[language];

  return (
    <section className="solutions-overview" data-testid="solutions-overview">
      <div className="solutions-bg"></div>
      <div className="solutions-overlay"></div>
      <div className="solutions-noise"></div>

      <div className="solution-glow solution-glow-one"></div>
      <div className="solution-glow solution-glow-two"></div>

      <div className="solutions-container">
        <div className="solutions-header">
          <div className="solutions-label">
            <span className="solutions-line"></span>
            <span>{currentCopy.label}</span>
          </div>

          <h2 className="solutions-title">
            {currentCopy.titleLine1}
            <br />
            <span>{currentCopy.titleLine2}</span>
          </h2>

          <p className="solutions-intro">{currentCopy.intro}</p>
        </div>

        <div className="solutions-grid">
          {currentCopy.solutions.map((solution) => {
            const Icon = solutionIcons[solution.icon];

            return (
              <article className="solution-card" key={solution.number}>
                <div className="solution-card-glow"></div>

                <div className="solution-card-top">
                  <span className="solution-number">{solution.number}</span>

                  <div className="solution-icon">
                    <Icon size={24} strokeWidth={1.7} />
                  </div>
                </div>

                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
              </article>
            );
          })}
        </div>

        <a href="/solutions" className="solutions-cta">
          {currentCopy.cta}
          <ArrowRight size={18} />
        </a>
      </div>

       <style jsx="true">{`
        .solutions-overview {
          position: relative;
          padding: 170px 0;
          background: #080818;
          overflow: hidden;
          isolation: isolate;
        }

        .solutions-bg {
          position: absolute;
          inset: 0;
          background: url('/images/overview-city-bg.jpg') center/cover no-repeat;
          z-index: 0;
          opacity: 0.46;
          filter: brightness(0.9) saturate(1.18) contrast(1.04);
          transform: scale(1.02);
          background-position: center 15%;
        }

        .solutions-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            linear-gradient(
              180deg,
              rgba(8, 8, 24, 0.3) 0%,
              rgba(8, 8, 24, 0.72) 100%
            ),
            linear-gradient(
              90deg,
              rgba(8, 8, 24, 0.56) 0%,
              rgba(8, 8, 24, 0.18) 50%,
              rgba(8, 8, 24, 0.56) 100%
            ),
            radial-gradient(
              circle at 18% 22%,
              rgba(102, 126, 234, 0.16),
              transparent 34%
            ),
            radial-gradient(
              circle at 86% 58%,
              rgba(236, 72, 153, 0.14),
              transparent 32%
            );
        }

        .solutions-noise {
          position: absolute;
          inset: 0;
          z-index: 2;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E");
          opacity: 0.035;
          pointer-events: none;
          mix-blend-mode: overlay;
        }

        .solution-glow {
          position: absolute;
          border-radius: 999px;
          filter: blur(120px);
          pointer-events: none;
          z-index: 2;
        }

        .solution-glow-one {
          width: 360px;
          height: 360px;
          background: rgba(102, 126, 234, 0.14);
          top: 120px;
          left: 8%;
        }

        .solution-glow-two {
          width: 320px;
          height: 320px;
          background: rgba(236, 72, 153, 0.12);
          bottom: 160px;
          right: 8%;
        }

        .solutions-container {
          position: relative;
          z-index: 4;
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .solutions-header {
          max-width: 880px;
          margin-bottom: 70px;
        }

        .solutions-label {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 30px;
          font-size: 13px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.58);
          font-weight: 700;
        }

        .solutions-line {
          width: 52px;
          height: 1px;
          background: linear-gradient(90deg, rgba(167, 178, 255, 0.75), transparent);
        }

        .solutions-title {
          margin: 0;
          font-size: clamp(52px, 7vw, 94px);
          line-height: 0.95;
          letter-spacing: -0.06em;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.96);
          text-shadow: 0 18px 60px rgba(0, 0, 0, 0.42);
        }

        .solutions-title span {
          background: linear-gradient(135deg, #ffffff 0%, #a78bfa 45%, #ec4899 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .solutions-intro {
          max-width: 760px;
          margin-top: 42px;
          font-size: 20px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.68);
          font-weight: 300;
          text-shadow: 0 10px 34px rgba(0, 0, 0, 0.38);
        }

        .solutions-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 20px;
        }

        .solution-card {
          position: relative;
          min-height: 320px;
          padding: 30px;
          border-radius: 26px;
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.03));
          border: 1px solid rgba(167, 178, 255, 0.16);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            0 24px 60px rgba(0, 0, 0, 0.24);
          overflow: hidden;
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          transition:
            transform 0.45s cubic-bezier(0.4, 0, 0.2, 1),
            border-color 0.45s ease,
            background 0.45s ease;
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

        .solution-card::before {
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

        .solution-card:hover {
          transform: translateY(-8px);
          border-color: rgba(167, 178, 255, 0.32);
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.04));
        }

        .solution-card:hover::before {
          opacity: 1;
        }

        .solution-card-glow {
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

        .solution-card:hover .solution-card-glow {
          opacity: 1;
        }

        .solution-card-top {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 62px;
        }

        .solution-number {
          font-size: 13px;
          letter-spacing: 0.18em;
          color: rgba(167, 178, 255, 0.78);
          font-weight: 700;
        }

        .solution-icon {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #a7b2ff;
          background: rgba(167, 178, 255, 0.1);
          border: 1px solid rgba(167, 178, 255, 0.16);
          transition: transform 0.45s ease, background 0.45s ease, color 0.45s ease;
        }

        .solution-card:hover .solution-icon {
          transform: rotate(-8deg) scale(1.05);
          background: rgba(167, 178, 255, 0.18);
          color: #ffffff;
        }

        .solution-card h3 {
          position: relative;
          z-index: 2;
          margin: 0 0 18px;
          font-size: 24px;
          line-height: 1.15;
          letter-spacing: -0.03em;
          color: #ffffff;
        }

        .solution-card p {
          position: relative;
          z-index: 2;
          margin: 0;
          font-size: 15px;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.62);
        }

        .solutions-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 54px;
          color: #ffffff;
          text-decoration: none;
          font-size: 15px;
          font-weight: 700;
          padding: 16px 24px;
          border-radius: 14px;
          background: linear-gradient(135deg, #667eea 0%, #ec4899 100%);
          box-shadow: 0 14px 40px rgba(102, 126, 234, 0.28);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .solutions-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 54px rgba(236, 72, 153, 0.34);
        }

        @media (max-width: 980px) {
          .solutions-grid {
            grid-template-columns: 1fr;
          }

          .solution-card:nth-child(n) {
            grid-column: auto;
          }
        }

        @media (max-width: 768px) {
          .solutions-overview {
            padding: 120px 0;
          }

          .solutions-bg {
            opacity: 0.68;
            background-position: center;
            filter: brightness(1.1) saturate(1.18) contrast(1.02);
            transform: scale(1.04);
          }

          .solutions-overlay {
            background:
              linear-gradient(
                180deg,
                rgba(8, 8, 24, 0.18) 0%,
                rgba(8, 8, 24, 0.55) 100%
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

          .solutions-container {
            padding: 0 24px;
          }

          .solutions-header {
            margin-bottom: 52px;
          }

          .solutions-label {
            font-size: 11px;
            margin-bottom: 26px;
          }

          .solutions-title {
            font-size: 50px;
            line-height: 1;
          }

          .solutions-intro {
            margin-top: 32px;
            font-size: 17px;
            line-height: 1.8;
          }

          .solution-card {
            min-height: auto;
            padding: 26px;
          }

          .solution-card-top {
            margin-bottom: 44px;
          }
        }

        @media (max-width: 480px) {
          .solutions-overview {
            padding: 96px 0;
          }

          .solutions-bg {
            opacity: 0.74;
            background-position: center top;
            filter: brightness(1.18) saturate(1.2) contrast(1.02);
          }

          .solutions-overlay {
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

          .solutions-title {
            font-size: 42px;
          }

          .solutions-intro {
            font-size: 16px;
          }

          .solution-card h3 {
            font-size: 22px;
          }

          .solutions-cta {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default SolutionsOverview;