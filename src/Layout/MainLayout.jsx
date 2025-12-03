import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import MyContainer from "../Components/MyContainer";
import FooterSection from "../Components/Footer/FooterSection";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>

      <main className="flex-1">
        <MyContainer>
          <Outlet />
        </MyContainer>
      </main>

      <FooterSection />
    </div>
  );
};

export default MainLayout;
