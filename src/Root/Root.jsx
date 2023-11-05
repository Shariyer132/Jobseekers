import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar/Navbar";
import Header from "../components/Header/Header";

const Root = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Root;