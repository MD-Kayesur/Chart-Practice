import React from "react";
import { PieChartDataItem } from "./PieChart.types";

interface LegendProps {
  payload?: any[];
  total: number;
  showPercentages: boolean;
}

const PieChartLegend: React.FC<LegendProps> = ({ payload, total, showPercentages }) => (
  <div className="flex flex-wrap justify-center gap-4 mt-4">
    {payload?.map((entry, index) => (
      <div key={index} className="flex items-center gap-2 text-sm">
        <div
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: entry.color }}
        />
        <span className="text-gray-700 font-medium">{entry.value}</span>
        {showPercentages && (
          <span className="text-gray-500">
            ({((entry.payload.value / total) * 100).toFixed(1)}%)
          </span>
        )}
      </div>
    ))}
  </div>
);

export default PieChartLegend;
