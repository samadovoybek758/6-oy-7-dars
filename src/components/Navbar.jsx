import React from "react";
import Images from "../pages/Images";
import { Link } from "react-router-dom";




function Navbar() {
  return (
    <div className="w-100% bg-slate-600   ">
      <div className=" continer max-w-[1200px] mx-auto flex align-middle justify-between py-2">
        <div className="w-[53px] h-[50px] rounded-lg bg-blue-700 p flex justify-center align-middle">
          <p className="text-white text-3xl pt-1">C</p>
        </div>

        <div className="flex align-middle gap-4 text-white">
          <Link to="/">Home</Link> <br />
          <Link to="/Images">images</Link> <br />
        </div>
            
        <div>
      
        </div>
      </div>
    </div>
  );
}

export default Navbar;
