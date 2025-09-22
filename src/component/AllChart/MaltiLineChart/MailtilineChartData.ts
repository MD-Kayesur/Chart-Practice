import { LineDataPoint } from "./types";

export const defaultLineData: LineDataPoint[] = [
  { name: "Jan", acmeCorp: 250, globexInc: 200 },
  { name: "Feb", acmeCorp: 400, globexInc: 300 },
  { name: "Mar", acmeCorp: 350, globexInc: 450 },
  { name: "Apr", acmeCorp: 1200, globexInc: 800 },
  { name: "May", acmeCorp: 1100, globexInc: 900 },
  { name: "Jun", acmeCorp: 1250, globexInc: 1000 },
  { name: "Jul", acmeCorp: 1650, globexInc: 1200 },
  { name: "Aug", acmeCorp: 1500, globexInc: 1350 },
  { name: "Sep", acmeCorp: 1700, globexInc: 1300 },
  { name: "Oct", acmeCorp: 1200, globexInc: 1300 },
  { name: "Nov", acmeCorp: 1100, globexInc: 1500 },
  { name: "Dec", acmeCorp: 1250, globexInc: 1450 },
];







// /components/MultiLineChart/
//   ├── MultiLineChart.tsx       # Main component
//   ├── MultiLineChart.types.ts  # Props + data types
//   ├── MultiLineChart.data.ts   # defaultLineData
//   ├── MultiLineChartTooltip.tsx
//   ├── MultiLineChartLegend.tsx
//   ├── MultiLineChartStats.tsx  # StatBox + StatGroup