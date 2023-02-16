import React from "react";
import "./styles/Navbar.scss";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const displayPlusIcon = props.display;
  const navigateTo=useNavigate();
  function handleOnClick() {
    console.log("hancleclick");
    navigateTo("/AddProduct")
  }

  return (
    <div>
      <div className="navbar">
        <p>SHOPPO</p>
        {displayPlusIcon ? (
          <PlusIcon
            className="addbtn"
            onClick={() => {
              handleOnClick();
            }}
          ></PlusIcon>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
