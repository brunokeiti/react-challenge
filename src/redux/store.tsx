import { configureStore } from "@reduxjs/toolkit";
import drawerReducer from "./drawer/drawerSlice";
import { clientApi } from "./services/client";
import { marketDataApi } from "./services/marketData";

export const store = configureStore({
  reducer: {
    drawer: drawerReducer,
    [clientApi.reducerPath]: clientApi.reducer,
    [marketDataApi.reducerPath]: marketDataApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(clientApi.middleware)
      .concat(marketDataApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
