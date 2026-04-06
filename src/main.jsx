import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";

import "./App.css";
import { RouterProvider } from "react-router";
import { router } from "./component/Routes/Routes.jsx";
import BookProvider from "./context/BookContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BookProvider>
      <RouterProvider router={router}></RouterProvider>
    </BookProvider>
    <ToastContainer></ToastContainer>
  </StrictMode>,
);
