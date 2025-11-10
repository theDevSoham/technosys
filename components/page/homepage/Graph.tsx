import { container } from "@/assets/container";
import React from "react";
import graph from "@/content/homepage/graph.json";
import ChartComponent from "@/components/ChartComponent";
import { theme } from "@/assets/theme";

const Graph = () => {
  return (
    <section className="w-full bg-black py-16">
      <div
        className={`${container} w-full h-full flex flex-col lg:flex-row items-start gap-10 lg:gap-16`}
      >
        {/* LEFT SIDE - CHART CARD */}
        <div
          className="flex-1 max-w-full rounded-2xl p-6 lg:p-8 shadow-2xl relative"
          style={{
            background: theme.colors.primary[700],
          }}
        >
          {/* Header */}
          <div className="mb-4">
            <h3
              className={`${theme.typography.techno_20_semibold}`}
              style={{ color: theme.colors.primary[50] }}
            >
              {graph.left_section.headline}
            </h3>
            <p
              className={`${theme.typography.techno_16_reg}`}
              style={{ color: theme.colors.primary[200] }}
            >
              {graph.left_section.subheadline}
            </p>
          </div>

          {/* Chart */}
          <div className="h-[200px] sm:h-[350px]">
            <ChartComponent />
          </div>

          {/* Live uptime tag */}
          <div
            className="absolute top-6 right-6 px-4 py-2 rounded-xl font-semibold shadow-lg"
            style={{
              background: `linear-gradient(90deg, ${theme.colors.green[100]}, ${theme.colors.green[200]})`,
            }}
          >
            <p
              className={`${theme.typography.techno_14_reg}`}
              style={{
                color: theme.colors.primary[50],
              }}
            >
              {graph.left_section.banner.subtext}
            </p>
            <p
              className={`${theme.typography.techno_20_semibold}`}
              style={{
                color: theme.colors.primary[50],
              }}
            >
              {graph.left_section.banner.text}
            </p>
          </div>

          {/* Stats boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {graph.left_section.cards.map((item) => (
              <div
                key={item.tag}
                className="p-4 rounded-xl text-center"
                style={{
                  background: theme.colors.primary[50],
                }}
              >
                <p className={theme.typography.techno_14_reg}>{item.tag}</p>
                <p
                  className={theme.typography.techno_24_bold}
                  style={{ color: item.metric_color }}
                >
                  {item.metric}
                </p>
                <p className={theme.typography.techno_14_reg}>
                  {item.duration}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - TEXT SECTION */}
        <div className="flex-1 flex flex-col gap-2" style={{ color: theme.colors.primary[50] }}>
          <h2
            className={theme.typography.techno_36_semibold}
            style={{ color: theme.colors.primary[50] }}
          >
            {graph.right_section.headline}
          </h2>
          <p
            className={theme.typography.techno_20_semibold}
            style={{ color: theme.colors.primary[100] }}
          >
            {graph.right_section.description.para1}
          </p>
          <p
            className={theme.typography.techno_20_semibold}
            style={{ color: theme.colors.primary[100] }}
          >
            {graph.right_section.description.para2}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Graph;
