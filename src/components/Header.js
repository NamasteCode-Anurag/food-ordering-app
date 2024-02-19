import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  useEffect(() => {}, [loginBtn]);

  return (
    <div className="flex justify-between bg-neutral-600 m-2 shadow-lg">
      <div className="Logo-container">
        <img className="w-48" src={LOGO_URL} />
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4 text-2xl text-white">
          <li className="px-4 hover:text-red-400">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:text-red-400">
            <Link to="/About">About us</Link>
          </li>
          <li className="px-4 hover:text-red-400">
            <Link to="/Contact">Contact us</Link>
          </li>
          
          <li className="px-4 hover:text-red-400">Cart</li>
          <l1 className="px-4 hover:text-red-400">
            <Link to="/Grocery">Grocery</Link>
          </l1>
          <li className="px-4 hover:text-red-400">Online Status: {useOnlineStatus() ? "🟢" : "🔴"}</li>

          <button
            className="login hover:text-red-400"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {" "}
            {loginBtn}{" "}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
