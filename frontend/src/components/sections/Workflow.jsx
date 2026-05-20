import React, { useEffect, useRef, useState } from 'react';
import { Target, Palette, Rocket, TrendingUp, BarChart3 } from 'lucide-react';
import { workflowSteps } from '../../mockData';

const iconMap = {
  'target': Target,
  'palette': Palette,
  'rocket': Rocket,
  'trending-up': TrendingUp,
  'bar-chart-3': BarChart3
};

const Workflow = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="workflow" className="workflow-section" ref={sectionRef} data-testid="workflow-section">
      {/* Background blur orbs */}
      <div className="workflow-orb orb-top-left"></div>
      <div className="workflow-orb orb-bottom-right"></div>
      <div className="workflow-orb orb-center"></div>

      {/* Grid backdrop */}
      <div className="workflow-grid"></div>

      <div className="workflow-container">
        <div className={`workflow-header ${visible ? 'is-visible' : ''}`}>
          <div className="section-badge">
            <span className="badge-dot"></span>
            <span>Cara Kerja Kami</span>
          </div>
          <h2 className="section-title">
            Proses yang
            <br />
            <span className="gradient-text">Terstruktur &amp; Efektif</span>
          </h2>
          <p className="section-description">
            Metodologi kerja yang terbukti menghasilkan pertumbuhan bisnis yang berkelanjutan,
            <br className="desktop-br" />
            dari analisis hingga optimasi berkelanjutan.
          </p>
        </div>

        <div className="workflow-flow">
          {/* Animated connector line - desktop */}
          <div className={`flow-connector ${visible ? 'is-visible' : ''}`}>
            <div className="connector-track"></div>
            <div className="connector-glow"></div>
            <div className="connector-pulse"></div>
          </div>

          {/* Step cards */}
          <div className="workflow-steps">
            {workflowSteps.map((step, index) => {
              const IconComponent = iconMap[step.icon];
              return (
                <div
                  key={step.id}
                  className={`workflow-step ${visible ? 'is-visible' : ''}`}
                  style={{ animationDelay: `${index * 0.12}s` }}
                  data-testid={`workflow-step-${step.id}`}
                >
                  <div className="step-card">
                    <div className="step-card-inner">
                      {/* Animated glow border */}
                      <div className="card-border-glow"></div>

                      {/* Step indicator */}
                      <div className="step-indicator">
                        <span className="step-number">0{step.id}</span>
                      </div>

                      {/* Icon with aura ring */}
                      <div className="step-icon-container">
                        <div className="icon-aura"></div>
                        <div className="icon-ring"></div>
                        <div className="step-icon-wrapper">
                          <IconComponent className="step-icon" size={26} strokeWidth={1.75} />
                        </div>
                      </div>

                      <h3 className="step-title">{step.title}</h3>
                      <p className="step-description">{step.description}</p>

                      {/* Bottom accent line */}
                      <div className="card-accent-line"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .workflow-section {
          padding: 160px 40px;
          background: linear-gradient(180deg, #0a0a1f 0%, #0d0d24 50%, #0a0a1f 100%);
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }

        /* Background orbs */
        .workflow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
          opacity: 0.4;
        }

        .orb-top-left {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(102, 126, 234, 0.4) 0%, transparent 70%);
          top: -200px;
          left: -150px;
          animation: orb-drift-1 25s ease-in-out infinite;
        }

        .orb-bottom-right {
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.35) 0%, transparent 70%);
          bottom: -250px;
          right: -200px;
          animation: orb-drift-2 30s ease-in-out infinite;
        }

        .orb-center {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(79, 70, 229, 0.25) 0%, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: orb-pulse 12s ease-in-out infinite;
        }

        @keyframes orb-drift-1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(80px, 60px); }
        }

        @keyframes orb-drift-2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-100px, -80px); }
        }

        @keyframes orb-pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.25; }
          50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.4; }
        }

        /* Grid backdrop */
        .workflow-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(167, 178, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(167, 178, 255, 0.03) 1px, transparent 1px);
          background-size: 80px 80px;
          mask-image: radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 80%);
          -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 80%);
          pointer-events: none;
        }

        .workflow-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        .workflow-header {
          text-align: center;
          margin-bottom: 100px;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1s ease, transform 1s ease;
        }

        .workflow-header.is-visible {
          opacity: 1;
          transform: translateY(0);
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
          font-size: 64px;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 24px;
          letter-spacing: -2px;
        }

        .section-description {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.7;
          max-width: 720px;
          margin: 0 auto;
        }

        .desktop-br {
          display: block;
        }

        /* Workflow flow container */
        .workflow-flow {
          position: relative;
        }

        /* Animated connector line */
        .flow-connector {
          position: absolute;
          top: 105px;
          left: 10%;
          right: 10%;
          height: 2px;
          z-index: 1;
          opacity: 0;
          transition: opacity 0.6s ease;
        }

        .flow-connector.is-visible {
          opacity: 1;
        }

        .connector-track {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(167, 178, 255, 0.15) 10%,
            rgba(167, 178, 255, 0.15) 90%,
            transparent 100%
          );
          border-radius: 2px;
        }

        .connector-glow {
          position: absolute;
          inset: -3px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(102, 126, 234, 0.4) 30%,
            rgba(139, 92, 246, 0.4) 70%,
            transparent 100%
          );
          filter: blur(8px);
          opacity: 0.6;
        }

        .connector-pulse {
          position: absolute;
          top: -2px;
          left: 0;
          width: 80px;
          height: 6px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(167, 178, 255, 0.8) 50%,
            transparent 100%
          );
          filter: blur(2px);
          border-radius: 6px;
          animation: pulse-travel 4s ease-in-out infinite;
        }

        @keyframes pulse-travel {
          0% { transform: translateX(-100px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(calc(100vw - 200px)); opacity: 0; }
        }

        /* Steps grid */
        .workflow-steps {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 24px;
          position: relative;
          z-index: 2;
          align-items: stretch;
        }

        .workflow-step {
          opacity: 0;
          transform: translateY(40px);
          display: flex;
        }

        .workflow-step.is-visible {
          animation: step-reveal 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes step-reveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Card styling */
        .step-card {
          position: relative;
          padding: 2px;
          border-radius: 24px;
          background: linear-gradient(
            145deg,
            rgba(167, 178, 255, 0.12) 0%,
            rgba(167, 178, 255, 0.02) 50%,
            rgba(139, 92, 246, 0.08) 100%
          );
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          animation: card-float 6s ease-in-out infinite;
          animation-delay: var(--float-delay, 0s);
          width: 100%;
          display: flex;
        }

        .workflow-step:nth-child(1) .step-card { --float-delay: 0s; }
        .workflow-step:nth-child(2) .step-card { --float-delay: 0.8s; }
        .workflow-step:nth-child(3) .step-card { --float-delay: 1.6s; }
        .workflow-step:nth-child(4) .step-card { --float-delay: 2.4s; }
        .workflow-step:nth-child(5) .step-card { --float-delay: 3.2s; }

        @keyframes card-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .step-card:hover {
          animation-play-state: paused;
          transform: translateY(-14px) scale(1.02);
        }

        .step-card-inner {
          position: relative;
          padding: 36px 26px 32px;
          background: linear-gradient(
            145deg,
            rgba(15, 15, 35, 0.85) 0%,
            rgba(20, 20, 45, 0.75) 100%
          );
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-radius: 22px;
          width: 100%;
          min-height: 320px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: background 0.5s ease;
        }

        .step-card:hover .step-card-inner {
          background: linear-gradient(
            145deg,
            rgba(20, 20, 45, 0.9) 0%,
            rgba(25, 25, 55, 0.85) 100%
          );
        }

        /* Animated glow border on hover */
        .card-border-glow {
          position: absolute;
          inset: -2px;
          border-radius: 24px;
          background: linear-gradient(
            145deg,
            rgba(102, 126, 234, 0) 0%,
            rgba(139, 92, 246, 0) 50%,
            rgba(102, 126, 234, 0) 100%
          );
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
          z-index: -1;
          filter: blur(12px);
        }

        .step-card:hover .card-border-glow {
          opacity: 1;
          background: linear-gradient(
            145deg,
            rgba(102, 126, 234, 0.5) 0%,
            rgba(139, 92, 246, 0.5) 50%,
            rgba(102, 126, 234, 0.5) 100%
          );
        }

        /* Step indicator */
        .step-indicator {
          display: inline-block;
          margin-bottom: 24px;
        }

        .step-number {
          font-size: 12px;
          font-weight: 700;
          color: rgba(167, 178, 255, 0.7);
          letter-spacing: 2px;
          padding: 5px 12px;
          background: rgba(102, 126, 234, 0.1);
          border: 1px solid rgba(102, 126, 234, 0.2);
          border-radius: 6px;
          transition: background 0.4s ease, color 0.4s ease;
        }

        .step-card:hover .step-number {
          background: rgba(102, 126, 234, 0.2);
          color: #c5cdff;
        }

        /* Icon with aura */
        .step-icon-container {
          position: relative;
          width: 64px;
          height: 64px;
          margin-bottom: 28px;
        }

        .icon-aura {
          position: absolute;
          inset: -8px;
          background: radial-gradient(circle, rgba(102, 126, 234, 0.4) 0%, transparent 70%);
          border-radius: 50%;
          opacity: 0;
          filter: blur(12px);
          transition: opacity 0.5s ease;
        }

        .step-card:hover .icon-aura {
          opacity: 1;
        }

        .icon-ring {
          position: absolute;
          inset: -4px;
          border-radius: 16px;
          border: 1px solid rgba(167, 178, 255, 0.2);
          transition: border-color 0.5s ease, transform 0.5s ease;
        }

        .step-card:hover .icon-ring {
          border-color: rgba(167, 178, 255, 0.6);
          transform: scale(1.1);
        }

        .step-icon-wrapper {
          width: 100%;
          height: 100%;
          background: linear-gradient(
            145deg,
            rgba(102, 126, 234, 0.15) 0%,
            rgba(139, 92, 246, 0.15) 100%
          );
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 1;
          transition: background 0.5s ease;
        }

        .step-card:hover .step-icon-wrapper {
          background: linear-gradient(
            145deg,
            rgba(102, 126, 234, 0.3) 0%,
            rgba(139, 92, 246, 0.3) 100%
          );
        }

        .step-icon {
          color: #a7b2ff;
          transition: color 0.4s ease, transform 0.4s ease;
        }

        .step-card:hover .step-icon {
          color: #ffffff;
          transform: scale(1.1);
        }

        .step-title {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 12px;
          color: #ffffff;
          letter-spacing: -0.5px;
        }

        .step-description {
          font-size: 14px;
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.55);
        }

        /* Accent line at bottom */
        .card-accent-line {
          position: absolute;
          bottom: 0;
          left: 28px;
          right: 28px;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(167, 178, 255, 0) 50%,
            transparent 100%
          );
          transition: background 0.5s ease;
        }

        .step-card:hover .card-accent-line {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(167, 178, 255, 0.5) 50%,
            transparent 100%
          );
        }

        /* Tablet */
        @media (max-width: 1200px) {
          .workflow-steps {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }

          .flow-connector {
            display: none;
          }

          .section-title {
            font-size: 52px;
          }
        }

        @media (max-width: 768px) {
          .workflow-section {
            padding: 100px 20px;
          }

          .workflow-header {
            margin-bottom: 60px;
          }

          .workflow-steps {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .section-title {
            font-size: 38px;
            letter-spacing: -1px;
          }

          .section-description {
            font-size: 15px;
          }

          .desktop-br {
            display: none;
          }

          .step-card-inner {
            padding: 32px 26px 28px;
          }

          .step-title {
            font-size: 20px;
          }

          /* Disable card float on mobile for better performance */
          .step-card {
            animation: none;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 32px;
          }
        }
      `}</style>
    </section>
  );
};

export default Workflow;
