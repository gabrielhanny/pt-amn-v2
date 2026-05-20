import React, { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, Compass, Cpu } from 'lucide-react';
import { heroCapabilities } from '../../mockData';

const iconMap = {
  'compass': Compass,
  'cpu': Cpu,
  'sparkles': Sparkles
};

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const initParticles = () => {
      particles = [];
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      // Lower particle density on small screens for smooth FPS
      const divisor = w < 768 ? 32000 : 20000;
      const cap = w < 768 ? 28 : 55;
      const count = Math.min(cap, Math.floor((w * h) / divisor));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          radius: Math.random() * 1.4 + 0.4,
          opacity: Math.random() * 0.5 + 0.2
        });
      }
    };

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            const opacity = (1 - dist / 140) * 0.22;
            ctx.strokeStyle = `rgba(139, 152, 247, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(167, 178, 255, ${p.opacity})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(102, 126, 234, ${p.opacity * 0.15})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    resizeCanvas();
    initParticles();
    draw();

    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="hero" className="hero-section" data-testid="hero-section">
      {/* Animated mesh gradient layers */}
      <div className="mesh-gradient mesh-1"></div>
      <div className="mesh-gradient mesh-2"></div>
      <div className="mesh-gradient mesh-3"></div>

      {/* Liquid blobs */}
      <div className="liquid-blob blob-1"></div>
      <div className="liquid-blob blob-2"></div>

      {/* Electric pulse lines - SVG */}
      <svg className="electric-pulse" viewBox="0 0 1920 1080" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="pulseGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(167, 178, 255, 0)" />
            <stop offset="50%" stopColor="rgba(167, 178, 255, 0.6)" />
            <stop offset="100%" stopColor="rgba(167, 178, 255, 0)" />
          </linearGradient>
          <linearGradient id="pulseGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(139, 92, 246, 0)" />
            <stop offset="50%" stopColor="rgba(139, 92, 246, 0.5)" />
            <stop offset="100%" stopColor="rgba(139, 92, 246, 0)" />
          </linearGradient>
        </defs>
        <path
          className="pulse-line pulse-line-1"
          d="M 0,300 Q 480,260 960,310 T 1920,290"
          stroke="url(#pulseGradient1)"
          strokeWidth="1.2"
          fill="none"
        />
        <path
          className="pulse-line pulse-line-2"
          d="M 0,780 Q 480,820 960,770 T 1920,800"
          stroke="url(#pulseGradient2)"
          strokeWidth="1.2"
          fill="none"
        />
        <path
          className="pulse-line pulse-line-3"
          d="M 0,540 Q 600,500 1200,560 T 1920,520"
          stroke="url(#pulseGradient1)"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      {/* Particle network canvas */}
      <canvas ref={canvasRef} className="particle-canvas"></canvas>

      {/* Grid overlay */}
      <div className="grid-overlay"></div>

      {/* Noise texture */}
      <div className="noise-overlay"></div>

      <div className="hero-container">
        <div className="hero-badge" data-testid="hero-badge">
          <span className="badge-dot"></span>
          <Sparkles size={14} className="badge-icon" />
          <span>Digital Growth Partner untuk UMKM Indonesia</span>
        </div>

        <h1 className="hero-title" data-testid="hero-title">
          Transformasi Digital
          <br />
          <span className="gradient-text">Yang Menghasilkan</span>
        </h1>

        <p className="hero-description" data-testid="hero-description">
          Kami membantu bisnis Indonesia bertumbuh lebih cepat melalui strategi digital,
          <br className="desktop-br" />
          teknologi modern, dan sistem otomasi yang efisien.
        </p>

        <div className="hero-cta-group">
          <a href="#contact" className="btn-primary" data-testid="hero-cta-primary">
            Mulai Konsultasi
            <ArrowRight size={20} className="btn-icon" />
          </a>
          <a href="#work" className="btn-secondary" data-testid="hero-cta-secondary">
            Lihat Portfolio
          </a>
        </div>

        {/* Capability cards (replacing fake metrics) */}
        <div className="hero-capabilities" data-testid="hero-capabilities">
          {heroCapabilities.map((cap, i) => {
            const Icon = iconMap[cap.icon];
            return (
              <div
                key={cap.id}
                className="capability-card"
                style={{ animationDelay: `${0.9 + i * 0.12}s` }}
                data-testid={`hero-capability-${cap.id}`}
              >
                <div className="capability-border"></div>
                <div className="capability-content">
                  <div className="capability-icon-wrap">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <div className="capability-text">
                    <div className="capability-title">{cap.title}</div>
                    <div className="capability-desc">{cap.description}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
      </div>

      <style jsx="true">{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 140px 40px 110px;
          background: #07071a;
          isolation: isolate;
        }

        /* Mesh gradient layers */
        .mesh-gradient {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.6;
        }

        .mesh-1 {
          background: radial-gradient(ellipse 80% 60% at 20% 30%, rgba(102, 126, 234, 0.35) 0%, transparent 50%);
          animation: mesh-drift-1 20s ease-in-out infinite;
        }

        .mesh-2 {
          background: radial-gradient(ellipse 60% 50% at 80% 70%, rgba(118, 75, 162, 0.3) 0%, transparent 50%);
          animation: mesh-drift-2 25s ease-in-out infinite;
        }

        .mesh-3 {
          background: radial-gradient(ellipse 50% 40% at 50% 50%, rgba(99, 102, 241, 0.25) 0%, transparent 50%);
          animation: mesh-drift-3 30s ease-in-out infinite;
        }

        @keyframes mesh-drift-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(80px, -40px) scale(1.1); }
          66% { transform: translate(-40px, 60px) scale(0.95); }
        }

        @keyframes mesh-drift-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-60px, -80px) scale(1.15); }
        }

        @keyframes mesh-drift-3 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          50% { transform: translate(40px, 30px) scale(1.2); opacity: 0.8; }
        }

        /* Liquid blobs */
        .liquid-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          mix-blend-mode: screen;
        }

        .blob-1 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%);
          top: 10%;
          right: -100px;
          animation: blob-morph-1 18s ease-in-out infinite;
        }

        .blob-2 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(79, 70, 229, 0.35) 0%, transparent 70%);
          bottom: -100px;
          left: -100px;
          animation: blob-morph-2 22s ease-in-out infinite;
        }

        @keyframes blob-morph-1 {
          0%, 100% { transform: translate(0, 0) scale(1); border-radius: 50%; }
          33% { transform: translate(-60px, 40px) scale(1.1); border-radius: 60% 40% 50% 50%; }
          66% { transform: translate(30px, -50px) scale(0.95); border-radius: 40% 60% 60% 40%; }
        }

        @keyframes blob-morph-2 {
          0%, 100% { transform: translate(0, 0) scale(1); border-radius: 50%; }
          50% { transform: translate(80px, -60px) scale(1.15); border-radius: 55% 45% 40% 60%; }
        }

        /* Electric pulse lines */
        .electric-pulse {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
          opacity: 0.7;
        }

        .pulse-line {
          stroke-dasharray: 280 2000;
          filter: drop-shadow(0 0 6px rgba(139, 92, 246, 0.5));
        }

        .pulse-line-1 {
          animation: pulse-travel 8s ease-in-out infinite, pulse-breathe 4s ease-in-out infinite;
        }

        .pulse-line-2 {
          animation: pulse-travel 10s ease-in-out infinite 1.5s, pulse-breathe 5s ease-in-out infinite 0.8s;
        }

        .pulse-line-3 {
          animation: pulse-travel 12s ease-in-out infinite 3s, pulse-breathe 6s ease-in-out infinite 1.5s;
        }

        @keyframes pulse-travel {
          0% { stroke-dashoffset: 2280; }
          100% { stroke-dashoffset: -280; }
        }

        @keyframes pulse-breathe {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.9; }
        }

        /* Particle canvas */
        .particle-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          opacity: 0.7;
          z-index: 2;
        }

        /* Grid overlay */
        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(167, 178, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(167, 178, 255, 0.03) 1px, transparent 1px);
          background-size: 80px 80px;
          mask-image: radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 80%);
          -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 80%);
          pointer-events: none;
        }

        /* Noise overlay */
        .noise-overlay {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E");
          opacity: 0.03;
          pointer-events: none;
          mix-blend-mode: overlay;
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 10;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 22px;
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(167, 178, 255, 0.15);
          border-radius: 50px;
          font-size: 13px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 40px;
          animation: fade-in-up 1s ease;
          box-shadow: 0 8px 32px rgba(102, 126, 234, 0.1);
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          background: #8b98f7;
          border-radius: 50%;
          box-shadow: 0 0 12px #8b98f7;
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }

        .badge-icon {
          color: #a7b2ff;
        }

        .hero-title {
          font-size: 88px;
          font-weight: 800;
          line-height: 1.05;
          margin-bottom: 32px;
          letter-spacing: -3px;
          animation: fade-in-up 1s ease 0.2s backwards;
        }

        .hero-description {
          font-size: 20px;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.7;
          margin-bottom: 50px;
          max-width: 740px;
          margin-left: auto;
          margin-right: auto;
          animation: fade-in-up 1s ease 0.4s backwards;
        }

        .hero-cta-group {
          display: flex;
          gap: 18px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 90px;
          animation: fade-in-up 1s ease 0.6s backwards;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 18px 36px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          text-decoration: none;
          border-radius: 12px;
          font-weight: 600;
          font-size: 15px;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s ease;
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(102, 126, 234, 0.35);
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #7c8ff4 0%, #8c5dba 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .btn-primary > * {
          position: relative;
          z-index: 1;
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 45px rgba(102, 126, 234, 0.5);
        }

        .btn-primary:hover::before {
          opacity: 1;
        }

        .btn-icon {
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .btn-primary:hover .btn-icon {
          transform: translateX(5px);
        }

        .btn-secondary {
          padding: 18px 36px;
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: white;
          text-decoration: none;
          border-radius: 12px;
          font-weight: 600;
          font-size: 15px;
          transition: all 0.4s ease;
          display: inline-block;
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(167, 178, 255, 0.4);
          transform: translateY(-3px);
        }

        /* Hero Capability Cards (replacing stats) */
        .hero-capabilities {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          max-width: 980px;
          margin: 0 auto;
        }

        .capability-card {
          position: relative;
          padding: 1px;
          border-radius: 18px;
          background: linear-gradient(
            145deg,
            rgba(167, 178, 255, 0.18) 0%,
            rgba(167, 178, 255, 0.04) 40%,
            rgba(139, 92, 246, 0.14) 100%
          );
          opacity: 0;
          transform: translateY(20px);
          animation: cap-reveal 0.9s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        @keyframes cap-reveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .capability-card:hover {
          transform: translateY(-6px);
        }

        /* Animated border light */
        .capability-border {
          position: absolute;
          inset: -50%;
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            transparent 320deg,
            rgba(167, 178, 255, 0.6) 350deg,
            rgba(139, 92, 246, 0.8) 360deg,
            transparent 360deg
          );
          opacity: 0;
          transition: opacity 0.5s ease;
          animation: border-rotate 6s linear infinite;
          pointer-events: none;
        }

        @keyframes border-rotate {
          to { transform: rotate(360deg); }
        }

        .capability-card:hover .capability-border {
          opacity: 1;
        }

        .capability-content {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 22px 24px;
          background: linear-gradient(
            145deg,
            rgba(15, 15, 35, 0.92) 0%,
            rgba(20, 20, 45, 0.88) 100%
          );
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-radius: 17px;
          text-align: left;
          height: 100%;
        }

        .capability-icon-wrap {
          width: 44px;
          height: 44px;
          min-width: 44px;
          border-radius: 12px;
          background: linear-gradient(
            145deg,
            rgba(102, 126, 234, 0.18) 0%,
            rgba(139, 92, 246, 0.18) 100%
          );
          border: 1px solid rgba(167, 178, 255, 0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #a7b2ff;
          transition: background 0.4s ease, color 0.4s ease, transform 0.4s ease;
        }

        .capability-card:hover .capability-icon-wrap {
          background: linear-gradient(
            145deg,
            rgba(102, 126, 234, 0.35) 0%,
            rgba(139, 92, 246, 0.35) 100%
          );
          color: #ffffff;
          transform: scale(1.05);
        }

        .capability-title {
          font-size: 15px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 3px;
          letter-spacing: -0.2px;
        }

        .capability-desc {
          font-size: 12.5px;
          color: rgba(255, 255, 255, 0.55);
          line-height: 1.5;
        }

        .desktop-br {
          display: block;
        }

        /* Scroll indicator */
        .scroll-indicator {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 5;
        }

        .scroll-line {
          width: 1px;
          height: 56px;
          background: linear-gradient(180deg, transparent, rgba(167, 178, 255, 0.6), transparent);
          animation: scroll-line-pulse 2.5s ease-in-out infinite;
        }

        @keyframes scroll-line-pulse {
          0%, 100% { opacity: 0.3; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(10px); }
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

        @media (max-width: 1024px) {
          .hero-title {
            font-size: 64px;
            letter-spacing: -2px;
          }

          .hero-capabilities {
            max-width: 720px;
          }
        }

        @media (max-width: 820px) {
          .hero-capabilities {
            grid-template-columns: 1fr;
            max-width: 460px;
            gap: 14px;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 120px 20px 80px;
          }

          .hero-title {
            font-size: 44px;
            letter-spacing: -1.5px;
          }

          .hero-description {
            font-size: 16px;
          }

          .desktop-br {
            display: none;
          }

          .scroll-indicator {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 36px;
          }

          .hero-badge {
            font-size: 11px;
            padding: 8px 16px;
          }

          .btn-primary, .btn-secondary {
            padding: 16px 28px;
            font-size: 14px;
            width: 100%;
            justify-content: center;
          }

          .hero-cta-group {
            flex-direction: column;
            gap: 12px;
            margin-bottom: 64px;
          }

          .capability-content {
            padding: 18px 20px;
          }
        }

        /* Mobile performance: thin out heavy ambient effects */
        @media (max-width: 768px) {
          .liquid-blob {
            filter: blur(60px);
          }

          .blob-1 {
            width: 360px;
            height: 360px;
          }

          .blob-2 {
            width: 420px;
            height: 420px;
          }

          .electric-pulse {
            opacity: 0.45;
          }

          .grid-overlay {
            background-size: 60px 60px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
