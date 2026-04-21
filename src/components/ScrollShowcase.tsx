import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import screen from '../assets/screen.png';

gsap.registerPlugin(ScrollTrigger);

// ── Icons ──────────────────────────────────────────────────────────────────

const IconLiquidity = ({ color = '#9f04f8' }) => (
  <svg width="54" height="54" viewBox="0 0 36 36" fill="none">
    <circle cx="14" cy="18" r="4.2" stroke={color} strokeWidth="1.6" />
    <circle cx="14" cy="18" r="6.4" stroke={color} strokeWidth="1" opacity="0.5" />
    <circle cx="14" cy="18" r="8.6" stroke={color} strokeWidth="0.7" opacity="0.22" />
    <circle cx="22" cy="18" r="4.2" stroke={color} strokeWidth="1.6" />
    <circle cx="22" cy="18" r="6.4" stroke={color} strokeWidth="1" opacity="0.5" />
    <circle cx="22" cy="18" r="8.6" stroke={color} strokeWidth="0.7" opacity="0.22" />
  </svg>
);

const IconRouting = ({ color = '#9f04f8' }) => (
  <svg width="54" height="54" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="18" r="4" stroke={color} strokeWidth="1.6" />
    <circle cx="18" cy="18" r="6.5" stroke={color} strokeWidth="1" opacity="0.5" />
    <circle cx="18" cy="18" r="9" stroke={color} strokeWidth="0.7" opacity="0.22" />
    <line x1="6" y1="6" x2="14.8" y2="14.8" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    <polyline points="10,6 6,6 6,10" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="21.2" y1="21.2" x2="30" y2="30" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    <polyline points="26,30 30,30 30,26" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconChain = ({ color = '#9f04f8' }) => (
  <svg width="54" height="54" viewBox="0 0 36 36" fill="none">
    <rect x="3.5" y="13" width="15" height="10" rx="5" stroke={color} strokeWidth="1.6" />
    <rect x="1.5" y="11" width="19" height="14" rx="7" stroke={color} strokeWidth="1" opacity="0.5" />
    <rect x="-0.5" y="9" width="23" height="18" rx="9" stroke={color} strokeWidth="0.7" opacity="0.22" />
    <rect x="17.5" y="13" width="15" height="10" rx="5" stroke={color} strokeWidth="1.6" />
    <rect x="15.5" y="11" width="19" height="14" rx="7" stroke={color} strokeWidth="1" opacity="0.5" />
    <rect x="13.5" y="9" width="23" height="18" rx="9" stroke={color} strokeWidth="0.7" opacity="0.22" />
  </svg>
);

const IconSpeed = ({ color = '#9f04f8' }) => (
  <svg width="54" height="54" viewBox="0 0 36 36" fill="none">
    <path d="M22 3 L10 19.5 H17.5 L14 33 L26 16.5 H18.5 Z" stroke={color} strokeWidth="0.7" strokeLinejoin="round" opacity="0.22" transform="translate(-1.2,-1.2) scale(1.14)" />
    <path d="M22 3 L10 19.5 H17.5 L14 33 L26 16.5 H18.5 Z" stroke={color} strokeWidth="1" strokeLinejoin="round" opacity="0.5" transform="translate(-0.6,-0.6) scale(1.07)" />
    <path d="M22 3 L10 19.5 H17.5 L14 33 L26 16.5 H18.5 Z" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);

// ── Data ───────────────────────────────────────────────────────────────────

const defaultFeatures = [
  { icon: <IconLiquidity />, title: 'Capital-efficient liquidity', description: 'Concentrated liquidity pools designed for tighter spreads and better execution.', position: 'left' },
  { icon: <IconRouting />,   title: 'Smart execution',             description: 'Optimized routing and clear price impact before every swap.',                    position: 'left' },
  { icon: <IconChain />,     title: 'Onchain by default',          description: 'Every trade is verifiable onchain, no hidden logic, no black boxes.',            position: 'right' },
  { icon: <IconSpeed />,     title: 'Built for speed',             description: 'A frictionless trading flow designed to keep you in control.',                   position: 'right' },
];

// ── Component ──────────────────────────────────────────────────────────────

export default function ScrollShowcase({
  title = 'A new standard for ',
  highlightedWord = 'DECENTRALISED',
  features = defaultFeatures,
}) {
  const sectionRef        = useRef(null);
  const containerRef      = useRef(null);
  const imageRef          = useRef(null);
  const titleRef          = useRef(null);
  const leftFeaturesRef   = useRef(null);
  const rightFeaturesRef  = useRef(null);
  const mobileFeaturesRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    const section        = sectionRef.current;
    const container      = containerRef.current;
    const image          = imageRef.current;
    const titleEl        = titleRef.current;
    const leftFeatures   = leftFeaturesRef.current;
    const rightFeatures  = rightFeaturesRef.current;
    const mobileFeatures = mobileFeaturesRef.current;

    if (!section || !container || !image || !titleEl) return;

    const ctx = gsap.context(() => {
      if (isMobile) {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: section, start: 'top top', end: '+=120%', pin: true, scrub: 1 },
        });
        tl.to(titleEl, { y: -60,  opacity: 0, duration: 0.3, ease: 'power2.inOut' }, 0);
        tl.to(image,   { scale: 0.55, y: -40, duration: 0.4, ease: 'power2.inOut' }, 0.1);
        if (mobileFeatures) {
          const cards = mobileFeatures.querySelectorAll('.feature-card');
          tl.fromTo(cards, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3, stagger: 0.08, ease: 'power3.out' }, 0.3);
        }
      } else {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: '+=150%',
            pin: true,
            scrub: 1,
            snap: {
              snapTo: (progress) => {
                if (progress < 0.3) return 0.15;
                if (progress > 0.7) return 1;
                return 0.5;
              },
              duration: { min: 0.2, max: 0.5 },
              delay: 0,
            },
          },
        });
        tl.to(titleEl, { y: -100, opacity: 0, duration: 0.3, ease: 'power2.inOut' }, 0);
        tl.to(image,   { scale: 0.65,          duration: 0.4, ease: 'power2.inOut' }, 0.1);
        if (leftFeatures) {
          const cards = leftFeatures.querySelectorAll('.feature-card');
          tl.fromTo(cards, { x: -150, opacity: 0 }, { x: 0, opacity: 1, duration: 0.3, stagger: 0.1, ease: 'power3.out' }, 0.3);
        }
        if (rightFeatures) {
          const cards = rightFeatures.querySelectorAll('.feature-card');
          tl.fromTo(cards, { x: 150, opacity: 0 }, { x: 0, opacity: 1, duration: 0.3, stagger: 0.1, ease: 'power3.out' }, 0.3);
        }
      }
    }, section);

    return () => ctx.revert();
  }, [isMobile]);

  const leftFeats  = features.filter(f => f.position === 'left');
  const rightFeats = features.filter(f => f.position === 'right');

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@300;400;500;700;800&family=DM+Mono:wght@300;400&display=swap');

        .ss-wrap, .ss-wrap * { font-family: 'Syne', sans-serif !important; }

        .ss-title-text {
          font-size: clamp(18px, 2.4vw, 34px);
          font-weight: 300;
          color: #fff;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }

        .ss-title-highlight {
          font-weight: 700;
          letter-spacing: 0.22em;
          color: #9f04f8;
        }

        .ss-feature-title {
          font-size: clamp(15px, 1.4vw, 19px);
          font-weight: 400;
          color: rgba(255,255,255,0.88);
          margin: 0 0 6px;
          line-height: 1.25;
          letter-spacing: -0.01em;
        }

        .ss-feature-desc {
          font-size: clamp(12px, 1vw, 14px);
          color: rgba(255,255,255,0.32);
          line-height: 1.75;
          margin: 0;
          font-weight: 300;
        }

        .ss-image-wrap {
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(97, 20, 241, 0.3);
          background: #000;
          padding: 14px;
          box-shadow:
            0 25px 60px -12px rgba(97, 20, 241, 0.35),
            0 0 100px rgba(159, 4, 248, 0.12);
        }

        .ss-image-inner-glow {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(to top, rgba(255, 69, 219, 0.07) 0%, transparent 50%);
        }
      `}</style>

      <section
        ref={sectionRef}
        className="ss-wrap relative w-full min-h-screen overflow-hidden"
        style={{ backgroundColor: '#000' }}
      >
        {/* Ambient gradient washes */}
        <div className="absolute bottom-0 left-0 w-full h-2/3 pointer-events-none" style={{
          background: 'linear-gradient(to top, rgba(97,20,241,0.12), rgba(159,4,248,0.05), transparent)',
        }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(97,20,241,0.09) 0%, transparent 60%)',
        }} />
        <div className="absolute bottom-0 right-0 w-2/3 h-full pointer-events-none" style={{
          background: 'linear-gradient(to left, rgba(255,69,219,0.07), transparent)',
        }} />

        {/* Edge fades */}
        <div className="absolute top-0 left-0 right-0 h-64 pointer-events-none z-30" style={{
          background: 'linear-gradient(to bottom, #000 0%, rgba(0,0,0,0.7) 40%, transparent 100%)',
        }} />
        <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none z-30" style={{
          background: 'linear-gradient(to top, #000 0%, rgba(0,0,0,0.7) 40%, transparent 100%)',
        }} />

        {/* Main */}
        <div ref={containerRef} className="relative w-full h-screen flex items-center justify-center">

          {/* Title */}
          <div ref={titleRef} className="absolute top-[12%] md:top-[15%] left-0 right-0 text-center z-10 px-4">
            <p className="ss-title-text">
              {title}
              <span className="ss-title-highlight"> {highlightedWord} </span>
              exchange
            </p>
          </div>

          {/* DESKTOP: Left features */}
          <div
            ref={leftFeaturesRef}
            className="hidden md:flex absolute left-6 lg:left-16 xl:left-24 top-1/2 -translate-y-1/2 z-20 flex-col gap-10 md:gap-14"
          >
            {leftFeats.map((feature, i) => (
              <div key={i} className="feature-card flex items-start gap-4 max-w-[260px] lg:max-w-[300px]">
                <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                <div>
                  <h3 className="ss-feature-title">{feature.title}</h3>
                  <p className="ss-feature-desc">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Central image */}
          <div ref={imageRef} className="relative z-10 w-[85%] md:w-[50%] max-w-[1000px] mx-auto">
            <div className="ss-image-wrap relative">
              <img src={screen} alt="Synthra app" className="w-full h-auto object-cover rounded-xl block" />
              <div className="ss-image-inner-glow" />
            </div>
          </div>

          {/* DESKTOP: Right features */}
          <div
            ref={rightFeaturesRef}
            className="hidden md:flex absolute right-6 lg:right-16 xl:right-24 top-1/2 -translate-y-1/2 z-20 flex-col gap-10 md:gap-14"
          >
            {rightFeats.map((feature, i) => (
              <div key={i} className="feature-card flex items-start gap-4 max-w-[260px] lg:max-w-[300px]">
                <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                <div>
                  <h3 className="ss-feature-title">{feature.title}</h3>
                  <p className="ss-feature-desc">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE: Feature grid */}
          <div ref={mobileFeaturesRef} className="md:hidden absolute bottom-[4%] left-0 right-0 z-20 px-4">
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, i) => (
                <div key={i} className="feature-card flex flex-col gap-2 rounded-2xl p-3" style={{
                  background: 'rgba(0,0,0,0.65)',
                  backdropFilter: 'blur(14px)',
                  border: '1px solid rgba(97,20,241,0.18)',
                }}>
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <h3 style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.9)', margin: 0, lineHeight: 1.3 }}>{feature.title}</h3>
                  <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.32)', lineHeight: 1.6, margin: 0 }}>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}