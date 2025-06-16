import React from 'react';
import { motion } from 'framer-motion';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from 'recharts';
import { useVolumeHistory, formatLargeNumber } from '../hooks/useSubgraphData';

const VolumeChart = () => {
  const { volumeData, loading, error } = useVolumeHistory(7); // Ultimi 7 giorni

  if (loading) {
    return (
      <div className="w-full bg-[#1b1433] rounded-xl p-6 border border-white/10">
        <h3 className="text-xl font-semibold mb-4 text-white">Volume (7D)</h3>
        <div className="h-48 bg-white/5 rounded animate-pulse"></div>
      </div>
    );
  }

  if (error || !volumeData || volumeData.length === 0) {
    return (
      <div className="w-full bg-[#1b1433] rounded-xl p-6 border border-white/10">
        <h3 className="text-xl font-semibold mb-4 text-white">Volume (7D)</h3>
        <div className="text-yellow-400 text-sm">
          Chart data unavailable - using demo mode
        </div>
      </div>
    );
  }

  const totalVolume = volumeData.reduce((sum, day) => sum + day.volume, 0);
  const avgDailyVolume = totalVolume / volumeData.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full bg-[#1b1433] rounded-xl p-6 border border-white/10"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-white">Volume (7D)</h3>
          <p className="text-white/60 text-sm">Daily trading volume</p>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-white">
            {formatLargeNumber(totalVolume)}
          </div>
          <div className="text-xs text-white/60">
            Avg: {formatLargeNumber(avgDailyVolume)}
          </div>
        </div>
      </div>
      
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={volumeData}>
            <defs>
              <linearGradient id="volumeGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6114f1" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#6114f1" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="date" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: '#ffffff60' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: '#ffffff60' }}
              tickFormatter={(value) => formatLargeNumber(value)}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1b1433',
                border: '1px solid #ffffff20',
                borderRadius: '8px',
                color: '#ffffff'
              }}
              formatter={(value) => [formatLargeNumber(value), 'Volume']}
              labelStyle={{ color: '#ffffff80' }}
            />
            <Area
              type="monotone"
              dataKey="volume"
              stroke="#6114f1"
              strokeWidth={2}
              fill="url(#volumeGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 pt-4 border-t border-white/10">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-sm text-white/60">Peak Day</div>
            <div className="text-white font-medium">
              {volumeData.length > 0 ? formatLargeNumber(Math.max(...volumeData.map(d => d.volume))) : '0'}
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm text-white/60">Min Day</div>
            <div className="text-white font-medium">
              {volumeData.length > 0 ? formatLargeNumber(Math.min(...volumeData.map(d => d.volume))) : '0'}
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm text-white/60">Days</div>
            <div className="text-white font-medium">{volumeData.length}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VolumeChart;
