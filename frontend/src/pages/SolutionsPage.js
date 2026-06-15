import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/sections/Footer';
import {
  RefreshCcw,
  Rocket,
  Workflow,
  ShoppingBag,
  Bot,
  Target,
  Users,
  ArrowRight,
} from 'lucide-react';

const icons = {
  RefreshCcw,
  Rocket,
  Workflow,
  ShoppingBag,
  Bot,
  Target,
  Users,
};

const SolutionsPage = () => {
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
      heroLabel: 'Solutions',
      heroTitle1: 'Five Ways We Help',
      heroTitle2: 'Brands Grow',
      heroDesc:
        'From strategy and campaign activation to technology, commerce, automation, and AI-powered operations — Hypernusa connects every move into one measurable growth ecosystem.',

      philosophyTitle1: 'Not Just Services.',
      philosophyTitle2: 'A Connected Growth System.',
      philosophyDesc:
        'Growth does not happen from one channel alone. It needs strategy, creative execution, media, commerce, technology, data, and operations working in the same direction — so every campaign, content, channel, website, and workflow has a clear role in moving the brand forward.',

      serviceLabel: 'Service Universe',
      serviceTitle1: 'Capabilities Built',
      serviceTitle2: 'to Activate Growth',

      engagementLabel: 'Engagement Models',
      engagementTitle1: 'Flexible Ways',
      engagementTitle2: 'to Build Growth Together',

      ctaTitle1: 'Ready to move from',
      ctaTitle2: 'fragmented activity?',
      ctaDesc:
        'Let’s connect your strategy, campaign, commerce, technology, automation, and reporting into one growth system.',
      cta: "Let's Talk",

      solutionCategories: [
        {
          number: '01',
          title: 'Growth Activation Loop',
          icon: 'RefreshCcw',
          services:
            'An integrated monthly growth system for brands that need continuous movement, not random content. Includes growth strategy, communication direction, content system, campaign planning, media support, reporting, and optimization.',
        },
        {
          number: '02',
          title: 'Campaign / Launch Kit',
          icon: 'Rocket',
          services:
            'A focused sprint for product launches, brand campaigns, seasonal campaigns, and public campaigns — covering campaign role, message, big idea, key visuals, content bursts, amplification, and measurable outcomes.',
        },
        {
          number: '03',
          title: 'Web & Automation Sprint',
          icon: 'Workflow',
          services:
            'Digital infrastructure build for websites, landing pages, microsites, CRM, WhatsApp flows, dashboards, reporting automation, and AI workflows.',
        },
        {
          number: '04',
          title: 'Commerce & Affiliate Growth',
          icon: 'ShoppingBag',
          services:
            'Marketplace campaigns, live commerce, affiliate management, creator activation, commerce tracking, and sales-oriented content for consumer, retail, beauty, lifestyle, and FMCG brands.',
        },
        {
          number: '05',
          title: 'AI-Powered Growth Ops',
          icon: 'Bot',
          services:
            'AI assistants, customer and sales support, lead qualification, automated reporting, CRM structuring, workflow automation, and knowledge base systems.',
        },
      ],

      engagementModels: [
        {
          title: 'Strategic Retainer',
          icon: 'Target',
          description:
            'Continuous growth activation, content system, campaign planning, reporting, and optimization.',
        },
        {
          title: 'Campaign Sprint',
          icon: 'Rocket',
          description:
            'Product launches, brand campaigns, seasonal campaigns, and public-facing activations.',
        },
        {
          title: 'Digital Infrastructure Sprint',
          icon: 'Workflow',
          description:
            'Websites, CRM, dashboards, automation setup, and digital operation systems.',
        },
        {
          title: 'Commerce Activation',
          icon: 'Users',
          description:
            'Marketplace, live commerce, affiliate, creator-led conversion, and sales campaigns.',
        },
        {
          title: 'AI & Automation Sprint',
          icon: 'Bot',
          description:
            'AI assistants, lead qualification, workflow systems, and reporting automation.',
        },
      ],
    },

    id: {
      heroLabel: 'Solusi',
      heroTitle1: 'Lima Cara Kami Membantu',
      heroTitle2: 'Brand Bertumbuh',
      heroDesc:
        'Dari strategi dan aktivasi kampanye hingga teknologi, commerce, otomasi, dan operasional berbasis AI — Hypernusa menghubungkan setiap langkah ke dalam satu ekosistem pertumbuhan yang terukur.',

      philosophyTitle1: 'Bukan Sekadar Layanan.',
      philosophyTitle2: 'Sistem Pertumbuhan yang Terhubung.',
      philosophyDesc:
        'Pertumbuhan tidak terjadi dari satu kanal saja. Dibutuhkan strategi, eksekusi kreatif, media, commerce, teknologi, data, dan operasional yang bergerak ke arah yang sama — agar setiap kampanye, konten, kanal, website, dan workflow memiliki peran yang jelas dalam mendorong brand maju.',

      serviceLabel: 'Ruang Layanan',
      serviceTitle1: 'Kapabilitas yang Dibangun',
      serviceTitle2: 'untuk Mengaktifkan Pertumbuhan',

      engagementLabel: 'Model Kerja',
      engagementTitle1: 'Cara Fleksibel',
      engagementTitle2: 'Membangun Pertumbuhan Bersama',

      ctaTitle1: 'Siap bergerak dari',
      ctaTitle2: 'aktivitas yang terpisah?',
      ctaDesc:
        'Mari hubungkan strategi, kampanye, commerce, teknologi, otomasi, dan pelaporan Anda ke dalam satu sistem pertumbuhan.',
      cta: 'Diskusi',

      solutionCategories: [
        {
          number: '01',
          title: 'Growth Activation Loop',
          icon: 'RefreshCcw',
          services:
            'Sistem pertumbuhan bulanan terintegrasi untuk brand yang membutuhkan pergerakan berkelanjutan, bukan konten yang berjalan acak. Mencakup strategi pertumbuhan, arah komunikasi, sistem konten, perencanaan kampanye, dukungan media, pelaporan, dan optimasi.',
        },
        {
          number: '02',
          title: 'Campaign / Launch Kit',
          icon: 'Rocket',
          services:
            'Sprint terarah untuk peluncuran produk, kampanye brand, kampanye musiman, dan kampanye publik — mencakup peran kampanye, pesan utama, big idea, key visual, content burst, amplifikasi, dan hasil yang terukur.',
        },
        {
          number: '03',
          title: 'Web & Automation Sprint',
          icon: 'Workflow',
          services:
            'Pembangunan infrastruktur digital untuk website, landing page, microsite, CRM, alur WhatsApp, dashboard, otomatisasi pelaporan, dan workflow berbasis AI.',
        },
        {
          number: '04',
          title: 'Commerce & Affiliate Growth',
          icon: 'ShoppingBag',
          services:
            'Kampanye marketplace, live commerce, manajemen afiliasi, aktivasi creator, tracking commerce, dan konten berorientasi penjualan untuk brand consumer, retail, beauty, lifestyle, dan FMCG.',
        },
        {
          number: '05',
          title: 'AI-Powered Growth Ops',
          icon: 'Bot',
          services:
            'AI assistant, dukungan pelanggan dan sales, kualifikasi lead, pelaporan otomatis, struktur CRM, workflow automation, dan sistem knowledge base.',
        },
      ],

      engagementModels: [
        {
          title: 'Strategic Retainer',
          icon: 'Target',
          description:
            'Aktivasi pertumbuhan berkelanjutan, sistem konten, perencanaan kampanye, pelaporan, dan optimasi.',
        },
        {
          title: 'Campaign Sprint',
          icon: 'Rocket',
          description:
            'Peluncuran produk, kampanye brand, kampanye musiman, dan aktivasi yang menyasar publik.',
        },
        {
          title: 'Digital Infrastructure Sprint',
          icon: 'Workflow',
          description:
            'Website, CRM, dashboard, setup otomasi, dan sistem operasional digital.',
        },
        {
          title: 'Commerce Activation',
          icon: 'Users',
          description:
            'Marketplace, live commerce, afiliasi, creator-led conversion, dan kampanye penjualan.',
        },
        {
          title: 'AI & Automation Sprint',
          icon: 'Bot',
          description:
            'AI assistant, kualifikasi lead, sistem workflow, dan otomatisasi pelaporan.',
        },
      ],
    },
  };

  const currentCopy = copy[language];

  return (
    <>
      <Navbar />

      <main className="solutions-page">
        <section className="solutions-hero">
          <div className="solutions-hero-bg"></div>
          <div className="solutions-hero-overlay"></div>
          <div className="solutions-noise"></div>

          <div className="page-container">
            <div className="page-label">
              <span className="page-line"></span>
              <span>{currentCopy.heroLabel}</span>
            </div>

            <h1>
              {currentCopy.heroTitle1}
              <br />
              <span>{currentCopy.heroTitle2}</span>
            </h1>

            <p>{currentCopy.heroDesc}</p>
          </div>
        </section>

        <section className="solution-philosophy">
          <div className="page-container philosophy-grid">
            <h2>
              {currentCopy.philosophyTitle1}
              <br />
              <span>{currentCopy.philosophyTitle2}</span>
            </h2>

            <p>{currentCopy.philosophyDesc}</p>
          </div>
        </section>

        <section className="solution-categories">
          <div className="page-container">
            <div className="section-header">
              <div className="page-label">
                <span className="page-line"></span>
                <span>{currentCopy.serviceLabel}</span>
              </div>

              <h2>
                {currentCopy.serviceTitle1}
                <br />
                <span>{currentCopy.serviceTitle2}</span>
              </h2>
            </div>

            <div className="categories-grid">
              {currentCopy.solutionCategories.map((item) => {
                const Icon = icons[item.icon];

                return (
                  <article className="solution-card" key={item.number}>
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
                <span>{currentCopy.engagementLabel}</span>
              </div>

              <h2>
                {currentCopy.engagementTitle1}
                <br />
                <span>{currentCopy.engagementTitle2}</span>
              </h2>
            </div>

            <div className="models-grid">
              {currentCopy.engagementModels.map((item) => {
                const Icon = icons[item.icon];

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
              {currentCopy.ctaTitle1}
              <br />
              <span>{currentCopy.ctaTitle2}</span>
            </h2>

            <p>{currentCopy.ctaDesc}</p>

            <a href="/lets-talk" className="cta-button">
              {currentCopy.cta}
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
          z-index: 4;
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .solutions-hero {
          position: relative;
          padding: 190px 0 140px;
          background: #050510;
          overflow: hidden;
          isolation: isolate;
        }

       .solutions-hero-bg {
  position: absolute;
  inset: 0;
  background: url('/images/solutionpage-city-bg.jpg') center/cover no-repeat;
  z-index: 0;
  opacity: 0.66;
  filter: brightness(1.05) saturate(1.18) contrast(1.02);
  transform: scale(1.02);
}

.solutions-hero-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    linear-gradient(
      180deg,
      rgba(5, 5, 16, 0.18) 0%,
      rgba(5, 5, 16, 0.62) 100%
    ),
    linear-gradient(
      90deg,
      rgba(5, 5, 16, 0.42) 0%,
      rgba(5, 5, 16, 0.08) 50%,
      rgba(5, 5, 16, 0.42) 100%
    ),
    radial-gradient(
      circle at 18% 22%,
      rgba(102, 126, 234, 0.22),
      transparent 34%
    ),
    radial-gradient(
      circle at 86% 54%,
      rgba(236, 72, 153, 0.18),
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
          opacity: 0.35;
          pointer-events: none;
          z-index: 2;
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
          background: linear-gradient(90deg, rgba(167, 178, 255, 0.75), transparent);
        }

        .page-label span:last-child {
          font-size: 13px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.58);
          font-weight: 700;
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
          text-shadow: 0 18px 60px rgba(0, 0, 0, 0.42);
        }

        .solutions-hero h1 span,
        .section-header h2 span,
        .philosophy-grid h2 span,
        .cta-box h2 span {
          background: linear-gradient(135deg, #ffffff 0%, #a78bfa 45%, #ec4899 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .solutions-hero p {
          max-width: 820px;
          margin-top: 44px;
          font-size: 21px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.68);
          font-weight: 300;
          text-shadow: 0 10px 34px rgba(0, 0, 0, 0.38);
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
          color: rgba(255, 255, 255, 0.68);
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
          min-height: 390px;
          padding: 30px;
          border-radius: 26px;
          overflow: hidden;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.03));
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
            radial-gradient(circle at 90% 20%, rgba(236, 72, 153, 0.12), transparent 32%);
          opacity: 0;
          transition: opacity 0.45s ease;
          pointer-events: none;
        }

        .solution-card:hover,
        .model-card:hover {
          transform: translateY(-8px);
          border-color: rgba(167, 178, 255, 0.3);
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.04));
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
          background: rgba(139, 92, 246, 0.12);
          filter: blur(42px);
        }

        .card-top {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 64px;
        }

        .card-top span {
          font-size: 13px;
          letter-spacing: 0.18em;
          color: rgba(167, 178, 255, 0.78);
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
          background: rgba(167, 178, 255, 0.1);
          border: 1px solid rgba(167, 178, 255, 0.16);
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
          color: rgba(255, 255, 255, 0.64);
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
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.03));
          border: 1px solid rgba(167, 178, 255, 0.16);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          transition:
            transform 0.45s cubic-bezier(0.4, 0, 0.2, 1),
            border-color 0.45s ease,
            background 0.45s ease;
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

        .cta-box p {
          max-width: 760px;
          margin: 32px auto 0;
          font-size: 19px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.66);
          font-weight: 300;
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
          background: linear-gradient(135deg, #667eea 0%, #ec4899 100%);
          box-shadow: 0 16px 48px rgba(102, 126, 234, 0.3);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .cta-button:hover {
          transform: translateY(-4px);
          box-shadow: 0 24px 60px rgba(236, 72, 153, 0.34);
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

          .solutions-hero-bg {
            opacity: 0.66;
            background-position: center;
            filter: brightness(1.08) saturate(1.18) contrast(1.02);
            transform: scale(1.04);
          }

          .solutions-hero-overlay {
            background:
              linear-gradient(
                180deg,
                rgba(5, 5, 16, 0.18) 0%,
                rgba(5, 5, 16, 0.56) 100%
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

          .cta-box p {
            font-size: 17px;
          }
        }
      `}</style>
    </>
  );
};

export default SolutionsPage;