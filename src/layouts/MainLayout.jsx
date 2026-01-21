import { Outlet } from "react-router-dom";
import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from "../components/Footer.jsx";

const MainLayout = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div className="min-h-[calc(100vh-200px)]">
            <Outlet />
        </div>
        <Footer></Footer> 

    </div>
  )
}

export default MainLayout