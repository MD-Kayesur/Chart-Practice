import { useState } from "react";
import { HeatmapCell } from "./types";

export const useHeatmapActions = (data: HeatmapCell[] = [], onDelete?: () => void) => {
  const [message, setMessage] = useState("");

  const copyData = async () => {
    if (!data.length) {
      setMessage("No data to copy.");
      setTimeout(() => setMessage(""), 3000);
      return;
    }

    const headers = ["productName", "dayName", "stock", "value"];
    const rows = data.map((row) =>
      headers
        .map((h) => {
          let value = row[h as keyof HeatmapCell];
          if (typeof value === "string" && (value.includes(",") || value.includes('"') || value.includes("\n"))) {
            return `"${value.replace(/"/g, '""')}"`;
          }
          return value;
        })
        .join(",")
    );

    const csvData = headers.join(",") + "\n" + rows.join("\n");
    try {
      await navigator.clipboard.writeText(csvData);
      setMessage("Chart data copied to clipboard (CSV)!");
    } catch {
      setMessage("Error copying data.");
    }

    setTimeout(() => setMessage(""), 3000);
  };

  const deleteChart = () => {
    if (window.confirm("Are you sure you want to delete this chart?")) {
      onDelete?.();
      setMessage("Chart deleted.");
    }
  };

  return { message, copyData, deleteChart };
};
