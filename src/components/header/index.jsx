import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="md-flex justify-between items-center mx-auto shadow-lg ">
      <div className="flex justify-between p-2">
        <div className="pl-6 ">
          <img className="w-[150px]  h-auto"
            src={require("./img/logo-indivara.png")}
            alt="logo"
          />
        </div>
        <div>
          <ul className="flex mt-3 mr-3">
            <li className="mr-5">   
            </li>
            <li className="mr-7">
              <Link to={"/login"}>
              <button className="bg-orange-500 text-white py-1 px-6 rounded-md hover:bg-orange-700">Login</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
