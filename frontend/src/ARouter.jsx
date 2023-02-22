import Home from "./Pages/Home";
import Blogpost from "./Pages/Blogpost";
import Blog from "./Pages/Blog";
// import SmallBlog from "./comp/SmallBlog";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:id",
    element: <Home />,
  },
  {
    path: "/Blogpost",
    element: <Blogpost />,
  },
  {
    path: "/Blog",
    element: <Blog />,
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
