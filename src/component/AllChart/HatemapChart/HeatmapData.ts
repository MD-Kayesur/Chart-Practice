import { HeatmapCell } from "./types";

export const alternativeHeatmapData: { productInventory: HeatmapCell[] } = {
  productInventory: (() => {
    const data: HeatmapCell[] = [];
    const products = ["Smart Watch", "Power Bank", "Smart Phone", "Earphone", "Earpiece"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    products.forEach((product, productIndex) => {
      days.forEach((day, dayIndex) => {
        data.push({
          product: productIndex,
          day: dayIndex,
          productName: product,
          dayName: day,
          value: Math.floor(Math.random() * 4),
          stock: Math.floor(Math.random() * 2000),
        });
      });
    });
    return data;
  })(),
};







// /components/Heatmap/
// │── HeatmapComponent.tsx        # Main wrapper
// │── HeatmapGrid.tsx             # Grid rendering
// │── HeatmapTooltip.tsx          # Tooltip
// │── HeatmapHeader.tsx           # Title, subtitle, legend + action buttons
// │── useHeatmapActions.ts        # Hook for copy/delete logic
// │── heatmapData.ts              # Mock data generator
// │── types.ts                    # Shared TypeScript types


