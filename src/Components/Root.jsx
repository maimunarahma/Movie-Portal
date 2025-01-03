import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";


const Root = () => {
    return (
        <div className="dark:bg-gray-900 text-gray-900 dark:text-gray-200">
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        
        </div>
    );
};

export default Root;