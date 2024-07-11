import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-[#141C27] text-[#00FFEE] h-20  px-8 fixed shadow-md shadow-[#55E6A5]">
      <div className="navbar-start">
        
       <h4 className="md:hidden text-xl font-bold font-playwrite-hr">TO-DO-List</h4>
      </div>
      <div className="navbar-center hidden md:flex">
        <div className="px-8 py-2">
         <h2 className="text-4xl font-bold font-playwrite-hr">To-Do-List</h2>
        </div>
      </div>
      <div className="navbar-end">
        <div className="flex gap-5 text-xl">
             <NavLink to='/' className={({isActive})=>isActive?'text-red':''}>Login</NavLink>
             <NavLink>Register</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
