"use client";
import { Star } from "lucide-react";
import feedback from "@/content/homepage/feedback.json";
import { container } from "@/assets/container";
import { theme } from "@/assets/theme";

export default function Feedback() {
  return (
    <section className="py-12 px-8 bg-black text-white">
      <div className={`${container}`}>
        <h2
          className={`${theme.typography.techno_36_semibold} hidden lg:block`}
        >
          {feedback.headline}
        </h2>
        <h2
          className={`${theme.typography.techno_24_semibold} block lg:hidden`}
        >
          {feedback.headline}
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {feedback.cards.map((fb, index) => (
            <div
              key={index}
              className="w-full bg-[#151027] rounded-xl p-6 shadow-lg text-gray-200"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold">{fb.name}</h3>
                <div className="flex items-center space-x-1">
                  <span className="text-gray-300 text-sm">
                    {fb.rating.toFixed(1)}
                  </span>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < fb.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-none text-gray-500"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-300">
                {fb.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
