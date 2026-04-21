import { useEffect, useRef } from "react";

export default function HeroSection() {
  const canvasRef = useRef(null);

  // Subtle animated grain/noise on the bg
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let t = 0;

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      const imageData = ctx.createImageData(w, h);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * 18;
        data[i] = noise;
        data[i + 1] = noise;
        data[i + 2] = noise;
        data[i + 3] = 28; // very subtle
      }
      ctx.putImageData(imageData, 0, 0);
      t++;
      animId = requestAnimationFrame(draw);
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;700;800&family=DM+Mono:wght@300;400&display=swap');

        .hero-root {
          position: relative;
          width: 100%;
          min-height: 520px;
          background: #44169b;
          overflow: hidden;
          display: flex;
          align-items: flex-end;
          padding: 56px 60px 60px;
          font-family: 'Syne', sans-serif;
          box-sizing: border-box;
        }

        /* Mesh blobs */
        .hero-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
        }
        .hero-blob-1 {
          width: 520px; height: 520px;
          background: rgba(255, 69, 219, 0.35);
          top: -160px; right: -80px;
        }
        .hero-blob-2 {
          width: 360px; height: 360px;
          background: rgba(30, 0, 120, 0.45);
          bottom: -120px; left: 30%;
        }
        .hero-blob-3 {
          width: 260px; height: 260px;
          background: rgba(255,255,255,0.06);
          top: 40px; left: 40%;
        }

        /* Grain canvas overlay */
        .hero-grain {
          position: absolute;
          inset: 0;
          width: 100%; height: 100%;
          pointer-events: none;
          mix-blend-mode: overlay;
        }

        /* Content */
        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 820px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .hero-eyebrow {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          margin: 0 0 20px;
          animation: heroFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.05s both;
        }

        .hero-headline {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(26px, 4.5vw, 62px);
          line-height: 1.03;
          letter-spacing: -0.035em;
          color: #fff;
          margin: 0 0 28px;
          animation: heroFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.15s both;
        }

        .hero-sub {
          font-family: 'Syne', sans-serif;
          font-size: clamp(15px, 1.4vw, 18px);
          font-weight: 400;
          line-height: 1.65;
          color: rgba(255,255,255,0.6);
          max-width: 560px;
          margin: 0 0 44px;
          animation: heroFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.25s both;
        }

        .hero-cta-wrap {
          animation: heroFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.35s both;
        }

        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #fff;
          color: #6114f1;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 15px;
          letter-spacing: -0.01em;
          padding: 14px 28px;
          border-radius: 100px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: background 0.25s ease, color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
          box-shadow: 0 4px 24px rgba(0,0,0,0.18);
        }

        .hero-cta:hover {
          background: rgba(255,255,255,0.92);
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(0,0,0,0.25);
        }

        .hero-cta:hover .hero-arrow {
          transform: translateX(4px);
        }

        .hero-arrow {
          display: inline-block;
          transition: transform 0.25s ease;
          font-size: 17px;
        }

        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section className="hero-root">
        {/* Blobs */}
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />

        {/* Grain */}
        <canvas ref={canvasRef} className="hero-grain" />

        {/* Text */}
        <div className="hero-content">
          <p className="hero-eyebrow">One interface. Full market access.</p>

          <h1 className="hero-headline">
            A CEX-like DEX for the next generation of on-chain trading.
          </h1>

          <p className="hero-sub">
            Spot, perps, launchpad and trading APIs — unified in a single
            execution-first platform across emerging EVM chains.
          </p>

          <div className="hero-cta-wrap">
            <a
              className="hero-cta"
              href="https://app.synthra.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Trade now <span className="hero-arrow">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}