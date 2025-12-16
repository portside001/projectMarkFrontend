import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useDropDown from "../../hook/useDropDown";
import { LogOut } from "lucide-react";
import Modal from "../Modal";

export const Profile = () => {
  const {
    isOpen: openUserMenu,
    toggleMenu: toggleUserMenu,
    menuRef,
  } = useDropDown();

  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  const handleConfirmLogout = () => {
    localStorage.removeItem("token");
    setShowLogoutModal(false);
    navigate("/");
  };

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
            src="https://www.clipartmax.com/png/middle/344-3447146_references-dun-rite-i-person-icon-png.png"
            alt=""
            className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
          />
        </button>

        {openUserMenu && (
          <div
            anchor="bottom end"
            // popover
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
              onClick={() => setShowLogoutModal(true)}
              className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-200 hover:text-blue-600"
            >
              Sign out
            </a>
          </div>
        )}
      </div>
      <Modal
        show={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        title="Confirm Logout"
        icon={<LogOut className="text-red-600" size={24} />}
        onConfirm={handleConfirmLogout}
        confirmText="Logout"
        cancelText="Cancel"
        confirmClassName="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors"
      >
        <p>Are you sure you want to log out? You will need to login again.</p>
      </Modal>
    </>
  );
};

export default Profile;
