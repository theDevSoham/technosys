"use client";

import React, { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ChartConfiguration,
  ChartData,
  ChartOptions,
  LineController, // ✅ Add this
  ChartTypeRegistry,
} from "chart.js";

// Register necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  LineController
);

const DataUsageChart = () => {
  // Refs for the canvas and Chart instance
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<ChartJS | null>(null);

  // Initialize Chart.js instance
  useEffect(() => {
    const ctx = chartRef.current?.getContext("2d");
    if (!ctx) return;

    // Destroy previous instance if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const data: ChartData<"line"> = {
      labels: [
        "Nov 1",
        "Nov 2",
        "Nov 3",
        "Nov 4",
        "Nov 5",
        "Nov 6",
        "Nov 7",
        "Nov 8",
      ],
      datasets: [
        {
          label: "Download",
          data: [45, 52, 50, 60, 65, 70, 60, 68],
          borderColor: "#00c26f",
          backgroundColor: "rgba(0, 194, 111, 0.2)",
          fill: true,
          tension: 0.4,
        },
        {
          label: "Upload",
          data: [10, 12, 11, 15, 18, 16, 14, 17],
          borderColor: "#007bff",
          backgroundColor: "rgba(0, 123, 255, 0.2)",
          fill: true,
          tension: 0.4,
        },
        {
          label: "Total",
          data: [55, 64, 61, 75, 83, 86, 74, 85],
          borderColor: "#a66bf5",
          backgroundColor: "rgba(166, 107, 245, 0.2)",
          fill: true,
          borderDash: [4, 4],
          tension: 0.4,
        },
      ],
    };

    const options: ChartOptions<"line"> = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
          labels: {
            color: "#555",
            usePointStyle: true,
          },
        },
      },
      scales: {
        x: {
          ticks: { color: "#777" },
          grid: { color: "rgba(0,0,0,0.05)" },
        },
        y: {
          beginAtZero: true,
          ticks: { color: "#777" },
          grid: { color: "rgba(0,0,0,0.05)" },
        },
      },
    };

    const config: ChartConfiguration<"line"> = {
      type: "line",
      data,
      options,
    };

    chartInstanceRef.current = new ChartJS(ctx, config);

    // Cleanup on unmount
    return () => {
      chartInstanceRef.current?.destroy();
    };
  }, []);

  return <canvas ref={chartRef}></canvas>;
};

export default DataUsageChart;
