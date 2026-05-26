import { Helmet } from 'react-helmet-async';

const SITE = 'https://synthra.org';
const DEFAULT_IMAGE = `${SITE}/header.png`;
const SITE_NAME = 'Synthra';
const DEFAULT_KEYWORDS = 'Synthra, DEX, decentralized exchange, chain abstraction trading layer, chain abstracted DEX, Arc DEX, DEX on Arc, multichain DEX, cross-chain DEX, crosschain DEX, all in one dex, perpetual trading, DeFi, swap, bridge, launchpad, concentrated liquidity, cross-chain routing';

/**
 * Full SEO + GEO head for every route.
 * Includes: meta tags, Open Graph, Twitter Cards, JSON-LD structured data,
 * and GEO-friendly schema for AI/generative engines.
 */
const SEO = ({
  title = 'Synthra — Chain-Abstracted Trading Layer',
  description = 'Synthra is the chain-abstracted trading layer and cross-chain DEX for spot, perps, liquidity and routing APIs across Arc, Robinhood Chain and emerging markets. One account, all chains, all markets.',
  path = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
  keywords = DEFAULT_KEYWORDS,
  article = null,   // { publishedTime, modifiedTime, author, tags, section }
  jsonLd = null,     // pass custom JSON-LD, otherwise auto-generated
  noindex = false,
  faq = null,        // [{ question, answer }] — GEO-friendly FAQ schema
}) => {
  const url = `${SITE}${path}`;
  const fullTitle = path === '/' ? title : `${title} | Synthra`;

  /* ── Auto JSON-LD ── */
  const autoJsonLd = () => {
    const schemas = [];

    // WebSite schema (home only) — helps Google understand sitelinks + search
    if (path === '/') {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SITE_NAME,
        alternateName: ['Synthra DEX', 'Synthra Swap', 'Synthra Protocol'],
        url: SITE,
        description,
        publisher: {
          '@type': 'Organization',
          name: SITE_NAME,
          url: SITE,
          logo: {
            '@type': 'ImageObject',
            url: `${SITE}/favicon.svg`,
          },
          sameAs: [
            'https://twitter.com/Synthra_swap',
            'https://discord.gg/eesEKPRDtd',
          ],
        },
      });

      // SoftwareApplication schema — tells AI engines what Synthra IS
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Synthra',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web',
        url: 'https://app.synthra.org',
        description: 'Synthra is a chain-abstracted trading layer and cross-chain DEX for spot markets, perpetual futures, liquidity and routing APIs across Arc, Robinhood Chain and emerging markets. It gives traders and builders one execution surface across supported chains without exposing bridge or chain complexity.',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        featureList: [
          'Spot trading with concentrated liquidity',
          'Perpetual futures up to 100x leverage',
          'Arc DEX market access',
          'Multichain and cross-chain DEX routing',
          'Cross-chain bridge',
          'Token launchpad',
          'Developer API',
          'MEV protection',
          'Oracle-based pricing',
          'Low gas fees (~$0.001)',
        ],
      });
    }

    // Article schema
    if (article) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        image,
        url,
        datePublished: article.publishedTime,
        ...(article.modifiedTime && { dateModified: article.modifiedTime }),
        author: {
          '@type': 'Organization',
          name: article.author || 'Synthra Research',
          url: SITE,
        },
        publisher: {
          '@type': 'Organization',
          name: SITE_NAME,
          url: SITE,
          logo: { '@type': 'ImageObject', url: `${SITE}/favicon.svg` },
        },
        ...(article.tags && { keywords: article.tags.join(', ') }),
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      });
    }

    // FAQ schema (GEO-critical — Perplexity/ChatGPT/Google AI parse this)
    if (faq && faq.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.map(({ question, answer }) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: answer,
          },
        })),
      });
    }

    return schemas;
  };

  const schemas = jsonLd ? [jsonLd] : autoJsonLd();

  return (
    <Helmet>
      {/* Core */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={article ? 'article' : type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Article-specific */}
      {article?.publishedTime && (
        <meta property="article:published_time" content={article.publishedTime} />
      )}
      {article?.modifiedTime && (
        <meta property="article:modified_time" content={article.modifiedTime} />
      )}
      {article?.author && (
        <meta property="article:author" content={article.author} />
      )}
      {article?.section && (
        <meta property="article:section" content={article.section} />
      )}
      {article?.tags?.map((tag) => (
        <meta property="article:tag" content={tag} key={tag} />
      ))}

      {/* JSON-LD Structured Data */}
      {schemas.map((schema, i) => (
        <script type="application/ld+json" key={`jsonld-${i}`}>
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
