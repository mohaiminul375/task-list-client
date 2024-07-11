import { Outlet } from "react-router-dom";
import Navbar from "../Compenents/Shared/Navbar";


const Main = () => {
    return (
        <>
          <header>
         <Navbar></Navbar>
            </header>  
            <main className="bg-[#09101A] text-white">
                <Outlet></Outlet>
            </main>
            <footer>
                this is footer
            </footer>
        </>
    );
};

export default Main;