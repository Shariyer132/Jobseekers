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
            },
            {
                path: "/jobs/:id",
                element: <JobDetails/>,
                loader:()=>fetch('http://localhost:5000/jobs')
            },
            {
                path: "/bidRequest",
                element: <BidReguest/>,
                // loader:()=>fetch('http://localhost:5000/jobs')
            },
            {
                path: "/myBids",
                element: <MyBids/>,
                // loader:()=>fetch('http://localhost:5000/jobs')
            },
            {
                path: "/myPostedJobs",
                element:<MyPostedJobs/>,
                // loader:()=>fetch('http://localhost:5000/jobs')
            },
            
        ]
    }
]);

export default routes;