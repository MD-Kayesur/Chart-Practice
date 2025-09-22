export interface ChartActionProps {
  ChartType?: string;
  onRemove: () => void;
  handleCopy: (data: any[]) => void;
  isCopied: boolean;
}
