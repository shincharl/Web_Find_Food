import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Screen from "./components/screen";
import Sidebar from "./components/sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);
  return (
    <>
      <Header toggleSidebar={toggleSidebar}></Header>
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <Screen></Screen>
      <Footer>푸터입니다.</Footer>
    </>
  );
}

export default App;
