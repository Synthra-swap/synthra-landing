import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

/* ── helper components ──────────────────────────────────── */

const IMG = '/research/arc-testnet-200';
const COVER = '/research/arc-testnet-200/cover.png';

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
  { id: 'growth', label: '1 · Growth Trajectory' },
  { id: 'maturing-base', label: '2 · A Maturing User Base' },
  { id: 'fee-repricing', label: '3 · The February Repricing' },
  { id: 'account-abstraction', label: '4 · Account Abstraction' },
  { id: 'developer-activity', label: '5 · Developer Activity' },
  { id: 'distribution', label: '6 · Distribution' },
  { id: 'then-vs-now', label: '7 · Day 100 vs Day 200' },
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

const ArcTestnet200Report = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <SEO
        title="Arc Testnet at 200 Days: The Quiet Compounding"
        description="An independent follow-up to our 100-day analysis of Circle's Arc testnet: 426.8M total transactions, 2.61M cumulative addresses, 282K average daily active addresses, fees repriced ~90% lower to a $0.0033 median, and 38.5K ERC-4337 smart wallets. By Synthra Research."
        path="/research/arc-testnet-200-days"
        image="https://synthra.org/research/arc-testnet-200/cover.png"
        keywords="Arc testnet, Arc network, Circle Arc, Arc on-chain analysis, Arc blockchain data, USDC gas, Arc daily transactions, Arc account abstraction, dex on arc, Synthra Research, emerging EVM chains"
        article={{
          publishedTime: '2026-06-11',
          author: 'Synthra Research',
          section: 'On-Chain Analysis',
          tags: ['Arc', 'Circle', 'Testnet', 'L1', 'Stablecoins', 'On-Chain Analysis', 'Account Abstraction'],
        }}
        faq={[
          {
            question: 'How is Arc testnet performing after 200 days?',
            answer: 'Arc testnet activity has accelerated rather than decayed: daily transactions grew from a ~1M/day December baseline to 3.68M by June 10, 2026 (peaks above 4.1M), daily active addresses reached all-time highs near 394K, and cumulative unique addresses passed 2.61 million. Returning addresses now make up roughly 75-80% of daily active users.',
          },
          {
            question: 'How much does a transaction cost on Arc?',
            answer: 'After a network-wide fee repricing around February 1, 2026, the median cost per transaction on Arc testnet settled at roughly $0.0033, paid in USDC, about 90% lower than the December-January average of $0.02-0.05.',
          },
          {
            question: 'What is Arc?',
            answer: 'Arc is a Layer 1 blockchain developed by Circle, designed for stablecoin-native finance with USDC as the gas token, fast deterministic finality, and native CCTP interoperability. The public testnet launched on October 28, 2025.',
          },
          {
            question: 'Is there a DEX on Arc?',
            answer: 'Synthra is the chain-abstracted trading layer building natively on Arc: spot trading with concentrated liquidity, USDC-collateralized perpetuals, and routing APIs, with cross-chain execution powered by CCTP.',
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
              <span className="text-xs text-white/30">June 11, 2026</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="text-xs text-white/30">18 min read</span>
            </motion.div>

            <motion.h1
              className="font-playfair text-4xl md:text-[3.25rem] leading-[1.15] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Arc Testnet at 200 Days: The Quiet Compounding
            </motion.h1>

            <motion.p
              className="text-lg text-white/40 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              When we published our 100-day analysis of Circle's Arc testnet in February, the open question was whether the network could hold its momentum once launch curiosity faded. Most testnets answer that question the same way: they don't. Two hundred days in, Arc's answer is different: activity didn't just hold, it compounded.
            </motion.p>

            <motion.p
              className="text-[15px] text-white/30 leading-relaxed mt-4 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              An independent follow-up covering Arc testnet activity through June 10, 2026, drawn entirely from on-chain data. Daily transactions have nearly tripled, daily active addresses are printing all-time highs, fees were repriced ~90% lower, and the composition of users has shifted from curious newcomers to a returning core.
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
            <img src={COVER} alt="Arc Testnet at 200 Days, by Synthra Research" className="w-full" />
          </div>
        </motion.div>

        {/* ─── Body ─── */}
        <div className="max-w-3xl mx-auto px-6">

          {/* ── Executive Summary ── */}
          <SectionTitle id="executive-summary">Executive Summary</SectionTitle>

          <P>
            At day 100 we reported a network averaging <Strong>1.33 million daily transactions</Strong> and <Strong>226,734 daily active addresses</Strong>. At day 200, Arc has processed <Strong>426,764,654 total transactions</Strong> across <Strong>2,613,159 cumulative unique addresses</Strong>, with <Strong>2,188,537 average daily transactions</Strong> and <Strong>282,069 average daily active addresses</Strong>. Recent daily throughput reached <Strong>3.68 million transactions</Strong> (with peaks above <Strong>4.1M</Strong>), while daily active addresses printed an all-time high near <Strong>394K</Strong>.
          </P>

          <P>
            The more interesting story is qualitative. In December, <Strong>roughly 90% of daily active senders were new</Strong>: tourists, faucet claimers, first-touch wallets. By June, <Strong>75 to 80% of daily actives are returning addresses</Strong>. The network has crossed the line every testnet hopes to cross: from a place people try once to a place a core keeps coming back to.
          </P>

          <P>
            Two structural events shaped the period. First, a network-wide <Strong>fee repricing around February 1</Strong> cut the median cost per transaction from $0.02-0.05 to <Strong>$0.0033</Strong>, paid natively in USDC, pricing that makes consumer-scale on-chain activity economically plausible. Second, <Strong>account abstraction adoption became measurable at scale</Strong>: 38,567 ERC-4337 smart wallets are live, with daily user operations climbing steadily through May and June.
          </P>

          <P>
            The honest caveats: transactions per active address have risen from 5.86 at day 100 to roughly <Strong>9 today</Strong>, meaning automation is growing its share of the workload; contract deployments (<Strong>24,737,267</Strong> through day 200) show spike patterns consistent with campaigns rather than purely organic development; and week-one cohort retention, while stable, remains testnet-typical at 12 to 31%. Arc is compounding, but a portion of that compounding is machines.
          </P>

          {/* ── Key stats strip ── */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 my-14">
            {[
              { value: '426.8M', label: 'Total Transactions' },
              { value: '282K', label: 'Avg Daily Active' },
              { value: '2.19M', label: 'Avg Daily Tx' },
              { value: '2.61M', label: 'Unique Addresses' },
              { value: '1.16M', label: 'Verified Contracts' },
            ].map((s, i) => (
              <div key={i} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 text-center">
                <div className="text-2xl font-semibold gradient-text mb-1">{s.value}</div>
                <div className="text-[11px] text-white/30 tracking-wide uppercase">{s.label}</div>
              </div>
            ))}
          </div>

          <Divider />

          {/* ──────────────────── 1. Growth ──────────────────── */}
          <SectionTitle id="growth" number="1">Growth Trajectory</SectionTitle>

          <Sub id="daily-tx" number="1.1">Daily Transactions</Sub>

          <ChartImg src="tx_line.png" alt="Arc Testnet: Daily Transactions" caption="Daily transaction volume with 7-day moving average, Nov 28, 2025 → Jun 10, 2026" />

          <P>
            The transaction curve is the cleanest summary of the period. From a <Strong>~1M/day baseline in early December</Strong>, daily volume climbed in distinct waves: a strong January-February expansion, a spring consolidation in the 2-3M range, and a fresh acceleration through late May that set the period's high above <Strong>4.1M transactions in a single day</Strong>. The most recent reading, <Strong>3,677,045</Strong>, sits near the top of the range.
          </P>

          <P>
            Two things stand out versus the typical testnet lifecycle. First, there is no decay phase: each consolidation resolved upward. Second, the waves are progressively higher and longer: the signature of an ecosystem adding workloads (new deployments, new programs, new automation) rather than a single launch event slowly bleeding out. For contrast, Robinhood Chain's testnet, which we analyzed in April, peaked in week six and entered a sustained decline. Arc's curve at day 200 looks nothing like that.
          </P>

          <Sub id="daa" number="1.2">Daily Active Addresses</Sub>

          <ChartImg src="daa_line.png" alt="Arc Testnet: Daily Active Addresses" caption="Daily active addresses with 7-day moving average" />

          <P>
            Daily active addresses tell a steadier version of the same story: a <Strong>~220K baseline in December</Strong>, cyclical swings between 200K and 340K through the spring, and a clear breakout in late May culminating in the period high of <Strong>393,998 on June 10</Strong>, the strongest activity reading in Arc's history, 200 days after launch.
          </P>

          <P>
            The cyclicality itself is informative. The repeated pattern (expansion, cooldown, higher base) tracks what we'd expect from a testnet where activity is driven by program waves (ecosystem campaigns, new app deployments, testing pushes) layered on top of a slowly rising organic floor. The floor matters more than the peaks: December's troughs were ~195K; June's troughs are ~250K+.
          </P>

          <Sub id="accounts" number="1.3">Account Growth</Sub>

          <ChartImg src="accounts_growth.png" alt="Arc Testnet: Accounts Growth" caption="Cumulative unique addresses and daily new accounts" />

          <P>
            Cumulative addresses grew from roughly <Strong>900K at the start of the window to 2,613,159 by June 10</Strong>. Unlike the single-spike pattern we documented on Robinhood Chain (where two launch days produced 80%+ of all addresses), Arc's new-account bars arrive in repeated waves, the largest in mid-January (~40K/day), with a persistent baseline of 5-15K new addresses daily even in quiet weeks, seven months after launch.
          </P>

          <P>
            Continuous acquisition without a dominant spike is what organic-plus-programmatic growth looks like. No single day accounts for more than ~1.5% of the cumulative total.
          </P>

          <Divider />

          {/* ──────────────────── 2. Maturing base ──────────────────── */}
          <SectionTitle id="maturing-base" number="2">A Maturing User Base</SectionTitle>

          <Sub id="new-returning" number="2.1">New vs Returning Addresses</Sub>

          <ChartImg src="new_returning.png" alt="Arc Testnet: New vs Returning Addresses" caption="Daily active senders split by first-seen date (sampled), with new-address share on the right axis" />

          <P>
            This is the chart we consider the single most important in the dataset. In early December, the new-address share of daily actives ran at <Strong>80 to 90%</Strong>: a network of first-time visitors. That share fell steadily through the winter and has now stabilized at <Strong>20 to 25%</Strong>: three out of four active addresses on any given day have been here before.
          </P>

          <P>
            The absolute numbers underline it: returning actives grew from a few thousand per day in December to <Strong>~19-23K per day (sampled)</Strong> in June, while new-address inflow stayed roughly constant. Growth is no longer driven by churn-and-replace; it's driven by accumulation of users who stay. For a testnet, where there is no money to be made and every interaction is voluntary, that is the strongest engagement signal available.
          </P>

          <Sub id="retention" number="2.2">Cohort Retention</Sub>

          <ChartImg src="cohort_retention.png" alt="Arc Testnet: Cohort Retention" caption="Weekly cohort retention, weeks since first activity" />

          <P>
            Week-one retention across the 28 weekly cohorts ranges from <Strong>7% to 39%</Strong>, with most cohorts landing in the low-to-mid teens, consistent with the 9 to 15% organic range we estimated at day 100, and structurally typical for testnets. Three patterns are worth pulling out:
          </P>

          <div className="my-8 space-y-6 pl-5 border-l-2 border-white/[0.06]">
            <div>
              <div className="text-sm font-semibold text-white/70 mb-1">The holiday cohorts are anomalously sticky</div>
              <p className="text-[14.5px] leading-[1.8] text-white/45">Users who joined in late December (W51-W52) and the first week of January retain at 22-39% at week one, and the W52 cohort still shows 41% activity at week four. Whoever arrived during the holidays came to build, not to browse.</p>
            </div>
            <div>
              <div className="text-sm font-semibold text-white/70 mb-1">No deterioration in recent cohorts</div>
              <p className="text-[14.5px] leading-[1.8] text-white/45">The most recent fully-measurable cohorts (W14: 29%, W19: 31% at week one) are among the strongest in the entire dataset, the opposite of the fading-cohort pattern that typically precedes testnet decline. On Robinhood Chain, the equivalent rows were weakening by week twelve.</p>
            </div>
            <div>
              <div className="text-sm font-semibold text-white/70 mb-1">The mid-window trough recovered</div>
              <p className="text-[14.5px] leading-[1.8] text-white/45">February-March cohorts (W05-W07) were the weakest at 7-9%, the post-repricing churn period. Retention has rebuilt steadily since, suggesting the network found a stickier mix of users and programs in the spring.</p>
            </div>
          </div>

          <Divider />

          {/* ──────────────────── 3. Fee repricing ──────────────────── */}
          <SectionTitle id="fee-repricing" number="3">The February Repricing</SectionTitle>

          <ChartImg src="fees_line.png" alt="Arc Testnet: Cost per Transaction" caption="Average fee per transaction in USDC, with 7-day average. Note the step-change around February 1." />

          <P>
            Around <Strong>February 1</Strong>, the average cost per transaction dropped in a single step from the $0.02-0.05 range that characterized December and January to a flat <Strong>~$0.003</Strong>, where it has remained for over four months. The window median now sits at <Strong>$0.0033</Strong>: one third of a cent, denominated and paid in USDC.
          </P>

          <P>
            Two observations. First, the repricing coincides almost exactly with the start of the network's strongest growth phase: daily transactions broke decisively above 2M in the weeks following, and never returned to the old baseline. Cheap, predictable, dollar-denominated fees appear to have been a genuine demand unlock, not just a parameter change. Second, the <em>stability</em> of the line matters as much as its level: four months without fee volatility, through a 3x increase in load, is the kind of pricing behavior consumer applications can actually build on. The open question, which testnet data cannot answer, is how this fee market behaves under adversarial mainnet congestion.
          </P>

          <P>
            For context on capacity: average block fullness across the window is <Strong>~0.1%</Strong>. Arc is running at a small fraction of its throughput ceiling even at all-time-high activity. There is no congestion story in this data, and therefore no fee-pressure story either.
          </P>

          <Divider />

          {/* ──────────────────── 4. Account abstraction ──────────────────── */}
          <SectionTitle id="account-abstraction" number="4">Account Abstraction Adoption</SectionTitle>

          <ChartImg src="aa_adoption.png" alt="Arc Testnet: Account Abstraction Adoption" caption="Cumulative ERC-4337 smart wallets and daily user operations" />

          <P>
            Arc's testnet now hosts <Strong>38,567 ERC-4337 smart wallets</Strong>. The growth curve has two distinct phases: a sharp adoption jump in mid-December (from ~4K to ~15K wallets in roughly a week, almost certainly a wallet provider or application enabling AA by default), followed by remarkably linear accumulation of <Strong>~100-150 new smart wallets per day</Strong> for six consecutive months.
          </P>

          <P>
            Daily user operations tell the more recent story: after months of low, steady activity, user ops began climbing in late April and have been setting period highs through May and June. Smart accounts on Arc are no longer just being <em>created</em>; they are increasingly being <em>used</em>.
          </P>

          <P>
            We flag this chart for a strategic reason. Gasless onboarding, session keys, and sponsored transactions, the UX layer that makes blockchain invisible to mainstream users, all run through account abstraction. A stablecoin chain where AA adoption is compounding before mainnet is assembling exactly the stack that consumer fintech distribution requires. This is the metric we'd watch if we were Circle.
          </P>

          <Divider />

          {/* ──────────────────── 5. Developer activity ──────────────────── */}
          <SectionTitle id="developer-activity" number="5">Developer Activity</SectionTitle>

          <ChartImg src="deployments_line.png" alt="Arc Testnet: Contract Deployments" caption="Daily new contract deployments · 24.7M through day 200" />

          <P>
            <Strong>24,737,267 contracts</Strong> were deployed through day 200, a number that demands skeptical reading. The daily pattern makes the composition clear: a 100-200K/day baseline punctuated by sharp campaign spikes, including a early-March burst (~330K/day) and a dramatic late-April surge that peaked near <Strong>580K deployments in a single day</Strong> before mean-reverting within a week.
          </P>

          <P>
            As we wrote in the Robinhood Chain analysis: narrow bursts followed by mean reversion are the signature of <Strong>targeted deployment campaigns</Strong> (factory batching, stress tests, infrastructure validation), not day-to-day application development. The honest read is that Arc's headline deployment number contains a large automated share. The more meaningful signal is the baseline: even excluding every spike, the network sustains six figures of daily deployments seven months in, and the post-spike baseline (~150-200K/day in May-June) is higher than the pre-spike one: campaigns came, went, and left the floor higher.
          </P>

          <P>
            At day 100, Arc's contract verification rate was 8.9%, the strongest human-intent signal we'd measured on an emerging testnet. At day 200, <Strong>1,157,153 contracts are verified</Strong>. Against the full deployment count, that implies a lower headline verification ratio of roughly <Strong>4.7%</Strong>, which is still unusually high for a campaign-heavy public testnet and remains one of Arc's clearest signals of developer intent.
          </P>

          <Divider />

          {/* ──────────────────── 6. Distribution ──────────────────── */}
          <SectionTitle id="distribution" number="6">Distribution &amp; Concentration</SectionTitle>

          <Sub id="concentration" number="6.1">Activity Concentration</Sub>

          <ChartImg src="lorenz_curve.png" alt="Arc Testnet: Activity Concentration (Lorenz curve)" caption="Lorenz curve of transaction distribution across sampled addresses · Gini 0.643" />

          <P>
            The measured Gini coefficient for the window is <Strong>0.643</Strong>, squarely inside the 0.55-0.65 band we estimated visually at day 100, and meaningfully below Ethereum mainnet's typical 0.7-0.8+. More striking is the headline concentration figure: in our transaction sample, <Strong>the top 10 addresses account for only ~4% of all activity</Strong>.
          </P>

          <P>
            For comparison, on most testnets a handful of bot operators and system contracts dominate volume outright. Arc's activity is carried by a broad middle class of moderately active addresses: tens of thousands of accounts doing tens of transactions each, rather than ten accounts doing millions. Whatever share of Arc's workload is automated, the automation itself is unusually decentralized.
          </P>

          <P>
            One number cuts the other way: transactions per active address have risen from <Strong>5.86 at day 100 to roughly 9</Strong> in recent weeks. Activity per address is intensifying faster than addresses are growing, consistent with maturing power users, but also with a growing scripted share. Both are probably true; the ratio is worth tracking before it approaches the ~18 level that flagged automation dominance on Robinhood Chain.
          </P>

          <Sub id="heatmap" number="6.2">When Arc Is Awake</Sub>

          <ChartImg src="hourly_heatmap.png" alt="Arc Testnet: Activity Heatmap" caption="Relative activity by hour (UTC) and day of week" />

          <P>
            The hourly heatmap is essentially unchanged from day 100, which is itself a finding: Arc's activity peaks between <Strong>00:00 and 09:00 UTC</Strong>, evening in Asia through morning in Europe, across every day of the week, with Monday and Wednesday early-UTC hours the single hottest cells. US business hours remain the quietest stretch on the grid.
          </P>

          <P>
            For a chain built by a US-headquartered issuer, the persistence of the Asia-Europe skew across 200 days suggests the builder and tester community discovering Arc organically lives east of its creator. Distribution strategy for the mainnet ecosystem should probably follow the data.
          </P>

          <Divider />

          {/* ──────────────────── 7. Then vs now ──────────────────── */}
          <SectionTitle id="then-vs-now" number="7">Day 100 vs Day 200</SectionTitle>

          <div className="my-10 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th className="text-left py-3 pr-4 text-white/40 font-medium text-xs uppercase tracking-wider">Metric</th>
                  <th className="text-left py-3 pr-4 text-white/40 font-medium text-xs uppercase tracking-wider">Day 100 (Feb 5)</th>
                  <th className="text-left py-3 pr-4 text-white/40 font-medium text-xs uppercase tracking-wider">Day 200 (Jun 10)</th>
                  <th className="text-left py-3 text-white/40 font-medium text-xs uppercase tracking-wider">Change</th>
                </tr>
              </thead>
              <tbody className="text-white/55">
                {[
                  ['Daily transactions (recent)', '~1.8M', '3.68M', '≈ 2x'],
                  ['Daily active addresses (recent)', '~280K', '~394K', '+40%, new ATH'],
                  ['Cumulative unique addresses', '1.7M', '2.61M', '+54%'],
                  ['Median fee per tx', '$0.02-0.05', '$0.0033', '~90% lower'],
                  ['Tx per active address', '5.86', '~9', 'Rising; worth watching'],
                  ['New-address share of DAA', '~40-60%', '20-25%', 'Maturing base'],
                  ['ERC-4337 smart wallets', '~20K', '38,567', '≈ 2x'],
                  ['Gini coefficient', '0.55-0.65 (est.)', '0.643 (measured)', 'Stable'],
                ].map(([metric, d100, d200, change], i) => (
                  <tr key={i} className="border-b border-white/[0.04]">
                    <td className="py-3 pr-4 text-white/70">{metric}</td>
                    <td className="py-3 pr-4 font-mono text-[13px]">{d100}</td>
                    <td className="py-3 pr-4 font-mono text-[13px]">{d200}</td>
                    <td className="py-3 text-white/40">{change}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Divider />

          {/* ──────────────────── 8. Key metrics ──────────────────── */}
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
                  ['Total transactions', '426,764,654', 'Large cumulative throughput'],
                  ['Average daily transactions', '2,188,537', 'Up materially from day 100'],
                  ['Latest daily transactions', '3,677,045', 'Near period high'],
                  ['Peak daily transactions', '~4.15M', 'Set in late May, month 7'],
                  ['Average daily active addresses', '282,069', 'Higher sustained user floor'],
                  ['Latest DAA', '393,998', 'All-time high'],
                  ['Cumulative unique addresses', '2,613,159', '+900K since day 100'],
                  ['Returning share of DAA', '75-80%', 'Retentive core established'],
                  ['Week-1 retention (recent cohorts)', '29-31%', 'Strongest in dataset'],
                  ['Median fee per transaction', '$0.0033 (USDC)', 'Stable for 4+ months'],
                  ['ERC-4337 smart wallets', '38,567', 'Linear growth, usage accelerating'],
                  ['Total blocks', '33,033,992', 'Long-running high-cadence testnet'],
                  ['Contracts deployed', '24,737,267', 'Campaign-inflated; baseline rising'],
                  ['Verified contracts', '1,157,153 (~4.7%)', 'Strong developer-intent signal'],
                  ['Gini coefficient', '0.643', 'Below Ethereum mainnet'],
                  ['Top-10 address share', '~4%', 'Unusually decentralized'],
                  ['Tx per active address', '~9', 'Up from 5.86; automation share growing'],
                  ['Block fullness', '~0.1%', 'Massive headroom'],
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

          {/* ──────────────────── 9. What to watch ──────────────────── */}
          <SectionTitle id="what-to-watch" number="9">What to Watch Next</SectionTitle>

          <div className="my-10 space-y-8">
            {[
              {
                title: 'Mainnet window',
                text: 'Arc is approaching the point where testnet data stops being the story. A concrete mainnet timeline, and the migration behavior of the 2.6M testnet addresses when it arrives, is the single biggest forward catalyst.',
              },
              {
                title: 'The automation ratio',
                text: 'Transactions per active address rose from 5.86 to ~9 over 100 days. If it stabilizes here, Arc keeps its "healthiest emerging testnet" profile. If it keeps climbing toward Robinhood Chain\'s ~18, the organic-growth narrative needs revisiting.',
              },
              {
                title: 'User operations trajectory',
                text: 'Daily ERC-4337 user ops began accelerating in late April. If that curve continues through the summer, Arc will have demonstrated working consumer-grade UX at testnet scale before mainnet, something few chains have shown.',
              },
              {
                title: 'Post-campaign deployment floor',
                text: 'After each deployment spike, the daily baseline has settled higher. Whether the current ~150-200K/day floor holds without new campaigns will reveal how much of the developer activity is self-sustaining.',
              },
              {
                title: 'Fee behavior under real load',
                text: 'Four months of flat $0.003 fees at 0.1% block fullness proves predictability, not resilience. The first sustained congestion event, likely only at mainnet, will be the real test of Arc\'s fee market design.',
              },
              {
                title: 'Ecosystem arrivals',
                text: 'As Arc approaches mainnet, the pace of recognizable protocol deployments (DEXs, lending markets, payment apps) will determine whether the chain launches with an ecosystem or just infrastructure. The deployment and verification data will show it before any announcement does.',
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
              All on-chain data in this report covers Arc public testnet activity from November 28, 2025 through June 10, 2026, building on our previous analysis of the network's first 100 days (October 28, 2025 → February 5, 2026). Aggregate daily metrics are drawn from indexed network statistics; distribution metrics (concentration, retention, new-vs-returning, heatmap) are computed from systematic transaction-level sampling and noted as sampled where applicable. Cohort retention uses weekly bucketing based on first-seen sender date.
            </p>
            <p className="text-[13.5px] leading-[1.85] text-white/30 mb-4">
              This report is produced by Synthra Research for informational and educational purposes only. It does not constitute financial, investment, or legal advice. Arc is currently in testnet phase; all metrics, features, and parameters are subject to change before mainnet launch. Testnet activity is not a reliable predictor of mainnet adoption.
            </p>
            <p className="text-[13.5px] leading-[1.85] text-white/30">
              Disclosure: Synthra builds its trading protocol natively on Arc testnet and participates in the Arc ecosystem, including ecosystem programs operated by Circle. This analysis is editorially independent and based exclusively on publicly available on-chain data.
            </p>
          </div>

          {/* ── Sources ── */}
          <div className="mt-12 pt-8 border-t border-white/[0.06]">
            <p className="text-xs text-white/20">
              Sources:{' '}
              <a href="https://www.arc.network" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-white/10 hover:text-white/40 transition-colors">Arc Network</a>
              {' · '}
              <a href="https://testnet.arcscan.app" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-white/10 hover:text-white/40 transition-colors">Arc Testnet Explorer</a>
              {' · '}
              <Link to="/research/arc-testnet-100-days" className="underline underline-offset-2 decoration-white/10 hover:text-white/40 transition-colors">Synthra Research: Arc Testnet at 100 Days</Link>
              {' · '}
              <Link to="/research/robinhood-chain-70-days" className="underline underline-offset-2 decoration-white/10 hover:text-white/40 transition-colors">Synthra Research: Robinhood Chain, The First 70 Days</Link>
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

export default ArcTestnet200Report;
