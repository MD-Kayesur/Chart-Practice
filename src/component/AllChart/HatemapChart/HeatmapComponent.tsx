import React, { useState } from "react";
import { HeatmapComponentProps, HeatmapCell } from "./types";
import { alternativeHeatmapData } from "./heatmapData";
import HeatmapHeader from "./HeatmapHeader";
import HeatmapGrid from "./HeatmapGrid";
import HeatmapTooltip from "./HeatmapTooltip";
import { useHeatmapActions } from "./useHeatmapActions";

 export const HeatmapComponent: React.FC<HeatmapComponentProps> = ({
  data = alternativeHeatmapData.productInventory,
  title = "Heat Map Chart",
  subtitle = "Total in Stock",
  colorScheme = "teal",
  showTooltip = true,
  cellSize = 40,
  cellGap = 8,
  xAxisLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  yAxisLabels = ["Smart Watch", "Power Bank", "Smart Phone", "Earphone", "Earpiece"],
  valueKey = "value",
  maxValue = 3,
  onDelete,
}) => {
  const [hoveredCell, setHoveredCell] = useState<{ data: HeatmapCell; x: number; y: number } | null>(null);

  const colorSchemes = {
    teal: ["#E8F4F1", "#C5E0D9", "#86B6AB", "#527C72", "#314B45"],
  };
  const colors = colorSchemes[colorScheme] || colorSchemes.teal;

  const getColor = (value: number) => {
    if (value === 0) return colors[0];
    const index = Math.min(Math.ceil((value / maxValue) * (colors.length - 1)), colors.length - 1);
    return colors[index] || colors[0];
  };

  const { message, copyData, deleteChart } = useHeatmapActions(data, onDelete);

  return (
 <div className="mx-auto p-6 bg-white     w-full relative  ">
          <HeatmapHeader title={title} subtitle={subtitle} colors={colors} message={message} onCopy={copyData} onDelete={deleteChart} />

      <div className="relative overflow-x-auto">
        {data?.length ? (
          <HeatmapGrid
            data={data}
            getColor={getColor}
            valueKey={valueKey}
            colors={colors}
            cellSize={cellSize}
            cellGap={cellGap}
            xAxisLabels={xAxisLabels}
            yAxisLabels={yAxisLabels}
            onCellEnter={(cellData, e) => setHoveredCell({ data: cellData, x: e.clientX, y: e.clientY })}
            onCellMove={(e) => hoveredCell && setHoveredCell((prev) => prev && { ...prev, x: e.clientX, y: e.clientY })}
            onCellLeave={() => setHoveredCell(null)}
          />
        ) : (
          <div className="text-center py-10 text-gray-500">Chart data is unavailable or has been deleted.</div>
        )}
      </div>

      {hoveredCell && showTooltip && <HeatmapTooltip {...hoveredCell} />}
    </div>
  );
};

export default HeatmapComponent;
