"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import solutions from "@/content/services/solutions.json";
import SectionHeader from "@/components/SectionHeader";
import { theme } from "@/assets/theme";
import { container } from "@/assets/container";
import AnimatedButton from "@/components/AnimatedButton";

const SolutionCard = ({
  title,
  description,
  image,
  link,
}: Record<string, string>) => {
  const learnMore = () => {
    window.location.href = link;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        flex flex-col-reverse
        lg:flex-row 
        even:lg:flex-row-reverse 
        items-center justify-between 
        gap-6 lg:gap-12 w-full
      "
    >
      {/* Content Section */}
      <div className="flex-1 flex flex-col gap-4 text-center lg:text-left">
        <h3 className={`${theme.typography.techno_24_bold} text-primary`}>
          {title}
        </h3>
        <p className={`${theme.typography.techno_16_reg}`}>{description}</p>
        <div className="w-full lg:w-2/5">
          <AnimatedButton onClick={learnMore} className="w-full">Learn More</AnimatedButton>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center">
        <Image
          src={`/${image}`}
          alt={title}
          width={500}
          height={300}
          className="rounded-lg shadow-md object-cover w-full h-auto max-w-md"
        />
      </div>
    </motion.div>
  );
};

const ServicesProvided = () => {
  return (
    <div className="w-full flex flex-col gap-6 text-white">
      <div className={`${container} py-16`}>
        <SectionHeader as="h2" text={solutions.headline} />
        <SectionHeader
          as="p"
          text={solutions.description}
          desktopStyle={theme.typography.techno_16_reg}
          mobileStyle={theme.typography.techno_14_reg}
        />

        <div className="w-full py-8 flex flex-col gap-12">
          {solutions.solutions.map((item, idx) => (
            <SolutionCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesProvided;
