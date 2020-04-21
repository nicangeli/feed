import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import tweetsReducer from "./features/tweets/tweetsSlice";

const rootReducer = combineReducers({
  tweets: tweetsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
