import { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import UserService from "../../../services/user/user-service";
import { FIREBASE_AUTH } from "../../../services/firebase-config";
import { UserDoc } from "../../../utils/types";
import IconCheck from "../../icons/check/check";
import IconPencil from "../../icons/pencil/pencil";
import Button from "../../ui/button";
import ImageUploader from "../../ui/image-uploader";
import Input from "../../ui/input";

interface AvatarSectionProps {
  user: UserDoc | null;
}

export default function AvatarSection({ user }: AvatarSectionProps) {
  const MIN_NAME_LENGTH = 3;
  const MAX_NAME_LENGTH = 20;
  const inputRef = useRef<TextInput>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [name, setName] = useState<string>(user?.name || "");
  const FBUser = new UserService(FIREBASE_AUTH.currentUser);

  const handleNameEdit = () => {
    FBUser.updateUser(user, "name", name);

    if (name.length === 0) {
      alert("El nombre no puede estar vacío");
    } else if (name.length < MIN_NAME_LENGTH) {
      alert(`El nombre no puede tener menos de ${MIN_NAME_LENGTH} caracteres`);
    } else if (name.length > MAX_NAME_LENGTH) {
      alert(`El nombre no puede tener más de ${MAX_NAME_LENGTH} caracteres`);
    } else {
      setIsEditing(!isEditing);
    }
  };

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
    }
  }, [isEditing]);

  return (
    <>
      <ImageUploader
        currentImage={user?.photo}
        onChange={(uri) => FBUser.updateUserAvatar(user, uri)}
        isUser
      />
      <View style={styles.avatarNameContainer}>
        <Input
          styleInput={styles.avatarInput}
          defaultValue={name}
          styleContainer={{ width: "auto" }}
          placeholder=""
          disabled={isEditing}
          onChangeText={(text) => setName(text.trim())}
          ref={inputRef}
        />
        <Button style={styles.avatarEditPencil} onPress={handleNameEdit}>
          {!isEditing ? (
            <IconPencil width="28" height="28" color="#0BA360" />
          ) : (
            <>
              <IconCheck width="28" height="28" color="#0BA360" />
              <Text style={styles.hidden}>.</Text>
            </>
          )}
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  avatarContainer: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 100,
  },
  avatarImage: {
    width: 130,
    height: 130,
    borderRadius: 100,
    position: "relative",
  },
  avatarNameContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingLeft: 30,
  },
  avatarEditPencil: {
    backgroundColor: "transparent",
    borderWidth: 0,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  avatarInput: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    color: "gray",
    display: "flex",
    flexDirection: "row",
    width: "auto",
    borderColor: "gray",
    borderBottomWidth: 0,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    paddingVertical: 2,
  },
  hidden: {
    fontSize: 0,
  },
  avatarImageEdit: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#0BA360",
    borderRadius: 100,
    paddingVertical: 2,
    paddingHorizontal: 2,
  },
});
