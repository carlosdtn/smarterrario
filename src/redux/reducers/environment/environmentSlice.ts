import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Animal } from "../../../utils/types";

interface EnvironmentState {
  environment: Animal[] | null;
}

const initialState: EnvironmentState = {
  environment: null,
};

const environmentSlice = createSlice({
  name: "environment",
  initialState,
  reducers: {
    setEnvironment(state, action: PayloadAction<Animal[]>) {
      state.environment = action.payload;
    },
    clearEnvironment(state) {
      state.environment = null;
    },
  },
});

export const { setEnvironment, clearEnvironment } = environmentSlice.actions;
export default environmentSlice.reducer;
