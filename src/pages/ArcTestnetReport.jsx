import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

/* ── helper components ──────────────────────────────────── */

const IMG = '/research/arc-testnet';

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
  { id: 'network-growth', label: '1 · Network Growth' },
  { id: 'transaction-activity', label: '2 · Transaction Activity' },
  { id: 'developer-activity', label: '3 · Developer Activity' },
  { id: 'network-performance', label: '4 · Network Performance' },
  { id: 'activity-distribution', label: '5 · Activity Distribution' },
  { id: 'thesis', label: '6 · Thesis' },
  { id: 'key-metrics', label: '7 · Key Metrics' },
  { id: 'what-to-watch', label: '8 · What to Watch' },
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

const ArcTestnetReport = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <SEO
        title="Arc Testnet at 100 Days: an Independent On-Chain Analysis"
        description="An independent analysis of Circle's Arc testnet covering 130M+ transactions, 1.7M addresses, and 11.5M contract deployments across the network's first 100 days. By Synthra Research."
        path="/research/arc-testnet-100-days"
        image="https://synthra.org/research/arc-testnet/cover.png"
        keywords="Arc testnet, Circle Arc, Arc blockchain analysis, Arc on-chain data, Arc L1, stablecoin chain, Synthra Research, emerging EVM chains, dex on arc"
        article={{
          publishedTime: '2026-02-07',
          author: 'Synthra Research',
          section: 'On-Chain Analysis',
          tags: ['Arc', 'Circle', 'Testnet', 'L1', 'Stablecoins', 'On-Chain Analysis', 'Emerging EVM Chains'],
        }}
        faq={[
          {
            question: 'How many transactions did Arc testnet process in its first 100 days?',
            answer: 'Arc testnet processed over 130 million transactions in its first 100 days, with daily active addresses growing from ~50K at launch to over 350K by early February 2026.',
          },
          {
            question: 'What is Arc blockchain?',
            answer: 'Arc is an EVM-compatible Layer 1 blockchain built by Circle, the issuer of USDC. It uses the Malachite consensus engine and is designed for high throughput. In its first 100 days of testnet, it demonstrated capacity for 3,000+ TPS with blocks remaining 99.96% empty.',
          },
          {
            question: 'Is there a DEX on Arc?',
            answer: 'Synthra is building the leading decentralized exchange on Arc, offering spot trading with concentrated liquidity, perpetual futures, bridge, and launchpad — making it the most complete DEX on the Arc ecosystem.',
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
              <span className="text-xs text-white/30">February 7, 2026</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="text-xs text-white/30">25 min read</span>
            </motion.div>

            <motion.h1
              className="font-playfair text-4xl md:text-[3.25rem] leading-[1.15] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Arc Testnet at 100 Days: an Independent On-Chain Analysis
            </motion.h1>

            <motion.p
              className="text-lg text-white/40 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Circle launched the Arc public testnet on October 28, 2025, positioning it as the "Economic OS for the internet": an EVM-compatible Layer-1 blockchain purpose-built for stablecoin finance. With 100+ institutional partners including BlackRock, Visa, HSBC, Deutsche Bank, and Mastercard, Arc arrived with more TradFi credibility than perhaps any testnet in crypto history.
            </motion.p>

            <motion.p
              className="text-[15px] text-white/30 leading-relaxed mt-4 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              This report is an independent analysis of the first ~100 days of testnet activity, built entirely on public on-chain data from{' '}
              <a href="https://testnet.arcscan.app/" target="_blank" rel="noopener noreferrer" className="text-white/50 underline underline-offset-2 decoration-white/20 hover:text-white/70 transition-colors">
                Arcscan
              </a>. No narrative, no speculation: just the metrics.
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
            <img src={`${IMG}/cover.png`} alt="Arc Testnet Analysis" className="w-full" />
          </div>
        </motion.div>

        {/* ─── Body ─── */}
        <div className="max-w-3xl mx-auto px-6">

          {/* ── Executive Summary ── */}
          <SectionTitle id="executive-summary">Executive Summary</SectionTitle>

          <P>
            Over the first 100 days of its public testnet (October 28, 2025 to February 5, 2026), Arc has processed <Strong>130.3 million transactions</Strong> across <Strong>1.7 million cumulative unique addresses</Strong>, averaging <Strong>1.33 million daily transactions</Strong> and <Strong>226,734 daily active addresses</Strong>. Developer activity has been particularly notable: <Strong>11.5 million contracts</Strong> have been deployed, of which over <Strong>1 million are verified</Strong>, a 8.9% verification rate that suggests meaningful human intent behind a significant portion of deployments.
          </P>

          <P>
            Seven-day transaction growth stands at <Strong>+21.3%</Strong>. Daily active addresses have trended from ~50K at launch to over 350K by early February, with gas usage rising in lockstep. Blocks remain far from full (mean fullness ~0.04%), indicating substantial capacity headroom.
          </P>

          <P>
            However, the data also reveals structural concerns. Cohort retention follows the classic testnet decay pattern, with most weekly cohorts seeing only 5 to 15% of users return after the first week. The Lorenz curve shows significant activity concentration, with roughly 60% of addresses responsible for only ~20% of transactions, while a small tail of power users generates disproportionate volume.
          </P>

          <P>
            By most historical benchmarks for pre-mainnet networks, Arc's testnet is performing well. The open question is whether these numbers translate to mainnet, where real economic costs and competitive dynamics change the equation entirely.
          </P>

          {/* ── Key stats strip ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-14">
            {[
              { value: '130.3M', label: 'Transactions' },
              { value: '1.7M', label: 'Unique Addresses' },
              { value: '11.5M', label: 'Contracts Deployed' },
              { value: '+21.3%', label: '7d Tx Growth' },
            ].map((s, i) => (
              <div key={i} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 text-center">
                <div className="text-2xl font-semibold gradient-text mb-1">{s.value}</div>
                <div className="text-[11px] text-white/30 tracking-wide uppercase">{s.label}</div>
              </div>
            ))}
          </div>

          <Divider />

          {/* ──────────────────── 1. Network Growth ──────────────────── */}
          <SectionTitle id="network-growth" number="1">Network Growth &amp; Adoption</SectionTitle>

          <Sub id="account-growth" number="1.1">Account Growth</Sub>

          <ChartImg src="accounts_growth.png" alt="Arc Testnet: Accounts Growth" caption="Cumulative unique addresses over the 100-day observation period" />

          <P>
            Arc has accumulated <Strong>1,695,103 cumulative unique addresses</Strong> over the observation period. The growth curve is steep and largely monotonic. The network added accounts rapidly in the first two weeks: early November saw peaks of 40,000 to 55,000 new accounts per day, before settling into a more moderate cadence of 5,000 to 15,000 new accounts/day through December.
          </P>

          <P>
            A second growth wave emerged in <Strong>late January 2026</Strong>, with new account creation ramping back to 25,000 to 35,000/day. This coincides with increased DeFi protocol activity on the testnet (Aave, Curve, Maple Finance), suggesting that ecosystem expansion is pulling in fresh developer and user attention.
          </P>

          <P>
            For context, 1.7M addresses in 100 days is a strong testnet performance. Arbitrum's Nitro testnet and Base's pre-launch testnet operated in similar ranges, though direct comparisons are imperfect given different timelines and market conditions.
          </P>

          <Sub id="daa" number="1.2">Daily Active Addresses</Sub>

          <ChartImg src="daa_line.png" alt="Arc Testnet: Daily Active Addresses" caption="Daily active addresses with 7-day moving average" />

          <P>
            Daily active addresses (DAA) grew from approximately <Strong>50,000 at launch to over 350,000</Strong> by early February, a roughly 7x increase. The 7-day moving average reveals three distinct phases:
          </P>

          <div className="my-8 space-y-6 pl-5 border-l-2 border-white/[0.06]">
            <div>
              <div className="text-sm font-semibold text-white/70 mb-1">Phase 1: Late Oct to Late Nov</div>
              <p className="text-[14.5px] leading-[1.8] text-white/45">Rapid ramp from 50K to ~250K DAA, coinciding with launch momentum and the initial developer onboarding wave.</p>
            </div>
            <div>
              <div className="text-sm font-semibold text-white/70 mb-1">Phase 2: December to Early Jan</div>
              <p className="text-[14.5px] leading-[1.8] text-white/45">A plateau where DAA hovered around 200K to 240K. Typical testnet behavior: initial curiosity fades, and what remains is a core of active builders and testers.</p>
            </div>
            <div>
              <div className="text-sm font-semibold text-white/70 mb-1">Phase 3: Mid-Jan to Feb</div>
              <p className="text-[14.5px] leading-[1.8] text-white/45">Renewed growth pushing DAA back above 300K consistently. This is the most encouraging signal: growth <em className="text-white/55">after</em> the novelty has worn off. Networks that show a "second wave" tend to have stickier ecosystems.</p>
            </div>
          </div>

          <P>
            The ratio of DAA to cumulative addresses gives a rough "daily engagement rate" of ~13 to 20%, which is reasonable for a testnet. On mainnet chains, this ratio typically falls to 1 to 5%, so the testnet figure should be interpreted as reflecting active experimentation rather than long-term engagement patterns.
          </P>

          <Sub id="cohort-retention" number="1.3">Cohort Retention</Sub>

          <ChartImg src="cohort_retention.png" alt="Arc Testnet: Cohort Retention Heatmap" caption="Weekly cohort retention over the observation period" />

          <P>
            Retention analysis reveals the clearest picture of user stickiness. For <Strong>early cohorts (W43 to W50)</Strong>, retention follows a predictable decay: Week-1 retention sits around 9 to 15%, and by Week-4 most cohorts retain only 4 to 9% of their original users. This pattern is not unusual for testnets where there is no real economic value at stake, but it represents a baseline worth tracking.
          </P>

          <P>
            A notable shift occurs in the <Strong>late-December cohorts (W51 through W00)</Strong>, where Week-1 retention jumps to 23 to 41% and Week-4 retention reaches 30 to 43%. The W52 cohort retained <Strong>43% of users four weeks later</Strong>. This spike aligns with a period of increased protocol deployment activity on the testnet, suggesting that ecosystem depth has a measurable impact on retention. When there are more contracts to interact with and more protocols to test, users return more frequently.
          </P>

          <P>
            Subsequent cohorts (W01 to W04) revert to the 10 to 18% range, indicating that the retention uplift was tied to a specific wave of ecosystem activity rather than a structural improvement. The implication for mainnet is clear: a rich, continuously evolving application layer is not optional. It is the primary driver of user retention.
          </P>

          <Divider />

          {/* ──────────────────── 2. Transactions ──────────────────── */}
          <SectionTitle id="transaction-activity" number="2">Transaction Activity &amp; Composition</SectionTitle>

          <Sub id="daily-tx" number="2.1">Daily Volume</Sub>

          <ChartImg src="tx_line.png" alt="Arc Testnet: Daily Transactions" caption="Daily transaction volume with 7-day moving average" />

          <P>
            Daily transaction volume has grown from approximately <Strong>600,000 to 900,000 at launch to regularly exceeding 2 million</Strong>, with the 7-day moving average reaching ~2.1M by early February. Total transactions have reached <Strong>130,280,605</Strong>, averaging <Strong>1,329,394 per day</Strong>.
          </P>

          <P>
            The ratio of <Strong>5.86 transactions per active address per day</Strong> is relatively healthy. For comparison, Ethereum mainnet typically sees 2 to 4 tx/active address/day, while Solana can see 10 to 50+. Arc's ratio suggests a mix of manual testing, scripted interactions, and some automated activity: consistent with a testnet where developers are actively building.
          </P>

          <Sub id="tx-composition" number="2.2">Composition</Sub>

          <ChartImg src="tx_composition.png" alt="Arc Testnet: Transaction Composition" caption="Contract calls vs. native transfers over time" />

          <P>
            The vast majority of Arc's transaction volume consists of <Strong>contract calls</Strong>, with native transfers representing less than 10% of total volume. This composition is meaningful. A testnet dominated by native transfers would suggest simple faucet-claiming and token-shuffling. The dominance of contract interactions signals that developers are actively deploying and testing smart contracts: DeFi protocols, token standards, integration tests, and EVM execution paths.
          </P>

          <P>
            For a chain designed as an "Economic OS" with integrated FX engines, stablecoin swaps, and compliance-aware financial primitives, this is precisely the transaction mix you would want to see during the testing phase.
          </P>

          <Divider />

          {/* ──────────────────── 3. Developer Activity ──────────────────── */}
          <SectionTitle id="developer-activity" number="3">Developer Activity</SectionTitle>

          <Sub id="deployments" number="3.1">Contract Deployments</Sub>

          <ChartImg src="deployments_line.png" alt="Arc Testnet: Daily Contract Deployments" caption="Daily new contract deployments" />

          <P>
            This is one of the strongest metrics in the dataset. Arc has seen <Strong>11,523,118 total contract deployments</Strong> over the observation period, averaging approximately 100,000 to 120,000 deployments per day, with peaks exceeding 200,000.
          </P>

          <P>
            To put this in perspective: 11.5M contract deployments in 100 days on a testnet is extraordinary volume. Even accounting for factory contracts and automated scripts, this indicates a vibrant developer ecosystem. Daily deployments have remained consistently high without dramatic fall-off, which speaks to sustained interest rather than a one-time surge.
          </P>

          <P>
            Of the 11.5M deployed contracts, <Strong>1,030,072 are verified, an 8.9% verification rate</Strong>. Contract verification (uploading and confirming source code on the block explorer) is a strong signal of human intent. Automated deployments and bots rarely verify their code. A rate approaching 9% suggests that a meaningful fraction of these contracts are being built by developers who intend to iterate and eventually deploy to mainnet.
          </P>

       

          <Divider />

          {/* ──────────────────── 4. Network Performance ──────────────────── */}
          <SectionTitle id="network-performance" number="4">Network Performance &amp; Economics</SectionTitle>

          <Sub id="gas-usage" number="4.1">Gas Usage</Sub>

          <ChartImg src="gas_line.png" alt="Arc Testnet: Daily Gas Usage" caption="Daily gas consumption" />

          <P>
            Daily gas consumption shows an initial spike above <Strong>1,400,000M</Strong> on day one, followed by normalization to the 100,000M to 250,000M range. Since mid-January, gas usage has trended upward to 300,000M to 400,000M/day, closely tracking the increase in transaction volume.
          </P>

          <P>
            The tight correlation between gas usage and transaction count suggests that average gas per transaction has remained relatively stable. This is consistent with a stable mix of contract calls and simple interactions whose complexity profile has not shifted materially over time.
          </P>

          <Sub id="gas-price" number="4.2">Gas Price Dynamics</Sub>

          <ChartImg src="gas_price_trend.png" alt="Arc Testnet: Average Gas Price" caption="Average gas price trend over time" />

          <P>
            Average gas prices held remarkably steady around <Strong>1.6 to 1.8 x 10^-7 Gwei</Strong> from launch through late January. In late January 2026, gas prices <Strong>dropped sharply</Strong>, falling roughly 90%. This step-function decline is almost certainly the result of a protocol-level parameter change rather than organic market dynamics.
          </P>

          <P>
            The extremely low absolute gas price levels are consistent with Arc's design philosophy of "predictable, dollar-denominated fees." Three visible spikes correlate with periods of elevated transaction volume, suggesting the EIP-1559-style fee mechanism is functioning as designed: prices rise under congestion and return to baseline during normal periods.
          </P>

          <Sub id="block-fullness" number="4.3">Block Fullness</Sub>

          <ChartImg src="block_fullness.png" alt="Arc Testnet: Block Fullness Distribution" caption="Average block fullness distribution" />

          <P>
            Average block fullness sits at approximately <Strong>0.04%</Strong>, meaning blocks are 99.96% empty. This tells us that <Strong>Arc has enormous throughput headroom</Strong>. Even at ~2.5M daily transactions, the network is barely scratching its capacity limits. The Malachite consensus engine's claimed throughput of 3,000 TPS could theoretically handle 250M+ daily transactions before blocks begin to fill.
          </P>

          <P>
            From an infrastructure perspective, this margin is a positive signal. It means the network can absorb significant mainnet adoption without immediate concerns about congestion or degraded user experience.
          </P>

          <Divider />

          {/* ──────────────────── 5. Activity Distribution ──────────────────── */}
          <SectionTitle id="activity-distribution" number="5">Activity Distribution &amp; Concentration</SectionTitle>

          <Sub id="address-distribution" number="5.1">Address Activity Distribution</Sub>

          <ChartImg src="address_distribution.png" alt="Arc Testnet: Address Activity Distribution" caption="Log-log distribution of transactions per address" />

          <P>
            The log-log distribution reveals a classic <Strong>power-law pattern</Strong>. The vast majority of addresses (~300K+) have executed only 1 transaction, dropping off sharply from there. At the far right tail, a handful of addresses have executed 20,000 to 50,000+ transactions each, almost certainly automated scripts or system addresses.
          </P>

          <P>
            The steepness of the drop-off is a reminder that a large portion of Arc's unique address count represents one-time visitors: faucet claimers, curious developers who ran a single test, or explorers who interacted once and moved on. The "1.7M unique addresses" headline should be read with this distribution in mind.
          </P>

          <Sub id="lorenz" number="5.2">Lorenz Curve &amp; Gini Coefficient</Sub>

          <ChartImg src="lorenz_curve.png" alt="Arc Testnet: Lorenz Curve" caption="Transaction distribution inequality across addresses" />

          <P>
            The Lorenz curve confirms substantial concentration: approximately <Strong>60% of addresses account for only ~20% of transactions</Strong>, while the <Strong>top 10% generate roughly 60% of all transaction volume</Strong>. The visual suggests a Gini coefficient in the range of 0.55 to 0.65.
          </P>

          <P>
            For context, Ethereum mainnet typically shows Gini coefficients of 0.7 to 0.8+. Arc's somewhat lower concentration is a positive signal: the testnet is not completely dominated by a handful of bot operators, and there exists a meaningful "middle class" of moderately active addresses contributing consistent volume.
          </P>

          <Sub id="heatmap" number="5.3">Temporal Activity Patterns</Sub>

          <ChartImg src="hourly_heatmap.png" alt="Arc Testnet: Hourly Activity Heatmap" caption="Activity distribution by hour (UTC) and day of week" />

          <P>
            Peak activity occurs during <Strong>UTC 7:00 to 12:00</Strong>, particularly Monday through Wednesday. This corresponds to morning hours in Asia and late morning in Europe, strongly suggesting a <Strong>predominantly Asian and European user base</Strong> during the testnet phase.
          </P>

          <P>
            The relative weakness during US business hours (UTC 14:00 to 22:00) is worth noting. If Circle's mainnet strategy leans on US institutional adoption, this geographic distribution may shift significantly post-launch. Alternatively, it may indicate that US-based partners are taking a more cautious, wait-for-mainnet approach to engagement.
          </P>

          <Divider />

          {/* ──────────────────── 6. Thesis ──────────────────── */}
          <SectionTitle id="thesis" number="6">Thesis</SectionTitle>

          <div className="my-12 grid md:grid-cols-2 gap-6">
            {/* Bull */}
            <div className="rounded-xl border border-green-500/10 bg-green-500/[0.02] p-7">
              <h4 className="text-sm font-semibold text-green-400/80 uppercase tracking-wider mb-5">Constructive View</h4>
              <ul className="space-y-4 text-[14px] leading-[1.8] text-white/50">
                <li><Strong>The numbers are real, and accelerating.</Strong> 130M transactions and 1.7M addresses in 100 days, with clear upward trends and a "second wave" of growth in January through February.</li>
                <li><Strong>Developer engagement runs deep.</Strong> 11.5M contract deployments with a 9% verification rate. This is the kind of activity that translates into real mainnet applications.</li>
                <li><Strong>Institutional roster is unmatched.</Strong> BlackRock, Visa, HSBC, Deutsche Bank, Mastercard. No other L1 testnet has launched with this level of TradFi credibility.</li>
                <li><Strong>Technology appears sound.</Strong> Sub-second finality, 0.04% block fullness, stable gas prices with functional EIP-1559 dynamics. The infrastructure is not the bottleneck.</li>
                <li><Strong>Macro timing is favorable.</Strong> Stablecoin volumes at ATH, institutional appetite accelerating, regulatory clarity improving. Circle's NYSE listing adds capital markets credibility.</li>
              </ul>
            </div>
            {/* Bear */}
            <div className="rounded-xl border border-red-500/10 bg-red-500/[0.02] p-7">
              <h4 className="text-sm font-semibold text-red-400/80 uppercase tracking-wider mb-5">Cautious View</h4>
              <ul className="space-y-4 text-[14px] leading-[1.8] text-white/50">
                <li><Strong>Retention is structurally weak.</Strong> Most cohorts see only 5 to 15% retention after Week-1. Without economic value at stake, stickiness is hard to evaluate from testnet data alone.</li>
                <li><Strong>Activity concentration is real.</Strong> 300K+ single-tx addresses. Top 10% driving 60% of volume. The "1.7M unique addresses" headline masks a smaller, denser core user base.</li>
                <li><Strong>Centralization is structural.</Strong> Permissioned validator set with "eventual" decentralization. Every enterprise blockchain of the past decade has made similar promises.</li>
                <li><Strong>Competition is intensifying.</Strong> Tether-backed chains, existing L2s with live DeFi ecosystems, Ethereum's own scaling roadmap. Arc needs to prove its Circle integration creates sufficient differentiation.</li>
                <li><Strong>Testnet != Mainnet.</Strong> Free transactions attract experimentation that does not survive the introduction of real costs. The true test begins at launch.</li>
              </ul>
            </div>
          </div>

          <Divider />

          {/* ──────────────────── 7. Key Metrics ──────────────────── */}
          <SectionTitle id="key-metrics" number="7">Key Metrics Summary</SectionTitle>

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
                  ['Total Transactions', '130,280,605', 'Strong absolute volume'],
                  ['7-day Tx Growth', '+21.3%', 'Accelerating'],
                  ['Cumulative Unique Addresses', '1,695,103', 'High for testnet'],
                  ['Avg Daily Active Addresses', '226,734', 'Healthy engagement'],
                  ['Avg Daily Transactions', '1,329,394', 'Substantial throughput'],
                  ['Tx per Active Address', '5.86', 'Moderate, realistic mix'],
                  ['Contracts Deployed', '11,523,118', 'Exceptional developer interest'],
                  ['Verified Contracts', '1,030,072 (8.9%)', 'Strong signal of intent'],
                  ['Mean Block Fullness', '~0.04%', 'Massive headroom'],
                  ['Avg Gas Price', '~1.7 x 10^-7 Gwei', 'Near-zero costs'],
                  ['Week-1 Cohort Retention', '9 to 15%', 'Typical testnet decay'],
                  ['Peak Cohort Retention (W52)', '43%', 'Ecosystem-driven uplift'],
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

          {/* ──────────────────── 8. What to Watch ──────────────────── */}
          <SectionTitle id="what-to-watch" number="8">What to Watch for Mainnet</SectionTitle>

          <P>
            As Arc moves toward its anticipated <Strong>2026 mainnet beta</Strong>, several factors will determine whether the testnet's momentum translates into real adoption:
          </P>

          <div className="my-10 space-y-8">
            {[
              {
                title: 'Application layer depth',
                text: 'The retention data shows that cohort stickiness improves dramatically when there are more protocols to interact with. A rich, continuously evolving application ecosystem will be the primary driver of sustained user engagement on mainnet.',
              },
              {
                title: 'Institutional migration',
                text: 'How many of the 100+ testnet participants will commit to deploying production workloads on mainnet? Testnet exploration and mainnet commitment are fundamentally different things for regulated institutions.',
              },
              {
                title: 'Liquidity bootstrapping',
                text: 'A stablecoin-native chain needs real stablecoin liquidity from day one. USDC will be native, but the depth of DeFi liquidity will determine whether Arc becomes a usable financial platform or remains a fast settlement layer.',
              },
              {
                title: 'Validator decentralization',
                text: 'Concrete movement toward expanding the validator set beyond Circle-operated nodes will be a credibility signal. The longer this remains "planned for the future," the more it resembles the enterprise blockchain playbook of 2017 to 2019.',
              },
              {
                title: 'Fee model in production',
                text: 'The testnet\'s near-zero gas costs are by design, but mainnet fees will need to balance Circle\'s revenue model with the promise of predictable, low-cost transactions. Getting this balance right is critical for developer and user adoption.',
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
              All data was collected from{' '}
              <a href="https://testnet.arcscan.app/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-white/15 hover:text-white/50 transition-colors">Arcscan</a>,
              Arc's official testnet block explorer, and on-chain data, covering October 28, 2025 through February 5, 2026. No proprietary or non-public data was used.
            </p>
            <p className="text-[13.5px] leading-[1.85] text-white/30 mb-4">
              This report is produced by Synthra for informational and educational purposes only. It does not constitute financial, investment, or legal advice. Testnet activity levels are not reliable predictors of mainnet adoption.
            </p>
            <p className="text-[13.5px] leading-[1.85] text-white/30">
              Synthra has no financial relationship with Circle Internet Group (NYSE: CRCL), Arc, or any of the protocols, partners, or institutions mentioned in this report.
            </p>
          </div>

          {/* ── Sources ── */}
          <div className="mt-12 pt-8 border-t border-white/[0.06]">
            <p className="text-xs text-white/20">
              Sources:{' '}
              <a href="https://arc.network/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-white/10 hover:text-white/40 transition-colors">Arc Network</a>
              {' · '}
              <a href="https://testnet.arcscan.app/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-white/10 hover:text-white/40 transition-colors">Arcscan Explorer</a>
              {' · '}
              <a href="https://docs.arc.network/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-white/10 hover:text-white/40 transition-colors">Arc Documentation</a>
              {' · '}
              <a href="https://www.circle.com/pressroom" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-white/10 hover:text-white/40 transition-colors">Circle Pressroom</a>
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

export default ArcTestnetReport;
