import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import MyContainer from "../Components/MyContainer";
import FooterSection from "../Components/Footer/FooterSection";


const MainLayout = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="m-10">
        <MyContainer>
          <Outlet></Outlet>
        </MyContainer>
      </main>
      
        <FooterSection></FooterSection>
     
    </div>
  );
};

export default MainLayout;
