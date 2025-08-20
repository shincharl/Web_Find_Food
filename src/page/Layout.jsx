import {Outlet} from "react-router-dom"
import Header from "../components/header";
import Footer from "../components/footer";
import Screen from "../components/screen";
import Sidebar from "../components/sidebar";
import { useState } from "react";
import {useNavigate, useLocation} from "react-router-dom";

const Layout = () =>{

     // 로그인 상태 관리 1
      const location = useLocation();
      const navigate = useNavigate();

      // 로그인 시 전달된 userData를 상태로 관리
      // 여기서 느낀점 : 각각 상태로 넘어가게 따로 파일을 만들어 데이터 넘어가는것만 관리할 수도 있겠다....
      // 여기서 느낀점 : 근데 리덕스 공부하니까 그냥 전역으로 리덕스에서 관리할것 같다... 로그인 정보는 전역으로 사용하니까
       const [userData, setUserData] = useState(location.state?.userData || null); 

      const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
      const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
      const closeSidebar = () => setIsSidebarOpen(false);

      // 로그인 상태 관리 2
      const handleLogout = () =>{
        setUserData(null);
        navigate("/");
      }

    return(
        <>
            <Header toggleSidebar={toggleSidebar} userData = {userData} onLogout={handleLogout}></Header>
            <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} userData = {userData} onLogout = {handleLogout} />
            <Screen>
                <Outlet/>
            </Screen>
            <Footer></Footer>
        </>
    );
}

export default Layout;