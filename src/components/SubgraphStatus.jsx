import React from 'react';
import { motion } from 'framer-motion';

const SubgraphStatus = ({ isConnected, error, onRetry }) => {

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed bottom-4 right-4 bg-red-600 text-white px-4 py-3 rounded-lg shadow-lg z-50 max-w-sm"
      >
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 bg-red-300 rounded-full mt-2"></div>
          <div className="flex-1">
            <div className="text-sm font-medium mb-1">Subgraph Disconnected</div>
            <div className="text-xs text-red-200 mb-2">
              Using demo data. Check your connection.
            </div>
            {onRetry && (
              <button
                onClick={onRetry}
                className="text-xs bg-red-700 hover:bg-red-800 px-2 py-1 rounded transition-colors"
              >
                Retry
              </button>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  return null;
};

export default SubgraphStatus;
