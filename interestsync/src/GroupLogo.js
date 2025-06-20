import React from "react";

// PUBLIC_INTERFACE
/**
 * SVG logo depicting a group of people standing together, styled for InterestSync.
 * Colors harmonize with the bluish-grey/light accent theme.
 */
export default function GroupLogo({ size = 34 }) {
  // Figure colors
  const head = "#4A97C9";   // accent (bluish)
  const body = "#22324f";   // navText
  const secondary = "#B4CDE4";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 42 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="InterestSync Logo: group of people"
      style={{ display: "block" }}
    >
      {/* Center person */}
      <circle cx="21" cy="10" r="5" fill={head} />
      <ellipse cx="21" cy="25" rx="8" ry="8" fill={body} opacity="0.70"/>
      {/* Left person */}
      <circle cx="9.5" cy="13.5" r="3.2" fill={secondary} />
      <ellipse cx="10" cy="25" rx="5" ry="6" fill={body} opacity="0.45"/>
      {/* Right person */}
      <circle cx="32.5" cy="13.5" r="3.2" fill={secondary} />
      <ellipse cx="32" cy="25" rx="5" ry="6" fill={body} opacity="0.45"/>
      {/* Bottom shadow */}
      <ellipse cx="21" cy="33" rx="10" ry="1.5" fill="#E9EFF7" />
    </svg>
  );
}
