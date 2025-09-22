export interface ChartItem {
  name: string;
  value: number;
  color: string;
}

export const getChartData = (): ChartItem[] => [
  { name: 'Alpha', value: 94, color: '#6F78F9' },
  { name: 'Beta', value: 82, color: '#6F78F9' },
  { name: 'Gamma', value: 73, color: '#6F78F9' },
  { name: 'Delta', value: 60, color: '#6F78F9' },
  { name: 'Epsilon', value: 44, color: '#6F78F9' },
  { name: 'Zeta', value: 37, color: '#6F78F9' },
  { name: 'Omega', value: 27, color: '#6F78F9' }
];








//      / components─ HorizontalBarChart/
//         ├── HorizontalBarChart.tsx        # Main chart component
//         ├── Bar.tsx                       # Reusable single bar component
//         ├── ChartData.ts                  # Data array and type definitions
//         ├── index.ts                      # Barrel export for easy imports
//         └── utils.ts 