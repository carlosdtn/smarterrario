import Svg, { Path } from "react-native-svg";
import React from "react";

export default function IconReptile(props: any) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" {...props}>
      <Path
        fill="currentColor"
        d="M19.5 17H18c1.1 0 2-.9 2-2s-.9-2-2-2V9c0-1 0-2-1.08-2.86c.05-.21.08-.42.08-.64C17 3.57 15 2 12.5 2c-2.26 0-4.12 1.31-4.43 3H6L3.71 2.79L3 3.5l2 2l-2 2l.71.71L6 6h2.07c.31 1.69 2.17 3 4.43 3c.5 0 1-.08 1.43-.2c.04.07.07.14.07.2v4H8c-1.1 0-2 .9-2 2s.9 2 2 2H6.5A2.5 2.5 0 0 0 4 19.5c0 .17 0 .34.05.5H4c-1.1 0-2 .9-2 2h17.5a2.5 2.5 0 0 0 0-5M12 5c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1Z"
      />
    </Svg>
  );
}
