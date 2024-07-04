import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomeContent from "./components/HomeContent";
import Products from "./components/Products";
import "./App.css";
import About from "./components/About";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomeContent />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/products",
          element: <Products />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
