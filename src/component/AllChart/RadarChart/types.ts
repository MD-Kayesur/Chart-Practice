export interface RadarChartProps {
  initialData?: RadarChartData[];
  width?: number | string;
  height?: number | string;
  title?: string;
  subtitle?: string;
  colors?: string[];
  dataKeys?: string[];
  dataLabels?: string[];
  onDelete?: () => void;
}

export interface RadarChartData {
  subject: string;
  [key: string]: string | number;
}
