import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";

import Home from "../page/Home/Home";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import AddJobs from "../page/AddJobs/AddJobs";

const routes = createBrowserRouter([
    {
        path:'/',
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/addJob',
                element:<AddJobs/>
            }
        ]
    }
]);

export default routes;