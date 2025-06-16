import { GraphQLClient, gql } from 'graphql-request';

const SUBGRAPH_URL = 'https://subgraph.synthra.org/subgraphs/name/ianlapham/uniswap-v3-sub';

const client = new GraphQLClient(SUBGRAPH_URL);

// Query per ottenere le statistiche globali del protocollo
export const PROTOCOL_STATS_QUERY = gql`
  query getProtocolStats {
    uniswapDayDatas(first: 1, orderBy: date, orderDirection: desc) {
      volumeUSD
      tvlUSD
      txCount
    }
    factories(first: 1) {
      totalVolumeUSD
      totalValueLockedUSD
      txCount
      poolCount
    }
  }
`;

// Query per ottenere i top pool con più liquidità
export const TOP_POOLS_QUERY = gql`
  query getTopPools($first: Int = 10) {
    pools(
      first: $first
      orderBy: totalValueLockedUSD
      orderDirection: desc
      where: { totalValueLockedUSD_gt: "1000" }
    ) {
      id
      token0 {
        id
        symbol
        name
        decimals
      }
      token1 {
        id
        symbol
        name
        decimals
      }
      feeTier
      totalValueLockedUSD
      volumeUSD
      txCount
      token0Price
      token1Price
    }
  }
`;

// Query per ottenere i token più tradati
export const TOP_TOKENS_QUERY = gql`
  query getTopTokens($first: Int = 10) {
    tokens(
      first: $first
      orderBy: volumeUSD
      orderDirection: desc
      where: { volumeUSD_gt: "1000" }
    ) {
      id
      symbol
      name
      decimals
      totalValueLocked
      totalValueLockedUSD
      volumeUSD
      txCount
      derivedETH
    }
  }
`;

// Query per ottenere i dati storici del volume per i grafici
export const VOLUME_HISTORY_QUERY = gql`
  query getVolumeHistory($days: Int = 30) {
    uniswapDayDatas(
      first: $days
      orderBy: date
      orderDirection: desc
    ) {
      date
      volumeUSD
      tvlUSD
      txCount
    }
  }
`;

// Query per ottenere le transazioni recenti
export const RECENT_TRANSACTIONS_QUERY = gql`
  query getRecentTransactions($first: Int = 50) {
    swaps(
      first: $first
      orderBy: timestamp
      orderDirection: desc
    ) {
      id
      timestamp
      transaction {
        id
      }
      pool {
        token0 {
          symbol
        }
        token1 {
          symbol
        }
      }
      token0 {
        symbol
      }
      token1 {
        symbol
      }
      amount0
      amount1
      amountUSD
      recipient
    }
  }
`;

// Funzioni per eseguire le query
export const getProtocolStats = async () => {
  try {
    const data = await client.request(PROTOCOL_STATS_QUERY);
    return data;
  } catch (error) {
    console.error('Error fetching protocol stats:', error);
    throw error;
  }
};

export const getTopPools = async (first = 10) => {
  try {
    const data = await client.request(TOP_POOLS_QUERY, { first });
    return data.pools;
  } catch (error) {
    console.error('Error fetching top pools:', error);
    throw error;
  }
};

export const getTopTokens = async (first = 10) => {
  try {
    const data = await client.request(TOP_TOKENS_QUERY, { first });
    return data.tokens;
  } catch (error) {
    console.error('Error fetching top tokens:', error);
    throw error;
  }
};

export const getVolumeHistory = async (days = 30) => {
  try {
    const data = await client.request(VOLUME_HISTORY_QUERY, { days });
    return data.uniswapDayDatas;
  } catch (error) {
    console.error('Error fetching volume history:', error);
    throw error;
  }
};

export const getRecentTransactions = async (first = 50) => {
  try {
    const data = await client.request(RECENT_TRANSACTIONS_QUERY, { first });
    return data.swaps;
  } catch (error) {
    console.error('Error fetching recent transactions:', error);
    throw error;
  }
};
