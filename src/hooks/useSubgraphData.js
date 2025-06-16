import { useState, useEffect, useCallback, useRef } from 'react';
import {
  getProtocolStats,
  getTopPools,
  getTopTokens,
  getVolumeHistory,
  getRecentTransactions
} from '../services/subgraph';

// Utility per formattare numeri grandi
export const formatLargeNumber = (num) => {
  if (!num) return '0';
  
  const number = parseFloat(num);
  
  if (number >= 1e9) {
    return `$${(number / 1e9).toFixed(1)}B`;
  } else if (number >= 1e6) {
    return `$${(number / 1e6).toFixed(1)}M`;
  } else if (number >= 1e3) {
    return `$${(number / 1e3).toFixed(1)}K`;
  }
  
  return `$${number.toFixed(2)}`;
};

// Utility per formattare il numero di transazioni
export const formatTransactionCount = (count) => {
  if (!count) return '0';
  
  const number = parseInt(count);
  
  if (number >= 1e6) {
    return `${(number / 1e6).toFixed(1)}M+`;
  } else if (number >= 1e3) {
    return `${(number / 1e3).toFixed(1)}K+`;
  }
  
  return number.toString();
};

// Hook per le statistiche del protocollo
export const useProtocolStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const cacheRef = useRef(null);
  const lastFetchRef = useRef(0);

  const fetchStats = useCallback(async () => {
    const now = Date.now();
    const cacheExpiry = 5 * 60 * 1000; // 5 minuti

    // Usa cache se disponibile e non scaduta
    if (cacheRef.current && (now - lastFetchRef.current) < cacheExpiry) {
      setStats(cacheRef.current);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const data = await getProtocolStats();
      
      // Formatta i dati per l'uso nei componenti
      const formattedStats = {
        totalVolume: data.factories?.[0]?.totalVolumeUSD || '0',
        totalValueLocked: data.factories?.[0]?.totalValueLockedUSD || '0',
        totalTransactions: data.factories?.[0]?.txCount || '0',
        poolCount: data.factories?.[0]?.poolCount || '0',
        dailyVolume: data.uniswapDayDatas?.[0]?.volumeUSD || '0',
        dailyTxCount: data.uniswapDayDatas?.[0]?.txCount || '0'
      };

      cacheRef.current = formattedStats;
      lastFetchRef.current = now;
      setStats(formattedStats);
    } catch (err) {
      setError(err.message);
      console.error('Error in useProtocolStats:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  return { stats, loading, error, refetch: fetchStats };
};

// Hook per i top pools
export const useTopPools = (first = 10) => {
  const [pools, setPools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPools = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getTopPools(first);
      setPools(data || []);
    } catch (err) {
      setError(err.message);
      console.error('Error in useTopPools:', err);
    } finally {
      setLoading(false);
    }
  }, [first]);

  useEffect(() => {
    fetchPools();
  }, [fetchPools]);

  return { pools, loading, error, refetch: fetchPools };
};

// Hook per i top tokens
export const useTopTokens = (first = 10) => {
  const [tokens, setTokens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTokens = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getTopTokens(first);
      setTokens(data || []);
    } catch (err) {
      setError(err.message);
      console.error('Error in useTopTokens:', err);
    } finally {
      setLoading(false);
    }
  }, [first]);

  useEffect(() => {
    fetchTokens();
  }, [fetchTokens]);

  return { tokens, loading, error, refetch: fetchTokens };
};

// Hook per i dati del volume storico
export const useVolumeHistory = (days = 30) => {
  const [volumeData, setVolumeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchVolumeHistory = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getVolumeHistory(days);
      
      // Formatta i dati per Recharts
      const formattedData = (data || []).map(day => ({
        date: new Date(day.date * 1000).toLocaleDateString(),
        volume: parseFloat(day.volumeUSD),
        tvl: parseFloat(day.tvlUSD),
        transactions: parseInt(day.txCount)
      }));

      setVolumeData(formattedData.reverse()); // Ordine cronologico
    } catch (err) {
      setError(err.message);
      console.error('Error in useVolumeHistory:', err);
    } finally {
      setLoading(false);
    }
  }, [days]);

  useEffect(() => {
    fetchVolumeHistory();
  }, [fetchVolumeHistory]);

  return { volumeData, loading, error, refetch: fetchVolumeHistory };
};

// Hook per le transazioni recenti
export const useRecentTransactions = (first = 50) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTransactions = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getRecentTransactions(first);
      
      // Formatta le transazioni per il display
      const formattedTxs = (data || []).map(tx => ({
        id: tx.id,
        timestamp: new Date(tx.timestamp * 1000),
        pair: `${tx.pool?.token0?.symbol || tx.token0?.symbol}/${tx.pool?.token1?.symbol || tx.token1?.symbol}`,
        amountUSD: parseFloat(tx.amountUSD),
        txHash: tx.transaction?.id
      }));

      setTransactions(formattedTxs);
    } catch (err) {
      setError(err.message);
      console.error('Error in useRecentTransactions:', err);
    } finally {
      setLoading(false);
    }
  }, [first]);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  return { transactions, loading, error, refetch: fetchTransactions };
};
