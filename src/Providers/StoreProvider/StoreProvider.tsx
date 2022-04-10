import React, { PropsWithChildren } from "react";
import { Provider as ReduxProvider } from "react-redux";
import "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import store from "../../store/store";

const Provider = ({ children }: PropsWithChildren<{}>) => (
  <ReduxProvider store={store.store}>
    <PersistGate loading={null} persistor={store.persistor}>
      {children}
    </PersistGate>
  </ReduxProvider>
);

export default Provider;
