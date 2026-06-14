import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('hypernusa_language');

    if (savedLanguage === 'id' || savedLanguage === 'en') {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    localStorage.setItem('hypernusa_language', selectedLanguage);
    window.dispatchEvent(
      new CustomEvent('hypernusa-language-change', {
        detail: selectedLanguage,
      })
    );
  };

  const copy = {
    en: {
      home: 'Home',
      solutions: 'Solutions',
      work: 'Work',
      about: 'About',
      letsTalk: "Let’s Talk",
      noteLine1: 'Growth Activation Agency',
      noteLine2: 'Jakarta, Indonesia',
    },
    id: {
      home: 'Beranda',
      solutions: 'Solusi',
      work: 'Karya',
      about: 'Tentang',
      letsTalk: 'Diskusi',
      noteLine1: 'Agensi Aktivasi Pertumbuhan',
      noteLine2: 'Jakarta, Indonesia',
    },
  };

  const menuItems = [
    { label: copy[language].home, href: '/' },
    { label: copy[language].solutions, href: '/solutions' },
    { label: copy[language].work, href: '/work' },
    { label: copy[language].about, href: '/about' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} data-testid="navbar">
      <div className="navbar-shell">
        <div className="navbar-container">
          <a href="/" className="navbar-logo" data-testid="navbar-logo">
            <img
              src="/images/hypernusa-logo-color.svg"
              alt="Hypernusa"
              className="navbar-logo-image"
            />
          </a>

          <ul className="navbar-menu desktop-menu">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="navbar-actions desktop-actions">
            <div className="language-toggle" aria-label="Language selector">
              <button
                type="button"
                className={`language-btn ${language === 'id' ? 'active' : ''}`}
                onClick={() => handleLanguageChange('id')}
              >
                ID
              </button>
              <span></span>
              <button
                type="button"
                className={`language-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => handleLanguageChange('en')}
              >
                EN
              </button>
            </div>

            <a href="/lets-talk" className="btn-contact" data-testid="navbar-cta">
              {copy[language].letsTalk}
            </a>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            data-testid="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <ul className="mobile-menu-items">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}

            <li>
              <a
                href="/lets-talk"
                className="mobile-cta-btn"
                onClick={() => setMobileMenuOpen(false)}
              >
                {copy[language].letsTalk}
              </a>
            </li>

            <li className="mobile-language-row">
              <button
                type="button"
                className={`mobile-language-btn ${language === 'id' ? 'active' : ''}`}
                onClick={() => handleLanguageChange('id')}
              >
                Indonesia
              </button>
              <button
                type="button"
                className={`mobile-language-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => handleLanguageChange('en')}
              >
                English
              </button>
            </li>

            <li className="mobile-menu-note">
              {copy[language].noteLine1}
              <br />
              {copy[language].noteLine2}
            </li>
          </ul>
        </div>
      )}

      <style jsx="true">{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 18px 0;
          transition:
            padding 0.45s cubic-bezier(0.4, 0, 0.2, 1),
            background 0.45s cubic-bezier(0.4, 0, 0.2, 1),
            backdrop-filter 0.45s cubic-bezier(0.4, 0, 0.2, 1),
            box-shadow 0.45s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .navbar.scrolled {
          padding: 12px 0;
          background: rgba(10, 10, 28, 0.55);
          backdrop-filter: saturate(160%) blur(22px);
          -webkit-backdrop-filter: saturate(160%) blur(22px);
          box-shadow:
            0 1px 0 rgba(167, 178, 255, 0.08),
            0 12px 40px rgba(0, 0, 0, 0.35);
        }

        .navbar::before {
          content: '';
          position: absolute;
          top: 0;
          left: 20%;
          right: 20%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(167, 178, 255, 0.4) 50%,
            transparent 100%
          );
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .navbar.scrolled::before {
          opacity: 1;
        }

        .navbar-shell {
          width: 100%;
        }

        .navbar-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-logo {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .navbar-logo-image {
          height: 60px;
          width: auto;
          display: block;
          object-fit: contain;
        }

        .navbar.scrolled .navbar-logo {
          transform: scale(0.96);
        }

        .navbar-menu {
          display: flex;
          list-style: none;
          gap: 38px;
          margin: 0;
          padding: 0;
          align-items: center;
        }

        .desktop-menu {
          display: none;
        }

        .nav-link {
          color: rgba(255, 255, 255, 0.65);
          text-decoration: none;
          font-weight: 500;
          font-size: 14px;
          letter-spacing: 0.2px;
          transition: color 0.3s ease;
          position: relative;
          padding: 4px 0;
        }

        .nav-link:hover {
          color: #ffffff;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #a7b2ff, transparent);
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .navbar-actions {
          display: none;
          align-items: center;
          gap: 14px;
        }

        .language-toggle {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 7px 10px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.045);
          border: 1px solid rgba(167, 178, 255, 0.14);
        }

        .language-toggle span {
          width: 1px;
          height: 13px;
          background: rgba(255, 255, 255, 0.16);
        }

        .language-btn {
          border: 0;
          background: transparent;
          color: rgba(255, 255, 255, 0.42);
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
          padding: 0;
          letter-spacing: 0.05em;
        }

        .language-btn.active {
          color: #ffffff;
        }

        .btn-contact {
          padding: 11px 24px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          text-decoration: none;
          border-radius: 10px;
          font-weight: 600;
          font-size: 13.5px;
          letter-spacing: 0.2px;
          transition:
            transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
            box-shadow 0.4s ease;
          display: inline-block;
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.25);
        }

        .btn-contact:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(102, 126, 234, 0.45);
        }

        .mobile-menu-btn {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 9px;
          transition: background 0.3s ease, border-color 0.3s ease;
        }

        .mobile-menu-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(167, 178, 255, 0.25);
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background:
            linear-gradient(
              180deg,
              rgba(10, 10, 28, 0.96) 0%,
              rgba(5, 5, 16, 0.98) 100%
            );
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          border-bottom: 1px solid rgba(167, 178, 255, 0.1);
          animation: slideDown 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mobile-menu-note {
          margin-top: 28px !important;
          padding-top: 22px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.42);
          font-size: 13px;
          line-height: 1.8;
          letter-spacing: 0.02em;
        }

        .mobile-language-row {
          display: flex;
          gap: 10px;
          margin-top: 22px !important;
        }

        .mobile-language-btn {
          flex: 1;
          padding: 11px 14px;
          border-radius: 12px;
          border: 1px solid rgba(167, 178, 255, 0.14);
          background: rgba(255, 255, 255, 0.045);
          color: rgba(255, 255, 255, 0.55);
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
        }

        .mobile-language-btn.active {
          color: #ffffff;
          background: rgba(102, 126, 234, 0.18);
          border-color: rgba(167, 178, 255, 0.32);
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mobile-menu-items {
          list-style: none;
          padding: 24px 40px 32px;
          margin: 0;
        }

        .mobile-menu-items li {
          margin: 18px 0;
        }

        .mobile-nav-link {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 17px;
          font-weight: 500;
          display: block;
          transition: color 0.3s ease;
        }

        .mobile-nav-link:hover {
          color: #ffffff;
        }

        .mobile-cta-btn {
          display: inline-block;
          margin-top: 8px;
          padding: 14px 28px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          text-decoration: none;
          border-radius: 10px;
          font-weight: 600;
          font-size: 15px;
          transition: transform 0.3s ease;
        }

        .mobile-cta-btn:hover {
          transform: scale(1.03);
        }

        @media (min-width: 769px) {
          .desktop-menu {
            display: flex;
          }

          .desktop-actions {
            display: flex;
          }

          .mobile-menu-btn {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .navbar {
            padding: 14px 0;
            background: rgba(6, 8, 24, 0.28);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
          }

          .navbar-container {
            padding: 0 20px;
          }

          .navbar-logo-image {
            height: 58px;
          }

          .mobile-menu-btn {
            width: 52px;
            height: 52px;
            border-radius: 14px;
            background: rgba(255, 255, 255, 0.055);
            border-color: rgba(167, 178, 255, 0.18);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;