import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  REHYDRATE,
  persistReducer,
  persistStore,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import setPhoneNumberReducer from "./reducers/verificationReducer";
import locationListReducer from "./reducers/locationListReducer";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["setPhoneNumber"],
};

const rootReducer = combineReducers({
  setPhoneNumber: setPhoneNumberReducer,
  locationList: locationListReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
