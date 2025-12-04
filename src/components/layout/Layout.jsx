import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    // debugger;
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {/* <div className="flex pt-16"> */}
      <div className="flex">
        <Sidebar isOpen={isOpen} />

        {/* </div> */}
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
