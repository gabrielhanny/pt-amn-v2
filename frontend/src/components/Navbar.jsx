import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Beranda', href: '#hero' },
    { label: 'Tentang', href: '#about' },
    { label: 'Layanan', href: '#services' },
    { label: 'Portfolio', href: '#work' },
    { label: 'Kontak', href: '#contact' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text gradient-text">AMN</span>
        </div>

        {/* Desktop Menu */}
        <ul className="navbar-menu desktop-menu">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="nav-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar-cta desktop-cta">
          <a href="#contact" className="btn-contact">
            Hubungi Kami
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <ul className="mobile-menu-items">
            {menuItems.map((item, index) => (
              <li key={index}>
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
                href="#contact" 
                className="mobile-cta-btn"
                onClick={() => setMobileMenuOpen(false)}
              >
                Hubungi Kami
              </a>
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
          padding: 20px 0;
          transition: background 0.3s ease, padding 0.3s ease, backdrop-filter 0.3s ease;
        }

        .navbar.scrolled {
          background: rgba(15, 15, 30, 0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 15px 0;
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
          font-size: 32px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .logo-text {
          cursor: pointer;
        }

        .navbar-menu {
          display: flex;
          list-style: none;
          gap: 40px;
          margin: 0;
          padding: 0;
        }

        .desktop-menu {
          display: none;
        }

        .nav-link {
          color: var(--color-text-secondary);
          text-decoration: none;
          font-weight: 500;
          font-size: 15px;
          transition: color 0.3s ease;
          position: relative;
        }

        .nav-link:hover {
          color: var(--color-text-primary);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .navbar-cta {
          display: none;
        }

        .btn-contact {
          padding: 12px 28px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: inline-block;
        }

        .btn-contact:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
        }

        .mobile-menu-btn {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          padding: 8px;
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(15, 15, 30, 0.98);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          animation: slideDown 0.3s ease;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mobile-menu-items {
          list-style: none;
          padding: 20px 40px;
          margin: 0;
        }

        .mobile-menu-items li {
          margin: 20px 0;
        }

        .mobile-nav-link {
          color: var(--color-text-secondary);
          text-decoration: none;
          font-size: 18px;
          font-weight: 500;
          display: block;
          transition: color 0.3s ease;
        }

        .mobile-nav-link:hover {
          color: var(--color-text-primary);
        }

        .mobile-cta-btn {
          display: inline-block;
          margin-top: 10px;
          padding: 14px 32px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 16px;
          transition: transform 0.3s ease;
        }

        .mobile-cta-btn:hover {
          transform: scale(1.05);
        }

        @media (min-width: 769px) {
          .desktop-menu {
            display: flex;
          }

          .desktop-cta {
            display: block;
          }

          .mobile-menu-btn {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .navbar-container {
            padding: 0 20px;
          }

          .navbar-logo {
            font-size: 28px;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
