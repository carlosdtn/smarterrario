import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserDoc } from "../../../utils/types";

interface UserState {
  user: UserDoc | null;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserDoc>) {
      state.user = action.payload;
    },
    clearUser(state) {
      state.user = null;
    },
    updateUserLocation(
      state,
      action: PayloadAction<{
        location: string;
      }>
    ) {
      const { location } = action.payload;
      state.user = {
        ...(state.user as Omit<UserDoc, "location">),
        location,
      };
    },
  },
});

export const { setUser, clearUser, updateUserLocation } = userSlice.actions;
export default userSlice.reducer;
