import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";
import Sidebar from "./Sidebar";
import { SidebarProvider } from "./SidebarContext";

const Layout = ({ children }) => {
  return (
    <>
      <SidebarProvider>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main>
            <Outlet />
          </main>
        </div>
      </SidebarProvider>
    </>
  );
};

export default Layout;
