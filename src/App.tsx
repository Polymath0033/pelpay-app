import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Developers from "./pages/Developers";
import Compliances from "./pages/Compliances";
import Root from "./pages/Root";
function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Root />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about-us", element: <About /> },
        { path: "/features", element: <Features /> },
        { path: "/developers", element: <Developers /> },
        { path: "/compliances", element: <Compliances /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
