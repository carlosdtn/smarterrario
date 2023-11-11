import Svg, { Path } from "react-native-svg";
import React from "react";

export default function IconBulb(props: any) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 21h6M12 3a6 6 0 0 0-5.019 9.29c.954 1.452 1.43 2.178 1.493 2.286c.55.965.449.625.518 1.734c.008.124.008.313.008.69a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1c0-.377 0-.566.008-.69c.07-1.11-.033-.769.518-1.734c.062-.108.54-.834 1.493-2.287A6 6 0 0 0 12 3Z"
      />
    </Svg>
  );
}
