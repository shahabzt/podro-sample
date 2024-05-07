import { RouterProvider } from "react-router-dom";
import "./App.css";
import AppRouter from "./pages/AppRouter";
import { Layout } from "./styles/Layout";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store/store";

function App() {
  return (
    <Layout>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={AppRouter} />
      </PersistGate>
      </Provider>
    </Layout>
  );
}

export default App;
