export interface PieChartDataItem {
  name: string;
  value: number;
  color: string;
  icon?: string;
}

export interface PieChartProps {
  data?: PieChartDataItem[];
  width?: string | number;
  height?: number;
  isDoughnut?: boolean;
  innerRadius?: number;
  outerRadius?: number;
  showLegend?: boolean;
  showTooltip?: boolean;
  title?: string;
  subtitle?: string;
  centerValue?: string | number;
  centerLabel?: string;
  showPercentages?: boolean;
  animationDuration?: number;
}
