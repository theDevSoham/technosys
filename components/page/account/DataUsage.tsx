"use client";

import React from "react";
import DataUsageChart from "@/components/DataUsageChart";
import DataUsageActivity from "@/components/DataUsageActivity";
import { container } from "@/assets/container";
import SectionHeader from "@/components/SectionHeader";
import data_usage from "@/content/account/data_usage.json";

export default function DataUsage() {
  return (
    <section className="w-full text-white">
      <div className={`${container} lg:py-16 py-10`}>
        <SectionHeader as="h2" text={data_usage.headline} />

        <div className="flex flex-col lg:flex-row gap-8 font-inter text-gray-800 mt-8">
          {/* LEFT CARD */}
          <div className="flex-1 bg-gray-100 rounded-2xl p-6 shadow-sm">
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700">
                {data_usage.current_cycle.heading}
              </p>
              <p className="text-sm text-gray-500">
                {data_usage.current_cycle.subheading}
              </p>
            </div>

            <DataUsageActivity />

            <div className="w-full inline-block bg-purple-200 text-purple-800 text-xs font-medium rounded-md px-3 py-1 mt-2">
              {data_usage.current_cycle.toast}
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="flex-1 bg-gray-100 rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <div>
                <h3 className="text-lg font-semibold">
                  {data_usage.data_usage_history.heading}
                </h3>
                <p className="text-sm text-gray-500">
                  {data_usage.data_usage_history.subheading}
                </p>
              </div>
              <span className="text-purple-600 text-sm font-medium">
                {data_usage.data_usage_history.month}
              </span>
            </div>

            <div className="relative w-full h-64">
              <DataUsageChart />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
