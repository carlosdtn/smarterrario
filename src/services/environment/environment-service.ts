import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import store from "../../redux/store";
import { Animal, UserFB } from "../../utils/types";
import { FIREBASE_DB, FIREBASE_STORAGE } from "../firebase-config";
import {
  clearEnvironment,
  setEnvironment,
} from "../../redux/reducers/environment/environmentSlice";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

class EnvironmentService {
  private user: UserFB | null;

  constructor(user: UserFB | null) {
    this.user = user;
  }

  async getEnvironments() {
    try {
      store.dispatch(clearEnvironment());
      if (this.user) {
        const uid = this.user.uid;
        const environmentsCollectionRef = collection(
          FIREBASE_DB,
          "users",
          uid,
          "environments"
        );
        const environmentsCollectionSnapshot = await getDocs(
          environmentsCollectionRef
        );

        if (environmentsCollectionSnapshot.docs.length > 0) {
          const environmentList = environmentsCollectionSnapshot.docs.map(
            (doc) => ({
              id: doc.id,
              ...doc.data(),
            })
          );
          store.dispatch(setEnvironment(environmentList as Animal[]));
        } else {
          console.log(
            "No se encontraron datos adicionales para el usuario en Firestore."
          );
        }
      }
    } catch (error) {
      console.error("Error al recuperar datos", error);
    }
  }

  async getEnvironmentById(id: string) {
    try {
      if (this.user) {
        const uid = this.user.uid;
        const environmentDocRef = doc(
          FIREBASE_DB,
          "users",
          uid,
          "environments",
          id
        );

        const environmentDocSnapshot = await getDoc(environmentDocRef);
        if (environmentDocSnapshot.exists()) {
          const environment = environmentDocSnapshot.data() as Animal;
          return environment;
        }
      }
    } catch (error) {
      console.error("Error al recuperar datos", error);
    }
  }

  async createEnvironment(environment: Animal) {
    try {
      if (!environment.photo) {
        environment.photo = "";
      } else {
        const response = await fetch(environment.photo);
        const blob = await response.blob();
        const eid = `${environment.title}-${this.user?.uid}`;
        const storageRef = ref(FIREBASE_STORAGE, `/images/${eid}`);
        await uploadBytes(storageRef, blob);
        environment.photo = await getDownloadURL(storageRef);
      }
      // route /users/{userId}/environments/{animalId}
      if (this.user) {
        const unixEpoch = Date.now();
        const eid = `${unixEpoch}-${this.user.uid}`;
        await setDoc(
          doc(FIREBASE_DB, "users", this.user.uid, "environments", eid),
          {
            id: eid,
            title: environment.title,
            description: environment.description,
            photo: environment.photo,
            animalType: environment.animalType,
            apiKey: environment.apiKey,
            channel: environment.channel,
          }
        );
      }
    } catch (error) {
      throw new Error("Error al crear el entorno");
    }
  }

  async updateEnvironment(environment: Animal) {
    try {
      if (!environment.photo) {
        environment.photo = "";
      } else {
        const response = await fetch(environment.photo);
        const blob = await response.blob();
        const eid = `${environment.title}-${this.user?.uid}`;
        const storageRef = ref(FIREBASE_STORAGE, `/images/${eid}`);
        await uploadBytes(storageRef, blob);
        environment.photo = await getDownloadURL(storageRef);
      }
      // route /users/{userId}/environments/{animalId}
      if (this.user) {
        const eid = environment.id;
        await setDoc(
          doc(FIREBASE_DB, "users", this.user.uid, "environments", eid),
          {
            id: eid,
            title: environment.title,
            description: environment.description,
            photo: environment.photo,
            animalType: environment.animalType,
            apiKey: environment.apiKey,
            channel: environment.channel,
          }
        );
      }
    } catch (error) {
      throw new Error("Error al actualizar el entorno" + error);
    }
  }
}

export default EnvironmentService;
