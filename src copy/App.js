import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./page/Layout";
import Signin from "./page/Signin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
      </Routes>
    </>
  );
}

export default App;
