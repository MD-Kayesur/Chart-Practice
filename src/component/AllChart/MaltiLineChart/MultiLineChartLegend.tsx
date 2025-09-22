import React from "react";

const MultiLineChartLegend = ({ payload }) => (
    <div className="flex items-center gap-6">
        {payload.map((entry, index) => (
            <div key={index} className="flex items-center gap-2" title={entry.value}>
                <div
                    className="w-4 h-0.5 rounded-full"
                    style={{ backgroundColor: entry.color }}
                ></div>
                <span className="text-sm text-gray-700 font-medium">{entry.value}</span>
            </div>
        ))}
    </div>
);

export default MultiLineChartLegend;
