import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";

import Home from "../page/Home/Home";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import AddJobs from "../page/AddJobs/AddJobs";
import JobDetails from "../components/CategoryJobs/JobDetails";
import BidReguest from "../page/BidRequest/BidReguest";
import MyBids from "../page/MyBids/MyBids";
import MyPostedJobs from "../page/MyPostedJobs/MyPostedJobs";
import PrivateRoutes from "./PrivateRoute";

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
                element:<PrivateRoutes><AddJobs/></PrivateRoutes>
            },
            {
                path: "/jobs/:id",
                element: <PrivateRoutes><JobDetails/></PrivateRoutes>,
                loader:()=>fetch('https://assignment-eleventh-server-wheat.vercel.app/jobs')
            },
            {
                path: "/bidRequest",
                element: <PrivateRoutes><BidReguest/></PrivateRoutes>
            },
            {
                path: "/myBids",
                element: <PrivateRoutes><MyBids/></PrivateRoutes>,
            },
            {
                path: "/myPostedJobs",
                element:<PrivateRoutes><MyPostedJobs/></PrivateRoutes>,
            },
            
        ]
    }
]);

export default routes;