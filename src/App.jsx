import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import { Home, Premium, Error } from "./pages";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <Home />,
          // loader: landingLoader,
          errorElement: <Error />,
        },
        {
          path: "/premium",
          element: <Premium />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

