import React, { useEffect, useState } from 'react';
import {
  Instagram,
  Linkedin,
  Facebook,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

const Footer = () => {
  const [language, setLanguage] = useState('en');

useEffect(() => {
  const savedLanguage =
    localStorage.getItem('hypernusa_language') || 'en';

  setLanguage(savedLanguage);

  const handleLanguageChange = (event) => {
    setLanguage(event.detail);
  };

  window.addEventListener(
    'hypernusa-language-change',
    handleLanguageChange
  );

  return () => {
    window.removeEventListener(
      'hypernusa-language-change',
      handleLanguageChange
    );
  };
}, []);

const copy = {
  en: {
    tagline:
      'Growth Activation Agency that helps brands turn marketing activity into measurable business movement. We connect strategy, creative, commerce, technology, automation, and reporting into one integrated growth ecosystem.',

    solutions: 'Solutions',
    company: 'Company',
    contact: 'Contact',

    home: 'Home',
    work: 'Work',
    about: 'About',
    letsTalk: "Let's Talk",

    email: 'Email',
    whatsapp: 'WhatsApp',

    copyright:
      '© 2026 PT Anak Muda Nusantara. All rights reserved.',

    crafted1: 'Crafted by ',
    crafted2: ' in Indonesia',
  },

  id: {
    tagline:
      'Agensi aktivasi pertumbuhan yang membantu brand mengubah aktivitas pemasaran menjadi hasil bisnis yang nyata dan terukur. Kami menghubungkan strategi, kreatif, komersial, teknologi, otomasi, dan pelaporan ke dalam satu ekosistem pertumbuhan yang terintegrasi.',

    solutions: 'Solusi',
    company: 'Perusahaan',
    contact: 'Kontak',

    home: 'Beranda',
    work: 'Karya',
    about: 'Tentang',
    letsTalk: 'Diskusi',

    email: 'Email',
    whatsapp: 'WhatsApp',

    copyright:
      '© 2026 PT Anak Muda Nusantara. Seluruh hak dilindungi.',

    crafted1: 'Dibangun oleh ',
    crafted2: ' di Indonesia',
  },
};
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <img
              src="/images/footer-logo.svg"
              alt="Hypernusa Growth Activation Agency Indonesia"
              className="footer-logo-image"
            />

           <p className="footer-tagline">
  {copy[language].tagline}
</p>

            <div className="footer-social">
              <a
                href="https://www.instagram.com/hypernusa"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                <Instagram size={19} />
              </a>

              <a
                href="https://www.linkedin.com/company/hypernusa/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <Linkedin size={19} />
              </a>

              <a
                href="https://facebook.com/hypernusa"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Facebook"
              >
                <Facebook size={19} />
              </a>

              <a
                href="mailto:hello@hypernusa.com"
                className="social-link"
                aria-label="Email"
              >
                <Mail size={19} />
              </a>

              <a
                href="https://wa.me/6285168157168"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="WhatsApp"
              >
                <Phone size={19} />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-title">Solutions</h4>
              <ul className="footer-list">
                <li><a href="/solutions">Growth Activation Loop</a></li>
                <li><a href="/solutions">Campaign / Launch Kit</a></li>
                <li><a href="/solutions">Web & Automation Sprint</a></li>
                <li><a href="/solutions">Commerce & Affiliate Growth</a></li>
                <li><a href="/solutions">AI-Powered Growth Ops</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">
  {copy[language].solutions}
</h4>

<h4 className="footer-title">
  {copy[language].company}
</h4>

<h4 className="footer-title">
  {copy[language].contact}
</h4>
              <ul className="footer-list">
               <li><a href="/">{copy[language].home}</a></li>

<li><a href="/work">{copy[language].work}</a></li>

<li><a href="/solutions">{copy[language].solutions}</a></li>

<li><a href="/about">{copy[language].about}</a></li>

<li><a href="/lets-talk">{copy[language].letsTalk}</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">Contact</h4>
              <ul className="footer-list">
                <li>
  <a href="mailto:hello@hypernusa.com">
    {copy[language].email}
  </a>
</li>
                <li>
                  <a
                    href="https://wa.me/6285168157168"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/hypernusa/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com/hypernusa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/hypernusa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
  <a
    href="https://www.google.com/maps/search/?api=1&query=Gedung+BEI+Tower+1+Level+3+Unit+304+Senayan+Jakarta+Selatan"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Buka lokasi Hypernusa di Google Maps"
    className="footer-location"
  >
    <MapPin size={14} />
    <span>
      Gedung BEI Tower 1 Level 3, Unit 304, Senayan, Jakarta Selatan
    </span>
  </a>
</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
           {copy[language].copyright}
          </p>

          <div className="footer-credits">
            <span>{copy[language].crafted1}</span>

<span className="gradient-text">
  Hypernusa
</span>

<span>{copy[language].crafted2}</span>
          </div>
        </div>
      </div>

      <style jsx="true">{`
      .footer {
  position: relative;
  background:
    url('/images/footer-city-bg.jpg')
    center / cover
    no-repeat;
  padding: 72px 40px 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  overflow: hidden;
  isolation: isolate;
}


.footer::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      180deg,
      rgba(5, 5, 16, 0.72) 0%,
      rgba(5, 5, 16, 0.84) 100%
    ),
    linear-gradient(
      90deg,
      rgba(5, 5, 16, 0.62) 0%,
      rgba(5, 5, 16, 0.36) 50%,
      rgba(5, 5, 16, 0.62) 100%
    ),
    radial-gradient(
      circle at 18% 18%,
      rgba(102, 120, 225, 0.08),
      transparent 30%
    ),
    radial-gradient(
      circle at 85% 24%,
      rgba(228, 73, 164, 0.06),
      transparent 30%
    );
  pointer-events: none;
  z-index: 1;
}


.footer::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(5, 5, 16, 0.50);
  pointer-events: none;
  z-index: 2;
}

      .footer-container {
  position: relative;
  z-index: 3;
  max-width: 1400px;
  margin: 0 auto;
}
        .footer-top {
          display: grid;
          grid-template-columns: 0.9fr 2fr;
          gap: 90px;
          margin-bottom: 48px;
          padding-bottom: 48px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .footer-brand {
          max-width: 360px;
        }

        .footer-logo-image {
          width: 220px;
          height: auto;
          display: block;
          margin-bottom: 22px;
        }

        .footer-tagline {
          font-size: 14px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.62);
          margin: 0 0 28px;
        }

        .footer-social {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .social-link {
          width: 42px;
          height: 42px;
          background: rgba(255, 255, 255, 0.055);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.68);
          text-decoration: none;
          transition: background 0.3s ease, border-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
        }

        .social-link:hover {
          background: rgba(102, 120, 225, 0.16);
          border-color: rgba(228, 73, 164, 0.35);
          color: #ffffff;
          transform: translateY(-3px);
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 54px;
        }

        .footer-title {
          font-size: 12px;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.92);
          margin: 0 0 22px;
          text-transform: uppercase;
          letter-spacing: 0.18em;
        }

        .footer-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-list li {
          margin-bottom: 13px;
        }

        .footer-list a,
        .footer-location {
          color: rgba(255, 255, 255, 0.58);
          text-decoration: none;
          font-size: 14px;
          line-height: 1.55;
          transition: color 0.3s ease, transform 0.3s ease;
          display: inline-flex;
          align-items: flex-start;
          gap: 8px;
        }

        .footer-location {
          max-width: 280px;
        }

        .footer-list a:hover {
          color: #ffffff;
          transform: translateX(3px);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .footer-copyright,
        .footer-credits {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.5);
          margin: 0;
        }

        @media (max-width: 1024px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 56px;
          }

          .footer-brand {
            max-width: 520px;
          }

          .footer-links {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .footer {
            padding: 64px 24px 32px;
            background-position: center;
          }
            .footer::before {
  opacity: 0.3;
  filter: brightness(0.72) saturate(1.1) contrast(1.02);
}

.footer::after {
  background:
    linear-gradient(
      180deg,
      rgba(5, 5, 16, 0.68) 0%,
      rgba(5, 5, 16, 0.9) 100%
    );
}

          .footer-top {
            gap: 44px;
            margin-bottom: 40px;
            padding-bottom: 40px;
          }

          .footer-logo-image {
            width: 170px;
          }

          .footer-links {
            grid-template-columns: 1fr;
            gap: 36px;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;