import { configureStore } from "@reduxjs/toolkit";
import drawerReducer from "./drawer/drawerSlice";
import { clientApi } from "./services/user";

export const store = configureStore({
  reducer: {
    drawer: drawerReducer,
    [clientApi.reducerPath]: clientApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(clientApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
