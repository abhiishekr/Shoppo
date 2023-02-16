import React from "react";
import "./styles/Navbar.scss";
import { PlusIcon } from "@heroicons/react/24/outline";

const Navbar = (props) => {
  const displayPlusIcon = props.display;
  console.log(displayPlusIcon);
  function handleOnClick() {
    console.log("hancleclick");
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
