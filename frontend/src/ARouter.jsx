import Home from "./Pages/Home";
import Blogpost from "./Pages/Blogpost";
import Blog from "./Pages/Blog";
import Signin from "./Pages/Signin";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./Pages/Signup";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/:id", element: <Home /> },
  { path: "/Blogpost", element: <Blogpost /> },
  { path: "/Blog", element: <Blog /> },
  { path: "/Signin", element: <Signin /> },
  { path: "/Signup", element: <Signup /> },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
