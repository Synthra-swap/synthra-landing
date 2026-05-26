import { ArrowRight, BookOpen, Code2, Github, Layers3, Network, Radio, ShieldCheck, Sparkle, Zap } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

import coinGeckoLogo from '../assets/CG-Wordmark@2x-2.png';
import pythLogo from '../assets/pyth.png';
import robinhoodLogo from '../assets/robinhood-logo-white.png';
import screen from '../assets/screen.png';
import synthraMark from '../assets/syntra-logo-no-bg.png';
import theGraphLogo from '../assets/theGraph.png';
import uomiLogo from '../assets/UOMI_white.png';
import arcLogo from '../assets/Arc_Icon_White.png';
import SEO from '../components/SEO';
import heroVideo from '../assets/hero.mp4';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.64, delay, ease: [0.16, 1, 0.3, 1] },
});


const ctaHls = 'https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8';

const cardVideos = [
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_183428_ab5e672a-f608-4dcb-b319-f3e040f02e2d.mp4',
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_154543_d5b83fc1-9cea-44f3-b5e8-8f325935211a.mp4',
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_153148_d7a3e1dd-e5d0-4ce6-8306-00d7522ecc44.mp4',
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_183428_ab5e672a-f608-4dcb-b319-f3e040f02e2d.mp4',
];

const proofStats = [
  ['65-100k', 'monthly active users'],
  ['$5B+', 'cumulative testnet volume'],
  ['$250M+', 'perps volume in first 7 days'],
  ['12k+', 'organic community members'],
];

const protocolPillars = [
  {
    title: 'Unified liquidity',
    description: 'Spot pools, stablecoin routes and perpetual markets are exposed through one execution layer.',
    icon: Layers3,
  },
  {
    title: 'Smart routing',
    description: 'Quotes, route metadata, approvals and calldata are prepared for fast app and API integrations.',
    icon: Network,
  },
  {
    title: 'Abstracted execution',
    description: 'Low-friction settlement and a market design built to hide chain complexity.',
    icon: Zap,
  },
];

const featureCards = [
  {
    label: 'LIQUIDITY LAYER',
    title: 'Synthra connects the markets.',
    text: 'Spot, stablecoin and perps liquidity are organized into one execution surface for traders and integrators.',
  },
  {
    label: 'EXECUTION LAYER',
    title: 'Hybrid spot and perps.',
    text: 'Concentrated liquidity, stablecoin routing, isolated perp pools, multi-oracle pricing and anti-toxic-flow controls.',
  },
  {
    label: 'ROUTER LAYER',
    title: 'Synthra becomes the rail.',
    text: 'Intent-based routing: source asset, destination market, one trading experience.',
  },
  {
    label: 'DEVELOPER LAYER',
    title: 'Public APIs for builders.',
    text: 'Quote, allowance, Permit2, calldata and route metadata are designed to be consumed by apps, bots and market makers.',
  },
];

const integrationTiles = [
  [Code2, 'Quote API'],
  [ShieldCheck, 'Permit2'],
  [Radio, 'WebSockets'],
  [Github, 'SDK'],
  [Zap, 'Fast routing'],
];

const partners = [
  { src: robinhoodLogo, alt: 'Robinhood Chain' },
  { src: pythLogo, alt: 'Pyth' },
  { src: arcLogo, alt: 'Arc' },
  { src: theGraphLogo, alt: 'The Graph' },
  { src: coinGeckoLogo, alt: 'CoinGecko' },
  { src: uomiLogo, alt: 'UOMI' },
];

const SectionLabel = ({ children }) => (
  <div className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.24em] text-white/45">
    <Sparkle size={13} strokeWidth={1.5} />
    {children}
    <Sparkle size={13} strokeWidth={1.5} />
  </div>
);

const ArrowButton = ({ href, children, variant = 'primary' }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`group inline-flex items-center gap-3 rounded-full px-5 py-2.5 text-sm font-semibold transition duration-200 ${
      variant === 'primary'
        ? 'bg-white text-black hover:bg-white/90'
        : 'liquid-glass text-white hover:bg-white/[0.05]'
    }`}
  >
    {children}
    <span
      className={`grid h-7 w-7 place-items-center rounded-full transition duration-200 group-hover:translate-x-0.5 ${
        variant === 'primary' ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      <ArrowRight size={15} />
    </span>
  </a>
);

const Hero = () => (
  <section className="md:mx-20 md:mt-25 mx-9 mt-9 rounded-3xl bg-black relative grid min-h-screen place-items-center overflow-hidden px-4 py-28 text-center sm:px-6">
    <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover opacity-70">
      <source src={heroVideo} type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.10),transparent_34%),rgba(0,0,0,0.58)]" />
    <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-black to-transparent" />

    <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center">


      <motion.h1
        {...fadeUp(0.08)}
        className="text-[clamp(3.8rem,10vw,9.5rem)] font-medium leading-[0.86] tracking-[-0.08em] text-white"
      >
        One layer.
        <br />
        <span className="font-serif italic font-normal tracking-[-0.055em]">All markets.</span>
      </motion.h1>

      <motion.p {...fadeUp(0.16)} className="mt-8 max-w-2xl text-base leading-[1.75] text-white/92 sm:text-lg">
        Synthra is the chain-abstracted trading layer: spot, perps, liquidity and routing APIs in one execution experience.
      </motion.p>

      <motion.div {...fadeUp(0.24)} className="mt-9 flex flex-col gap-3 sm:flex-row">
        <ArrowButton href="https://app.synthra.org">Launch app</ArrowButton>
        <ArrowButton href="https://docs.synthra.org" variant="secondary">
          Read docs
        </ArrowButton>
      </motion.div>
    </div>
  </section>
);

const MeetSynthraSection = () => (
  <section className="bg-[#f5f5f5] px-4 py-24 text-black sm:px-6 md:py-28">
    <div className="mx-auto max-w-[88rem]">
      <div className="mb-16 grid gap-12 md:grid-cols-2 md:items-start">
        <motion.div {...fadeUp(0)}>
          <p className="mb-3 text-sm text-black/48">Chain-abstracted trading</p>
          <h2 className="max-w-xl text-5xl font-medium leading-[0.95] tracking-[-0.06em] md:text-6xl">
            Meet Synthra.
          </h2>
          <a
            href="https://app.synthra.org"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-black py-2 pl-7 pr-2 text-base font-medium text-white transition hover:bg-neutral-800"
          >
            Discover it
            <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-black">
              <ArrowRight size={18} />
            </span>
          </a>
        </motion.div>
        <motion.p {...fadeUp(0.08)} className="max-w-3xl text-2xl leading-[1.24] tracking-[-0.04em] text-black/68 md:text-3xl">
          Synthra turns on-chain trading into a single exchange-like surface: deep spot liquidity, perps execution, developer APIs and cross-chain routing.
        </motion.p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <motion.article
          {...fadeUp(0)}
          className="relative min-h-80 overflow-hidden rounded-[28px] bg-cover bg-center p-7 sm:col-span-2"
          style={{
            backgroundImage:
              'url(/syn-mushroom.png)',
          }}
        >
          <div className="absolute inset-0 bg-white/10" />
          <div className="relative z-10 flex h-full min-h-[20rem] flex-col justify-between">
            <h3 className="max-w-sm text-3xl font-medium leading-[1.05] tracking-[-0.045em] text-black">A balance that moves with you</h3>
            <p className="max-w-sm text-base leading-7 text-black/64">
              Deposit from any supported chain, route through Synthra, and trade without bridge-native UX.
            </p>
          </div>
        </motion.article>

        <motion.article {...fadeUp(0.06)} className="flex stable-card--dark stable-card min-h-80 flex-col justify-between rounded-[28px] bg-[#221d33] p-7 text-white">
          <h3 className="text-3xl font-medium leading-[1.05] tracking-[-0.045em]">
            Always liquid,
            <br />
            always on-chain.
          </h3>
          <p className="text-base leading-7 text-white/56">
            Hybrid AMM spot markets and isolated perp pools keep execution transparent and composable.
          </p>
        </motion.article>

        <motion.article {...fadeUp(0.12)} className="flex stable-card--dark stable-card min-h-80 flex-col justify-between rounded-[28px] bg-[#221d33] p-7 text-white">
          <h3 className="text-3xl font-medium leading-[1.05] tracking-[-0.045em]">
            Fully
            <br />
            abstracted.
          </h3>
          <p className="text-base leading-7 text-white/56">
            Routing and quote preparation are designed to make trading feel instant.
          </p>
        </motion.article>
      </div>
    </div>
  </section>
);

const BackedBySection = () => (
  <section className="bg-[#f5f5f5] px-4 pb-24 text-black sm:px-6">
    <div className="mx-auto grid max-w-[88rem] items-center gap-8 md:grid-cols-4">
      <p className="text-base leading-7 text-black/58">
        Integrated with market data, liquidity and routing infrastructure.
      </p>
      <div className="overflow-hidden md:col-span-3 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="synthra-marquee flex w-max items-center gap-16">
          {[...partners, ...partners].map((partner, index) => (
            <img key={`${partner.alt}-light-${index}`} src={partner.src} alt={partner.alt} className="max-h-8 max-w-[150px] object-contain opacity-45 invert" />
          ))}
        </div>
      </div>
    </div>
  </section>
);

const ProofStrip = () => (
  <section className="px-4 py-20 sm:px-6 md:py-28">
    <div className="mx-auto grid max-w-[88rem] gap-4 md:grid-cols-4">
      {proofStats.map(([value, label], index) => (
        <motion.div key={value} {...fadeUp(index * 0.05)} className="liquid-glass rounded-3xl px-6 py-7">
          <div className="text-4xl font-light tracking-[-0.06em] text-white md:text-5xl">{value}</div>
          <p className="mt-4 max-w-[13rem] text-sm leading-6 text-white/48">{label}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const ThesisSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0.12, 0.45, 0.85], [0.25, 1, 0.65]);

  return (
    <section ref={ref} className="px-4 pb-28 pt-10 sm:px-6 md:pb-40">
      <div className="mx-auto max-w-[72rem] text-center">
        <SectionLabel>The thesis</SectionLabel>
        <motion.p style={{ opacity }} className="text-[clamp(2.1rem,5.4vw,5.8rem)] font-medium leading-[1.02] tracking-[-0.06em] text-white">
          The best DEX experience is the one where the chain disappears, while settlement stays fully on-chain.
        </motion.p>
        <motion.p {...fadeUp(0.08)} className="mx-auto mt-8 max-w-3xl text-base leading-8 text-white/52 md:text-xl md:leading-9">
          CEX products win on simplicity. DeFi wins on transparency. Synthra is built to bring both into one execution surface across chains.
        </motion.p>
      </div>
    </section>
  );
};

const ProductGrid = () => (
  <section className="px-4 bg-black py-10 sm:px-6 lg:min-h-screen">
    <div className="mx-auto max-w-[88rem]">
      <motion.div {...fadeUp(0)} className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div className="max-w-3xl">
          <h2 className="text-[clamp(2rem,4vw,4rem)] font-normal leading-[1.02] tracking-[-0.055em] text-white">
            Built like an exchange. Settled like a protocol.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55 md:text-[15px]">
            The product architecture is split into liquidity, execution and routing layers so teams can integrate trading without rebuilding market infrastructure.
          </p>
        </div>
        <ArrowButton href="https://docs.synthra.org" variant="secondary">
          Architecture
        </ArrowButton>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <motion.article {...fadeUp(0.04)} className="noise-overlay relative min-h-[520px] overflow-hidden rounded-[28px] bg-black p-6">
          <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover opacity-72">
            <source src={cardVideos[0]} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/10" />
          <div className="relative z-10 flex h-full flex-col justify-between">
            <SectionLabel>Execution layer</SectionLabel>
            <div>
              <h3 className="text-4xl font-light tracking-[-0.055em] text-white">Spot + perps, unified</h3>
              <p className="mt-4 text-sm leading-7 text-white/58">Concentrated liquidity, stablecoin routing and GMX-style isolated risk pools for synthetic markets.</p>
            </div>
          </div>
        </motion.article>

        <div className="grid gap-4">
          <motion.article {...fadeUp(0.08)} className="noise-overlay relative overflow-hidden rounded-[28px] bg-[#ffbffe]/30 p-6">
            <SectionLabel>Liquidity layer</SectionLabel>
            <p className="mt-14 text-2xl font-light leading-[1.2] tracking-[-0.04em] text-white md:text-3xl">
              Synthra coordinates concentrated liquidity, stablecoin routes and perps pools through one market layer.
            </p>
          </motion.article>
          <motion.article {...fadeUp(0.12)} className="relative min-h-[270px] overflow-hidden rounded-[28px] bg-black">
            <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover opacity-76">
              <source src={cardVideos[1]} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/38" />
            <div className="relative z-10 flex h-full min-h-[270px] flex-col items-center justify-center p-6 text-center">
            <div className="text-[clamp(4rem,8vw,6.5rem)] font-light leading-none tracking-[-0.08em] text-white">$5B+</div>
              <p className="mt-4 text-sm text-white/72">cumulative testnet volume</p>
            </div>
          </motion.article>
        </div>

        <div className="grid gap-4 md:col-span-2 lg:col-span-1">
          <motion.article {...fadeUp(0.16)} className="relative min-h-[300px] overflow-hidden rounded-[28px] bg-black p-6">
            <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover opacity-70">
              <source src={cardVideos[2]} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <SectionLabel>Integration surface</SectionLabel>
              <div className="space-y-3 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
                <div className="animate-marquee-left flex w-max gap-3">
                  {[...integrationTiles, ...integrationTiles].map(([Icon, label], index) => (
                    <span key={`${label}-${index}`} className="liquid-glass inline-flex h-14 items-center gap-3 rounded-2xl px-4 text-sm text-white/78">
                      <Icon size={18} strokeWidth={1.5} />
                      {label}
                    </span>
                  ))}
                </div>
                <div className="animate-marquee-right flex w-max gap-3">
                  {[...integrationTiles.slice().reverse(), ...integrationTiles.slice().reverse()].map(([Icon, label], index) => (
                    <span key={`${label}-reverse-${index}`} className="liquid-glass inline-flex h-14 items-center gap-3 rounded-2xl px-4 text-sm text-white/78">
                      <Icon size={18} strokeWidth={1.5} />
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>

          <motion.article {...fadeUp(0.2)} className="noise-overlay relative overflow-hidden rounded-[28px] bg-[#201b2f] p-6">
            <SectionLabel>Router layer</SectionLabel>
            <p className="mt-10 text-2xl font-light leading-[1.2] tracking-[-0.04em] text-white md:text-3xl">
             Source chain, execution layer, destination market.
            </p>
          </motion.article>
        </div>
      </div>
    </div>
  </section>
);

const ArchitectureSection = () => (
  <section className="border-t bg-black border-black px-4 py-28 sm:px-6 md:py-40">
    <div className="mx-auto grid max-w-[88rem] gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
      <motion.div {...fadeUp(0)}>
        <SectionLabel>How it works</SectionLabel>
        <h2 className="max-w-lg text-[clamp(2.4rem,5vw,5.6rem)] font-medium leading-[0.96] tracking-[-0.07em] text-white">
          Three layers. One trading account.
        </h2>
        <p className="mt-7 max-w-md text-base leading-8 text-white/52">
          Synthra is not trying to be another generic DEX screen. It is a trading layer where liquidity, execution and cross-chain routing are orchestrated together.
        </p>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-3">
        {protocolPillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <motion.article key={pillar.title} {...fadeUp(index * 0.06)} className="liquid-glass min-h-[310px] rounded-[28px] p-6">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-black">
                <Icon size={22} strokeWidth={1.5} />
              </div>
              <h3 className="mt-16 text-2xl font-medium tracking-[-0.045em] text-white">{pillar.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/50">{pillar.description}</p>
            </motion.article>
          );
        })}
      </div>
    </div>
  </section>
);

const AppPreviewSection = () => (
  <section className="px-4 py-10 sm:px-6 md:py-20">
    <div className="mx-auto max-w-[88rem]">
      <motion.div {...fadeUp(0)} className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#050505] p-3 shadow-2xl shadow-black">
        <img src={screen} alt="Synthra trading interface" className="w-full rounded-[24px] object-cover opacity-92" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 flex flex-col justify-between gap-5 md:bottom-10 md:left-10 md:right-10 md:flex-row md:items-end">
          <div>
            <SectionLabel>Trading surface</SectionLabel>
            <h2 className="max-w-2xl text-3xl font-medium leading-tight tracking-[-0.055em] text-white md:text-5xl">
              CEX-like speed, with on-chain execution underneath.
            </h2>
          </div>
          <ArrowButton href="https://app.synthra.org">Open Synthra</ArrowButton>
        </div>
      </motion.div>
    </div>
  </section>
);

const FeatureList = () => (
  <section className="border-t bg-black border-black px-4 py-28 sm:px-6 md:py-40">
    <div className="mx-auto max-w-[88rem]">
      <motion.div {...fadeUp(0)} className="mb-16 max-w-3xl">
        <SectionLabel>Product surface</SectionLabel>
        <h2 className="text-[clamp(2.5rem,5vw,5.7rem)] font-medium leading-[0.98] tracking-[-0.07em] text-white">
          Designed for traders, LPs and developers.
        </h2>
      </motion.div>
      <div className="grid gap-x-12 gap-y-14 md:grid-cols-4">
        {featureCards.map((feature, index) => (
          <motion.article key={feature.title} {...fadeUp(index * 0.05)} className="border-t border-white/12 pt-6">
            <p className="text-[11px] font-medium tracking-[0.22em] text-white/34">{feature.label}</p>
            <h3 className="mt-8 text-xl font-medium tracking-[-0.035em] text-white">{feature.title}</h3>
            <p className="mt-4 text-sm leading-7 text-white/48">{feature.text}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

const CtaSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;
    let hls;
    let cancelled = false;

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = ctaHls;
      return undefined;
    }

    import('hls.js').then(({ default: Hls }) => {
      if (cancelled || !Hls.isSupported()) return;
      hls = new Hls();
      hls.loadSource(ctaHls);
      hls.attachMedia(video);
    });

    return () => {
      cancelled = true;
      hls?.destroy();
    };
  }, []);

  return (
    <section className="relative overflow-hidden border-t bg-black border-black px-4 py-32 sm:px-6 md:py-44">
      <video ref={videoRef} autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover opacity-55" />
      <div className="absolute inset-0 bg-black/52" />
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.img {...fadeUp(0)} src={synthraMark} alt="" className="mb-8 h-16 w-16 object-contain" />
        <motion.h2 {...fadeUp(0.06)} className="text-[clamp(2.8rem,6vw,6.8rem)] font-medium leading-[0.92] tracking-[-0.075em] text-white">
          Build on the trading layer where the chain disappears.
        </motion.h2>
        <motion.p {...fadeUp(0.12)} className="mt-8 max-w-2xl text-base leading-8 text-white/58">
          Launch the app, integrate the APIs, or follow the docs as Synthra expands routing and market access.
        </motion.p>
        <motion.div {...fadeUp(0.18)} className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ArrowButton href="https://app.synthra.org">Start trading</ArrowButton>
          <ArrowButton href="https://docs.synthra.org" variant="secondary">
            <BookOpen size={16} />
            API docs
          </ArrowButton>
        </motion.div>
      </div>
    </section>
  );
};

const Home = () => (
  <main className="overflow-hidden bg-black text-white">
    <SEO
      title="Synthra — Chain-Abstracted Trading Layer"
      description="Synthra is the chain-abstracted trading layer and cross-chain DEX for spot, perps and liquidity markets across Arc, Robinhood Chain and emerging markets."
      keywords="Synthra, chain abstraction trading layer, chain abstracted DEX, Arc DEX, DEX on Arc, multichain DEX, cross-chain DEX, crosschain DEX, spot trading, perps trading, liquidity, routing APIs"
      path="/"
    />
    <Hero />
    <MeetSynthraSection />
    <BackedBySection />
    <ProductGrid />
    <ArchitectureSection />
    <FeatureList />
    <CtaSection />
  </main>
);

export default Home;
