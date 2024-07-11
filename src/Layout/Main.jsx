import { Outlet } from "react-router-dom";
import Navbar from "../Compenents/Shared/Navbar";
import Footer from "../Compenents/Shared/Footer";


const Main = () => {
    return (
        <>
          <header>
         <Navbar></Navbar>
            </header>  
            <main className="bg-[#09101A] text-white pt-20 min-h-[calc(100vh-128px)] pb-28">
                <Outlet></Outlet>
            </main>
            <footer>
               <Footer></Footer>
            </footer>
        </>
    );
};

export default Main;