export interface HeatmapCell {
  product: number;
  day: number;
  productName: string;
  dayName: string;
  value: number;
  stock: number;
}

export interface HeatmapComponentProps {
  data?: HeatmapCell[];
  title?: string;
  subtitle?: string;
  colorScheme?: "teal";
  showTooltip?: boolean;
  cellSize?: number;
  cellGap?: number;
  xAxisLabels?: string[];
  yAxisLabels?: string[];
  valueKey?: keyof HeatmapCell;
  maxValue?: number;
  onDelete?: () => void;
}

export interface TooltipProps {
  data: HeatmapCell;
  x: number;
  y: number;
}

export interface HeatmapGridProps {
  data: HeatmapCell[];
  getColor: (value: number) => string;
  valueKey: keyof HeatmapCell;
  colors: string[];
  cellSize: number;
  cellGap: number;
  xAxisLabels: string[];
  yAxisLabels: string[];
  onCellEnter: (cellData: HeatmapCell, event: React.MouseEvent<HTMLDivElement>) => void;
  onCellMove: (event: React.MouseEvent<HTMLDivElement>) => void;
  onCellLeave: () => void;
}

export interface HeatmapHeaderProps {
  title: string;
  subtitle: string;
  colors: string[];
  message: string;
  onCopy: () => void;
  onDelete: () => void;
}
