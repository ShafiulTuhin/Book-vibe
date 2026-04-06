import { StrictMode, useContext } from "react";
import { createRoot } from "react-dom/client";

import "./App.css";
import { RouterProvider } from "react-router";
import { router } from "./component/Routes/Routes.jsx";
import BookProvider from "./context/BookCOntext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BookProvider>
      <RouterProvider router={router}></RouterProvider>
    </BookProvider>
  </StrictMode>,
);
