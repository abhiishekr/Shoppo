import React from "react";
import "./styles/Navbar.scss";
import { PlusIcon,ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../Context/LoginSlice";

const Navbar = (props) => {
  const displayPlusIcon = props.display;
  const navigateTo=useNavigate();
  function handleOnClick() {
    console.log("hancleclick");
    navigateTo("/AddProduct")
  }
const dispatch=useDispatch();
function handleLogout(){
  dispatch(
    userLogin({
      userLogin:false,
      email:null
    })
    )
  navigateTo("/")
}

  return (
    <div>
      <div className="navbar">
        <p>SHOPPO</p>
        
        {displayPlusIcon ? (
          <><PlusIcon
            className="addbtn"
            onClick={() => {
              handleOnClick();
            }}
          ></PlusIcon>
          <ArrowLeftOnRectangleIcon className="logoutbtn" onClick={()=>{handleLogout()}}></ArrowLeftOnRectangleIcon>
        </>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
