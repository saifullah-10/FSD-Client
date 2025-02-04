import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import Root from "./Root.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <Root />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
