import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar/Navbar";
import { HelmetProvider } from "react-helmet-async";

const Root = () => {
    return (
        < HelmetProvider>
            <Navbar/>
            <Outlet/>
        </ HelmetProvider>
    );
};

export default Root;