import { ShoppingCart } from "lucide-react";
import Steps from "./Steps";

const NavBar = ({ carts }) => {
  return (
    <nav className="w-full shadow-md bg-white">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        <div className="text-purple-500 font-bold text-2xl">
          DigiTools
        </div>

        <ul className="md:flex gap-6 text-lg">
          <li><a className="hover:text-purple-500 cursor-pointer">Products</a></li>
          <li><a className="hover:text-purple-500 cursor-pointer">Features</a></li>
          <li><a className="hover:text-purple-500 cursor-pointer">Pricing</a></li>
          <li><a className="hover:text-purple-500 cursor-pointer">Testimonials</a></li>
          <li><a className="hover:text-purple-500 cursor-pointer">FAQ</a></li>
        </ul>

       
        <div className="flex items-center gap-4">

          
          <div className="relative">
            <ShoppingCart className="cursor-pointer hover:text-purple-500" />

           
            {carts.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {carts.length}
              </span>
            )}
          </div>

          <span className="hidden md:block cursor-pointer hover:text-purple-500">
            LogIn
          </span>

          <button className="hidden md:block bg-purple-500 hover:bg-purple-600 text-white px-4 py-1 rounded-full">
           <a href="#steps">Get Started</a> 
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;