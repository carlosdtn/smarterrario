import React, { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { CategoryContext } from "../../../context/category-context";
import { categories } from "../../../navigation/screens/utils/mocks";
import { Animal } from "../../../utils/types";
import Subtitle from "../../profile/atoms/subtitle";
import CompactEnvironmentCard from "../molecules/compact-environment-card";
import EmptyList from "../organisms/empty-list";

interface EnvironmentCardProps {
  animals: Animal[] | null;
  navigation?: any;
}

export default function EnviromentSection({
  animals,
  navigation,
}: EnvironmentCardProps) {
  const { index } = useContext(CategoryContext);

  const filteredAnimals = () => {
    if (animals) {
      return animals.filter(
        (animal) => categories.indexOf(animal.animalType) === index
      );
    }
    return [];
  };

  const renderEmptyList = () => {
    return <EmptyList />;
  };

  return (
    <>
      <View style={styles.environmentcontainer}>
        <Subtitle>Entornos</Subtitle>
      </View>
      <View style={styles.grid}>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          keyExtractor={(item) => String(item.id)}
          data={filteredAnimals()}
          renderItem={(render) => (
            <CompactEnvironmentCard
              animal={{
                id: render.item.id,
                name: render.item.title,
                photo: render.item.photo,
              }}
              cardStyle={{ width: "47%", margin: 5, height: "auto" }}
              navigation={navigation}
            />
          )}
          contentContainerStyle={{
            display: "flex",
            minWidth: "100%",
            padding: 8,
          }}
          ListEmptyComponent={renderEmptyList}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  environmentcontainer: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
  },
  grid: {
    display: "flex",
    height: "47%",
  },
});
