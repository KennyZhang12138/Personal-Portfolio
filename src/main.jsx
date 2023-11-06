import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//Bring in the appropriate imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Bringing in the pages the router will use to conditionally show the appropriate views
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Error from "./pages/Error.jsx";
import Contact from "./pages/Contact.jsx";
import Project from "./pages/Project.jsx";
import Resume from "./pages/Resume.jsx";

const router = createBrowserRouter([
  //Define the accessible routes, and which components respond to which URL
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Project",
        element: <Project />,
      },
      {
        path: "/Resume",
        element: <Resume />,
      },
      { path: "*", element: <Home /> },
    ],
  },
]);
// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
