import React from "react";

export const StackedChartLegend = ({ payload }: { payload?: any[] }) => (
  <div className="flex justify-start items-center space-x-4 text-xs pt-2 pb-1 text-gray-700">
    {payload?.map((entry, index) => {
      if (entry.dataKey.includes("Gap")) return null;
      return (
        <div key={`legend-${index}`} className="flex items-center space-x-1">
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: entry.color }}
          ></span>
          <span>{entry.value}</span>
        </div>
      );
    })}
  </div>
);
