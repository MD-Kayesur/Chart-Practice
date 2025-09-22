import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { MultiLineChartProps } from "./types";
import { defaultLineData } from "./MailtilineChartData";
import MultiLineChartTooltip from "./MultiLineChartTooltip";
import MultiLineChartLegend from "./MultiLineChartLegend";
import { StatGroup } from "./MultiLineChartStats";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuCopy } from "react-icons/lu";

const MultiLineChart: React.FC<MultiLineChartProps> = ({
  data = defaultLineData,
  width = "100%",
  height = 400,
  title = "Multi-Axis Line Chart",
  leftAxisKey = "acmeCorp",
  rightAxisKey = "globexInc",
  leftAxisLabel = "Acme Corp",
  rightAxisLabel = "Globex Inc",
  leftAxisColor = "#8b5cf6",
  rightAxisColor = "#10b981",
  showGrid = true,
  showTooltip = true,
  strokeWidth = 2,
  animationDuration = 1000,
  dotSize = 4,
  xAxisKey = "name",
  showOnlyMode = true,
  onRemove,
  handleCopy, 
  isCopied,
 }) => {
  const [showLineOnly, setShowLineOnly] = useState(false);
  const [hoveredLine, setHoveredLine] = useState<string | null>(null);

  const safeMax = (arr: number[]) => (arr.length > 0 ? Math.max(...arr) : 0);
  const safeMin = (arr: number[]) => (arr.length > 0 ? Math.min(...arr) : 0);
  const safeAvg = (arr: number[]) =>
    arr.length > 0 ? Math.round(arr.reduce((sum, d) => sum + d, 0) / arr.length) : 0;

  const leftData = data.map((d) => d[leftAxisKey] as number);
  const rightData = data.map((d) => d[rightAxisKey] as number);

  const leftStats = { Max: safeMax(leftData), Avg: safeAvg(leftData), Min: safeMin(leftData) };
  const rightStats = { Max: safeMax(rightData), Avg: safeAvg(rightData), Min: safeMin(rightData) };

  return (
 <div className="mx-auto p-6 bg-white     w-full relative  ">      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>

        {showOnlyMode && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Show Line Only</span>
            <input type="checkbox" checked={showLineOnly} onChange={() => setShowLineOnly(!showLineOnly)} />
          </div>
        )}


       <div  className="flex items-center gap-5">
         <div >
          <LuCopy
          className="w-5 h-5 cursor-pointer hover:text-red-500"
          onClick={() => handleCopy(defaultLineData) }
        />

         {isCopied && (
              <div className="absolute top-2 right-24 bg-green-500 text-white text-xs px-2 py-1 rounded-full z-10">
                Data Copied as CSV!
              </div>
            )}
         </div>



        <RiDeleteBin6Line
          className="w-5 h-5 cursor-pointer hover:text-red-500"
          onClick={onRemove}
        />
       </div>
      </div>

      {/* Legend & Stats */}
      {!showLineOnly && (
        <div className="flex justify-between items-start mb-6 pt-4 border-t border-gray-100">
          <Legend
            content={MultiLineChartLegend}
            payload={[
              { value: leftAxisLabel, color: leftAxisColor },
              { value: rightAxisLabel, color: rightAxisColor },
            ]}
          />
          <div className="flex gap-6">
            <StatGroup label={leftAxisLabel} stats={leftStats} color={leftAxisColor} />
            <StatGroup label={rightAxisLabel} stats={rightStats} color={rightAxisColor} />
          </div>
        </div>
      )}

      {/* Chart */}
      <div className="relative pt-4">
        <ResponsiveContainer width={width} height={height}>
          <LineChart data={data} margin={{ top: 0, right: 30, left: 20, bottom: 5 }}>
            {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" horizontal vertical={false} />}
            <XAxis dataKey={xAxisKey} />
            <YAxis yAxisId="left" domain={[0, leftStats.Max * 1.2]} />
            <YAxis yAxisId="right" hide orientation="right" domain={[0, rightStats.Max * 1.2]} />
            {showTooltip && <Tooltip content={<MultiLineChartTooltip />} />}
            <Line
              yAxisId="left"
              type="monotone"
              dataKey={leftAxisKey}
              stroke={leftAxisColor}
              strokeWidth={hoveredLine === leftAxisKey ? strokeWidth + 1 : strokeWidth}
              onMouseEnter={() => setHoveredLine(leftAxisKey)}
              onMouseLeave={() => setHoveredLine(null)}
              animationDuration={animationDuration}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey={rightAxisKey}
              stroke={rightAxisColor}
              strokeWidth={hoveredLine === rightAxisKey ? strokeWidth + 1 : strokeWidth}
              onMouseEnter={() => setHoveredLine(rightAxisKey)}
              onMouseLeave={() => setHoveredLine(null)}
              animationDuration={animationDuration}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MultiLineChart;
