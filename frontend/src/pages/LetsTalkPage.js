import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/sections/Footer';
import { Mail, MessageCircle, ArrowRight } from 'lucide-react';

const LetsTalkPage = () => {
  const [language, setLanguage] = useState('en');

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    email: '',
    phone: '',
    website: '',
    solution: '',
    timeline: '',
    budget: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState({
    loading: false,
    success: '',
    error: '',
  });

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
      label: "Let's Talk",
      heroTitle1: "Let's Talk About",
      heroTitle2: 'Your Next Growth Move',
      heroDesc:
        "Tell us what your brand is trying to build, launch, improve, or scale — and we'll help identify the most relevant next step.",

      introTitle: 'Start the conversation.',
      introDesc:
        'Share your business context, current challenge, and growth objective. Hypernusa will review your inquiry and recommend the right way to move forward.',

      whatsapp: 'WhatsApp Hypernusa',
      emailButton: 'Email Hypernusa',

      placeholders: {
        name: 'Name',
        company: 'Company / Brand',
        role: 'Role / Position',
        email: 'Email',
        phone: 'WhatsApp / Phone',
        website: 'Website / Social Media Link',
        solution: 'Interested Solution',
        timeline: 'Estimated Timeline',
        budget: 'Estimated Budget Range',
        message: 'Tell us about your challenge, objective, or idea',
      },

      solutionOptions: {
        needDirection: 'Need Direction',
      },

      budgetOptions: {
        below50: 'Below IDR 50M',
        discuss: 'To be discussed',
      },

      success: 'Inquiry sent successfully. Our team will review it shortly.',
      error: 'Failed to send inquiry. Please contact us via WhatsApp or email.',
      sending: 'Sending Inquiry...',
      submit: 'Submit Inquiry',
    },

    id: {
      label: 'Diskusi',
      heroTitle1: 'Mari Diskusikan',
      heroTitle2: 'Langkah Pertumbuhan Berikutnya',
      heroDesc:
        'Ceritakan apa yang ingin brand Anda bangun, luncurkan, perbaiki, atau scale — dan kami akan membantu mengidentifikasi langkah paling relevan berikutnya.',

      introTitle: 'Mulai percakapan.',
      introDesc:
        'Bagikan konteks bisnis, tantangan saat ini, dan tujuan pertumbuhan Anda. Hypernusa akan meninjau inquiry Anda dan merekomendasikan cara terbaik untuk bergerak maju.',

      whatsapp: 'WhatsApp Hypernusa',
      emailButton: 'Email Hypernusa',

      placeholders: {
        name: 'Nama',
        company: 'Perusahaan / Brand',
        role: 'Jabatan / Posisi',
        email: 'Email',
        phone: 'WhatsApp / Telepon',
        website: 'Website / Link Media Sosial',
        solution: 'Solusi yang Diminati',
        timeline: 'Estimasi Timeline',
        budget: 'Estimasi Budget',
        message: 'Ceritakan tantangan, tujuan, atau ide Anda',
      },

      solutionOptions: {
        needDirection: 'Butuh Arahan',
      },

      budgetOptions: {
        below50: 'Di bawah IDR 50M',
        discuss: 'Perlu didiskusikan',
      },

      success: 'Inquiry berhasil dikirim. Tim kami akan meninjaunya segera.',
      error: 'Inquiry gagal dikirim. Silakan hubungi kami melalui WhatsApp atau email.',
      sending: 'Mengirim Inquiry...',
      submit: 'Kirim Inquiry',
    },
  };

  const currentCopy = copy[language];

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmitStatus({
      loading: true,
      success: '',
      error: '',
    });

    try {
      const response = await fetch('https://pt-amn-v2-backend.vercel.app/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send inquiry');
      }

      setSubmitStatus({
        loading: false,
        success: currentCopy.success,
        error: '',
      });

      setFormData({
        name: '',
        company: '',
        role: '',
        email: '',
        phone: '',
        website: '',
        solution: '',
        timeline: '',
        budget: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus({
        loading: false,
        success: '',
        error: currentCopy.error,
      });
    }
  };

  return (
    <>
      <Navbar />

      <main className="talk-page">
        <section className="talk-hero">
          <div className="talk-hero-bg"></div>
          <div className="talk-hero-overlay"></div>
          <div className="talk-noise"></div>

          <div className="talk-container">
            <div className="talk-label">
              <span className="talk-line"></span>
              <span>{currentCopy.label}</span>
            </div>

            <h1>
              {currentCopy.heroTitle1}
              <br />
              <span>{currentCopy.heroTitle2}</span>
            </h1>

            <p>{currentCopy.heroDesc}</p>
          </div>
        </section>

        <section className="talk-content">
          <div className="talk-container talk-grid">
            <div className="contact-info">
              <h2>{currentCopy.introTitle}</h2>

              <p>{currentCopy.introDesc}</p>

              <div className="contact-actions">
                <a
                  href="https://wa.me/6285168157168"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-action"
                >
                  <MessageCircle size={20} />
                  {currentCopy.whatsapp}
                </a>

                <a href="mailto:hello@hypernusa.com" className="contact-action secondary">
                  <Mail size={20} />
                  {currentCopy.emailButton}
                </a>
              </div>
            </div>

            <form className="inquiry-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder={currentCopy.placeholders.name}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  name="company"
                  placeholder={currentCopy.placeholders.company}
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row">
                <input
                  type="text"
                  name="role"
                  placeholder={currentCopy.placeholders.role}
                  value={formData.role}
                  onChange={handleChange}
                />

                <input
                  type="email"
                  name="email"
                  placeholder={currentCopy.placeholders.email}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <input
                  type="text"
                  name="phone"
                  placeholder={currentCopy.placeholders.phone}
                  value={formData.phone}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="website"
                  placeholder={currentCopy.placeholders.website}
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row">
                <select name="solution" value={formData.solution} onChange={handleChange}>
                  <option value="" disabled>
                    {currentCopy.placeholders.solution}
                  </option>
                  <option value="Growth Activation Loop">Growth Activation Loop</option>
                  <option value="Campaign / Launch Kit">Campaign / Launch Kit</option>
                  <option value="Web & Automation Sprint">Web & Automation Sprint</option>
                  <option value="Commerce & Affiliate Growth">Commerce & Affiliate Growth</option>
                  <option value="AI-Powered Growth Ops">AI-Powered Growth Ops</option>
                  <option value="Need Direction">{currentCopy.solutionOptions.needDirection}</option>
                </select>

                <input
                  type="text"
                  name="timeline"
                  placeholder={currentCopy.placeholders.timeline}
                  value={formData.timeline}
                  onChange={handleChange}
                />
              </div>

              <select name="budget" value={formData.budget} onChange={handleChange}>
                <option value="" disabled>
                  {currentCopy.placeholders.budget}
                </option>
                <option value="Below IDR 50M">{currentCopy.budgetOptions.below50}</option>
                <option value="IDR 50M–100M">IDR 50M–100M</option>
                <option value="IDR 100M–250M">IDR 100M–250M</option>
                <option value="IDR 250M–500M">IDR 250M–500M</option>
                <option value="Above IDR 500M">Above IDR 500M</option>
                <option value="To be discussed">{currentCopy.budgetOptions.discuss}</option>
              </select>

              <textarea
                rows="6"
                name="message"
                placeholder={currentCopy.placeholders.message}
                value={formData.message}
                onChange={handleChange}
                required
              />

              {submitStatus.success && (
                <p className="form-note success-message">{submitStatus.success}</p>
              )}

              {submitStatus.error && (
                <p className="form-note error-message">{submitStatus.error}</p>
              )}

              <button
                type="submit"
                className="submit-button"
                disabled={submitStatus.loading}
              >
                {submitStatus.loading ? currentCopy.sending : currentCopy.submit}
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
          z-index: 4;
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .talk-hero {
          position: relative;
          padding: 190px 0 140px;
          background: #050510;
          overflow: hidden;
          isolation: isolate;
        }

        .talk-hero-bg {
          position: absolute;
          inset: 0;
          background: url('/images/letstalk-city-bg.jpg') center/cover no-repeat;
          z-index: 0;
          opacity: 0.56;
          filter: brightness(0.92) saturate(1.18) contrast(1.04);
          transform: scale(1.02);
        }

        .talk-hero-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            linear-gradient(
              180deg,
              rgba(5, 5, 16, 0.24) 0%,
              rgba(5, 5, 16, 0.78) 100%
            ),
            linear-gradient(
              90deg,
              rgba(5, 5, 16, 0.62) 0%,
              rgba(5, 5, 16, 0.22) 50%,
              rgba(5, 5, 16, 0.62) 100%
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

        .talk-noise {
          position: absolute;
          inset: 0;
          z-index: 2;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E");
          opacity: 0.025;
          pointer-events: none;
          mix-blend-mode: overlay;
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
          opacity: 0.32;
          pointer-events: none;
          z-index: 2;
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
          background: linear-gradient(90deg, rgba(167, 178, 255, 0.75), transparent);
        }

        .talk-label span:last-child {
          font-size: 13px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.58);
          font-weight: 700;
        }

        .talk-hero h1,
        .contact-info h2 {
          margin: 0;
          font-size: clamp(52px, 7vw, 96px);
          line-height: 0.95;
          letter-spacing: -0.06em;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.96);
          text-shadow: 0 18px 60px rgba(0, 0, 0, 0.42);
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
          color: rgba(255, 255, 255, 0.68);
          font-weight: 300;
          text-shadow: 0 10px 34px rgba(0, 0, 0, 0.38);
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
          color: rgba(255, 255, 255, 0.68);
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
          background: linear-gradient(135deg, #667eea 0%, #ec4899 100%);
          box-shadow: 0 14px 40px rgba(102, 126, 234, 0.26);
        }

        .contact-action.secondary {
          background: rgba(255, 255, 255, 0.055);
          border: 1px solid rgba(167, 178, 255, 0.16);
          box-shadow: none;
        }

        .inquiry-form {
          position: relative;
          padding: 34px;
          border-radius: 30px;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.03));
          border: 1px solid rgba(167, 178, 255, 0.16);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.07),
            0 24px 60px rgba(0, 0, 0, 0.24);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
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
          border: 1px solid rgba(167, 178, 255, 0.16);
          background: rgba(255, 255, 255, 0.055);
          color: #ffffff;
          font-size: 14px;
          outline: none;
          transition:
            border-color 0.25s ease,
            background 0.25s ease,
            box-shadow 0.25s ease;
        }

        input:focus,
        select:focus,
        textarea:focus {
          border-color: rgba(167, 178, 255, 0.36);
          background: rgba(255, 255, 255, 0.075);
          box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.08);
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
          background: linear-gradient(135deg, #667eea 0%, #ec4899 100%);
          box-shadow: 0 16px 48px rgba(102, 126, 234, 0.3);
          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease,
            opacity 0.25s ease;
        }

        .submit-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 22px 58px rgba(236, 72, 153, 0.34);
        }

        .submit-button:disabled {
          cursor: not-allowed;
          opacity: 0.7;
          transform: none;
        }

        .form-note {
          margin: 18px 0 0;
          font-size: 12px;
          line-height: 1.7;
        }

        .success-message {
          color: rgba(134, 239, 172, 0.9);
        }

        .error-message {
          color: rgba(252, 165, 165, 0.9);
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

          .talk-hero-bg {
            opacity: 0.68;
            background-position: center;
            filter: brightness(1.08) saturate(1.18) contrast(1.02);
            transform: scale(1.04);
          }

          .talk-hero-overlay {
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

        @media (max-width: 480px) {
          .talk-hero {
            padding: 132px 0 92px;
          }

          .talk-hero-bg {
            opacity: 0.74;
            background-position: center top;
            filter: brightness(1.16) saturate(1.2) contrast(1.02);
          }

          .talk-hero-overlay {
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

          .talk-hero h1,
          .contact-info h2 {
            font-size: 42px;
          }

          .contact-actions {
            flex-direction: column;
          }

          .contact-action {
            justify-content: center;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default LetsTalkPage;