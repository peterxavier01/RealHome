import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
