import About from "../pages/About";
import Books from "../pages/Books";
import Home from "../pages/Home";
import Main from "../pages/Main";
import NotFound from "../pages/NotFound";
import Profiles from "../pages/Profiles";

const route = [
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <About />,
      },

      {
        path: "/books",
        element: <Books />,
      },

      {
        path: "/profiles",
        element: <Profiles/>,
      },
    ],
  },
];

export default route;
