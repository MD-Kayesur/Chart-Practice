 


import React from "react";
import LineChart from "./LineChart/LineChart";
import PieChart from "./PieChart/PieChart";
import AreaChart from "./AreaChart/AreaChart";
import { StackedChart } from "./StackedChart/StackedChart";
import RadarChart from "./RadarChart/RadarChartComponent";
import HeatmapComponent from "../AllChart/HatemapChart/HateMapChart";
import MailtilineChart from "./MaltiLineChart/MailtilineChart";

interface ChartShowDynamicProps {
  chartType: string;
  widgetTitle?: string;
}

const ChartShowDynamic: React.FC<ChartShowDynamicProps> = ({ chartType, widgetTitle }) => {
  const renderChart = () => {
    switch (chartType) {
      case "Stacked Bar Chart":
        return <StackedChart />;
      case "Line Chart":
        return <LineChart />;
      case "Pie Chart":
        return <PieChart />;
      case "Area Chart":
        return <AreaChart />;
      case "Radar Chart":
        return <RadarChart />;
      case "HateMap Chart":
        return <HeatmapComponent />;
      case "Mailtiline Chart":
        return < MailtilineChart/>;
      default:
        return (
          <p className="text-gray-500 text-center mt-6">
            ⚠️ Please select a chart type.
          </p>
        );
    }
  };

  return (
    <div className="   w-500px ">
      <h3 className="text-xl   font-semibold text-gray-800 mb-4">
        {widgetTitle || "Chart Widget"}
      </h3>
      <div className=" flex items-center justify-center  ">{renderChart()}</div>
    </div>
  );
};

export default ChartShowDynamic;













 