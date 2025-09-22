import React from "react";
import { HeatmapHeaderProps } from "./types";

const HeatmapHeader: React.FC<HeatmapHeaderProps> = ({
  title,
  subtitle,
  colors,
  message,
  onCopy,
  onDelete,
}) => (
  <div className="flex justify-between items-start mb-6 relative">
    {message && (
      <div className="absolute top-0 right-1/2 translate-x-1/2 -mt-6 px-3 py-1 bg-gray-800 text-white text-xs rounded shadow-lg z-20">
        {message}
      </div>
    )}

    <div>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <div className="text-sm text-gray-600 flex items-center mt-1">
        {subtitle}
        <div className="ml-4 flex items-center space-x-3 text-xs font-medium">
          <span className="flex items-center">
            <div className="w-2.5 h-2.5 rounded-sm mr-1" style={{ backgroundColor: colors[1] }} />
            0-499
          </span>
          <span className="flex items-center">
            <div className="w-2.5 h-2.5 rounded-sm mr-1" style={{ backgroundColor: colors[2] }} />
            500-999
          </span>
          <span className="flex items-center">
            <div className="w-2.5 h-2.5 rounded-sm mr-1" style={{ backgroundColor: colors[3] }} />
            1000-2000
          </span>
        </div>
      </div>
    </div>

    <div className="flex gap-2 text-gray-400">
      <button onClick={onCopy} title="Copy Data (CSV)" className="p-1 hover:text-gray-600">
        📋
      </button>
      <button onClick={onDelete} title="Delete Chart" className="p-1 hover:text-red-500">
        ❌
      </button>
    </div>
  </div>
);

export default HeatmapHeader;
