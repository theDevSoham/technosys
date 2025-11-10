"use client";

import React, { useEffect, useRef } from "react";
import graph from "@/content/homepage/graph.json";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Tooltip,
} from "chart.js";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Tooltip
);

const ChartComponent = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    const ctx = chartRef.current?.getContext("2d");
    if (!ctx) return;

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(168, 85, 247, 0.6)");
    gradient.addColorStop(1, "rgba(168, 85, 247, 0.1)");

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: graph.graph_data.labels,
        datasets: [
          {
            label: "Uptime %",
            data: graph.graph_data.dataset_data,
            fill: true,
            backgroundColor: gradient,
            borderColor: "#A855F7",
            borderWidth: 2,
            tension: 0.4,
            pointRadius: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: "index",
          intersect: false,
        },
        scales: {
          y: {
            beginAtZero: false,
            min: 99.9,
            max: 100,
            ticks: {
              color: "#d1d5db",
              callback: (val: string | number) => `${val}%`,
              font: { size: 12 },
            },
            grid: {
              color: "rgba(255,255,255,0.05)",
            },
            border: {
              display: false,
            },
          },
          x: {
            ticks: {
              color: "#9ca3af",
              font: { size: 12 },
            },
            grid: {
              color: "rgba(255,255,255,0.05)",
            },
            border: {
              display: false,
            },
          },
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            enabled: true,
            backgroundColor: "#111",
            titleColor: "#fff",
            bodyColor: "#fff",
            borderColor: "#A855F7",
            borderWidth: 1,
            displayColors: false,
            callbacks: {
              label: (context) => `${context.parsed.y}%`,
            },
          },
        },
      },
    });

    return () => {
      chartInstance.current?.destroy();
    };
  }, []);

  return <canvas ref={chartRef} className="w-full h-full" />;
};

export default ChartComponent;
