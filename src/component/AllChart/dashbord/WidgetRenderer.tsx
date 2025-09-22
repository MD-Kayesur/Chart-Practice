import React from "react";
import { StackedChart } from "../StackedChart/StackedChart";
import AreaChartComponent from "../AreaChart/AreaChartComponent";
import LineChart from "../LineChart/LineChart";
import HeatmapComponent from "../HatemapChart/HeatmapComponent";
import Component from "@/components/ganttChart/Component ";
import PieChartComponent from "../PieChart/PieChartComponent";
import MultiLineChart from "../MaltiLineChart/MultiLineChart";
import RadarChartComponent from "../RadarChart/RadarChartComponent";
import HorizontalBarChart from "../HorizontalBarChart/HorizontalBarChart";
import DraggableCard from "../DraggableCard";
 
const WidgetRenderer = ({ widget, onRemove,handleCopy ,  isCopied  }) => {
    const renderChart = () => {
        const type = widget.id.split("-")[0];

        switch (type) {
            case "kpi":
                return <LineChart handleCopy={handleCopy} isCopied={isCopied} onRemove={onRemove}/>;
            case "stackedBar":
                return <StackedChart handleCopy={handleCopy} isCopied={isCopied}  onRemove={onRemove} />;
            case "line":
                return <MultiLineChart handleCopy={handleCopy} isCopied={isCopied} onRemove={onRemove} />;
            case "pie":
                return <PieChartComponent handleCopy={handleCopy} isCopied={isCopied} onRemove={onRemove}/>;
            case "area":
                return < AreaChartComponent handleCopy={handleCopy} isCopied={isCopied} onRemove={onRemove}/>
            case "gantt":
                return <Component handleCopy={handleCopy} isCopied={isCopied} onRemove={onRemove}/>
            case "rander":
                return <RadarChartComponent handleCopy={handleCopy} isCopied={isCopied}  onRemove={onRemove}/>
            case "HorizontalBar":
                return <HorizontalBarChart handleCopy={handleCopy} isCopied={isCopied}  onRemove={onRemove}/>
            default:
                return (
                    <div className="h-48 flex items-center justify-center text-gray-500">
                        
                        <p>
                            Widget: {widget.name} ({type}) - Component not found or default.
                        </p>
                    </div>
                );
        }
    };

    return (
        <DraggableCard>

 <div
            className="bg-white rounded-lg border border-gray-200 shadow-sm relative p-2"
            style={{ minHeight: "100px" }}
        >
             
            <div className=" w-full">{renderChart()}</div>
        </div>

        </DraggableCard>
       
    );
};

export default WidgetRenderer;
