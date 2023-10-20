//react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//layouts
import HomeLayout from "./layout/HomeLayout";
//pages
import { Home, Premium, Error } from "./pages";
//components
import { ErrorElement } from "./components";
import { LanguageProvider } from "./context/LanguageContext";

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
          errorElement: <ErrorElement />,
        },
        {
          path: "/premium",
          element: <Premium />,
          errorElement: <Error />,
        },
      ],
    },
  ]);
  return (
    <LanguageProvider>
      <>
        <RouterProvider router={routes} />
      </>
    </LanguageProvider>
  );
}
