import Svg, { Path } from "react-native-svg";
import React from "react";

export default function IconAdd(props: any) {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" {...props}>
      <Path
        fill="currentColor"
        d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20a10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16z"
      />
    </Svg>
  );
}
