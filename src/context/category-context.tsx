import React, { createContext, useState } from "react";
import { AnimalType } from "../utils/types";

export const CategoryContext = createContext({
  index: 0,
  setIndex: (index: number) => {},
});

export const CategoryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [index, setIndex] = useState<number>(0);

  return (
    <CategoryContext.Provider value={{ index, setIndex }}>
      {children}
    </CategoryContext.Provider>
  );
};
