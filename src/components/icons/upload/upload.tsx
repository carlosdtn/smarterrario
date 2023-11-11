import Svg, { Path } from "react-native-svg";
import React from "react";

export default function IconUpload(props: any) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" {...props}>
      <Path
        fill="currentColor"
        d="M11 16V7.85l-2.6 2.6L7 9l5-5l5 5l-1.4 1.45l-2.6-2.6V16h-2Zm-5 4q-.825 0-1.413-.588T4 18v-3h2v3h12v-3h2v3q0 .825-.588 1.413T18 20H6Z"
      />
    </Svg>
  );
}
