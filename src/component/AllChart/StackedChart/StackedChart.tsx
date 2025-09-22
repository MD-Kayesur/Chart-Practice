import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuCopy } from "react-icons/lu";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import { ChartActionProps } from "./types";
import { rawData, addGapsToData,COLORS } from "./StackedChartData";
 import { StackedChartLegend } from "./StackedChartLegend";

export const StackedChart: React.FC<ChartActionProps> = ({
   onRemove,
  handleCopy,
  isCopied,
}) => {
  const [chartData, setChartData] = useState(addGapsToData(rawData));
  const totalEmployees = 576;
  const radiusSize = 6;

  const handleReset = () => {
    setChartData(addGapsToData(rawData));
  };

  return (
    <div className="mx-auto p-6 bg-white     w-full relative  ">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-1">
            Stacked Bar Chart
          </h3>
          <StackedChartLegend
            payload={[
              { dataKey: "OnTime", value: "On time", color: COLORS.OnTime },
              { dataKey: "Absent", value: "Absent", color: COLORS.Absent },
              { dataKey: "Late", value: "Late", color: COLORS.Late },
            ]}
          />
        </div>

        <div className="flex flex-col items-end">
          <div className="flex space-x-3 text-gray-500">
            <LuCopy
              className="w-5 h-5 cursor-pointer hover:text-red-500"
              onClick={() => handleCopy(rawData)}
            />

            {isCopied && (
              <div className="absolute top-2 right-24 bg-green-500 text-white text-xs px-2 py-1 rounded-full z-10">
                Data Copied as CSV!
              </div>
            )}

            <RiDeleteBin6Line
              className="w-5 h-5 cursor-pointer hover:text-red-500"
              onClick={onRemove}
            />
          </div>

          <span className="text-sm text-gray-500 mt-1">
            Total {totalEmployees} employee
          </span>
        </div>
      </div>

      {chartData.length === 0 && (
        <div className="text-center mb-4">
          <button
            onClick={handleReset}
            className="text-sm text-blue-600 underline hover:text-blue-800"
          >
            Reset Data
          </button>
        </div>
      )}

      {/* Chart */}
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            stackOffset="expand"
            margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
            barCategoryGap="30%"
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e5e7eb"
            />
            <XAxis dataKey="name" axisLine={false} tickLine={false} className="text-xs" />
            <YAxis
              tickFormatter={(tick) => `${Math.round(tick * 100)}%`}
              axisLine={false}
              tickLine={false}
              domain={[0, 1]}
              className="text-xs"
            />
            <Tooltip
              formatter={(value: number, name: string) => {
                if (name.includes("Gap")) return null;
                return [`${Math.round(value * 100)}%`, name];
              }}
              contentStyle={{
                borderRadius: "8px",
                fontSize: "14px",
                borderColor: "#CBD5E0",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
              cursor={{ fill: "rgba(237, 242, 247, 0.7)" }}
            />

            <Bar dataKey="OnTime" stackId="a" fill={COLORS.OnTime} name="On time" barSize={25} radius={radiusSize} />
            <Bar dataKey="Gap2" stackId="a" fill={COLORS.Gap} barSize={25} />
            <Bar dataKey="Late" stackId="a" fill={COLORS.Late} name="Late" barSize={25} radius={radiusSize} />
            <Bar dataKey="Gap1" stackId="a" fill={COLORS.Gap} barSize={25} />
            <Bar dataKey="Absent" stackId="a" fill={COLORS.Absent} name="Absent" barSize={25} radius={radiusSize} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
