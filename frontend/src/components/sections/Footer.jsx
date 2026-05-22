import React from 'react';
import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo gradient-text">AMN</div>

            <p className="footer-tagline">
              Growth Activation Agency helping brands connect strategy, creative execution,
              commerce, technology, and AI-powered operations.
            </p>

            <div className="footer-social">
              <a href="https://instagram.com/pt.amnindonesia" target="_blank" rel="noopener noreferrer" className="social-link">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com/company/pt-amn-indonesia" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin size={20} />
              </a>
              <a href="mailto:hello@amnindonesia.com" className="social-link">
                <Mail size={20} />
              </a>
              <a href="tel:+6285236724068" className="social-link">
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-title">Solutions</h4>
              <ul className="footer-list">
                <li><a href="/solutions">Creative & Campaign</a></li>
                <li><a href="/solutions">Media & Performance</a></li>
                <li><a href="/solutions">Experience & Tech</a></li>
                <li><a href="/solutions">Commerce Growth</a></li>
                <li><a href="/solutions">Data & AI Operations</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">Company</h4>
              <ul className="footer-list">
                <li><a href="/">Home</a></li>
                <li><a href="/work">Work</a></li>
                <li><a href="/solutions">Solutions</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/lets-talk">Let&apos;s Talk</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">Contact</h4>
              <ul className="footer-list">
                <li><a href="mailto:hello@amnindonesia.com">Email</a></li>
                <li><a href="https://wa.me/6285236724068" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
                <li><a href="https://linkedin.com/company/pt-amn-indonesia" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://instagram.com/pt.amnindonesia" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li className="footer-location"><MapPin size={14} /> Indonesia</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 PT Anak Muda Nusantara. All rights reserved.
          </p>

          <div className="footer-credits">
            <span>Made with </span>
            <span className="gradient-text">passion</span>
            <span> in Indonesia</span>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .footer {
          position: relative;
          background:
            radial-gradient(circle at 20% 0%, rgba(102, 126, 234, 0.1), transparent 28%),
            linear-gradient(180deg, #080818 0%, #050510 100%);
          padding: 90px 40px 42px;
          border-top: 1px solid rgba(167, 178, 255, 0.1);
          overflow: hidden;
        }

        .footer::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(167, 178, 255, 0.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(167, 178, 255, 0.018) 1px, transparent 1px);
          background-size: 88px 88px;
          pointer-events: none;
        }

        .footer-container {
          position: relative;
          z-index: 2;
          max-width: 1400px;
          margin: 0 auto;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1.2fr 2fr;
          gap: 90px;
          margin-bottom: 64px;
          padding-bottom: 64px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .footer-brand {
          max-width: 430px;
        }

        .footer-logo {
          font-size: 38px;
          font-weight: 800;
          letter-spacing: 2px;
          margin-bottom: 22px;
        }

        .footer-tagline {
          font-size: 15px;
          line-height: 1.85;
          color: rgba(255, 255, 255, 0.58);
          margin: 0 0 30px;
        }

        .footer-social {
          display: flex;
          gap: 12px;
        }

        .social-link {
          width: 44px;
          height: 44px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(167, 178, 255, 0.12);
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.58);
          text-decoration: none;
          transition: background 0.3s ease, border-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
        }

        .social-link:hover {
          background: rgba(102, 126, 234, 0.12);
          border-color: rgba(167, 178, 255, 0.34);
          color: #ffffff;
          transform: translateY(-3px);
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 54px;
        }

        .footer-title {
          font-size: 13px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.88);
          margin: 0 0 22px;
          text-transform: uppercase;
          letter-spacing: 0.16em;
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
          color: rgba(255, 255, 255, 0.55);
          text-decoration: none;
          font-size: 14px;
          line-height: 1.5;
          transition: color 0.3s ease, transform 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .footer-list a:hover {
          color: #a7b2ff;
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
          color: rgba(255, 255, 255, 0.48);
          margin: 0;
        }

        @media (max-width: 1024px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .footer-links {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .footer {
            padding: 70px 24px 34px;
          }

          .footer-links {
            grid-template-columns: 1fr;
            gap: 38px;
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