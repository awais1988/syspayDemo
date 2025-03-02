import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import dashboardReducer from "./dashboard/dashboardReducer";

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
