"use client";
import React, { CSSProperties, JSX } from "react";
import { theme } from "@/assets/theme";

type SectionHeaderProps = {
  /** Which heading tag to render (h1–h6). Defaults to h2 */
  as?: keyof JSX.IntrinsicElements;
  /** The heading text to display */
  text: string;
  /** Optional class for custom styles */
  className?: string;
  /** Optional inline styles */
  style?: CSSProperties;
  /** Optional typography override for desktop view */
  desktopStyle?: string;
  /** Optional typography override for mobile view */
  mobileStyle?: string;
};

/**
 * A responsive heading component that automatically
 * switches typography styles between desktop and mobile.
 */
const SectionHeader: React.FC<SectionHeaderProps> = ({
  as = "h2",
  text,
  className = "",
  style,
  desktopStyle = theme.typography.techno_36_semibold,
  mobileStyle = theme.typography.techno_24_semibold,
}) => {
  const HeadingTag = as;

  return (
    <>
      {/* Desktop version */}
      <HeadingTag
        className={`${desktopStyle} hidden lg:block ${className}`}
        style={style}
      >
        {text}
      </HeadingTag>

      {/* Mobile version */}
      <HeadingTag
        className={`${mobileStyle} block lg:hidden ${className}`}
        style={style}
      >
        {text}
      </HeadingTag>
    </>
  );
};

export default SectionHeader;
