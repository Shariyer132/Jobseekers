import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";

import Home from "../page/Home/Home";
import ErrorPage from "../page/ErrorPage/ErrorPage";

const routes = createBrowserRouter([
    {
        path:'/',
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>
            }
        ]
    }
]);

export default routes;