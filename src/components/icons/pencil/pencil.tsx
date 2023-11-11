import React from "react";
import Svg, { Path } from "react-native-svg";

export default function IconPencil(props: any) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" {...props}>
      <Path
        fill="currentColor"
        d="m12.9 6.854l4.242 4.243l-9.9 9.9H3v-4.243l9.9-9.9Zm1.414-1.414l2.121-2.121a1 1 0 0 1 1.414 0l2.829 2.828a1 1 0 0 1 0 1.414l-2.122 2.122l-4.242-4.243Z"
      />
    </Svg>
  );
}
