import React from "react";
import { HeatmapGridProps } from "./types";

const HeatmapGrid: React.FC<HeatmapGridProps> = ({
  data,
  getColor,
  valueKey,
  colors,
  cellSize,
  cellGap,
  xAxisLabels,
  yAxisLabels,
  onCellEnter,
  onCellMove,
  onCellLeave,
}) => {
  const yAxisWidth = 100;
  const cellStyle = { width: cellSize, height: cellSize, borderRadius: "6px" };
  const gapStyle = { gap: cellGap };

  return (
    <div className="flex flex-col" style={gapStyle}>
      <div className="flex flex-col" style={gapStyle}>
        <div style={{ width: yAxisWidth }} />
        {yAxisLabels.map((rowLabel, rowIndex) => (
          <div key={rowIndex} className="flex items-center" style={gapStyle}>
            <div className="text-sm text-gray-800 font-medium text-right pr-4" style={{ width: yAxisWidth }}>
              {rowLabel}
            </div>
            <div className="flex" style={gapStyle}>
              {xAxisLabels.map((_, colIndex) => {
                const cellData = data.find((d) => d.product === rowIndex && d.day === colIndex);
                return (
                  <div
                    key={colIndex}
                    className="cursor-pointer hover:shadow-md transition-shadow"
                    style={{
                      ...cellStyle,
                      backgroundColor: cellData ? getColor(cellData[valueKey] as number) : colors[0],
                    }}
                    onMouseEnter={(e) => cellData && onCellEnter(cellData, e)}
                    onMouseMove={onCellMove}
                    onMouseLeave={onCellLeave}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="flex" style={{ marginLeft: yAxisWidth, ...gapStyle, marginTop: cellGap }}>
        {xAxisLabels.map((label, index) => (
          <div key={index} className="text-sm font-medium text-gray-700 text-center" style={{ width: cellSize }}>
            {label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeatmapGrid;
