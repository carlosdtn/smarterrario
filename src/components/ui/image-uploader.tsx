import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";
import { Image, Platform, StyleSheet, View } from "react-native";
import IconUpload from "../icons/upload/upload";
import Button from "./button";

interface ImageUploaderProps {
  currentImage?: string;
  onChange: (image: string) => void;
  isUser?: boolean;
}

export default function ImageUploader({
  currentImage,
  onChange,
  isUser,
}: ImageUploaderProps) {
  const [image, setImage] = useState<string>("");
  const defaultImage = () => {
    if (isUser) {
      return require("../../../assets/user-placeholder.png");
    } else {
      return require("../../../assets/environment-placeholder.png");
    }
  };

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const handleImagePicker = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const updatedImage = result.assets[0].uri;
      setImage(updatedImage);
      onChange(updatedImage);
    }
    if (result.canceled) {
      setImage("");
      onChange("");
    }
  };

  const showImage = () => {
    if (image) {
      return { uri: image };
    } else if (currentImage) {
      return { uri: currentImage };
    } else {
      return defaultImage();
    }
  };

  return (
    <View style={styles.inputContainer}>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatarImage} source={showImage()} />
        <Button style={styles.avatarImageEdit} onPress={handleImagePicker}>
          <IconUpload width="24" height="24" color="white" />
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatarImageEdit: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#0BA360",
    borderRadius: 100,
    paddingVertical: 2,
    paddingHorizontal: 2,
  },
  inputContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  avatarContainer: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 100,
    width: "auto",
  },
  avatarImage: {
    width: 130,
    height: 130,
    borderRadius: 100,
    position: "relative",
  },
});
