import { Link } from "react-router-dom";
import { SidebarContext } from "./SidebarContext";
import { useContext } from "react";
import HRM_Icon from "../../assets/icons/HRM.icon.png";

const Sidebar = () => {
  const { isOpen } = useContext(SidebarContext);
  return (
    <>
      <aside
        className={`
            fixed left-0 top-16 z-30
            w-70 h-[calc(100vh-4rem)]
            transform transition-transform duration-300 ease-in-out
            ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        aria-label="Sidenav"
      >
        <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r-2 border-gray-400">
          <ul className="space-y-2">
            <li>
              <Link to="/dashboard">
                <a className="flex items-center p-2 text-base font-semibold rounded-lg hover:bg-gray-200 group hover:text-blue-500">
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    xmlns="http://www.w3.org00/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-3">Dashboard</span>
                </a>
              </Link>
              <Link to="/hrm">
                <a
                  href="/hrm"
                  className="flex items-center p-2 text-base font-semibold rounded-lg hover:bg-gray-200 group hover:text-blue-500"
                >
                  <img
                    className="w-6 h-6"
                    aria-hidden="true"
                    src={HRM_Icon}
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  ></img>
                  <span className="ml-3">HRM</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};
export default Sidebar;
