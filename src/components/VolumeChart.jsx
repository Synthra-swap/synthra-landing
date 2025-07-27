import React from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { useVolumeHistory, formatLargeNumber } from '../hooks/useSubgraphData';

const VolumeChart = () => {
  // Tutti gli hook chiamati sempre - MAI condizionali!
  const { volumeData, loading, error } = useVolumeHistory(30);

  // Dati di fallback per quando non ci sono dati reali
  const fallbackData = [
    { date: '2024-01-01', volume: 1250000 },
    { date: '2024-01-02', volume: 1380000 },
    { date: '2024-01-03', volume: 920000 },
    { date: '2024-01-04', volume: 1450000 },
    { date: '2024-01-05', volume: 1120000 },
    { date: '2024-01-06', volume: 1680000 },
    { date: '2024-01-07', volume: 1890000 },
    { date: '2024-01-08', volume: 1340000 },
    { date: '2024-01-09', volume: 1560000 },
    { date: '2024-01-10', volume: 1780000 },
    { date: '2024-01-11', volume: 1290000 },
    { date: '2024-01-12', volume: 2100000 },
    { date: '2024-01-13', volume: 1850000 },
    { date: '2024-01-14', volume: 1420000 },
    { date: '2024-01-15', volume: 1690000 },
  ];

  // Usa dati reali se disponibili, altrimenti fallback
  const chartData = (volumeData && volumeData.length > 0) ? volumeData : fallbackData;
  
  // Calcola il volume totale per la visualizzazione
  const totalVolume = chartData.reduce((sum, item) => sum + (item.volume || 0), 0);

  return (
    <div className="w-full bg-gray-900/30 rounded-xl p-6 border border-white/10">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-white">Trading Volume</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-2xl font-bold text-white">
              {formatLargeNumber(totalVolume)}
            </span>
            {(loading || error) && (
              <span className="text-xs text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded">
                Demo Mode
              </span>
            )}
          </div>
        </div>
        {!loading && !error && (
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-green-400">Live</span>
          </div>
        )}
      </div>

      {loading ? (
        <div className="h-64 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-400"></div>
        </div>
      ) : (
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="volumeGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="date" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#9ca3af', fontSize: 12 }}
                tickFormatter={(value) => {
                  const date = new Date(value);
                  return `${date.getMonth() + 1}/${date.getDate()}`;
                }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#9ca3af', fontSize: 12 }}
                tickFormatter={(value) => formatLargeNumber(value).replace('$', '')}
              />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-black border border-white/20 rounded-lg p-3 shadow-lg">
                        <p className="text-white text-sm font-medium">
                          {new Date(label).toLocaleDateString()}
                        </p>
                        <p className="text-purple-400 text-sm">
                          Volume: {formatLargeNumber(payload[0].value)}
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Area
                type="monotone"
                dataKey="volume"
                stroke="#8b5cf6"
                strokeWidth={2}
                fill="url(#volumeGradient)"
                dot={false}
                activeDot={{ r: 4, fill: '#8b5cf6', strokeWidth: 0 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}

      {error && (
        <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-500/30 rounded-lg">
          <p className="text-yellow-400 text-xs">
            Live data temporarily unavailable. Showing demo data.
          </p>
        </div>
      )}
    </div>
  );
};

export default VolumeChart;
