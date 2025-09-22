import { PieChartDataItem } from "./PieChart.types";

export const defaultPieData: PieChartDataItem[] = [
  { name: "Desktop", value: 65, color: "#00bcd4", icon: "🖥️" },
  { name: "Mobile", value: 23, color: "#4caf50", icon: "📱" },
  { name: "Tablet", value: 12, color: "#ff9800", icon: "📱" },
];

export const alternativePieData = {
  demographics: [
    { name: "Age 18-24", value: 28, color: "#8b5cf6", icon: "👶" },
    { name: "Age 25-34", value: 35, color: "#3b82f6", icon: "👨" },
    { name: "Age 35-44", value: 22, color: "#10b981", icon: "👩" },
    { name: "Age 45-54", value: 10, color: "#f59e0b", icon: "👴" },
    { name: "Age 55+", value: 5, color: "#ef4444", icon: "👵" },
  ],
  revenue: [
    { name: "Product Sales", value: 45, color: "#059669", icon: "🛍️" },
    { name: "Services", value: 30, color: "#0891b2", icon: "🔧" },
    { name: "Subscriptions", value: 20, color: "#7c3aed", icon: "📋" },
    { name: "Advertising", value: 5, color: "#dc2626", icon: "📢" },
  ],
  // ... তোমার অন্য datasets (marketShare, projectStatus, trafficSources) এখানে রাখো
};










// /components/PieChart/
//   ├── PieChartComponent.tsx  # Main wrapper
//   ├── PieChart.types.ts      # Props, Data types
//   ├── PieChart.data.ts       # defaultPieData + alternativePieData
//   ├── PieChartTooltip.tsx    # CustomTooltip
//   ├── PieChartLegend.tsx     # CustomLegend
//   └── PieChartExamples.tsx   # Usage examples