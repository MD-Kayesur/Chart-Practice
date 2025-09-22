import React from "react";
import { PieChartDataItem } from "./PieChart.types";

interface TooltipProps {
  active?: boolean;
  payload?: any[];
  total: number;
}

const PieChartTooltip: React.FC<TooltipProps> = ({ active, payload, total }) => {
  if (active && payload && payload.length) {
    const data: PieChartDataItem = payload[0].payload;
    return (
      <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
        <div className="flex items-center gap-2 mb-1">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: data.color }}
          />
          <span className="font-medium text-gray-800">{data.name}</span>
        </div>
        <p className="text-sm text-gray-600">
          Value: {data.value} ({((data.value / total) * 100).toFixed(1)}%)
        </p>
      </div>
    );
  }
  return null;
};

export default PieChartTooltip;
