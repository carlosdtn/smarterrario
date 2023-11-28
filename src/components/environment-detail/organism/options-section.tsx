import React from "react";
import { View } from "react-native";
import IconBulb from "../../icons/bulb/bulb";
import IconDrop from "../../icons/drop/drop";
import IconFan from "../../icons/fan/fan";
import IconSettings from "../../icons/settings/settings";
import Button from "../../ui/button";

interface OptionsSectionProps {
  navigation: any;
  environmentID: string;
}

export default function OptionsSection({
  navigation,
  environmentID,
}: OptionsSectionProps) {
  const handleGoToEdit = () => {
    navigation.push("EditEnvironment", { environmentID });
  };

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
        <IconFan width={20} height={20} color="#686868" />
      </Button>
      <Button
        variant="ghost"
        style={{ backgroundColor: "#D2D2D2", flexGrow: 1 }}
        onPress={handleGoToEdit}
      >
        <IconSettings width={20} height={20} color="#686868" />
      </Button>
    </View>
  );
}
