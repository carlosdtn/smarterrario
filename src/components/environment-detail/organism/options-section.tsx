import { View, Text } from "react-native";
import React from "react";
import Button from "../../ui/button";
import IconBulb from "../../icons/bulb/bulb";
import IconDrop from "../../icons/drop/drop";
import IconSettings from "../../icons/settings/settings";

export default function OptionsSection() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 15,
        width: "90%",
        alignItems: "center",
      }}
    >
      <Button
        variant="ghost"
        style={{ backgroundColor: "#D2D2D2", flexGrow: 1 }}
      >
        <IconBulb width={20} height={20} color="#686868" />
      </Button>
      <Button
        variant="ghost"
        style={{ backgroundColor: "#D2D2D2", flexGrow: 1 }}
      >
        <IconDrop width={20} height={20} color="#686868" />
      </Button>
      <Button
        variant="ghost"
        style={{ backgroundColor: "#D2D2D2", flexGrow: 1 }}
      >
        <IconSettings width={20} height={20} color="#686868" />
      </Button>
    </View>
  );
}
