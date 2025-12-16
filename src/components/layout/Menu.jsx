import React, { useContext } from "react";
import { SidebarContext } from "./SidebarContext";

const Menu = () => {
  const { isOpen: isOpen, toggleSidebar: toggleSidebar } =
    useContext(SidebarContext);
  return (
    <>
      <button
        type="button"
        className="relative inline-flex 
                            rounded-md p-2 text-white 
                            hover:bg-white/30 hover:text-white
                            transition-colors duration-200
                            focus:outline-none focus:ring-2 focus:ring-white/30 "
        onClick={toggleSidebar}
      >
        <span className="absolute -inset-0.5"></span>
        <span className="sr-only">Open main menu</span>
        {!isOpen ? (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            data-slot="icon"
            aria-hidden="true"
            className="size-6"
          >
            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            data-slot="icon"
            aria-hidden="true"
            className="size-6"
          >
            <path d="M6 18 18 6M6 6l12 12" />
          </svg>
        )}
      </button>
    </>
  );
};

export default Menu;
