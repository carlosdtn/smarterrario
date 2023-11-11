import Svg, { Path } from "react-native-svg";
import React from "react";

export default function IconCheck(props: any) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" {...props}>
      <Path
        fill="currentColor"
        d="m9 20.42l-6.21-6.21l2.83-2.83L9 14.77l9.88-9.89l2.83 2.83L9 20.42Z"
      />
    </Svg>
  );
}
