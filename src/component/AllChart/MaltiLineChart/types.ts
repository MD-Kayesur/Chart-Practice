export interface LineDataPoint {
  name: string;
  [key: string]: number | string;
}

export interface MultiLineChartProps {
  data?: LineDataPoint[];
  width?: string | number;
  height?: number;
  title?: string;
  leftAxisKey?: string;
  rightAxisKey?: string;
  leftAxisLabel?: string;
  rightAxisLabel?: string;
  leftAxisColor?: string;
  rightAxisColor?: string;
  showGrid?: boolean;
  showTooltip?: boolean;
  strokeWidth?: number;
  animationDuration?: number;
  dotSize?: number;
  xAxisKey?: string;
  showOnlyMode?: boolean;
}
