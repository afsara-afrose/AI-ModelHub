import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import MyContainer from "../Components/MyContainer";


const MainLayout = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <MyContainer>
          <Outlet></Outlet>
        </MyContainer>
      </main>
      
        
     
    </div>
  );
};

export default MainLayout;
