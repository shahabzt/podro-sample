import { createBrowserRouter } from "react-router-dom";
import Login from "./login/Login";
import Search from "./search/Search";

const AppRouter = createBrowserRouter([
  {
    path: `/`,
    element: <Login/>,
  },
 
  {
    path:`/search`,
    element:<Search/>
  }
]);

export default AppRouter;
