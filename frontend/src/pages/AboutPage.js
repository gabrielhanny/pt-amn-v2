import React, { useEffect, useState } from 'react';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/sections/Footer';
import {
  Target,
  Lightbulb,
  ShoppingBag,
  Workflow,
  BarChart3,
  ArrowRight,
} from 'lucide-react';

const icons = {
  Target,
  Lightbulb,
  ShoppingBag,
  Workflow,
  BarChart3,
};

const AboutPage = () => {
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
      heroLabel: 'About Hypernusa',
      heroTitle1: 'Built as a Growth Partner,',
      heroTitle2: 'Not a Conventional Vendor',
      heroDesc:
        'Hypernusa is a Growth Activation Agency by PT Anak Muda Nusantara, built to connect strategy, creative, commerce, technology, automation, and reporting into one integrated growth ecosystem.',

      whoLabel: 'Who We Are',
      whoTitle1: 'Growth Partner',
      whoTitle2: 'for Connected Brand Movement',
      whoDesc:
        'We help brands move beyond scattered marketing activity by building connected systems for strategy, campaign, content, commerce, digital experience, automation, and performance learning.',

      differentLabel: 'What Makes Hypernusa Different',
      differentTitle1: 'Clearer Direction.',
      differentTitle2: 'Sharper Execution. Smarter Systems.',

      operatingLabel: 'Operating Model',
      operatingTitle1: 'Strategy, Creative,',
      operatingTitle2: 'Commerce, Tech & Learning',
      operatingDesc:
        'Hypernusa connects strategy, creative direction, campaign activation, commerce, technology, automation, AI, and performance learning into one growth ecosystem — so every campaign, content, channel, website, and workflow has a clear role in moving the brand forward.',

      ctaTitle1: "Let's Build the Next",
      ctaTitle2: 'Growth Move Together',
      cta: "Let's Talk",

      differences: [
        {
          title: 'Strategy Before Assets',
          description:
            'We begin with business direction, brand objective, audience movement, and growth logic before producing any asset.',
          icon: 'Target',
        },
        {
          title: 'Creative with Commercial Logic',
          description:
            'Ideas are designed not only to look good, but to move audiences toward action, conversion, and measurable outcomes.',
          icon: 'Lightbulb',
        },
        {
          title: 'Commerce-Aware Activation',
          description:
            'Campaigns, content, channels, and digital experiences are connected to conversion, sales movement, and business impact.',
          icon: 'ShoppingBag',
        },
        {
          title: 'Tech-Enabled Operation',
          description:
            'Web, CRM, automation, AI workflows, reporting, and dashboards become part of a scalable growth infrastructure.',
          icon: 'Workflow',
        },
        {
          title: 'Learning-Driven Execution',
          description:
            'Performance is treated as intelligence, not just reporting — helping every next move become sharper.',
          icon: 'BarChart3',
        },
      ],
    },

    id: {
      heroLabel: 'Tentang Hypernusa',
      heroTitle1: 'Dibangun sebagai Mitra Pertumbuhan,',
      heroTitle2: 'Bukan Vendor Konvensional',
      heroDesc:
        'Hypernusa adalah Growth Activation Agency dari PT Anak Muda Nusantara, dibangun untuk menghubungkan strategi, kreatif, commerce, teknologi, otomasi, dan pelaporan ke dalam satu ekosistem pertumbuhan yang terintegrasi.',

      whoLabel: 'Siapa Kami',
      whoTitle1: 'Mitra Pertumbuhan',
      whoTitle2: 'untuk Pergerakan Brand yang Terhubung',
      whoDesc:
        'Kami membantu brand bergerak melampaui aktivitas pemasaran yang tersebar dengan membangun sistem terhubung untuk strategi, kampanye, konten, commerce, pengalaman digital, otomasi, dan pembelajaran performa.',

      differentLabel: 'Yang Membuat Hypernusa Berbeda',
      differentTitle1: 'Arah Lebih Jelas.',
      differentTitle2: 'Eksekusi Lebih Tajam. Sistem Lebih Cerdas.',

      operatingLabel: 'Model Operasional',
      operatingTitle1: 'Strategi, Kreatif,',
      operatingTitle2: 'Commerce, Teknologi & Pembelajaran',
      operatingDesc:
        'Hypernusa menghubungkan strategi, arahan kreatif, aktivasi kampanye, commerce, teknologi, otomasi, AI, dan pembelajaran performa ke dalam satu ekosistem pertumbuhan — agar setiap kampanye, konten, kanal, website, dan workflow memiliki peran yang jelas dalam mendorong brand bergerak maju.',

      ctaTitle1: 'Mari Bangun Langkah',
      ctaTitle2: 'Pertumbuhan Berikutnya',
      cta: 'Diskusi',

      differences: [
        {
          title: 'Strategi Sebelum Aset',
          description:
            'Kami memulai dari arah bisnis, tujuan brand, pergerakan audiens, dan logika pertumbuhan sebelum memproduksi aset apa pun.',
          icon: 'Target',
        },
        {
          title: 'Kreatif dengan Logika Komersial',
          description:
            'Ide dirancang bukan hanya agar terlihat menarik, tetapi untuk menggerakkan audiens menuju aksi, konversi, dan hasil yang terukur.',
          icon: 'Lightbulb',
        },
        {
          title: 'Aktivasi yang Sadar Commerce',
          description:
            'Kampanye, konten, kanal, dan pengalaman digital dihubungkan dengan konversi, pergerakan penjualan, dan dampak bisnis.',
          icon: 'ShoppingBag',
        },
        {
          title: 'Operasional Berbasis Teknologi',
          description:
            'Web, CRM, otomasi, workflow AI, pelaporan, dan dashboard menjadi bagian dari infrastruktur pertumbuhan yang scalable.',
          icon: 'Workflow',
        },
        {
          title: 'Eksekusi Berbasis Pembelajaran',
          description:
            'Performa diperlakukan sebagai intelligence, bukan sekadar laporan — agar setiap langkah berikutnya menjadi lebih tajam.',
          icon: 'BarChart3',
        },
      ],
    },
  };

  const currentCopy = copy[language];

  return (
    <>
    <SEO
      title="About | Hypernusa Growth Activation Experience"
      description="Explore Hypernusa selected experience across brand campaigns, digital activation, commerce growth, CRM, automation, and scalable growth operations."
      url="https://www.hypernusa.com/work"
    />
      <Navbar />

      <main className="about-page">
        <section className="about-hero">
          <div className="about-hero-bg"></div>
          <div className="about-hero-overlay"></div>
          <div className="about-noise"></div>

          <div className="about-container">
            <div className="about-label">
              <span className="about-line"></span>
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

        <section className="who-we-are">
          <div className="about-container who-grid">
            <div>
              <div className="about-label">
                <span className="about-line"></span>
                <span>{currentCopy.whoLabel}</span>
              </div>

              <h2>
                {currentCopy.whoTitle1}
                <br />
                <span>{currentCopy.whoTitle2}</span>
              </h2>
            </div>

            <p>{currentCopy.whoDesc}</p>
          </div>
        </section>

        <section className="different-section">
          <div className="about-container">
            <div className="section-header">
              <div className="about-label">
                <span className="about-line"></span>
                <span>{currentCopy.differentLabel}</span>
              </div>

              <h2>
                {currentCopy.differentTitle1}
                <br />
                <span>{currentCopy.differentTitle2}</span>
              </h2>
            </div>

            <div className="difference-grid">
              {currentCopy.differences.map((item) => {
                const Icon = icons[item.icon];

                return (
                  <article className="difference-card" key={item.title}>
                    <div className="difference-glow"></div>

                    <div className="difference-icon">
                      <Icon size={24} strokeWidth={1.7} />
                    </div>

                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="operating-model">
          <div className="about-container operating-box">
            <div className="about-label">
              <span className="about-line"></span>
              <span>{currentCopy.operatingLabel}</span>
            </div>

            <h2>
              {currentCopy.operatingTitle1}
              <br />
              <span>{currentCopy.operatingTitle2}</span>
            </h2>

            <p>{currentCopy.operatingDesc}</p>
          </div>
        </section>

        <section className="about-cta">
          <div className="about-container cta-box">
            <h2>
              {currentCopy.ctaTitle1}
              <br />
              <span>{currentCopy.ctaTitle2}</span>
            </h2>

            <a href="/lets-talk" className="cta-button">
              {currentCopy.cta}
              <ArrowRight size={20} />
            </a>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx="true">{`
        .about-page {
          min-height: 100vh;
          background: #050510;
          color: #ffffff;
          overflow: hidden;
        }

        .about-container {
          position: relative;
          z-index: 4;
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .about-hero {
          position: relative;
          padding: 190px 0 140px;
          background: #050510;
          overflow: hidden;
          isolation: isolate;
        }

        .about-hero-bg {
          position: absolute;
          inset: 0;
          background: url('/images/aboutpage-city-bg.jpg') center/cover no-repeat;
          z-index: 0;
          opacity: 0.72;
           filter: brightness(1.08) saturate(1.18) contrast(1.02);
          transform: scale(1.02);
        }

        .about-hero-overlay {
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
  rgba(5, 5, 16, 0.42) 0%,
  rgba(5, 5, 16, 0.08) 50%,
  rgba(5, 5, 16, 0.42) 100%
),
            radial-gradient(
              circle at 18% 22%,
              rgba(102, 126, 234, 0.18),
              transparent 34%
            ),
            radial-gradient(
              circle at 86% 54%,
              rgba(236, 72, 153, 0.14),
              transparent 32%
            );
        }

        .about-noise {
          position: absolute;
          inset: 0;
          z-index: 2;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E");
          opacity: 0.025;
          pointer-events: none;
          mix-blend-mode: overlay;
        }

        .about-hero::before,
        .different-section::before,
        .operating-model::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(167, 178, 255, 0.022) 1px, transparent 1px),
            linear-gradient(90deg, rgba(167, 178, 255, 0.022) 1px, transparent 1px);
          background-size: 88px 88px;
          opacity: 0.32;
          pointer-events: none;
          z-index: 2;
        }

        .about-label {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 32px;
        }

        .about-line {
          width: 52px;
          height: 1px;
          background: linear-gradient(90deg, rgba(167, 178, 255, 0.75), transparent);
        }

        .about-label span:last-child {
          font-size: 13px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.58);
          font-weight: 700;
        }

        .about-hero h1,
        .section-header h2,
        .who-grid h2,
        .operating-box h2,
        .cta-box h2 {
          margin: 0;
         font-size: clamp(48px, 6vw, 82px);
          line-height: 0.95;
          letter-spacing: -0.06em;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.96);
          text-shadow: 0 18px 60px rgba(0, 0, 0, 0.42);
        }

        .about-hero h1 span,
        .section-header h2 span,
        .who-grid h2 span,
        .operating-box h2 span,
        .cta-box h2 span {
          background: linear-gradient(135deg, #ffffff 0%, #a78bfa 45%, #ec4899 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .about-hero p {
          max-width: 850px;
          margin-top: 44px;
          font-size: 21px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.68);
          font-weight: 300;
          text-shadow: 0 10px 34px rgba(0, 0, 0, 0.38);
        }

        .who-we-are {
          padding: 150px 0;
          background: linear-gradient(180deg, #050510 0%, #080818 100%);
        }

       .who-grid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 64px;
  align-items: center;
}
        .who-grid p {
          margin: 12px 0 0;
          font-size: 22px;
          line-height: 1.85;
          color: rgba(255, 255, 255, 0.68);
          font-weight: 300;
          max-width: 620px;
        }

        .different-section {
          position: relative;
          padding: 160px 0;
          background:
            radial-gradient(circle at 16% 16%, rgba(102, 126, 234, 0.1), transparent 30%),
            radial-gradient(circle at 90% 70%, rgba(236, 72, 153, 0.08), transparent 32%),
            linear-gradient(180deg, #080818 0%, #050510 100%);
          overflow: hidden;
        }

        .section-header {
          max-width: 920px;
          margin-bottom: 76px;
        }

        .difference-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 20px;
        }

        .difference-card {
          position: relative;
          min-height: 320px;
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

        .difference-card:nth-child(1),
        .difference-card:nth-child(2),
        .difference-card:nth-child(3) {
          grid-column: span 2;
        }

        .difference-card:nth-child(4),
        .difference-card:nth-child(5) {
          grid-column: span 3;
        }

        .difference-card::before {
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

        .difference-card:hover {
          transform: translateY(-8px);
          border-color: rgba(167, 178, 255, 0.3);
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.04));
        }

        .difference-card:hover::before {
          opacity: 1;
        }

        .difference-glow {
          position: absolute;
          width: 160px;
          height: 160px;
          top: -80px;
          right: -60px;
          border-radius: 999px;
          background: rgba(139, 92, 246, 0.12);
          filter: blur(42px);
        }

        .difference-icon {
          position: relative;
          z-index: 2;
          width: 54px;
          height: 54px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #a7b2ff;
          background: rgba(167, 178, 255, 0.1);
          border: 1px solid rgba(167, 178, 255, 0.16);
          margin-bottom: 72px;
        }

        .difference-card h3 {
          position: relative;
          z-index: 2;
          margin: 0 0 18px;
          font-size: 28px;
          line-height: 1.08;
          letter-spacing: -0.045em;
          color: #ffffff;
          font-weight: 400;
        }

        .difference-card p {
          position: relative;
          z-index: 2;
          margin: 0;
          font-size: 15px;
          line-height: 1.78;
          color: rgba(255, 255, 255, 0.64);
        }

        .operating-model {
          position: relative;
          padding: 150px 0;
          background:
            radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.12), transparent 32%),
            linear-gradient(180deg, #050510 0%, #080818 100%);
          overflow: hidden;
        }

        .operating-box {
          padding: 72px 40px;
          border-radius: 34px;
          background: linear-gradient(145deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03));
          border: 1px solid rgba(167, 178, 255, 0.16);
          box-shadow: 0 24px 70px rgba(0,0,0,0.24);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        .operating-box p {
          max-width: 880px;
          margin-top: 42px;
          font-size: 20px;
          line-height: 1.85;
          color: rgba(255, 255, 255, 0.68);
          font-weight: 300;
        }

        .about-cta {
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
          background: linear-gradient(135deg, #667eea 0%, #ec4899 100%);
          box-shadow: 0 16px 48px rgba(102, 126, 234, 0.3);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .cta-button:hover {
          transform: translateY(-4px);
          box-shadow: 0 24px 60px rgba(236, 72, 153, 0.34);
        }

        @media (max-width: 980px) {
          .who-grid,
          .difference-grid {
            grid-template-columns: 1fr;
          }

          .difference-card:nth-child(n) {
            grid-column: auto;
          }
        }

        @media (max-width: 768px) {
          .about-container {
            padding: 0 24px;
          }

          .about-hero {
            padding: 150px 0 100px;
          }

          .about-hero-bg {
            opacity: 0.68;
            background-position: center;
            filter: brightness(1.08) saturate(1.18) contrast(1.02);
            transform: scale(1.04);
          }

          .about-hero-overlay {
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

          .who-we-are,
          .different-section,
          .operating-model,
          .about-cta {
            padding: 110px 0;
          }
            .who-grid {
  gap: 32px;
}

.who-grid h2 {
  font-size: 44px;
  line-height: 1.02;
}

.who-grid p {
  margin-top: 0;
}

          .about-hero h1,
          .section-header h2,
          .who-grid h2,
          .operating-box h2 {
            font-size: 54px;
            line-height: 1;
          }

          .about-hero p,
          .who-grid p,
          .operating-box p {
            font-size: 17px;
            line-height: 1.8;
          }

          .difference-card {
            min-height: auto;
            padding: 26px;
          }

          .difference-icon {
            margin-bottom: 52px;
          }

          .operating-box {
            padding: 34px 26px;
            border-radius: 26px;
          }
        }

        @media (max-width: 480px) {
          .about-hero {
            padding: 132px 0 92px;
          }

          .about-hero-bg {
            opacity: 0.74;
            background-position: center top;
            filter: brightness(1.16) saturate(1.2) contrast(1.02);
          }

          .about-hero-overlay {
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

          .about-hero h1 {
            font-size: 42px;
          }

          .who-grid h2,
          .section-header h2,
          .operating-box h2 {
            font-size: 42px;
          }

          .who-grid {
  gap: 28px;
}

.who-grid h2 {
  font-size: 38px;
}

          .difference-card h3 {
            font-size: 25px;
          }

          .cta-box h2 {
            font-size: 42px;
          }

          .cta-button {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
};

export default AboutPage;