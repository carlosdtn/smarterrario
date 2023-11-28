import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import environmentReducer from "./environment/environmentSlice";

const rootReducer = combineReducers({
  user: userReducer,
  environment: environmentReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
