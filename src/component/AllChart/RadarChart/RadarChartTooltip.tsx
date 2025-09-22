import React from 'react';

export const RadarChartTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-300 shadow-md rounded-lg text-sm text-gray-800">
        <p className="font-bold mb-1 text-base">{label}</p>
        {payload.map((p, index) => (
          <p key={`tooltip-item-${index}`} style={{ color: p.color }}>
            {`${p.name}: ${p.value}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};
