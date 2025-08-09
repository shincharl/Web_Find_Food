import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./page/Layout";
import Signin from "./page/Signin";
import Reservation from "./page/Reservation";
import Home from "./page/Home";
import Service from "./page/Service";
//import Signup from "./page/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/*기본 홈 페이지*/}
          <Route path="reservation" element={<Reservation />} />
          <Route path="service" element={<Service />} />
        </Route>
        {/*중첩 라우트의 path는 절대 경로가 아닌 상대경로를 써야 한다.*/}
        <Route path="/signin" element={<Signin />} />
        {/* <Route path="/signup" element={<Signup />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
