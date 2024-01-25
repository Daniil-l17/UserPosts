import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer } from "./slice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' ;
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { api } from "../api/api";

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['api']
}


  const combainer = combineReducers({
    post: reducer,
    [api.reducerPath]: api.reducer,
  })

  const persistedReducer = persistReducer(persistConfig, combainer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export const persistor = persistStore(store)