import React, { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { PieChartProps } from "./types";
import { defaultPieData } from "./PieChartData";
import PieChartTooltip from "./PieChartTooltip";
import PieChartLegend from "./PieChartLegend";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuCopy } from "react-icons/lu";

const PieChartComponent: React.FC<PieChartProps> = ({
  data = defaultPieData,
  width = "100%",
  height = 300,
  isDoughnut = true,
  innerRadius = 60,
  outerRadius = 90,
  showLegend = true,
  showTooltip = true,
  title = "Doughnut Pie",
  subtitle = "Total Active Users",
  centerValue = "520K",
  centerLabel = "Total Users",
  showPercentages = true,
  animationDuration = 800,
  onRemove,
  handleCopy, isCopied 
}) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const total = data.reduce((sum, entry) => sum + entry.value, 0);

  return (
 <div className="mx-auto p-6 bg-white     w-full relative  ">      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
        <div className=" flex gap-5">
             <div>
                <LuCopy
                       className="w-5 h-5 cursor-pointer hover:text-red-500"
                       onClick={() => handleCopy(defaultPieData)}
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



      {/* Chart */}
      <div className="relative">
        <ResponsiveContainer width={width} height={height}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={isDoughnut ? innerRadius : 0}
              outerRadius={outerRadius}
              paddingAngle={2}
              dataKey="value"
              onMouseEnter={(_, i) => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(-1)}
              animationDuration={animationDuration}
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={entry.color}
                  stroke={activeIndex === index ? "#fff" : "none"}
                  strokeWidth={activeIndex === index ? 3 : 0}
                />
              ))}
            </Pie>
            {showTooltip && <Tooltip content={<PieChartTooltip total={total} />} />}
            {showLegend && <Legend content={<PieChartLegend total={total} showPercentages={showPercentages} />} />}
          </PieChart>
        </ResponsiveContainer>

        {isDoughnut && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">{centerValue}</div>
              <div className="text-sm text-gray-500">{centerLabel}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PieChartComponent;
