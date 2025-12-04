import React, { useState, useRef, useEffect, use } from "react";
import useDropDown from "../../hook/useDropDown";

export const Profile = () => {
  const {
    isOpen: openUserMenu,
    toggleMenu: toggleUserMenu,
    menuRef,
  } = useDropDown();
  return (
    <>
      {/*  user profile */}
      <div className="relative ml-3" ref={menuRef}>
        <button
          onClick={toggleUserMenu}
          className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          <span className="absolute -inset-1.5"></span>
          <span className="sr-only">Open user menu</span>
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
            className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
          />
        </button>

        {openUserMenu && (
          <div
            anchor="bottom end"
            popover
            className="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-md bg-white shadow-[0_6px_20px_rgba(0,0,0,0.08)] py-1 outline -outline-offset-1 outline-white/10 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
          >
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-200 hover:text-blue-600"
            >
              Your profile
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-200 hover:text-blue-600"
            >
              Settings
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-200 hover:text-blue-600"
            >
              Sign out
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
