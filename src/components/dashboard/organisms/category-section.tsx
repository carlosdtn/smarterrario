import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { AnimalType } from "../../../utils/types";
import AnimalTypeCard from "../molecules/animal-type-card";
import { CategoryContext } from "../../../context/category-context";

interface AnimalTypeCardProps {
  categories: AnimalType[];
}

export default function CategorySection({ categories }: AnimalTypeCardProps) {
  const { setIndex } = useContext(CategoryContext);
  return (
    <View style={styles.categoryContainer}>
      {categories.map((category, index) => (
        <AnimalTypeCard
          key={index}
          animalType={category}
          onPress={() => setIndex(index)}
          selectedCard={categories.indexOf(category)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  categoryContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    width: "90%",
  },
});
