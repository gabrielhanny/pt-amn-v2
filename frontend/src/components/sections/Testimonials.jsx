import React from 'react';
import { testimonials } from '../../mockData';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <div className="section-badge">
            <span className="badge-dot"></span>
            <span>Testimoni</span>
          </div>
          <h2 className="section-title">
            Kepercayaan Klien
            <br />
            <span className="gradient-text">Adalah Prioritas Kami</span>
          </h2>
          <p className="section-description">
            Apa kata mereka yang telah bekerja sama dengan kami.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="testimonial-card glass-effect" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="quote-icon">
                <Quote size={40} />
              </div>
              <div className="testimonial-stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#667eea" color="#667eea" />
                ))}
              </div>
              <p className="testimonial-content">"{testimonial.content}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <span>{testimonial.name.charAt(0)}</span>
                </div>
                <div className="author-info">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-position">
                    {testimonial.position} - {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx="true">{`
        .testimonials-section {
          padding: 120px 40px;
          background: linear-gradient(180deg, #0f0f1e 0%, #1a1a2e 100%);
          position: relative;
        }

        .testimonials-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .testimonials-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 9px 20px;
          background: rgba(102, 126, 234, 0.08);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(102, 126, 234, 0.2);
          border-radius: 50px;
          font-size: 12px;
          font-weight: 600;
          color: #a7b2ff;
          margin-bottom: 28px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          background: #8b98f7;
          border-radius: 50%;
          box-shadow: 0 0 10px #8b98f7;
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }

        .section-title {
          font-size: 56px;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 24px;
          letter-spacing: -1px;
        }

        .section-description {
          font-size: 18px;
          color: var(--color-text-secondary);
          line-height: 1.8;
          max-width: 800px;
          margin: 0 auto;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .testimonial-card {
          padding: 40px;
          position: relative;
          transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
          animation: fade-in-up 0.8s ease backwards;
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .testimonial-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          border-color: rgba(102, 126, 234, 0.5);
        }

        .quote-icon {
          color: rgba(102, 126, 234, 0.2);
          margin-bottom: 20px;
        }

        .testimonial-stars {
          display: flex;
          gap: 4px;
          margin-bottom: 20px;
        }

        .testimonial-content {
          font-size: 15px;
          line-height: 1.8;
          color: var(--color-text-secondary);
          margin-bottom: 28px;
          font-style: italic;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 16px;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .author-avatar {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: 700;
          color: white;
        }

        .author-info {
          flex: 1;
        }

        .author-name {
          font-size: 16px;
          font-weight: 700;
          color: var(--color-text-primary);
          margin-bottom: 4px;
        }

        .author-position {
          font-size: 13px;
          color: var(--color-text-secondary);
        }

        @media (max-width: 1024px) {
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .section-title {
            font-size: 48px;
          }
        }

        @media (max-width: 768px) {
          .testimonials-section {
            padding: 80px 20px;
          }

          .testimonials-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .section-title {
            font-size: 36px;
          }

          .section-description {
            font-size: 16px;
          }

          .testimonial-card {
            padding: 32px;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
