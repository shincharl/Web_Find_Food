import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./page/Layout";
import Signin from "./page/Signin";
//import Signup from "./page/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        {/* <Route path="/signup" element={<Signup />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
