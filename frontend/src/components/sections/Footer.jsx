import React from 'react';
import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo gradient-text">AMN</div>
            <p className="footer-tagline">
              Digital Growth Partner untuk bisnis Indonesia yang ingin berkembang lebih cepat dan lebih baik.
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
              <h4 className="footer-title">Layanan</h4>
              <ul className="footer-list">
                <li><a href="#services">Digital Campaign</a></li>
                <li><a href="#services">Social Media</a></li>
                <li><a href="#services">Website Development</a></li>
                <li><a href="#services">Automation</a></li>
                <li><a href="#services">AI Agents</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">Perusahaan</h4>
              <ul className="footer-list">
                <li><a href="#about">Tentang Kami</a></li>
                <li><a href="#work">Portfolio</a></li>
                <li><a href="#testimonials">Testimoni</a></li>
                <li><a href="#contact">Kontak</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">Kontak</h4>
              <ul className="footer-list">
                <li>
                  <a href="mailto:hello@amnindonesia.com">hello@amnindonesia.com</a>
                </li>
                <li>
                  <a href="tel:+6285236724068">+62 852 3672 4068</a>
                </li>
                <li>
                  <a href="https://instagram.com/pt.amnindonesia" target="_blank" rel="noopener noreferrer">
                    @pt.amnindonesia
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} PT. Anak Muda Nusantara. All rights reserved.
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
          background: linear-gradient(180deg, #0f0f1e 0%, #0a0a14 100%);
          padding: 80px 40px 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .footer-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 2fr 3fr;
          gap: 80px;
          margin-bottom: 60px;
          padding-bottom: 60px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-brand {
          max-width: 400px;
        }

        .footer-logo {
          font-size: 36px;
          font-weight: 800;
          letter-spacing: 2px;
          margin-bottom: 20px;
        }

        .footer-tagline {
          font-size: 14px;
          line-height: 1.8;
          color: var(--color-text-secondary);
          margin-bottom: 28px;
        }

        .footer-social {
          display: flex;
          gap: 12px;
        }

        .social-link {
          width: 44px;
          height: 44px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-text-secondary);
          text-decoration: none;
          transition: background 0.3s ease, border-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
        }

        .social-link:hover {
          background: rgba(102, 126, 234, 0.1);
          border-color: rgba(102, 126, 234, 0.5);
          color: #667eea;
          transform: translateY(-2px);
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 60px;
        }

        .footer-column {
        }

        .footer-title {
          font-size: 16px;
          font-weight: 700;
          color: var(--color-text-primary);
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .footer-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-list li {
          margin-bottom: 12px;
        }

        .footer-list a {
          color: var(--color-text-secondary);
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s ease;
          display: inline-block;
        }

        .footer-list a:hover {
          color: #667eea;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .footer-copyright {
          font-size: 13px;
          color: var(--color-text-secondary);
        }

        .footer-credits {
          font-size: 13px;
          color: var(--color-text-secondary);
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
            padding: 60px 20px 30px;
          }

          .footer-links {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
