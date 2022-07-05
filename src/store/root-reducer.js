import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";

export const rootReucer = combineReducers({
  user: userReducer,
});
