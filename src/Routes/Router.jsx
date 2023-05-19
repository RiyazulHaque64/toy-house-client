import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import AddToy from "../Pages/AddToy/AddToy";
import PrivateRoute from "../Routes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "signup",
        element: <Registration />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "addToy",
        element: (
          <PrivateRoute>
            <AddToy />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
