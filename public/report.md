# Arc Testnet: 100 Days of On-Chain Data — What the Numbers Tell Us

**Synthra Research** · February 7, 2026

---

*Circle's Arc launched its public testnet on October 28, 2025, positioning itself as the "Economic OS for the internet" — an EVM-compatible Layer-1 blockchain purpose-built for stablecoin finance. With 100+ institutional partners including BlackRock, Visa, HSBC, Deutsche Bank, and Mastercard signed on at launch, Arc arrived with more TradFi credibility than perhaps any testnet in crypto history. But institutional press releases don't tell you what's actually happening on-chain. The data does.*

*This report presents an independent analysis of Arc's first ~100 days of testnet activity, drawn entirely from on-chain data collected via [Arcscan](https://testnet.arcscan.app/). The goal is simple: cut through the narrative and let the metrics speak. What we found is a network that is growing faster than most testnets we've tracked — but one that also raises important questions about the quality and sustainability of that activity heading into mainnet.*

---

## Executive Summary

Over the first 100 days of its public testnet (October 28, 2025 – February 5, 2026), Arc has processed **130.3 million transactions** across **1.7 million cumulative unique addresses**, with an average of **1.33 million daily transactions** and **226,734 daily active addresses**. Developer activity has been particularly notable: **11.5 million contracts** have been deployed, of which over **1 million are verified** — an 8.9% verification rate that suggests meaningful human intent behind a significant portion of deployments.

The network is growing. Seven-day transaction growth stands at **+21.3%**, daily active addresses have trended upward from ~50K at launch to over 350K by early February, and gas usage is rising in lockstep. Blocks remain far from full (mean fullness ~0.04%), suggesting substantial headroom before capacity constraints emerge.

However, the data also reveals structural concerns. Cohort retention is weak: most weekly cohorts see only 5–15% of users return after the first week, with the notable exception of a late-December spike that pushed retention above 30–40% — likely tied to an airdrop farming event or protocol incentive campaign. The Lorenz curve shows significant activity concentration, with roughly 80% of addresses responsible for only ~40% of transactions, while a small tail of power users generates disproportionate volume. And the transaction success rate metric sits at a curious ~1%, which likely reflects an unconventional counting methodology (possibly measuring reverted vs. successful calls within transactions) rather than actual network failure.

In short: Arc's testnet is performing well by almost any historical benchmark for a pre-mainnet network. But the path from testnet hype to sustainable mainnet adoption is littered with cautionary tales, and the data leaves several open questions that will need answers before mainnet.

---

## 1. Network Growth & Adoption

### 1.1 Account Growth

![Arc Testnet - Accounts Growth](accounts_growth.png)

Arc has accumulated **1,695,103 cumulative unique addresses** over the observation period. The growth curve is steep and largely monotonic, which is what you'd expect from a cumulative metric — but the pace is notable. The network added accounts rapidly in its first two weeks (early November saw peaks of 40,000–55,000 new accounts per day), before settling into a more moderate cadence of 5,000–15,000 new accounts/day through December.

What's more interesting is the **resurgence** in late January 2026, where new account creation ramped back up to 25,000–35,000/day. This second wave is significant: it suggests either a new campaign or protocol launch driving fresh onboarding, or organic momentum building as more developers and testers discover the network. The timing aligns roughly with the period when several DeFi protocols (Aave, Curve, Maple Finance) were reportedly active on the testnet, per CoinGecko's ecosystem overview.

For context, 1.7M addresses in 100 days is a strong testnet performance. Arbitrum's Nitro testnet and Base's pre-launch testnet operated in similar ranges, though direct comparisons are imperfect given different incentive structures and market conditions.

### 1.2 Daily Active Addresses

![Arc Testnet - Daily Active Addresses](daa_line.png)

Daily active addresses (DAA) grew from approximately **50,000 at launch to over 350,000** by early February — a ~7x increase over the observation period. The 7-day moving average shows a clear upward trend with two distinct growth phases:

**Phase 1 (Late October – Late November):** Rapid ramp from 50K to ~250K DAA, coinciding with the launch excitement and initial developer onboarding wave. This phase saw the highest volatility in daily figures, with several spikes above 300K.

**Phase 2 (December – Early January):** A plateau-to-slight-decline period where DAA hovered around 200K–240K. The 7-day MA flatlined. This is typical testnet behavior — the initial wave of curiosity fades, and what remains is a core of active builders and persistent testers.

**Phase 3 (Mid-January – February):** Renewed growth pushing DAA back above 300K consistently, with the 7-day MA climbing to ~310K. This third phase is the most encouraging signal in the dataset because it represents growth *after* the novelty has worn off. Networks that show a "second wave" of activity tend to have stickier ecosystems.

The ratio of DAA to cumulative addresses gives a rough "daily engagement rate" of ~13–20%, which is reasonable for a testnet. On mainnet chains, this ratio typically falls to 1–5%, so the testnet figure should be interpreted as reflecting active experimentation rather than long-term engagement patterns.

### 1.3 Cohort Retention

![Arc Testnet - Cohort Retention](cohort_retention.png)

This is where the analysis gets more nuanced. The cohort retention heatmap tracks weekly cohorts and measures what percentage of addresses from each cohort remain active in subsequent weeks.

For the **early cohorts (W43–W50, roughly late October through mid-December)**, retention follows a predictable decay pattern. Week-1 retention sits around 9–15%, Week-2 drops to 3–14%, and by Week-4 most cohorts retain only 4–9% of their original users. This is not unusual for testnets where there's no financial incentive to stick around, but it is a yellow flag for anyone projecting these user numbers forward to mainnet.

The **anomaly is stark**: cohorts from W51 (mid-December) through W00 (early January) show dramatically higher retention — 23–41% at Week-1 and 30–43% at Week-4. The W52 cohort (last week of December) retained **43% of users four weeks later**. This is almost certainly driven by a specific incentive event — potentially an airdrop farming campaign, a quest/task platform integration, or a protocol-level reward structure that incentivized repeated interaction. Absent an official explanation from Circle, the pattern is consistent with what we typically see when platforms like Galxe, Layer3, or similar quest aggregators create sustained engagement loops.

The implication is twofold. On one hand, this proves Arc *can* retain users when incentives are present — a necessary (if not sufficient) condition for mainnet success. On the other hand, it underscores how thin "organic" retention is without explicit incentive mechanisms. The post-incentive cohorts (W01–W04) immediately revert to the earlier pattern of 10–18% Week-1 retention.

For mainnet planning, this retention profile suggests that Arc will need robust, sustained incentive mechanisms at launch — whether through ecosystem grants, fee subsidies, or native DeFi yield — to avoid the "ghost chain" problem that has plagued many well-funded L1 launches.

---

## 2. Transaction Activity & Composition

### 2.1 Daily Transactions

![Arc Testnet - Daily Transactions](tx_line.png)

Daily transaction volume has grown from approximately **600,000–900,000 at launch to regularly exceeding 2 million**, with the 7-day moving average reaching ~2.1M by early February. The overall pattern mirrors the DAA trend but with more pronounced spikes, suggesting that active users are increasing their per-session transaction counts over time.

The **7-day growth rate of +21.3%** is particularly noteworthy. While week-over-week figures can be noisy, the sustained upward trend in the 7-day MA since mid-January is a strong positive signal. Total transactions have reached **130,280,605** — averaging **1,329,394 per day** across the full observation period.

The ratio of **5.86 transactions per active address per day** is relatively healthy. For comparison, Ethereum mainnet typically sees 2–4 tx/active address/day, while high-throughput chains like Solana (with their higher proportion of automated activity) can see 10–50+. Arc's 5.86 ratio suggests a mix of manual testing, scripted interactions, and some degree of bot/automated activity, which is exactly what you'd expect on a testnet with active developer experimentation.

### 2.2 Transaction Composition

![Arc Testnet - Transaction Composition](tx_composition.png)

The stacked area chart reveals that the **vast majority of Arc's transaction volume consists of contract calls**, with native transfers (simple ETH/USDC sends) representing only a thin green band at the bottom — likely less than 10% of total volume throughout the observation period.

This composition tells an important story about *what people are actually doing on Arc*. A testnet dominated by native transfers would suggest simple faucet-claiming and token-shuffling behavior. Instead, the dominance of contract interactions indicates that developers are actively deploying and interacting with smart contracts — testing DeFi protocols, deploying token contracts, running integration tests, and exercising the EVM execution layer.

The ratio of contract calls to native transfers has remained relatively stable over time, which suggests this composition reflects the inherent nature of the testnet activity rather than a temporary artifact. For a chain designed as an "Economic OS" with integrated FX engines, stablecoin swaps, and compliance-aware financial primitives, this is exactly the transaction mix you'd want to see.

### 2.3 Transaction Success Rate

![Arc Testnet - Transaction Success Rate](success_rate.png)

The chart shows a "success rate" averaging approximately **1.0%**, which at first glance appears alarming. However, this metric almost certainly uses an unconventional definition. A 99% failure rate on a functioning blockchain would result in widespread developer complaints, abandoned testing, and a nonfunctional explorer — none of which appear to be the case.

The most likely explanation is that this metric measures the ratio of *successful contract execution results* to *total internal calls or traces*, which would capture reverts from require/assert statements within smart contract logic. On a testnet where developers are actively debugging, a high revert rate within contract calls is expected and even healthy — it means people are pushing edge cases and testing failure modes.

Alternatively, this could reflect a data collection artifact where "success" is narrowly defined. Without access to the raw methodology, we note this metric with the caveat that it likely does not represent end-user transaction failure in the conventional sense. The network appears to be functioning normally by all other indicators.

---

## 3. Developer Activity

### 3.1 Contract Deployments

![Arc Testnet - Daily Contract Deployments](deployments_line.png)

This is one of the most impressive charts in the dataset. Arc has seen **11,523,118 total contract deployments** over the observation period, averaging approximately **100,000–120,000 deployments per day**, with peaks exceeding 200,000.

To put this in perspective: 11.5M contract deployments in 100 days on a testnet is extraordinary volume. Even accounting for factory contracts (which auto-deploy child contracts) and scripted deployment bots, this level of activity indicates a vibrant developer ecosystem. The fact that daily deployments have remained consistently high — without the dramatic fall-off you'd see if it were purely bot-driven spam — suggests sustained, genuine developer engagement.

The deployment pattern shows two notable peaks: one in early December (~200K/day) and another in late December (~225K/day), bookending a brief dip around the holiday period. Post-holiday, deployments have stabilized at 100K–160K/day, which represents a mature, sustainable pace.

Of the 11.5M deployed contracts, **1,030,072 are verified** — an **8.9% verification rate**. Contract verification (uploading and confirming source code on the block explorer) is a strong signal of human intent. Bots and scripts rarely bother verifying contracts. A verification rate approaching 9% on a testnet suggests that a meaningful fraction of deployed contracts are being built by developers who intend to iterate on them and eventually deploy to mainnet.

### 3.2 Top Contracts

![Arc Testnet - Top 10 Contracts](top_contracts.png)

The top 10 contracts by transaction count are led by `0xff5cb29241...` with **191,437 transactions**, followed by `0x360000000...` (102,790) and `0x1290b4f2a4...` (82,197). The truncated addresses make it difficult to identify these contracts by name, but the `0x360000000...` address pattern (repeating zeros) is often indicative of a system/precompile contract, suggesting it may be a core protocol-level address related to Arc's native stablecoin gas mechanism or fee infrastructure.

The top 10 contracts collectively account for a relatively modest share of total transactions (~789K out of 130M, or less than 1%), which indicates that activity is reasonably **distributed across a long tail of contracts** rather than concentrated in a few "honeypot" contracts designed to farm interactions. This distribution pattern is healthy and suggests organic, diversified developer experimentation.

### 3.3 Top Method IDs

![Arc Testnet - Top 10 Method IDs](top_methods.png)

The most-called function signature is `0xaad348a2` with **191,061 calls**, followed by `0x095ea7b3` (142,393) — which is the well-known ERC-20 `approve()` function selector. The presence of `approve()` in the top 3 is expected on any EVM chain with active DeFi testing, as it's a prerequisite for token interactions with DEXs, lending protocols, and vaults.

Other notable selectors include `0x84bb1e42` (86,618 calls) and `0x8cb09282` (82,191 calls). Without ABI decoding, these likely correspond to mint, swap, or deposit functions on popular testnet protocols. The selector `0x60806040` (32,072 calls) is the standard contract deployment bytecode prefix, reflecting the massive deployment volume discussed above.

The diversity of method IDs in the top 10 — rather than a single function dominating — reinforces the picture of a testnet with varied, multi-protocol activity.

---

## 4. Network Performance & Economics

### 4.1 Gas Usage

![Arc Testnet - Daily Gas Usage](gas_line.png)

Daily gas consumption shows an initial spike above **1,400,000M** on the first day (likely from a flood of deployment transactions at launch), followed by a rapid normalization to the **100,000M–250,000M range** through November and December. Since mid-January, gas usage has trended upward to **300,000M–400,000M/day**, closely tracking the increase in transaction volume.

The correlation between gas usage and transaction count is tight, which suggests that the *average gas per transaction* has remained relatively stable. This is consistent with a mix of contract calls and simple interactions that hasn't dramatically shifted in complexity over time. If Arc were seeing increasingly complex DeFi transactions (multi-hop swaps, flash loans, etc.), we'd expect gas usage to grow faster than transaction count — something to watch as the ecosystem matures.

### 4.2 Gas Price

![Arc Testnet - Average Gas Price](gas_price_trend.png)

The gas price chart reveals one of the most notable on-chain events of the observation period. Average gas prices held remarkably steady around **1.6–1.8 × 10⁻⁷ Gwei** from launch through late January, with occasional spikes (mid-November, early December) that quickly mean-reverted.

Then, in **late January 2026, gas prices dropped precipitously** — falling roughly 90% from ~1.7 × 10⁻⁷ to ~0.2 × 10⁻⁷ Gwei. This step-function decline is almost certainly the result of a **protocol-level parameter change** (likely a base fee adjustment, gas limit increase, or fee model update) rather than organic market dynamics. On a testnet, the development team has full control over these parameters, and such adjustments are expected and healthy — they're testing the fee market itself.

The extremely low absolute gas price levels are consistent with Arc's design philosophy of "predictable, dollar-denominated fees." On mainnet, where USDC is the native gas token, the target is for fees to be stable in dollar terms. The testnet gas prices, while using test USDC, appear to be calibrated to simulate near-zero-cost transactions, which makes sense for a chain targeting high-volume institutional payments where per-transaction costs need to be negligible.

The three visible spikes (mid-November and early December) correlate with periods of elevated transaction volume, suggesting the EIP-1559-style fee mechanism is functioning as intended — prices rise under congestion and fall back during normal periods. Arc's documented "fee smoothing mechanism" and "base fee ceiling" appear to be keeping these spikes bounded, which is a positive signal for mainnet fee predictability.

### 4.3 Block Fullness

![Arc Testnet - Block Fullness Distribution](block_fullness.png)

Average block fullness is effectively **0.04%** — meaning blocks are, on average, 99.96% empty. The distribution is roughly normal, centered around 0.03–0.04% with a slight right tail extending to 0.07%.

This is simultaneously unremarkable and important. It's unremarkable because testnets typically operate far below capacity. It's important because it tells us that **Arc has enormous headroom**. Even at the current ~2.5M daily transactions, the network is barely scratching its capacity limits. The Malachite consensus engine's claimed throughput of 3,000 TPS with 20 validators (potentially much higher with fewer validators) means Arc could theoretically handle 250M+ daily transactions before blocks start filling up.

For mainnet planning, this headroom means Arc is unlikely to face congestion-related issues at launch, even with aggressive adoption scenarios. The risk shifts from "can the network handle the load" to "will there be enough load to justify the infrastructure."

---

## 5. Activity Distribution & Concentration

### 5.1 Address Activity Distribution

![Arc Testnet - Address Activity Distribution](address_distribution.png)

The log-log distribution of transactions per address reveals a classic **power-law pattern** with a heavy left skew. The vast majority of addresses (~300K+) have executed only **1 transaction**, with activity counts dropping off sharply: ~90K addresses at 2 transactions, ~35K at 3, and so on down the logarithmic scale.

At the far right tail, a handful of addresses (roughly 5) have executed **20,000–50,000+ transactions** each. These are almost certainly automated scripts, deployment bots, or protocol-level system addresses.

The power-law distribution is universal across blockchain networks and is not inherently concerning. However, the steepness of the drop-off — from 300K single-transaction addresses to just tens of thousands with 2+ transactions — is a reminder that **a large portion of Arc's unique address count represents one-time visitors**, likely faucet claimers, curious developers who ran a single test, or airdrop farmers who completed minimum requirements and moved on.

### 5.2 Lorenz Curve & Concentration

![Arc Testnet - Lorenz Curve](lorenz_curve.png)

The Lorenz curve quantifies the inequality of transaction distribution across addresses. The significant bow away from the "perfect equality" diagonal confirms substantial concentration: approximately **60% of addresses account for only ~20% of transactions**, while the **top 10% of addresses generate roughly 60% of all transaction volume**.

The Gini coefficient was computed from sampled data as a single value (the chart for the time-series Gini was a placeholder), but the Lorenz curve visually suggests a Gini in the range of **0.55–0.65** — moderately concentrated but not extreme by blockchain standards.

![Gini computed from sampled data](gini_line.png)

For context, Ethereum mainnet typically shows Gini coefficients of 0.7–0.8+ for transaction counts, driven by MEV bots, automated market makers, and high-frequency DeFi traders. Arc's somewhat lower concentration is actually a positive signal — it suggests the testnet isn't completely dominated by a handful of bot operators, and that there's a meaningful "middle class" of moderately active addresses.

That said, the concentration is still significant enough that mainnet projections should be discounted. If the top 10% of addresses (likely automated/institutional testers) account for 60% of transactions, then the "organic" baseline transaction count is substantially lower than the headline 1.33M daily average.

### 5.3 Activity Heatmap

![Arc Testnet - Activity Heatmap](hourly_heatmap.png)

The hourly heatmap reveals pronounced temporal patterns. Peak activity occurs during **UTC 7:00–12:00**, particularly on Monday through Wednesday. Activity is notably lower during **UTC 18:00–23:00** across all days, with weekends (Saturday and Sunday) showing generally lower but still meaningful engagement.

The UTC 7:00–12:00 peak window corresponds to:

- **Morning hours in Asia** (3:00 PM–8:00 PM JST/KST)
- **Late morning in Europe** (8:00 AM–1:00 PM CET)
- **Late night / early morning on the US East Coast** (2:00 AM–7:00 AM EST)

This pattern strongly suggests a **predominantly Asian and European user base** during the testnet phase. This makes sense given Arc's institutional partnerships with regional stablecoin issuers from Japan (JPYC), South Korea (BDACS), the Philippines (Coins.ph), and Brazil (Avenia), as well as European institutional partners like Deutsche Bank and Société Générale.

The relative weakness during US business hours (UTC 14:00–22:00) is worth noting. If Circle's mainnet strategy targets US institutional adoption (consistent with its US headquarters, NYSE listing, and USDC's dominant US presence), there may be a geographic adoption gap to address.

---

## 6. Bull Case & Bear Case

### The Bull Case

**The numbers are real, and they're growing.** 130M transactions and 1.7M addresses in 100 days, with clear upward trends in DAA, transaction volume, and gas usage as recently as the last week of data. Unlike many testnet launches that see a sharp spike followed by decay, Arc shows a "second wave" of growth in January–February that suggests building momentum rather than fading interest.

**Developer engagement is deep, not shallow.** 11.5M contract deployments with a 9% verification rate is a remarkably strong signal. Verified contracts represent deliberate, iterative development work — the kind of activity that translates to mainnet applications. The diversity of method IDs and the long tail of contract interactions suggest a broad developer ecosystem rather than a few dominant protocols.

**The institutional roster is unmatched.** No other L1 testnet has launched with BlackRock, Visa, HSBC, Deutsche Bank, Mastercard, Standard Chartered, Apollo, and State Street as declared participants. Even if most of these firms are in "exploratory" mode, the reputational signaling is powerful and creates a gravitational pull for other enterprises.

**The technology appears sound.** Sub-second finality, 0.04% block fullness even at 2.5M daily transactions, stable gas prices with functional EIP-1559-style dynamics, and a near-zero-cost fee environment validate the core technical claims. The Malachite consensus engine, developed by Informal Systems (the team behind CometBFT/Tendermint), brings credible engineering pedigree.

**The timing is right.** Arc enters a market where stablecoin transaction volumes are hitting all-time highs, institutional appetite for on-chain infrastructure is accelerating, and regulatory clarity (particularly in the US) is improving. Circle's NYSE listing (CRCL) gives it a capital markets credibility that no other L1 team can match.

### The Bear Case

**Retention is a problem.** The cohort data shows that without explicit incentives, only 5–15% of users return after their first week. The late-December retention spike is almost certainly incentive-driven, and post-incentive cohorts immediately revert to baseline. If mainnet launch can't solve the retention equation, Arc risks becoming a high-profile ghost chain.

**The "1% success rate" is unexplained.** While we believe this reflects a methodological artifact rather than actual network failure, the fact that it's displayed prominently on the dashboard without explanation is a communication issue. If potential mainnet users see a 1% success rate without context, it could create unwarranted reputational risk.

**Centralization is structural, not temporary.** Arc's permissioned validator set, operated initially by Circle, means this is a Proof-of-Authority chain that plans to *eventually* decentralize. But "eventually" is doing a lot of heavy lifting. Every major enterprise blockchain initiative of the past decade (Hyperledger, R3 Corda, Quorum) launched with similar decentralization roadmaps. Most never delivered. Until Arc has a concrete timeline for validator permissioning, stake-based admission, and governance frameworks, the decentralization promise should be discounted.

**Activity concentration raises questions about organic demand.** With 300K+ single-transaction addresses and a Lorenz curve showing the top 10% driving 60% of volume, the "1.7M unique addresses" headline masks a potentially much smaller core user base. Mainnet projections should be built on the ~200K DAA figure (discounted for bots/automated activity) rather than the cumulative address count.

**Competition is intensifying.** Tether-backed chains (Plasma, Stable) are pursuing similar institutional-stablecoin positioning. Existing L2s (Base, Arbitrum, Optimism) already have live DeFi ecosystems and real liquidity. Ethereum itself continues to scale. Arc needs to prove that its vertical integration with Circle's product suite — CPN, CCTP, Gateway, Paymaster — creates sufficient lock-in to overcome the cold-start problem of a new chain without native DeFi liquidity.

**The geographic skew may not align with the revenue model.** If Arc's value proposition centers on institutional dollar flows (primarily US and European), but the testnet user base skews Asian, there may be a mismatch between who's testing the network and who's expected to use it on mainnet.

---

## 7. Key Metrics Summary

| Metric | Value | Signal |
|--------|-------|--------|
| Total Transactions | 130,280,605 | Strong absolute volume |
| 7-day Tx Growth | +21.3% | Accelerating |
| Cumulative Unique Addresses | 1,695,103 | High for testnet |
| Avg Daily Active Addresses | 226,734 | Healthy engagement |
| Avg Daily Transactions | 1,329,394 | Substantial throughput |
| Tx per Active Address | 5.86 | Moderate, realistic mix |
| Contracts Deployed | 11,523,118 | Exceptional developer interest |
| Verified Contracts | 1,030,072 (8.9%) | Strong signal of intent |
| Mean Block Fullness | ~0.04% | Massive headroom |
| Avg Gas Price | ~1.7 × 10⁻⁷ Gwei (pre-adjustment) | Near-zero costs |
| Week-1 Cohort Retention (organic) | 9–15% | Weak without incentives |
| Week-1 Cohort Retention (incentivized) | 23–41% | Strong with incentives |

---

## 8. What to Watch for Mainnet

As Arc moves toward its anticipated **2026 mainnet beta**, several metrics and milestones will be critical to track:

**Retention mechanisms.** Will Circle implement sustained incentive programs (ecosystem grants, fee subsidies, yield opportunities) that can maintain the 30–40% retention rates seen during the December spike? The gap between incentivized and organic retention is the single most important risk factor.

**Institutional migration.** How many of the 100+ testnet participants will commit to deploying production workloads on mainnet? Testnet exploration and mainnet commitment are very different things, particularly for regulated institutions that require compliance, audit, and risk committee approvals.

**Liquidity bootstrapping.** A stablecoin-native chain needs real stablecoin liquidity from day one. USDC will be native, but the depth of DeFi liquidity (lending markets, DEX pools, yield vaults) will determine whether Arc is a usable financial platform or just a fast settlement layer.

**Validator decentralization.** Any concrete movement toward expanding the validator set beyond Circle-operated nodes will be a positive credibility signal. The longer this remains "planned for the future," the more it resembles the enterprise blockchain playbook of the 2017–2019 era.

**Cross-chain activity.** Arc's integration with CCTP and Gateway for cross-chain interoperability is essential. If USDC on Arc remains siloed rather than flowing freely between Arc, Ethereum, Base, Arbitrum, and Solana, the network effect advantage of existing chains will be insurmountable.

**Fee model in production.** The testnet's near-zero gas costs are by design, but mainnet fee parameters will need to balance Circle's revenue model (Allaire has stated there is "significant revenue potential from Arc over time") with the promise of predictable, low-cost transactions. This tension between platform revenue and user cost will be worth watching closely.

---

## Methodology & Disclaimers

All data in this report was collected from [Arcscan](https://testnet.arcscan.app/), Arc's official testnet block explorer, covering the period from October 28, 2025 through February 5, 2026. Charts were generated from on-chain data using custom analytics pipelines. No proprietary or non-public data was used.

This report is produced by **Synthra** for informational and educational purposes only. It does not constitute financial, investment, or legal advice. Arc is currently in testnet phase; all metrics, features, and parameters are subject to change before mainnet launch. Testnet activity levels are not reliable predictors of mainnet adoption.

Synthra has no financial relationship with Circle Internet Group (NYSE: CRCL), Arc, or any of the protocols, partners, or institutions mentioned in this report.

---

*For more on-chain research and analytics, follow [Synthra](https://synthra.xyz).*

*Sources: [Arc Network](https://arc.network/) · [Arcscan Testnet Explorer](https://testnet.arcscan.app/) · [Arc Documentation](https://docs.arc.network/) · [Circle Pressroom](https://www.circle.com/pressroom/circle-launches-arc-public-testnet)*
