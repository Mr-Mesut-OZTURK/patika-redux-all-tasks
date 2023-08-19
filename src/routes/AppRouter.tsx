/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Contact, Home, Profile, Tasks } from "src/pages";
import { MainLayout } from "src/layout";

import apps from "src/apps";


const routes = {
  main: ['home', 'tasks', 'contact'],
  settings: ['profile', 'logout'],
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout routes={routes}>
        <Outlet />
      </MainLayout>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/tasks",
        element: <Tasks />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },



      ...(
        apps?.map((item) => ({
          path: `/tasks/${item?.path}`,
          element: item?.element
        }))
      )


    ],
  },



]);

const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default AppRouter;
