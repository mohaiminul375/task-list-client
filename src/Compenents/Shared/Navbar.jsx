import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  // get user form authProvider
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
  };

  // console.log(user?.email);
  return (
    <div className="navbar bg-[#141C27] text-[#00FFEE] h-20  px-8 fixed shadow-md shadow-[#55E6A5] z-30">
      <div className="navbar-start">
        <h4 className="md:hidden text-xl font-bold font-playwrite-hr">
          TO-DO-List
        </h4>
      </div>
      <div className="navbar-center hidden md:flex">
        <div className="px-8 py-2">
          <h2 className="text-4xl font-bold font-playwrite-hr">To-Do-List</h2>
        </div>
      </div>
      <div className="navbar-end gap-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "font-bold underline text-xl" : "text-xl"
          }
        >
          Home
        </NavLink>
        {user ? (
          <>
            <h2>{user?.displayName}</h2>
            <button
              onClick={handleLogout}
              className="p-2 border-2 rounded-2xl font-bold  hover:bg-[#00FFEE]  hover:text-black"
            >
              LogOut
            </button>
          </>
        ) : (
          <div className="flex gap-5 text-xl">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "font-bold underline" : ""
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive ? "font-bold underline" : ""
              }
            >
              Register
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
