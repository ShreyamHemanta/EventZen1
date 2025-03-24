import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/events", element: <Events /> },
  { path: "/events/:id", element: <EventDetails /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);

export default router;
