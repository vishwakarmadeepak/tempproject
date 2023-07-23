import React from "react";
import Logo from "../img/Logo/logo.png";

function Nav() {
  return (
    <div>
      <div className="px-24 text-sm capitalize">
        <div className="flex justify-between items-center">
          <div className="logo">
            <img src={Logo} alt="" className="h-16 w-16" />
          </div>
          <div className="  flex justify-between list-none gap-12 text-lg font-semibold items-center">
            <li>Service</li>
            <li>Inustries</li>
            <li>portforlio</li>
            <li>blog</li>
            <li>company</li>
            <li className="text-white bg-blue-500 rounded-full px-4 py-2">
              contact us{" "}
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
