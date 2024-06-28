import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import ProjectsPage from "./pages/ProjectsPage.tsx";

import "./styles/app.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  { path: "/contact", element: <ContactPage /> },
  { path: "/projects", element: <ProjectsPage /> },
  {},
]);

ReactDOM.createRoot(document.getElementById("body")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
