import React from "react";
import Navbar from "./components/Navbar";
import ProjectPage from "./components/ProjectPage";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./home/HomePage";
import Login from "./login/Login";

function App() {
  // const [data, setData] = React.useState("")
  const username = localStorage.getItem("username")

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" Component={HomePage}/>
        {username ? 
        <Route path="/projects" Component={ProjectPage}/> :
        <Route path="/login" Component={Login}/>
      }
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
