import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  Trophy,
  LogIn,
  UserPlus,
  LogOut,
  PhoneCall,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Sidebar = () => {
  const { handleLogout, isAuthenticated } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigation = [
    { name: "Home", icon: Home, path: "/" },
    { name: "Contacts", icon: PhoneCall, path: "/contact" },

    ...(isAuthenticated
      ? [{ name: "Leaderboard", icon: Trophy, path: "/leaderboard" }]
      : [
          { name: "Login", icon: LogIn, path: "/login" },
          { name: "Register", icon: UserPlus, path: "/register" },
        ]),
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <aside className={`${location === "game" ? "hidden" : "block"}`}>
      {/* Hamburger menu - removed lg:hidden */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-blue-900 text-white hover:bg-blue-800"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Backdrop - removed lg:hidden */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar - removed lg:translate-x-0 */}
      <div
        className={`
        fixed top-0 left-0 h-full bg-blue-600 text-white z-40
        transform transition-transform duration-300 ease-in-out
        w-64
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 flex mt-16 gap-4 flex-col items-center justify-center">
            <img src="./logo.png" alt="logo" className="size-32 rounded-full" />
            <h2 className="text-2xl font-bold text-center mb-8">PeerLend</h2>
          </div>

          <nav className="flex-1">
            <ul className="space-y-2 px-4">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;

                return (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`
                        flex items-center space-x-3 p-3 rounded-lg
                        transition-colors duration-200
                        ${
                          isActive
                            ? "bg-white text-blue-600"
                            : "hover:bg-blue-800 text-gray-300 hover:text-white"
                        }
                      `}
                    >
                      <Icon size={20} />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {isAuthenticated && (
            <div
              onClick={handleLogout}
              className="p-4 flex items-center justify-center gap-4 border-t cursor-pointer bg-red-500 border-gray-800"
            >
              <LogOut className="text-red-100" size={20} />
              <p className="text-base  text-red-100 font-semibold  text-center">
                Logout
              </p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
