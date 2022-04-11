import {
    combineReducers,
    createStore,
  } from "redux";
import { launchList } from "./launchList/reducers";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const reducers = combineReducers({
    launchList
})

const persistConfig = {
    key: "root2",
    storage: AsyncStorage,
    version: 1,
    timeout: 10000,
  };

  const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
    persistedReducer,
  );

const persistor = persistStore(store);

export default { store, persistor };
