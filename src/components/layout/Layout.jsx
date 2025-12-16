import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { SidebarProvider, SidebarContext } from "./SidebarContext";
import { useContext } from "react";

const LayoutContent = () => {
  const { isOpen } = useContext(SidebarContext);

  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main
          className={`
            flex-1 transition-all duration-300 ease-in-out pt-16
            ${isOpen ? "ml-70" : "ml-0"}
          `}
        >
          <Outlet />
        </main>
      </div>
    </>
  );
};

export const Layout = () => {
  return (
    <SidebarProvider>
      <LayoutContent />
    </SidebarProvider>
  );
};
