import { doc, getDoc, updateDoc } from "firebase/firestore";
import {
  clearUser,
  setUser,
  updateUserLocation,
} from "../../redux/reducers/user/userSlice";
import store from "../../redux/store";
import { UserDoc, UserFB } from "../../utils/types";
import { FIREBASE_DB, FIREBASE_STORAGE } from "../firebase-config";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";

class UserService {
  private user: UserFB | null;

  constructor(user: UserFB | null) {
    this.user = user;
  }

  async getUser() {
    try {
      store.dispatch(clearUser());
      if (this.user) {
        const uid = this.user.uid;
        const userDocRef = doc(FIREBASE_DB, "users", uid);
        const userDocSnapshot = await getDoc(userDocRef);

        if (userDocSnapshot.exists()) {
          const userData = userDocSnapshot.data() as UserDoc;
          store.dispatch(setUser(userData));
        } else {
          console.log(
            "No se encontraron datos adicionales para el usuario en Firestore."
          );
        }
      }
    } catch (error) {
      console.error("Error al recuperar datos adicionales del usuario:", error);
    }
  }

  async updateUser(user: UserDoc | null, fielName: string, value: string) {
    try {
      if (this.user && user) {
        const uid = this.user.uid;
        const userDocRef = doc(FIREBASE_DB, "users", uid);
        await updateDoc(userDocRef, {
          ...user,
          [fielName]: value,
        });
        store.dispatch(setUser({ ...user, [fielName]: value }));
      }
    } catch (error) {
      console.error(
        "Error al actualizar datos adicionales del usuario:",
        error
      );
    }
  }

  async updateUserAvatar(user: UserDoc | null, photo: string | null) {
    try {
      if (this.user && user) {
        const oldPhotoUrl = user.photo;
        if (oldPhotoUrl) {
          const oldPhotoRef = ref(
            FIREBASE_STORAGE,
            `/profile_photos/${oldPhotoUrl}`
          );
          await deleteObject(oldPhotoRef);
        }
        if (!photo) {
          photo = "";
        } else {
          const response = await fetch(photo);
          const blob = await response.blob();
          const eid = `${user.name}-${this.user?.uid}`;
          const storageRef = ref(FIREBASE_STORAGE, `/profile_photos/${eid}`);
          await uploadBytes(storageRef, blob);
          photo = await getDownloadURL(storageRef);
          // Update photo url in users collection
          const uid = this.user.uid;
          const userDocRef = doc(FIREBASE_DB, "users", uid);
          await updateDoc(userDocRef, {
            ...user,
            photo,
          });
          store.dispatch(setUser({ ...user, photo }));
        }
      }
    } catch (error) {
      console.log("No se pudo actualizar el avatar del usuario:", error);
    }
  }

  async updateGeneralData({
    location,
    password,
  }: {
    location: string;
    password: string | null;
  }) {
    try {
      if (this.user) {
        const uid = this.user.uid;
        const userDocRef = doc(FIREBASE_DB, "users", uid);
        if (password === "") {
          await updateDoc(userDocRef, {
            location,
          });
          store.dispatch(updateUserLocation({ location }));
        }
      }
    } catch (error) {
      console.error(
        "Error al actualizar datos adicionales del usuario:",
        error
      );
    }
  }
  catch(error: any) {
    console.error("Error al actualizar datos adicionales del usuario:", error);
  }
}

export default UserService;
