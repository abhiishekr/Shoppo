import React from "react";
import "./styles/Navbar.scss";
import {
  PlusIcon,
  ArrowLeftOnRectangleIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const displayIcon = props.display;
  const displayHome = props.home;
  const navigateTo = useNavigate();
  function handleOnClick() {
    navigateTo("/AddProduct");
  }
  function homePageHandler() {
    navigateTo("/Product");
  }
  function handleLogout() {
    localStorage.removeItem("login")
    navigateTo("/");
  }

  return (
    <div>
      <div className="navbar">
        <p>SHOPPO</p>
        {displayHome?(<><HomeIcon
              className="homebtn"
              onClick={() => {
                homePageHandler();
              }}
            ></HomeIcon></>):(<div></div>)}

        {displayIcon ? (
          <>
            <PlusIcon
              className="addbtn"
              onClick={() => {
                handleOnClick();
              }}
            ></PlusIcon>
            <ArrowLeftOnRectangleIcon
              className="logoutbtn"
              onClick={() => {
                handleLogout();
              }}
            ></ArrowLeftOnRectangleIcon>
          </>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
