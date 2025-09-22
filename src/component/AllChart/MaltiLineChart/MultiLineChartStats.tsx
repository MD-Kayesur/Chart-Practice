import React from "react";

export const StatBox = ({ label, value }) => (
  <div className="p-3 bg-white rounded-lg border border-gray-200 text-center flex flex-col justify-center items-center h-full w-full">
    <div className="text-xl font-bold text-gray-800 leading-none">
      {value.toLocaleString()}
    </div>
    <div className="text-xs text-gray-500 mt-0.5">{label}</div>
  </div>
);

export const StatGroup = ({ label, stats, color }) => (
  <div className="flex flex-col">
    <div className="flex items-center gap-2 mb-2">
      <div className="w-3 h-1 rounded-full" style={{ backgroundColor: color }}></div>
      <span className="font-medium text-gray-700">{label}</span>
    </div>
    <div className="flex gap-4">
      <StatBox label="Max" value={stats.Max} />
      <StatBox label="Avg" value={stats.Avg} />
      <StatBox label="Min" value={stats.Min} />
    </div>
  </div>
);
