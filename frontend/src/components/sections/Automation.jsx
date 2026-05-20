import React, { useState } from 'react';
import { Workflow, Bot, Brain, Gauge } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const orbitNodes = [
  {
    id: 'workflow',
    position: 'north',
    title: 'Workflow Automation',
    desc: 'Mengotomasi proses bisnis berulang agar tim bisa fokus pada keputusan strategis.',
    Icon: Workflow
  },
  {
    id: 'agents',
    position: 'east',
    title: 'AI Agents',
    desc: 'Asisten cerdas yang membantu komunikasi, riset, dan operasional sehari-hari.',
    Icon: Bot
  },
  {
    id: 'systems',
    position: 'south',
    title: 'Smart Systems',
    desc: 'Sistem yang belajar dari data bisnis dan beradaptasi seiring waktu.',
    Icon: Brain
  },
  {
    id: 'efficiency',
    position: 'west',
    title: 'Digital Efficiency',
    desc: 'Optimasi operasional digital untuk produktivitas dan kecepatan eksekusi.',
    Icon: Gauge
  }
];

const Automation = () => {
  const [headerRef, headerVisible] = useScrollReveal();
  const [hoveredId, setHoveredId] = useState(null);
  const active = orbitNodes.find((n) => n.id === hoveredId);

  return (
    <section id="automation" className="automation-section" data-testid="automation-section">
      <div className="automation-ambient ambient-1"></div>
      <div className="automation-ambient ambient-2"></div>

      <div className="automation-container">
        <div ref={headerRef} className={`automation-header reveal ${headerVisible ? 'is-visible' : ''}`}>
          <div className="section-badge">
            <span className="badge-dot"></span>
            <span>Automation &amp; AI</span>
          </div>
          <h2 className="section-title">
            Sistem Cerdas
            <br />
            <span className="gradient-text">Yang Bekerja Untuk Anda</span>
          </h2>
          <p className="section-description">
            Lapisan intelijensi yang menghubungkan operasional, data, dan eksekusi
            <br className="desktop-br" />
            menjadi satu sistem yang bergerak selaras dengan bisnis Anda.
          </p>
        </div>

        <div
          className="orbit-stage"
          data-hovered={hoveredId || 'none'}
          data-testid="orbit-stage"
        >
          {/* Ambient backdrop glows */}
          <div className="orbit-backdrop-glow"></div>

          {/* Floating ambient particles */}
          <div className="orbit-particles">
            {Array.from({ length: 14 }).map((_, i) => (
              <span key={i} className={`orbit-particle p-${i + 1}`} />
            ))}
          </div>

          {/* Faint concentric orbit rings */}
          <svg className="orbit-rings" viewBox="0 0 600 600" aria-hidden="true">
            <circle cx="300" cy="300" r="226" className="orbit-ring outer" />
            <circle cx="300" cy="300" r="158" className="orbit-ring inner" />
          </svg>

          {/* Rotating orbit (contains connector lines + nodes) */}
          <div className="orbit-rotator">
            <svg className="orbit-connectors" viewBox="0 0 600 600" aria-hidden="true">
              <defs>
                <linearGradient id="connLine" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(167, 178, 255, 0.6)" />
                  <stop offset="100%" stopColor="rgba(167, 178, 255, 0)" />
                </linearGradient>
              </defs>
              {/* Lines from center (300,300) outward to each node position (radius 226) */}
              <line className="conn conn-north" x1="300" y1="300" x2="300" y2="74" />
              <line className="conn conn-east" x1="300" y1="300" x2="526" y2="300" />
              <line className="conn conn-south" x1="300" y1="300" x2="300" y2="526" />
              <line className="conn conn-west" x1="300" y1="300" x2="74" y2="300" />
            </svg>

            {orbitNodes.map((node) => {
              const { Icon } = node;
              return (
                <div
                  key={node.id}
                  className={`orbit-node node-${node.position} ${hoveredId === node.id ? 'is-active' : ''}`}
                  onMouseEnter={() => setHoveredId(node.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onFocus={() => setHoveredId(node.id)}
                  onBlur={() => setHoveredId(null)}
                  tabIndex={0}
                  role="button"
                  aria-label={node.title}
                  data-testid={`orbit-node-${node.id}`}
                >
                  <div className="node-halo"></div>
                  <div className="node-card">
                    <div className="node-icon">
                      <Icon size={18} strokeWidth={1.75} />
                    </div>
                    <div className="node-title">{node.title}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* AI Core — center, doesn't rotate */}
          <div className="ai-core" data-testid="ai-core">
            <div className="core-ring core-ring-outer"></div>
            <div className="core-ring core-ring-mid"></div>
            <div className="core-inner">
              <div className={`core-label ${active ? 'is-shifted' : ''}`}>
                <div className="core-default">
                  <div className="core-name">AMN<span className="core-dot">·</span>AI</div>
                  <div className="core-sub">Intelligence Core</div>
                </div>
                {active && (
                  <div className="core-active" data-testid="orbit-detail">
                    <div className="core-active-title">{active.title}</div>
                    <div className="core-active-desc">{active.desc}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .automation-section {
          padding: 160px 40px;
          background: linear-gradient(180deg, #0a0a1f 0%, #07071a 100%);
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }

        .automation-ambient {
          position: absolute;
          border-radius: 50%;
          filter: blur(140px);
          pointer-events: none;
        }

        .ambient-1 {
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(102, 126, 234, 0.18) 0%, transparent 70%);
          top: 10%;
          left: -200px;
        }

        .ambient-2 {
          width: 650px;
          height: 650px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.16) 0%, transparent 70%);
          bottom: 5%;
          right: -180px;
        }

        .automation-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .automation-header {
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
          50%      { opacity: 0.5; transform: scale(0.8); }
        }

        .section-title {
          font-size: 56px;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 24px;
          letter-spacing: -1.5px;
        }

        .section-description {
          font-size: 17px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.75;
          max-width: 720px;
          margin: 0 auto;
        }

        .desktop-br {
          display: block;
        }

        /* ===== ORBIT STAGE ===== */
        .orbit-stage {
          position: relative;
          width: 600px;
          height: 600px;
          margin: 0 auto;
          max-width: 100%;
        }

        .orbit-backdrop-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 360px;
          height: 360px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(139, 92, 246, 0.25) 0%,
            rgba(102, 126, 234, 0.12) 40%,
            transparent 70%
          );
          filter: blur(40px);
          animation: backdrop-pulse 5s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes backdrop-pulse {
          0%, 100% { opacity: 0.7; transform: translate(-50%, -50%) scale(1); }
          50%      { opacity: 1; transform: translate(-50%, -50%) scale(1.08); }
        }

        /* Ambient particles */
        .orbit-particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .orbit-particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: rgba(167, 178, 255, 0.7);
          border-radius: 50%;
          box-shadow: 0 0 6px rgba(167, 178, 255, 0.6);
          animation: particle-drift 12s ease-in-out infinite;
        }

        .p-1  { top: 12%; left: 18%; animation-delay: 0s; }
        .p-2  { top: 28%; left: 82%; animation-delay: 1.2s; }
        .p-3  { top: 70%; left: 14%; animation-delay: 2.4s; }
        .p-4  { top: 85%; left: 75%; animation-delay: 0.6s; }
        .p-5  { top: 42%; left: 6%;  animation-delay: 3s; }
        .p-6  { top: 58%; left: 92%; animation-delay: 4.2s; }
        .p-7  { top: 8%;  left: 50%; animation-delay: 1.8s; }
        .p-8  { top: 92%; left: 48%; animation-delay: 2.6s; }
        .p-9  { top: 22%; left: 38%; animation-delay: 5s; }
        .p-10 { top: 78%; left: 60%; animation-delay: 4s; }
        .p-11 { top: 50%; left: 22%; animation-delay: 6s; }
        .p-12 { top: 36%; left: 70%; animation-delay: 7s; }
        .p-13 { top: 62%; left: 32%; animation-delay: 8s; }
        .p-14 { top: 18%; left: 64%; animation-delay: 9s; }

        @keyframes particle-drift {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          50%      { transform: translate(8px, -10px); opacity: 0.9; }
        }

        /* Concentric orbit rings */
        .orbit-rings {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .orbit-ring {
          fill: none;
          stroke: rgba(167, 178, 255, 0.12);
          stroke-width: 1;
        }

        .orbit-ring.outer {
          stroke-dasharray: 2 8;
          animation: ring-rotate-cw 80s linear infinite;
          transform-origin: 300px 300px;
        }

        .orbit-ring.inner {
          stroke-dasharray: 1 5;
          animation: ring-rotate-ccw 60s linear infinite;
          transform-origin: 300px 300px;
        }

        @keyframes ring-rotate-cw  { to { transform: rotate(360deg); } }
        @keyframes ring-rotate-ccw { to { transform: rotate(-360deg); } }

        /* ===== ROTATING ORBIT (contains nodes + connectors) ===== */
        .orbit-rotator {
          position: absolute;
          inset: 0;
          animation: orbit-spin 60s linear infinite;
          transform-origin: 50% 50%;
        }

        @keyframes orbit-spin {
          to { transform: rotate(360deg); }
        }

        /* Pause when user is interacting with any node */
        .orbit-stage[data-hovered]:not([data-hovered='none']) .orbit-rotator,
        .orbit-stage[data-hovered]:not([data-hovered='none']) .orbit-node {
          animation-play-state: paused;
        }

        /* Connector lines (rotate with orbit) */
        .orbit-connectors {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .conn {
          stroke: rgba(167, 178, 255, 0.18);
          stroke-width: 1;
          stroke-dasharray: 2 4;
          transition: stroke 0.5s ease, stroke-opacity 0.5s ease;
        }

        /* When a node is hovered, brighten its connector and dim others */
        .orbit-stage[data-hovered='workflow']    .conn-north,
        .orbit-stage[data-hovered='agents']      .conn-east,
        .orbit-stage[data-hovered='systems']     .conn-south,
        .orbit-stage[data-hovered='efficiency']  .conn-west {
          stroke: rgba(192, 132, 252, 0.85);
          stroke-dasharray: 4 3;
          animation: conn-flow 1.6s linear infinite;
          filter: drop-shadow(0 0 4px rgba(192, 132, 252, 0.6));
        }

        @keyframes conn-flow {
          to { stroke-dashoffset: -14; }
        }

        .orbit-stage[data-hovered]:not([data-hovered='none']) .conn:not(.is-active) {
          stroke: rgba(167, 178, 255, 0.08);
        }

        /* ===== ORBIT NODES ===== */
        .orbit-node {
          position: absolute;
          width: 132px;
          height: 132px;
          margin: -66px 0 0 -66px;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: orbit-counter 60s linear infinite;
          transform-origin: 50% 50%;
          cursor: pointer;
          outline: none;
        }

        @keyframes orbit-counter {
          to { transform: rotate(-360deg); }
        }

        .node-north { top: 74px;  left: 50%; }
        .node-east  { top: 50%;   left: 526px; }
        .node-south { top: 526px; left: 50%; }
        .node-west  { top: 50%;   left: 74px; }

        .node-halo {
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(167, 178, 255, 0.35) 0%, transparent 65%);
          filter: blur(14px);
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }

        .orbit-node.is-active .node-halo,
        .orbit-node:hover .node-halo,
        .orbit-node:focus-visible .node-halo {
          opacity: 1;
        }

        .node-card {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(
            145deg,
            rgba(20, 20, 45, 0.92) 0%,
            rgba(15, 15, 35, 0.92) 100%
          );
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border: 1px solid rgba(167, 178, 255, 0.18);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 16px;
          transition:
            border-color 0.5s ease,
            background 0.5s ease,
            transform 0.5s cubic-bezier(0.4, 0, 0.2, 1),
            box-shadow 0.5s ease;
        }

        .orbit-node.is-active .node-card,
        .orbit-node:hover .node-card,
        .orbit-node:focus-visible .node-card {
          border-color: rgba(192, 132, 252, 0.55);
          background: linear-gradient(
            145deg,
            rgba(30, 25, 60, 0.95) 0%,
            rgba(20, 20, 45, 0.95) 100%
          );
          transform: scale(1.06);
          box-shadow:
            0 0 0 1px rgba(192, 132, 252, 0.15),
            0 14px 40px rgba(102, 126, 234, 0.25);
        }

        .node-icon {
          width: 38px;
          height: 38px;
          border-radius: 12px;
          background: linear-gradient(
            145deg,
            rgba(102, 126, 234, 0.22) 0%,
            rgba(139, 92, 246, 0.22) 100%
          );
          display: flex;
          align-items: center;
          justify-content: center;
          color: #a7b2ff;
          transition: color 0.4s ease, transform 0.4s ease, background 0.4s ease;
        }

        .orbit-node.is-active .node-icon,
        .orbit-node:hover .node-icon,
        .orbit-node:focus-visible .node-icon {
          color: #ffffff;
          background: linear-gradient(
            145deg,
            rgba(102, 126, 234, 0.4) 0%,
            rgba(139, 92, 246, 0.4) 100%
          );
        }

        .node-title {
          font-size: 11.5px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.85);
          text-align: center;
          line-height: 1.3;
          letter-spacing: 0.1px;
        }

        /* ===== AI CORE (center) ===== */
        .ai-core {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 240px;
          height: 240px;
          margin: -120px 0 0 -120px;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }

        .core-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid transparent;
          pointer-events: none;
        }

        .core-ring-outer {
          inset: 0;
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            rgba(167, 178, 255, 0.45) 60deg,
            rgba(139, 92, 246, 0.7) 110deg,
            rgba(167, 178, 255, 0.3) 170deg,
            transparent 250deg
          );
          mask: radial-gradient(circle, transparent 117px, black 118px, black 120px, transparent 121px);
          -webkit-mask: radial-gradient(circle, transparent 117px, black 118px, black 120px, transparent 121px);
          animation: ring-spin-1 6s linear infinite;
          filter: drop-shadow(0 0 10px rgba(139, 92, 246, 0.3));
        }

        .core-ring-mid {
          inset: 30px;
          background: conic-gradient(
            from 180deg,
            transparent 0deg,
            rgba(192, 132, 252, 0.4) 40deg,
            transparent 120deg
          );
          mask: radial-gradient(circle, transparent 87px, black 88px, black 90px, transparent 91px);
          -webkit-mask: radial-gradient(circle, transparent 87px, black 88px, black 90px, transparent 91px);
          animation: ring-spin-2 8s linear infinite reverse;
        }

        @keyframes ring-spin-1 { to { transform: rotate(360deg); } }
        @keyframes ring-spin-2 { to { transform: rotate(360deg); } }

        .core-inner {
          width: 170px;
          height: 170px;
          border-radius: 50%;
          background: radial-gradient(
            circle at 50% 40%,
            rgba(102, 126, 234, 0.3) 0%,
            rgba(20, 15, 50, 0.95) 60%,
            rgba(10, 5, 30, 1) 100%
          );
          border: 1px solid rgba(167, 178, 255, 0.2);
          box-shadow:
            inset 0 0 30px rgba(139, 92, 246, 0.25),
            0 0 40px rgba(139, 92, 246, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .core-label {
          width: 100%;
          text-align: center;
          position: relative;
        }

        .core-default,
        .core-active {
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .core-label.is-shifted .core-default {
          opacity: 0;
          transform: scale(0.95);
          position: absolute;
          inset: 0;
        }

        .core-active {
          opacity: 0;
          transform: scale(0.95);
          animation: core-fade-in 0.45s cubic-bezier(0.4, 0, 0.2, 1) 0.05s forwards;
        }

        @keyframes core-fade-in {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .core-name {
          font-size: 26px;
          font-weight: 800;
          letter-spacing: 2px;
          background: linear-gradient(135deg, #ffffff 0%, #c5cdff 60%, #b794f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 4px;
        }

        .core-dot {
          margin: 0 4px;
          opacity: 0.6;
        }

        .core-sub {
          font-size: 9px;
          font-weight: 600;
          color: rgba(167, 178, 255, 0.6);
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .core-active-title {
          font-size: 15px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 8px;
          letter-spacing: -0.2px;
        }

        .core-active-desc {
          font-size: 11px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.7);
          padding: 0 4px;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 768px) {
          .automation-section {
            padding: 100px 20px;
          }

          .automation-header {
            margin-bottom: 50px;
          }

          .section-title {
            font-size: 34px;
            letter-spacing: -1px;
          }

          .section-description {
            font-size: 15px;
          }

          .desktop-br {
            display: none;
          }

          /* Scale orbit stage proportionally */
          .orbit-stage {
            width: 440px;
            height: 440px;
            transform: scale(0.73);
            transform-origin: center;
            margin: -80px auto;
          }
        }

        @media (max-width: 480px) {
          .orbit-stage {
            transform: scale(0.6);
            margin: -120px auto;
          }
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .orbit-rotator,
          .orbit-node,
          .orbit-ring.outer,
          .orbit-ring.inner,
          .core-ring-outer,
          .core-ring-mid,
          .orbit-particle,
          .orbit-backdrop-glow {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Automation;
