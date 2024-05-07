import { createBrowserRouter } from "react-router-dom";
import Login from "./login/Login";

const AppRouter = createBrowserRouter([
  {
    path: `/`,
    element: <Login/>,
  },
 
  {
    path:`/farhad`,
    element:<>dadashi joon</>
  }
]);

export default AppRouter;
