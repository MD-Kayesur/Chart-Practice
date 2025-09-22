import React from "react";
import { TooltipProps } from "./types";

const HeatmapTooltip: React.FC<TooltipProps> = ({ data, x, y }) => {
  if (!data) return null;

  return (
    <div
      className="fixed z-50 bg-gray-900 text-white px-3 py-2 rounded-lg shadow-xl text-sm pointer-events-none"
      style={{ left: x + 15, top: y + 15 }}
    >
      <div className="font-medium">
        {data.productName} on {data.dayName}
      </div>
      <div>Stock: {data.stock} units</div>
      <div className="text-xs text-gray-400">Color Intensity: {data.value}</div>
    </div>
  );
};

export default HeatmapTooltip;
