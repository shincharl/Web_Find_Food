import {Outlet} from "react-router-dom"
import Header from "../components/header";
import Footer from "../components/footer";
import Screen from "../components/screen";
import Sidebar from "../components/sidebar";
import { useState } from "react";
const Layout = () =>{
      const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
      const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
      const closeSidebar = () => setIsSidebarOpen(false);
    return(
        <>
            <Header toggleSidebar={toggleSidebar}></Header>
            <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
            <Screen>
                <Outlet/>
            </Screen>
            <Footer></Footer>
        </>
    );
}

export default Layout;