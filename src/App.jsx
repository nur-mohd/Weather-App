import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
  },
  {
    path: "/about-us",
    element: <AboutUs/>
  }
]);



function Router() {

  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default Router
