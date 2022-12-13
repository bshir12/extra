import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const NavbarDua = () => {
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
              <Link to={"/listproduct"}>
              <button className="border text-black py-1 px-6 rounded-md hover:bg-orange-700 hover:text-white  ">
                List Product
              </button>
              </Link>
             
            </li>
            <li className="mr-7">
              <button
                className="bg-orange-500 text-white py-1 px-6 rounded-md hover:bg-orange-700" 
                onClick={() => {localStorage.clear(); navigate(`/`)}}
                //onClick={() => {localStorage.removeItem('token')userAuthentication()}}
                >Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarDua;

export const LOGOUT_ACTION = '[Logout action] logout action';

export function logout(history) {
    localStorage.removeItem('userDetails');
    history.push('/login');
    return {
        type: LOGOUT_ACTION,
    };
}

export function saveTokenInLocalStorage(tokenDetails) {
    tokenDetails.expireDate = new Date(
        new Date().getTime() + tokenDetails.expiresIn * 1000,
    );
    localStorage.setItem('userDetails', JSON.stringify(tokenDetails));
}

export function runLogoutTimer(dispatch, timer, history) {
    setTimeout(() => {
        dispatch(logout(history));
    }, timer);
}

