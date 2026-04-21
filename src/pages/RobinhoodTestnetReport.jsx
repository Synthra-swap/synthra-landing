import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

/* ── helper components ──────────────────────────────────── */

const IMG = '/research/robinhood-testnet';
const COVER = '/research/robinhood-testnet/cover.webp';

const ChartImg = ({ src, alt, caption }) => (
  <figure className="my-12">
    <div className="rounded-xl overflow-hidden border border-white/[0.06] bg-white/[0.02]">
      <img src={`${IMG}/${src}`} alt={alt} className="w-full" loading="lazy" />
    </div>
    {caption && (
      <figcaption className="text-center text-xs text-white/30 mt-3 tracking-wide">
        {caption}
      </figcaption>
    )}
  </figure>
);

const SectionTitle = ({ id, number, children }) => (
  <h2 id={id} className="font-playfair text-3xl md:text-4xl mt-28 mb-8 scroll-mt-28">
    {number && <span className="text-white/20 mr-3">{number}</span>}
    {children}
  </h2>
);

const Sub = ({ id, number, children }) => (
  <h3 id={id} className="text-xl font-semibold mt-16 mb-5 text-white/90 scroll-mt-28">
    <span className="text-white/25 mr-2 font-normal">{number}</span>
    {children}
  </h3>
);

const P = ({ children }) => (
  <p className="text-[15.5px] leading-[1.85] text-white/60 mb-5">{children}</p>
);

const Strong = ({ children }) => (
  <strong className="text-white/90 font-semibold">{children}</strong>
);

const Divider = () => (
  <div className="border-t border-white/[0.06] my-20" />
);

/* ── reading progress bar ───────────────────────────────── */

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrollTop = el.scrollTop || document.body.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      setProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px]">
      <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-[width] duration-100" style={{ width: `${progress}%` }} />
    </div>
  );
};

/* ── table of contents ──────────────────────────────────── */

const tocItems = [
  { id: 'executive-summary', label: 'Executive Summary' },
  { id: 'launch-dynamics', label: '1 · Launch Dynamics' },
  { id: 'transaction-activity', label: '2 · Transaction Activity' },
  { id: 'developer-activity', label: '3 · Developer Activity' },
  { id: 'network-performance', label: '4 · Network Performance' },
  { id: 'activity-distribution', label: '5 · Activity Distribution' },
  { id: 'marketing-silence', label: '6 · Communications Cadence' },
  { id: 'thesis', label: '7 · Thesis' },
  { id: 'key-metrics', label: '8 · Key Metrics' },
  { id: 'what-to-watch', label: '9 · What to Watch' },
];

const TableOfContents = () => (
  <nav className="hidden xl:block fixed left-8 top-1/2 -translate-y-1/2 z-40 max-w-[180px]">
    <ul className="space-y-2">
      {tocItems.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className="text-[11px] leading-snug text-white/20 hover:text-white/50 transition-colors block py-0.5"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

/* ── main article ───────────────────────────────────────── */

const RobinhoodTestnetReport = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <SEO
        title="Robinhood Chain Testnet: The First 70 Days"
        description="An independent on-chain analysis of Robinhood Chain's first ~70 days: 90.6M transactions, 530K addresses, 9.48M contracts deployed, a 0.15% verification rate, and a clear post-peak decline in transactions, DAA, and new accounts. By Synthra Research."
        path="/research/robinhood-chain-70-days"
        image="https://synthra.org/research/robinhood-testnet/cover.webp"
        keywords="Robinhood Chain, Robinhood testnet, Robinhood L2, Robinhood on-chain analysis, Robinhood blockchain, Arbitrum Orbit, tokenized RWA, dex on robinhood, Synthra Research, emerging EVM chains"
        article={{
          publishedTime: '2026-04-20',
          author: 'Synthra Research',
          section: 'On-Chain Analysis',
          tags: ['Robinhood', 'Arbitrum', 'Testnet', 'L2', 'RWA', 'On-Chain Analysis', 'Emerging EVM Chains'],
        }}
        faq={[
          {
            question: 'How many transactions did Robinhood Chain testnet process in its first 70 days?',
            answer: 'Robinhood Chain processed 90.6 million transactions across 529,976 cumulative unique addresses in its first ~70 days, averaging 1.26M daily transactions and 70,264 daily active addresses. Seven-day transaction growth has turned negative at -13.8%.',
          },
          {
            question: 'What is Robinhood Chain?',
            answer: 'Robinhood Chain is an Arbitrum Orbit-based Layer 2 blockchain launched by Robinhood in February 2026, purpose-built for tokenized real-world assets (RWAs) and integrated with Robinhood\'s 27M+ funded customer base. The public testnet launched at Consensus Hong Kong on February 10, 2026.',
          },
          {
            question: 'Why is Robinhood Chain activity declining?',
            answer: 'After peaking in late March 2026 at ~2.4M daily transactions and ~120K daily active addresses, Robinhood Chain has entered a clear post-peak decline: ~40% drop in transactions and ~30% drop in DAA over three weeks, with growth still negative. A 0.15% contract verification rate and 17.90 tx/active-address/day ratio suggest most activity comes from automated scripts rather than application developers. Public communications from the Robinhood team have also been limited since February 19, 2026.',
          },
          {
            question: 'Is there a DEX on Robinhood Chain?',
            answer: 'Synthra is building the all-in-one decentralized exchange for Robinhood Chain and other emerging EVM chains, offering spot trading with concentrated liquidity, perpetual futures, cross-chain bridge, and launchpad in one protocol.',
          },
        ]}
      />
      <ProgressBar />
      <TableOfContents />

      <article className="min-h-screen bg-black text-white pb-32">
        {/* ─── Hero / Header ─── */}
        <header className="pt-36 pb-20 px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Link to="/research" className="inline-flex items-center gap-2 text-xs text-white/30 hover:text-white/50 transition-colors mb-12 group">
                <svg className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
                Back to Research
              </Link>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 mb-8"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <span className="text-xs tracking-[0.2em] uppercase text-purple-400/80">On-Chain Analysis</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="text-xs text-white/30">April 20, 2026</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="text-xs text-white/30">22 min read</span>
            </motion.div>

            <motion.h1
              className="font-playfair text-4xl md:text-[3.25rem] leading-[1.15] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Robinhood Chain Testnet: The First 70 Days
            </motion.h1>

            <motion.p
              className="text-lg text-white/40 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              When Robinhood launched its public testnet on February 10, 2026 at Consensus Hong Kong, the narrative was about as good as it gets. A NASDAQ-listed fintech giant with 27 million funded customers, announcing an Arbitrum-based L2 purpose-built for tokenized real-world assets. Nine days later, Vlad Tenev tweeted 4 million transactions in the first week. Since then, official messaging about the chain has been notably sparse.
            </motion.p>

            <motion.p
              className="text-[15px] text-white/30 leading-relaxed mt-4 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              An independent analysis of Robinhood Chain's first ~70 days of public testnet activity, from February 10 through mid-April 2026, drawn entirely from on-chain data. The data shows a strong launch, sustained growth through March, and, starting in early April, a clear and accelerating decline in transactions, daily active addresses, and new account creation.
            </motion.p>

            <motion.div
              className="flex items-center gap-3 mt-10 text-sm text-white/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span>By</span>
              <span className="text-white/60 font-medium">Synthra Research</span>
            </motion.div>
          </div>
        </header>

        {/* ─── Cover Image ─── */}
        <motion.div
          className="max-w-5xl mx-auto px-6 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="rounded-2xl overflow-hidden border border-white/[0.06]">
            <img src={COVER} alt="Robinhood Chain Testnet Analysis" className="w-full" />
          </div>
        </motion.div>

        {/* ─── Body ─── */}
        <div className="max-w-3xl mx-auto px-6">

          {/* ── Executive Summary ── */}
          <SectionTitle id="executive-summary">Executive Summary</SectionTitle>

          <P>
            Over the ~70-day observation window, Robinhood Chain has processed <Strong>90.6 million transactions</Strong> across <Strong>529,976 cumulative unique addresses</Strong>, averaging <Strong>1.26 million daily transactions</Strong> and <Strong>70,264 daily active addresses</Strong>. Developers have deployed <Strong>9.48 million contracts</Strong> during this period, a staggering absolute number that ranks among the most prolific testnet deployment rates we've tracked.
          </P>

          <P>
            The headline number worth flagging first is the one from the dashboard: <Strong>-13.8% seven-day transaction growth</Strong>. After peaking in late March at ~2.4M daily transactions, volume has contracted to ~1.2 to 1.3M by mid-April. Daily active addresses, which peaked above 120K in the third week of March, have fallen to a ~65 to 80K range. New account creation has effectively collapsed: the most recent bars on the new-accounts chart are barely visible next to the February launch spike.
          </P>

          <P>
            A second observation sits beneath the headline decline. Robinhood Chain shows <Strong>17.90 transactions per active address per day</Strong>, more than 3x the ratio we observed on Circle's Arc testnet (5.86) and well above what organic human usage typically produces. Combined with a <Strong>contract verification rate of 0.15%</Strong> (14,489 verified out of 9.48M deployed, versus ~8.9% on Arc), the pattern points to a testnet where a large share of the workload is driven by automated scripts and stress-test deployers rather than application developers iterating on production code.
          </P>

          <P>
            A third observation: <Strong>external communications have meaningfully moderated</Strong>. After Vlad Tenev's February 19 tweet celebrating 4 million transactions, there has been limited public messaging from Robinhood or its executives specifically about Robinhood Chain. The company's press releases in March and April have focused on monthly operating data, prediction markets, the RVI investment fund, and Q1 earnings. A post-launch communications slowdown is not unusual for L2s, but the combination of quieter messaging and softer on-chain metrics is a composite signal worth tracking directly rather than explaining away.
          </P>

          <P>
            The network is not dying: it is still processing well over a million transactions a day with tens of thousands of daily active addresses. But the direction of travel over the last three weeks is unambiguous — transactions, DAA, and new accounts are all trending down. Whether that reverses will depend on concrete ecosystem and product catalysts, not narrative.
          </P>

          {/* ── Key stats strip ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-14">
            {[
              { value: '90.6M', label: 'Transactions' },
              { value: '530K', label: 'Unique Addresses' },
              { value: '9.48M', label: 'Contracts Deployed' },
              { value: '-13.8%', label: '7d Tx Growth' },
            ].map((s, i) => (
              <div key={i} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 text-center">
                <div className="text-2xl font-semibold gradient-text mb-1">{s.value}</div>
                <div className="text-[11px] text-white/30 tracking-wide uppercase">{s.label}</div>
              </div>
            ))}
          </div>

          <Divider />

          {/* ──────────────────── 1. Launch Dynamics ──────────────────── */}
          <SectionTitle id="launch-dynamics" number="1">Launch Dynamics &amp; Account Growth</SectionTitle>

          <Sub id="accounts-growth" number="1.1">Accounts Growth</Sub>

          <ChartImg src="accounts_growth.png" alt="Robinhood Testnet: Accounts Growth" caption="Cumulative unique addresses and daily new accounts over the 70-day observation period" />

          <P>
            Robinhood Chain's account growth chart is one of the most visually dramatic we've seen in a testnet analysis. The cumulative curve climbs from effectively zero on February 10 to a near-horizontal asymptote around <Strong>525 to 530K addresses</Strong> by mid-April, but the <em>shape</em> of the climb reveals a very specific story.
          </P>

          <P>The curve is defined by three regimes:</P>

          <div className="my-8 space-y-6 pl-5 border-l-2 border-white/[0.06]">
            <div>
              <div className="text-sm font-semibold text-white/70 mb-1">The launch spike (Feb 17 to 20)</div>
              <p className="text-[14.5px] leading-[1.8] text-white/45">Two massive bars, one reaching ~490K new accounts in a single day and another hitting ~530K, appear roughly a week after the testnet went live. Their timing lines up closely with Vlad Tenev's February 19 tweet announcing "4 million transactions in the first week." These two days account for something like <em className="text-white/55">80%+ of all cumulative accounts</em> on the chain.</p>
            </div>
            <div>
              <div className="text-sm font-semibold text-white/70 mb-1">The ramp (Mar 1 to Apr 1)</div>
              <p className="text-[14.5px] leading-[1.8] text-white/45">Following the launch spike, new account creation settled into a lower but still meaningful range of 5K to 25K per day. A slower, more sustained trickle of new addresses exploring the network.</p>
            </div>
            <div>
              <div className="text-sm font-semibold text-white/70 mb-1">The flatline (Apr 1 onward)</div>
              <p className="text-[14.5px] leading-[1.8] text-white/45">By early April, new account creation has collapsed to a few hundred per day. The bars in the last three weeks are so small they are barely distinguishable from the axis. The cumulative curve is visibly flattening into an asymptote.</p>
            </div>
          </div>

          <P>
            Arc's testnet, by contrast, showed a clear second wave of growth in its third month after an initial plateau. Robinhood Chain shows no such resurgence. It arrived, it peaked, and now it's drifting.
          </P>

          <Sub id="daa" number="1.2">Daily Active Addresses</Sub>

          <ChartImg src="daa_line.png" alt="Robinhood Testnet: Daily Active Addresses" caption="Daily active addresses with 7-day moving average" />

          <P>The daily active addresses chart confirms and extends the narrative from account growth:</P>

          <div className="my-8 space-y-6 pl-5 border-l-2 border-white/[0.06]">
            <div>
              <div className="text-sm font-semibold text-white/70 mb-1">The Feb 19 spike</div>
              <p className="text-[14.5px] leading-[1.8] text-white/45">~104K DAA, a one-day anomaly that corresponds to the launch hype wave but doesn't represent sustained engagement.</p>
            </div>
            <div>
              <div className="text-sm font-semibold text-white/70 mb-1">A gradual climb</div>
              <p className="text-[14.5px] leading-[1.8] text-white/45">From ~40K in early March to a peak of ~120K in late March (roughly March 22 to 24). The 7-day MA reaches ~112K during this period.</p>
            </div>
            <div>
              <div className="text-sm font-semibold text-white/70 mb-1">A progressive decline</div>
              <p className="text-[14.5px] leading-[1.8] text-white/45">Starting around April 1, with the 7-day MA falling from ~112K to ~78K by mid-April. A ~30% drop in the trailing average over just three weeks.</p>
            </div>
            <div>
              <div className="text-sm font-semibold text-white/70 mb-1">Daily volatility increasing</div>
              <p className="text-[14.5px] leading-[1.8] text-white/45">In the downtrend phase, which typically indicates a thinner, less consistent user base. Final data points show DAA oscillating between ~65K and ~90K.</p>
            </div>
          </div>

          <P>
            The shape here is classic post-hype decay. The network is still operational, still processing substantial volume, and still has tens of thousands of daily users, but the direction is unambiguous. If the current rate of decline continues, DAA could drop below 50K by the end of April.
          </P>

          <Sub id="cohort-retention" number="1.3">Cohort Retention</Sub>

          <ChartImg src="cohort_retention.png" alt="Robinhood Testnet: Cohort Retention Heatmap" caption="Weekly cohort retention heatmap" />

          <P>
            The cohort retention heatmap is, interestingly, one of the more encouraging charts in the dataset, though with significant caveats. Most cohorts show <Strong>retention in the 13 to 40% range at Week 1</Strong>, trending to <Strong>12 to 28% by Week 4</Strong>. The strongest cohorts (W09 and W10, corresponding to late February and early March) retained <Strong>31%</Strong> and <Strong>37%</Strong> of users at Week 1, with W09 remarkably holding <Strong>28% retention all the way to Week 4</Strong>, substantially stronger than the 5 to 15% range we saw on Arc's organic cohorts.
          </P>

          <P>
            The W05 row (the launch week) shows 50% / 100% / 50% / 50% values that are almost certainly statistical noise: the cohort size was tiny (the chain was live for only a partial week), so percentages are based on very small denominators. These values should be ignored.
          </P>

          <P>
            The concerning trend is the <Strong>bottom three rows (W12, W13, W14, early to mid-April)</Strong>. Retention is falling across the board: W12's Week-1 retention of 21% is roughly half the W10 peak, and the "0" values in W12 Week 4 and W13/W14 later weeks reflect the fact that those cohorts haven't yet had enough time to generate full retention data.
          </P>

          <P>
            In short: users who joined in the first 6 to 8 weeks had reasonable stickiness. Users joining now are showing early signs of lower retention, consistent with the overall decline thesis. Robinhood Chain's baseline retention appears structurally higher than Arc's, likely because its user base skews more toward serious developers and crypto-native traders interested in tokenized RWAs, rather than mass-market airdrop farmers. But this advantage is eroding as the newer cohorts demonstrate.
          </P>

          <Divider />

          {/* ──────────────────── 2. Transactions ──────────────────── */}
          <SectionTitle id="transaction-activity" number="2">Transaction Activity</SectionTitle>

          <Sub id="daily-tx" number="2.1">Daily Transactions</Sub>

          <ChartImg src="tx_line.png" alt="Robinhood Testnet: Daily Transactions" caption="Daily transaction volume with 7-day moving average" />

          <P>
            Total transactions reached <Strong>90,566,659</Strong> over the observation window, averaging <Strong>1.26M per day</Strong>. The daily curve shows the same three-phase structure as accounts and DAA:
          </P>

          <div className="my-8 space-y-6 pl-5 border-l-2 border-white/[0.06]">
            <div>
              <div className="text-sm font-semibold text-white/70 mb-1">Ramp phase (Feb 10 to Mar 15)</div>
              <p className="text-[14.5px] leading-[1.8] text-white/45">Daily transactions climb from near-zero to ~1.3M, with the Feb 19 launch spike visible as a one-day jump to ~1.2M.</p>
            </div>
            <div>
              <div className="text-sm font-semibold text-white/70 mb-1">Peak phase (Mar 15 to Apr 5)</div>
              <p className="text-[14.5px] leading-[1.8] text-white/45">Daily transactions reach their all-time highs, with multiple days above 2M and a peak approaching 2.5M transactions/day around March 24. The 7-day MA climbs to ~2.3M.</p>
            </div>
            <div>
              <div className="text-sm font-semibold text-white/70 mb-1">Decline phase (Apr 5 to Apr 20)</div>
              <p className="text-[14.5px] leading-[1.8] text-white/45">Transactions retreat sharply. The 7-day MA has fallen from ~2.3M at peak to ~1.35M by mid-April, a ~40% decline in trailing activity over roughly two weeks.</p>
            </div>
          </div>

          <P>
            The seven-day growth rate displayed on the dashboard, <Strong>-13.8%</Strong>, captures only the most recent slice of this decline. In absolute terms, the chain is still processing well over a million transactions a day, which is not small. But the trajectory is unambiguous, and the rate of decline is accelerating rather than stabilizing.
          </P>

          <Sub id="tx-composition" number="2.2">Transaction Composition</Sub>

          <ChartImg src="tx_composition.png" alt="Robinhood Testnet: Transaction Composition" caption="Contract calls vs. native transfers over time" />

          <P>
            The composition chart tells a stark story. <Strong>Native transfers are nearly invisible</Strong> throughout the entire observation window, a thin sliver at the bottom that never exceeds a few percent of total volume. <Strong>Contract calls and other non-native activity dominate</Strong> essentially 100% of transaction volume after the first few days.
          </P>

          <P>
            The native-transfer layer peaks briefly in mid-to-late February (likely reflecting initial faucet claiming and simple wallet-to-wallet test transfers by early users) and then collapses to near-zero by early March. After that point, contract interactions are essentially the entire story.
          </P>

          <P>
            On one hand, this is exactly what you'd want to see for a chain designed around tokenized RWAs and onchain financial services: the whole point is contract-mediated activity, not simple value transfers. On the other hand, the <em>thinness</em> of native transfers is notable. On most testnets, you see persistent native transfer activity from users moving test tokens around, setting up wallets, and running simple demos. The fact that this layer is so light on Robinhood Chain, combined with the <Strong>17.90 tx/active address/day</Strong> ratio, suggests the chain's current workload skews toward automated, contract-call-heavy activity rather than casual human testing — something that typically evolves as more consumer-facing dApps land on the network.
          </P>

          <Divider />

          {/* ──────────────────── 3. Developer Activity ──────────────────── */}
          <SectionTitle id="developer-activity" number="3">Developer Activity</SectionTitle>

          <Sub id="deployments" number="3.1">Contract Deployments</Sub>

          <ChartImg src="deployments_line.png" alt="Robinhood Testnet: Daily Contract Deployments" caption="Daily new contract deployments" />

          <P>
            <Strong>9,482,195 contracts deployed</Strong> in ~70 days. In absolute terms, that's a remarkable number, higher than most L2 testnet launches we've tracked on a per-day basis (~135K/day average).
          </P>

          <P>But the <em>pattern</em> of deployments is unusual in ways that matter. Looking at the daily bars:</P>

          <div className="my-8 space-y-6 pl-5 border-l-2 border-white/[0.06]">
            <div>
              <div className="text-sm font-semibold text-white/70 mb-1">February to March</div>
              <p className="text-[14.5px] leading-[1.8] text-white/45">A steady ramp from ~50K/day to ~130K/day by early March.</p>
            </div>
            <div>
              <div className="text-sm font-semibold text-white/70 mb-1">Mid-to-late March</div>
              <p className="text-[14.5px] leading-[1.8] text-white/45">Sustained activity in the 125K to 210K/day range.</p>
            </div>
            <div>
              <div className="text-sm font-semibold text-white/70 mb-1">Early April spike</div>
              <p className="text-[14.5px] leading-[1.8] text-white/45">Three consecutive days (~April 5 to 7) showing deployments of approximately <em className="text-white/55">362K, 303K, and 277K</em>, roughly double the already-elevated surrounding baseline.</p>
            </div>
            <div>
              <div className="text-sm font-semibold text-white/70 mb-1">After the spike</div>
              <p className="text-[14.5px] leading-[1.8] text-white/45">Deployments fall back to around 140K to 170K/day through mid-April.</p>
            </div>
          </div>

          <P>
            This spike pattern, a sudden narrow burst of deployments followed by mean reversion, is characteristic of a <Strong>targeted deployment campaign</Strong> — for example a stress test, a bulk factory deployment, or an infrastructure partner batching contracts — rather than the smoother, more distributed pattern typical of day-to-day application development. The April 5 to 7 bars look like a concentrated effort by one or a few entities over a short window, possibly for load testing or tooling validation.
          </P>

          <Sub id="verification" number="3.2">Contract Verification: The Telling Ratio</Sub>

          <P>
            The single most revealing statistic in the entire dataset is this: of <Strong>9,482,195 deployed contracts</Strong>, only <Strong>14,489 are verified</Strong>, a verification rate of <Strong>0.15%</Strong>.
          </P>

          <P>
            For comparison, Arc's testnet showed a verification rate of <Strong>8.9%</Strong>, nearly 60x higher. And Arc's absolute verified contract count (1,030,072) is more than 70x Robinhood Chain's (14,489), despite Arc having a longer observation window but not dramatically more total deployments.
          </P>

          <P>
            Contract verification is a leading indicator of developer intent. When a developer verifies their contract on the block explorer, they're signaling that they intend for others to see, interact with, and potentially integrate against it. Bots, airdrop farmers, and automated deployment scripts almost never bother with verification: it costs time and adds no value to their workflow.
          </P>

          <P>
            A 0.15% verification rate is consistent with a testnet where a large portion of deployments comes from <Strong>automated tooling, stress-test deployers, and infrastructure scripts</Strong> rather than the smaller population of teams actively building consumer-facing dApps. It's a useful reminder that raw deployment counts on any testnet should be read alongside verification data before drawing conclusions about the size of the developer base.
          </P>

          <P>
            Several caveats are worth noting. Robinhood's stated infrastructure partners (Alchemy, Allium, Chainlink, LayerZero, TRM) may be running their own test contracts without verifying them, and the chain's Arbitrum Orbit architecture can make some system-level deployments invisible to standard verification flows. Some teams also delay verification until closer to mainnet. Even adjusting generously for these factors, a verification rate roughly two orders of magnitude below a comparable testnet puts a ceiling on how many developer-led dApps can plausibly be in active development right now.
          </P>

          <Sub id="top-contracts" number="3.3">Top Contracts &amp; Method IDs</Sub>

          <ChartImg src="top_contracts.png" alt="Robinhood Testnet: Top 10 Contracts" caption="Top 10 contracts by transaction count" />

          <P>
            The top contract by transaction count is <code className="text-[13px] text-white/75 bg-white/[0.04] px-1.5 py-0.5 rounded">0x00000000000...</code> with <Strong>388,957 transactions</Strong>, more than 8x the second-place contract (<code className="text-[13px] text-white/75 bg-white/[0.04] px-1.5 py-0.5 rounded">0x6f308b8345...</code>, 46,901 transactions). Addresses beginning with a long string of zeros on an Arbitrum-based L2 are almost certainly <Strong>system precompiles</Strong>, specifically, the address pattern is consistent with Arbitrum's <code className="text-[13px] text-white/75 bg-white/[0.04] px-1.5 py-0.5 rounded">ArbSys</code> or <code className="text-[13px] text-white/75 bg-white/[0.04] px-1.5 py-0.5 rounded">ArbGasInfo</code> precompiles, which are called automatically by the L2 infrastructure for L1 block info, gas pricing, and other system-level operations.
          </P>

          <P>
            In other words: the #1 contract is not a protocol or application, it's the L2 itself calling its own system functions. This is normal for Arbitrum-stack chains and accounts for a substantial portion of total transactions as a pure infrastructure overhead.
          </P>

          <ChartImg src="top_methods.png" alt="Robinhood Testnet: Top 10 Method IDs" caption="Top 10 method selectors by invocation count" />

          <P>
            The method ID view confirms this. The top method selector <code className="text-[13px] text-white/75 bg-white/[0.04] px-1.5 py-0.5 rounded">0x6bf6a42d</code> with <Strong>388,829 calls</Strong> matches the transaction count of the top contract almost exactly: this is a single contract/method pair that represents system-level L2 activity rather than user application activity.
          </P>

          <P>
            The remaining top method IDs (<code className="text-[13px] text-white/75 bg-white/[0.04] px-1.5 py-0.5 rounded">0x84bb1e42</code>, <code className="text-[13px] text-white/75 bg-white/[0.04] px-1.5 py-0.5 rounded">0x3593564c</code>, <code className="text-[13px] text-white/75 bg-white/[0.04] px-1.5 py-0.5 rounded">0x775c300c</code>, <code className="text-[13px] text-white/75 bg-white/[0.04] px-1.5 py-0.5 rounded">0x5ae401dc</code>, <code className="text-[13px] text-white/75 bg-white/[0.04] px-1.5 py-0.5 rounded">0x26092b83</code>) are more distributed and likely correspond to common DeFi functions (swap, add liquidity, deposit, etc.). Interestingly, the standard ERC-20 <code className="text-[13px] text-white/75 bg-white/[0.04] px-1.5 py-0.5 rounded">approve()</code> selector <code className="text-[13px] text-white/75 bg-white/[0.04] px-1.5 py-0.5 rounded">0x095ea7b3</code> appears only 9th on the list with 24,694 calls, dramatically lower than what we saw on Arc, where <code className="text-[13px] text-white/75 bg-white/[0.04] px-1.5 py-0.5 rounded">approve()</code> was the #2 method with 142,393 calls.
          </P>

          <P>
            This is another signal pointing in the same direction: <Strong>Robinhood Chain currently shows less "DeFi discovery" activity than Arc</Strong>. Fewer approvals tends to mean fewer new users encountering new tokens and protocols for the first time. The activity mix leans toward repeated interactions with a smaller set of contracts, consistent with a still-narrow live dApp surface area.
          </P>

          <Divider />

          {/* ──────────────────── 4. Network Performance ──────────────────── */}
          <SectionTitle id="network-performance" number="4">Network Performance</SectionTitle>

          <Sub id="gas-usage" number="4.1">Gas Usage</Sub>

          <ChartImg src="gas_line.png" alt="Robinhood Testnet: Daily Gas Usage" caption="Daily gas consumption" />

          <P>
            Daily gas consumption shows a cleaner ramp than the transaction count chart, building from essentially zero at launch to a peak of approximately <Strong>220,000M units</Strong> around March 22 to 24, before declining to <Strong>100,000 to 130,000M</Strong> by mid-April. The correlation with daily transactions is tight, but the gas chart's <em>decline phase</em> is actually somewhat less severe than the transaction decline, suggesting that average gas-per-transaction has crept up modestly, possibly reflecting a shift toward slightly more complex contract interactions as simpler bot activity drops off.
          </P>

          <Sub id="block-fullness" number="4.2">Block Fullness</Sub>

          <ChartImg src="block_fullness.png" alt="Robinhood Testnet: Block Fullness Distribution" caption="Average block fullness distribution" />

          <P>
            Block fullness averages <Strong>essentially 0%</Strong> (the x-axis is scaled to 10⁻⁹). Blocks are, in absolute terms, close to entirely empty. This reflects both the high throughput ceiling of the Arbitrum Orbit stack and the fact that current activity, even at peak, is nowhere near Robinhood Chain's capacity limits.
          </P>

          <P>
            A note on gas price: the chain runs with a hardcoded gas price pinned at <Strong>1.0 × 10⁻¹¹ Gwei</Strong> throughout the observation window, so the fee market provides no dynamic signal. We have no data on how Robinhood Chain's fee market would behave under real congestion, a significant unknown heading into mainnet.
          </P>

          <Divider />

          {/* ──────────────────── 5. Activity Distribution ──────────────────── */}
          <SectionTitle id="activity-distribution" number="5">Activity Distribution &amp; Concentration</SectionTitle>

          <Sub id="address-distribution" number="5.1">Address Activity Distribution</Sub>

          <ChartImg src="address_distribution.png" alt="Robinhood Testnet: Address Activity Distribution" caption="Log-log distribution of transactions per address" />

          <P>
            The log-log distribution shows a power-law pattern consistent with what we'd expect. Roughly <Strong>75,000 addresses have executed only a single transaction</Strong>, these are the one-time visitors, faucet claimers, and curious devs who tested once and moved on. The distribution decays smoothly through the middle range (10¹ to 10² transactions per address), with the tail extending to a small number of highly-active addresses in the 10³ to 10⁵ range.
          </P>

          <P>
            The most notable feature is the <Strong>isolated bar at ~3 × 10⁵ transactions</Strong>, a single address with around 300,000 transactions. This is almost certainly a system precompile or a heavily-used infrastructure contract, consistent with the top-contracts chart above. It's not a "user" in any meaningful sense.
          </P>

          <P>
            Comparing to Arc: Arc's histogram showed hundreds of thousands of addresses at the low end (1 to 2 tx). Robinhood Chain's histogram caps out around 75K, roughly 4x smaller. This is consistent with Robinhood Chain's smaller cumulative address count (530K vs. Arc's 1.7M) and confirms that the testnet is operating at a materially smaller scale despite comparable transaction volumes.
          </P>

          <P>
            The <Strong>17.90 tx per active address per day</Strong> figure, more than 3x Arc's 5.86, takes on new meaning in this context. Robinhood Chain has roughly <Strong>one-third the unique addresses</Strong> of Arc but produces <Strong>comparable daily transaction volumes</Strong>. The math forces a conclusion: each active address on Robinhood Chain is doing <em>a lot</em> more transactions per day than each Arc address. That's either extraordinarily engaged users or, more likely, a much higher proportion of automated / bot activity per address.
          </P>

          <Sub id="lorenz" number="5.2">Lorenz Curve</Sub>

          <ChartImg src="lorenz_curve.png" alt="Robinhood Testnet: Lorenz Curve" caption="Transaction distribution inequality across addresses" />

          <P>
            The Lorenz curve confirms substantial activity concentration, with the curve deviating significantly from the perfect-equality diagonal. Approximately <Strong>80% of addresses generate only about 20% of transactions</Strong>, while <Strong>the top 10 to 20% of addresses drive most of the volume</Strong>.
          </P>

          <P>
            Visually, the Robinhood Chain Lorenz curve appears to sit slightly <em>below</em> the Arc curve, meaning Robinhood Chain is marginally <em>more</em> concentrated than Arc. The Gini coefficient is likely in the <Strong>0.6 to 0.7 range</Strong>, compared to our earlier estimate of 0.55 to 0.65 for Arc.
          </P>

          <P>
            Again, this is directionally consistent with the thesis: Robinhood Chain's transaction base is more concentrated in a smaller number of high-volume addresses, which is the signature of bot-dominated activity.
          </P>

          <Sub id="heatmap" number="5.3">Activity Heatmap</Sub>

          <ChartImg src="hourly_heatmap.png" alt="Robinhood Testnet: Activity Heatmap" caption="Activity distribution by hour (UTC) and day of week" />

          <P>
            The hourly heatmap shows peak activity during <Strong>UTC 7:00 to 11:00</Strong> on weekdays, particularly Wednesday and Thursday, with secondary peaks on Saturday morning UTC. Sunday is visibly quieter than other days, and late-night UTC hours (20:00 to 23:00) are consistently the lowest-activity periods across all days.
          </P>

          <P>
            The UTC 7-11 peak corresponds to late afternoon / early evening in East Asia, mid-morning to midday in Europe, and pre-dawn / early morning on the US East Coast. This mirrors the Asian-European skew we observed on Arc's testnet.
          </P>

          <P>
            For a chain explicitly launched at <Strong>Consensus Hong Kong</Strong> (February 10, 2026), a move Johann Kerbrat described as part of Robinhood's "deepening push into the Asia-Pacific region" following its Bitstamp acquisition, the Asia-weighted activity pattern is probably by design rather than accident. Still, the relatively weak US-hours activity is interesting given that Robinhood's core user base is overwhelmingly US-based. If US developers and users aren't the ones stress-testing the chain, the eventual mainnet user experience may diverge from what the testnet reveals.
          </P>

          <Divider />

          {/* ──────────────────── 6. Marketing Silence ──────────────────── */}
          <SectionTitle id="marketing-silence" number="6">Communications Cadence</SectionTitle>

          <P>
            Stepping briefly outside the on-chain data: since Vlad Tenev's <Strong>February 19 tweet</Strong> celebrating 4 million transactions in the first week, Robinhood Chain has received <Strong>limited airtime in Robinhood's public communications</Strong>. Attention is a real input for any new chain, and two months of near-silence from a company that typically markets its products aggressively is a data point in itself.
          </P>

          <P>
            A scan of Robinhood's{' '}
            <a href="https://investors.robinhood.com/press-releases" target="_blank" rel="noopener noreferrer" className="text-white/80 underline underline-offset-2 decoration-white/20 hover:text-white/95 transition-colors">investor press releases</a>
            {' '}from March and April 2026 shows:
          </P>

          <ul className="my-6 space-y-2 pl-6 list-disc marker:text-white/30 text-[15px] leading-[1.8] text-white/55">
            <li>Monthly operating data releases (January and February 2026 figures).</li>
            <li>Q4 2025 earnings and the Q1 2026 earnings announcement (scheduled for April 28, 2026).</li>
            <li>Extensive coverage of Robinhood's prediction markets push, including a joint venture with Susquehanna to acquire MIAXdx for a CFTC-licensed exchange.</li>
            <li>Robinhood Ventures Fund I (RVI) announcements.</li>
            <li>The company's restriction of certain prediction market contracts over insider-trading concerns.</li>
          </ul>

          <P>
            Over this window there have been no Robinhood Chain–specific press releases, feature roadmap updates, or ecosystem milestone announcements since the initial February launch post. Vlad Tenev's recent public commentary has leaned toward prediction markets, tokenization at a conceptual level, and quarterly financial performance. The Robinhood Chain testnet has been less prominent in recent executive communications than it was at launch.
          </P>

          <P>Several explanations are plausible, each with different implications:</P>

          <div className="my-8 space-y-6 pl-5 border-l-2 border-white/[0.06]">
            <div>
              <div className="text-sm font-semibold text-white/70 mb-1">Scenario A — Normal testnet quiet phase</div>
              <p className="text-[14.5px] leading-[1.8] text-white/45">Testnets are genuinely quiet periods for most L2s. Post-launch hype fades, the work shifts to engineering and auditing, and public communications reasonably pause until mainnet is closer. Consistent with a large share of successful L2 rollouts.</p>
            </div>
            <div>
              <div className="text-sm font-semibold text-white/70 mb-1">Scenario B — Intentional quiet posture</div>
              <p className="text-[14.5px] leading-[1.8] text-white/45">Robinhood may be deliberately limiting Robinhood Chain communications to avoid drawing retail speculation or regulatory attention during a sensitive testnet period. A defensible posture for a NASDAQ-listed issuer building regulated tokenized-RWA infrastructure.</p>
            </div>
            <div>
              <div className="text-sm font-semibold text-white/70 mb-1">Scenario C — Internal prioritization shift</div>
              <p className="text-[14.5px] leading-[1.8] text-white/45">Q1 2026 has seen Robinhood make large public commitments to prediction markets, the MIAXdx acquisition, and expanding crypto operations internationally (Bitstamp integration). Executive bandwidth and marketing resources appear to have been redirected toward these nearer-term revenue opportunities.</p>
            </div>
            <div>
              <div className="text-sm font-semibold text-white/70 mb-1">Scenario D — Strategic reevaluation</div>
              <p className="text-[14.5px] leading-[1.8] text-white/45">Internal testnet results may have prompted a reassessment of scope, timing, or feature set. The correlation between the on-chain decline and the pullback in executive messaging is at minimum consistent with this scenario.</p>
            </div>
          </div>

          <P>
            We don't know which of these is closest to reality, and in practice it may be a combination. What we can say is that <Strong>on-chain activity is softening</Strong> and <Strong>public communications have slowed</Strong> at the same time, from a company that knows how to amplify wins when it has them. Partnership announcements, developer-program milestones, or a concrete mainnet window would change the picture fast. Their absence, at this stage, is itself informative.
          </P>

          <P>
            For context: the broader Arbitrum ecosystem continues to market the Arbitrum Open House developer program (which Robinhood contributed $1M to), but Robinhood Chain is not a focal point of those communications. The chain currently receives less consistent promotional support than successful L2 launches have typically benefited from in their first few months — observation, not verdict.
          </P>

          <Divider />

          {/* ──────────────────── 7. Thesis ──────────────────── */}
          <SectionTitle id="thesis" number="7">Thesis</SectionTitle>

          <div className="my-12 grid md:grid-cols-2 gap-6">
            {/* Bull */}
            <div className="rounded-xl border border-green-500/10 bg-green-500/[0.02] p-7">
              <h4 className="text-sm font-semibold text-green-400/80 uppercase tracking-wider mb-5">Bull Case</h4>
              <ul className="space-y-4 text-[14px] leading-[1.8] text-white/50">
                <li><Strong>Absolute numbers still impressive.</Strong> 90M transactions and 530K addresses in 70 days is real activity. 9.5M contract deployments, even discounted for bot activity, still represents substantial experimentation.</li>
                <li><Strong>Retention structurally better than peers.</Strong> 20 to 40% Week-1 retention for mid-window cohorts is notably stronger than Arc's organic 9 to 15%. Users who <em>do</em> show up tend to stick around longer.</li>
                <li><Strong>Distribution advantage is unique.</Strong> 27.4M funded Robinhood customers is a base no crypto-native L2 can match. Even 1 to 2% conversion at mainnet could dwarf testnet numbers.</li>
                <li><Strong>Arbitrum Orbit foundation is mature.</Strong> Battle-tested rollup stack versus Arc's novel Malachite consensus engine. Technical risk at launch substantially lower.</li>
                <li><Strong>Product narrative is clear.</Strong> "L2 for tokenized RWAs, integrated with Robinhood's 27M-user brokerage app" is a simple, differentiated value proposition.</li>
                <li><Strong>Regulatory positioning is genuine.</Strong> Embedding compliance at the chain level is a real differentiator for regulated tokenized securities.</li>
              </ul>
            </div>
            {/* Bear */}
            <div className="rounded-xl border border-red-500/10 bg-red-500/[0.02] p-7">
              <h4 className="text-sm font-semibold text-red-400/80 uppercase tracking-wider mb-5">Bear Case</h4>
              <ul className="space-y-4 text-[14px] leading-[1.8] text-white/50">
                <li><Strong>Trajectory is negative and the decline is accelerating.</Strong> -13.8% 7-day growth, ~30% DAA decline in three weeks, ~40% transaction decline from peak. No stabilization in the data so far.</li>
                <li><Strong>Verification rate is very low.</Strong> 0.15% versus Arc's 8.9%. ~14K verified contracts on testnet implies a thin dApp surface at mainnet go-live unless that number moves materially.</li>
                <li><Strong>17.90 tx per address is too high to be organic.</Strong> Automation is the most parsimonious explanation. Net of bots, the real human user count is likely a fraction of the headline address figure.</li>
                <li><Strong>Public cadence has quieted for two months.</Strong> Longer than is typical for a chain still pre-mainnet at a company that usually leverages Tenev's platform aggressively. Attention is a real input, and the clock is running.</li>
                <li><Strong>Competition is stiff.</Strong> Coinbase's Base launched tokenized equities in December 2025. Kraken's Ink L2 alongside xStocks. Ondo and xStocks have head starts on RWA issuance. Arc is chasing the same institutional rail.</li>
                <li><Strong>No visible testnet incentive program.</Strong> Neither an airdrop narrative nor an explicit rewards program is pulling users in. Without a reason to keep interacting with the testnet, drift is the default outcome.</li>
                <li><Strong>Mainnet timing is undefined.</Strong> "Later this year" is not a timeline. Every week without a concrete window compounds ecosystem attrition risk.</li>
              </ul>
            </div>
          </div>

          <Divider />

          {/* ──────────────────── 8. Key Metrics ──────────────────── */}
          <SectionTitle id="key-metrics" number="8">Key Metrics Summary</SectionTitle>

          <div className="my-10 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th className="text-left py-3 pr-4 text-white/40 font-medium text-xs uppercase tracking-wider">Metric</th>
                  <th className="text-left py-3 pr-4 text-white/40 font-medium text-xs uppercase tracking-wider">Value</th>
                  <th className="text-left py-3 text-white/40 font-medium text-xs uppercase tracking-wider">Signal</th>
                </tr>
              </thead>
              <tbody className="text-white/55">
                {[
                  ['Total Transactions', '90,566,659', 'Substantial absolute volume'],
                  ['7-day Tx Growth', '-13.8%', 'Declining, accelerating'],
                  ['Cumulative Unique Addresses', '529,976', 'Smaller base than Arc'],
                  ['Avg Daily Active Addresses', '70,264', 'Currently ~78K, falling'],
                  ['Avg Daily Transactions', '1,257,870', 'Currently ~1.35M, falling'],
                  ['Tx per Active Address', '17.90', 'High, consistent with automated workloads'],
                  ['Contracts Deployed', '9,482,195', 'Large absolute number'],
                  ['Verified Contracts', '14,489 (0.15%)', 'Very low, ~60x lower than Arc'],
                  ['Peak DAA (late March)', '~120K', 'All-time high'],
                  ['Current DAA (mid-April)', '~65 to 80K', '~30% below peak'],
                  ['Week-1 Retention (best cohorts)', '30 to 40%', 'Structurally stronger than Arc'],
                  ['Block Fullness', '~0%', 'Massive headroom'],
                  ['Gas Price', 'Fixed at 10⁻¹¹ Gwei', 'Not market-driven'],
                ].map(([metric, value, signal], i) => (
                  <tr key={i} className="border-b border-white/[0.04]">
                    <td className="py-3 pr-4 text-white/70">{metric}</td>
                    <td className="py-3 pr-4 font-mono text-[13px]">{value}</td>
                    <td className="py-3 text-white/40">{signal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Divider />

          {/* ──────────────────── 9. What to Watch ──────────────────── */}
          <SectionTitle id="what-to-watch" number="9">What to Watch Next</SectionTitle>

          <div className="my-10 space-y-8">
            {[
              {
                title: 'Mainnet timing announcement',
                text: 'The single most important forward-looking indicator will be Robinhood\'s specification of a concrete mainnet launch window. The company has said "later this year" but nothing more specific. If Q1 earnings on April 28 doesn\'t include a more concrete timeline, it will be worth asking why.',
              },
              {
                title: 'Verification rate trend',
                text: 'If the verification rate climbs meaningfully from the current 0.15% floor, it signals real developers arriving. If it stays flat while deployment volume continues, automated activity remains the dominant share — and the gap between headline deployment numbers and real dApp development would keep widening.',
              },
              {
                title: 'Executive communications cadence',
                text: 'Any uptick in Vlad Tenev\'s or Johann Kerbrat\'s public discussion of Robinhood Chain is a positive signal. A continued quiet stretch through Q2 2026 would be a yellow flag, particularly if paired with persistent softness in on-chain metrics.',
              },
              {
                title: 'Cohort retention stability',
                text: 'Whether the most recent cohorts (W13–W14 and forward) stabilize in the 15 to 25% Week-1 range or continue trending toward Arc-like single digits will determine whether the testnet has a retentive core or not.',
              },
              {
                title: 'Tokenized RWA deployments',
                text: 'Robinhood has committed to migrating its existing EU tokenized stock products (which trade ~2,000 stocks and ETFs on Arbitrum) to Robinhood Chain before mainnet. Concrete migration activity on the testnet, visible through new contract deployments with stock-token characteristics, would be a strong positive signal of real product readiness.',
              },
              {
                title: 'DAA floor',
                text: 'If DAA stabilizes above 50K through the rest of April, the current decline reads as normal post-hype cooling. If DAA breaks below 50K and keeps trending lower, the network drifts toward dormant-testnet territory and will need concrete catalysts — ecosystem launches, incentive programs, or a mainnet window — to reverse it.',
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-5">
                <div className="w-1.5 min-h-full rounded-full bg-gradient-to-b from-purple-500/30 to-pink-500/10 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-white/80 mb-1.5">{item.title}</h4>
                  <p className="text-[14.5px] leading-[1.8] text-white/45">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <Divider />

          {/* ── Methodology ── */}
          <div className="mt-16">
            <h3 className="text-xs tracking-[0.3em] uppercase text-white/25 mb-6">Methodology &amp; Disclaimers</h3>
            <p className="text-[13.5px] leading-[1.85] text-white/30 mb-4">
              All on-chain data in this report was derived from Robinhood Chain testnet observations covering February 10, 2026 through approximately April 17, 2026. Charts were generated from transaction-level on-chain data using standard analytics pipelines. Cohort retention uses weekly bucketing based on first-seen transaction date.
            </p>
            <p className="text-[13.5px] leading-[1.85] text-white/30 mb-4">
              Observations about Robinhood's marketing silence are based on review of the{' '}
              <a href="https://investors.robinhood.com/press-releases" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-white/15 hover:text-white/50 transition-colors">Robinhood investor press release page</a>
              {' '}and public executive communications as of April 20, 2026. Speculation about internal strategic reasoning is explicitly labeled as such.
            </p>
            <p className="text-[13.5px] leading-[1.85] text-white/30 mb-4">
              This report is produced by Synthra for informational and educational purposes only. It does not constitute financial, investment, or legal advice and should not be read as a recommendation regarding Robinhood Markets, Inc. (NASDAQ: HOOD) securities. Robinhood Chain is currently in testnet phase; all metrics, features, and parameters are subject to change before mainnet launch. Testnet activity is not a reliable predictor of mainnet adoption.
            </p>
            <p className="text-[13.5px] leading-[1.85] text-white/30">
              Synthra has no financial relationship with Robinhood Markets, Inc., Offchain Labs, or any of the infrastructure partners mentioned in this report.
            </p>
          </div>

          {/* ── Sources ── */}
          <div className="mt-12 pt-8 border-t border-white/[0.06]">
            <p className="text-xs text-white/20">
              Sources:{' '}
              <a href="https://robinhood.com/us/en/newsroom/robinhood-chain-launches-public-testnet/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-white/10 hover:text-white/40 transition-colors">Robinhood Chain Launch Press Release</a>
              {' · '}
              <a href="https://docs.chain.robinhood.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-white/10 hover:text-white/40 transition-colors">Robinhood Chain Documentation</a>
              {' · '}
              <a href="https://investors.robinhood.com/press-releases" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-white/10 hover:text-white/40 transition-colors">Robinhood Investor Press Releases</a>
              {' · '}
              <a href="https://www.theblock.co/post/390440/robinhood-l2-testnet-four-million" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-white/10 hover:text-white/40 transition-colors">The Block coverage</a>
            </p>
          </div>

          {/* ── Back link ── */}
          <div className="mt-20 pt-10 border-t border-white/[0.06]">
            <Link to="/research" className="inline-flex items-center gap-2 text-sm text-white/30 hover:text-white/60 transition-colors group">
              <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              All Research
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default RobinhoodTestnetReport;
