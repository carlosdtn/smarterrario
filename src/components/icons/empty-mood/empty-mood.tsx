import Svg, { Path } from "react-native-svg";
import React from "react";

export default function IconEmptyMood(props: any) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0m6-2h.01M15 10h.01M9 15h6"
      />
    </Svg>
  );
}
