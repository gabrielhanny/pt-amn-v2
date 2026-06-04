import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/sections/Footer';
import { Mail, MessageCircle, ArrowRight } from 'lucide-react';

const LetsTalkPage = () => {
  return (
    <>
      <Navbar />

      <main className="talk-page">
        <section className="talk-hero">
          <div className="talk-container">
            <div className="talk-label">
              <span className="talk-line"></span>
              <span>Let&apos;s Talk</span>
            </div>

            <h1>
              Let&apos;s Talk About
              <br />
              <span>Your Next Growth Move</span>
            </h1>

            <p>
              Tell us what your brand is trying to build, launch, improve, or scale.
            </p>
          </div>
        </section>

        <section className="talk-content">
          <div className="talk-container talk-grid">
            <div className="contact-info">
              <h2>Start the conversation.</h2>

              <p>
                Share your initial direction, business context, and growth objective.
                AMN will review the inquiry and help identify the most relevant next step.
              </p>

              <div className="contact-actions">
                <a
                  href="https://wa.me/6285168157168"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-action"
                >
                  <MessageCircle size={20} />
                  WhatsApp AMN
                </a>

                <a
                 href="mailto:hello@hypernusa.com"
                  className="contact-action secondary"
                >
                  <Mail size={20} />
                  Email AMN
                </a>
              </div>
            </div>

            <form className="inquiry-form">
              <div className="form-row">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Company / Brand" />
              </div>

              <div className="form-row">
                <input type="text" placeholder="Role / Position" />
                <input type="email" placeholder="Email" />
              </div>

              <div className="form-row">
                <input type="text" placeholder="WhatsApp / Phone" />
                <input type="text" placeholder="Website / Social Media Link" />
              </div>

              <div className="form-row">
                <select defaultValue="">
                  <option value="" disabled>Interested Solution</option>
                  <option>Creative & Campaign</option>
                  <option>Media & Performance</option>
                  <option>Experience & Tech</option>
                  <option>Commerce Growth</option>
                  <option>Data & AI Operations</option>
                  <option>Integrated Campaign / Launch Kit</option>
                  <option>Growth Activation Loop</option>
                  <option>Need Direction</option>
                </select>

                <input type="text" placeholder="Estimated Timeline" />
              </div>

              <select defaultValue="">
                <option value="" disabled>Estimated Budget Range</option>
                <option>Below IDR 50M</option>
                <option>IDR 50M–100M</option>
                <option>IDR 100M–250M</option>
                <option>IDR 250M–500M</option>
                <option>Above IDR 500M</option>
                <option>To be discussed</option>
              </select>

              <textarea rows="6" placeholder="Message"></textarea>

              <button type="button" className="submit-button">
                Submit Inquiry
                <ArrowRight size={20} />
              </button>

            </form>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx="true">{`
        .talk-page {
          min-height: 100vh;
          background: #050510;
          color: #ffffff;
          overflow: hidden;
        }

        .talk-container {
          position: relative;
          z-index: 3;
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .talk-hero {
          position: relative;
          padding: 180px 0 120px;
          background:
            radial-gradient(circle at 20% 20%, rgba(102, 126, 234, 0.14), transparent 32%),
            radial-gradient(circle at 88% 50%, rgba(236, 72, 153, 0.1), transparent 30%),
            linear-gradient(180deg, #07071a 0%, #050510 100%);
          overflow: hidden;
        }

        .talk-hero::before,
        .talk-content::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(167, 178, 255, 0.022) 1px, transparent 1px),
            linear-gradient(90deg, rgba(167, 178, 255, 0.022) 1px, transparent 1px);
          background-size: 88px 88px;
          opacity: 0.45;
          pointer-events: none;
        }

        .talk-label {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 32px;
        }

        .talk-line {
          width: 52px;
          height: 1px;
          background: linear-gradient(90deg, rgba(167, 178, 255, 0.7), transparent);
        }

        .talk-label span:last-child {
          font-size: 13px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.5);
          font-weight: 600;
        }

        .talk-hero h1,
        .contact-info h2 {
          margin: 0;
          font-size: clamp(52px, 7vw, 96px);
          line-height: 0.95;
          letter-spacing: -0.06em;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.96);
        }

        .talk-hero h1 span {
          background: linear-gradient(135deg, #ffffff 0%, #a78bfa 45%, #ec4899 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .talk-hero p {
          max-width: 760px;
          margin-top: 44px;
          font-size: 21px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.64);
          font-weight: 300;
        }

        .talk-content {
          position: relative;
          padding: 140px 0 170px;
          background:
            radial-gradient(circle at 16% 16%, rgba(102, 126, 234, 0.1), transparent 30%),
            radial-gradient(circle at 90% 70%, rgba(236, 72, 153, 0.08), transparent 32%),
            linear-gradient(180deg, #050510 0%, #080818 100%);
          overflow: hidden;
        }

        .talk-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 70px;
          align-items: start;
        }

        .contact-info h2 {
          font-size: clamp(42px, 5vw, 70px);
        }

        .contact-info p {
          margin-top: 34px;
          font-size: 18px;
          line-height: 1.85;
          color: rgba(255, 255, 255, 0.62);
          font-weight: 300;
        }

        .contact-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 42px;
        }

        .contact-action {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 22px;
          border-radius: 14px;
          text-decoration: none;
          color: #ffffff;
          font-size: 14px;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          box-shadow: 0 14px 40px rgba(102, 126, 234, 0.26);
        }

        .contact-action.secondary {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(167, 178, 255, 0.14);
          box-shadow: none;
        }

        .inquiry-form {
          position: relative;
          padding: 34px;
          border-radius: 30px;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.055), rgba(255, 255, 255, 0.025));
          border: 1px solid rgba(167, 178, 255, 0.12);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.05),
            0 24px 60px rgba(0, 0, 0, 0.2);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        input,
        select,
        textarea {
          width: 100%;
          margin-bottom: 16px;
          padding: 16px 18px;
          border-radius: 14px;
          border: 1px solid rgba(167, 178, 255, 0.14);
          background: rgba(255, 255, 255, 0.045);
          color: #ffffff;
          font-size: 14px;
          outline: none;
        }

        textarea {
          resize: vertical;
        }

        input::placeholder,
        textarea::placeholder {
          color: rgba(255, 255, 255, 0.42);
        }

        select {
          color: rgba(255, 255, 255, 0.72);
        }

        option {
          color: #111827;
        }

        .submit-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          width: 100%;
          margin-top: 8px;
          padding: 18px 34px;
          border: none;
          border-radius: 16px;
          color: #ffffff;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          box-shadow: 0 16px 48px rgba(102, 126, 234, 0.3);
        }

        .form-note {
          margin: 18px 0 0;
          font-size: 12px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.38);
        }

        @media (max-width: 980px) {
          .talk-grid,
          .form-row {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .talk-container {
            padding: 0 24px;
          }

          .talk-hero {
            padding: 150px 0 100px;
          }

          .talk-content {
            padding: 110px 0;
          }

          .talk-hero h1,
          .contact-info h2 {
            font-size: 54px;
            line-height: 1;
          }

          .talk-hero p,
          .contact-info p {
            font-size: 17px;
            line-height: 1.8;
          }

          .inquiry-form {
            padding: 24px;
            border-radius: 24px;
          }
        }
      `}</style>
    </>
  );
};

export default LetsTalkPage;