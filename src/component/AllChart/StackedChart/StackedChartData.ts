export const rawData = [
  { name: "Sunday", OnTime: 58, Late: 24, Absent: 18 },
  { name: "Monday", OnTime: 72, Late: 13, Absent: 15 },
  { name: "Tuesday", OnTime: 40, Late: 30, Absent: 30 },
  { name: "Wednesday", OnTime: 22, Late: 58, Absent: 20 },
  { name: "Thursday", OnTime: 60, Late: 20, Absent: 20 },
  { name: "Friday", OnTime: 40, Late: 35, Absent: 25 },
  { name: "Saturday", OnTime: 65, Late: 20, Absent: 15 },
];

export const addGapsToData = (data: typeof rawData) => {
  return data.map(item => ({
    name: item.name,
    Absent: item.Absent,
    Gap2: 2,
    Late: item.Late,
    Gap1: 2,
    OnTime: item.OnTime,
  }));
};



export const COLORS = {
  OnTime: "#6F78F9",
  Late: "#46B8D6",
  Absent: "#13A490",
  Gap: "transparent",
};









// /components/StackedChart/
//   ├── StackedChart.tsx          # main component
//   ├── StackedChart.types.ts     # props + data types
//   ├── StackedChart.data.ts      # rawData + helpers
//   ├── StackedChart.colors.ts    # COLORS constants
//   └── StackedChartLegend.tsx    # custom legend