import React from "react";
import {  useDispatch } from "react-redux";
import { Bell, Justify, Upload } from "react-bootstrap-icons";
import logo from "../Images/logo_1.jpg";
import Explore from "../../SelectInputs/Explore";
import { setQuery } from "../../ReduxStore/store";
import "../style.scss";
import {  useNavigate } from "react-router";

const Header = () => {
  
  const dispatch = useDispatch();

 const navigate = useNavigate()

 /* function handleChange(event) {
    event.preventDefault();
    dispatch(setQuery( event.target.value));
  }*/

  function handleSubmit(event){
    event.preventDefault();

    const formData = new FormData(document.getElementById('searchForm'));
    const searchQuery = formData.get('searchQuery');
    dispatch(setQuery(searchQuery));

  }

  function handleKeyPress(event){
    if(event.key === 'Enter'){
      event.preventDefault()
      handleSubmit(event)
    }
  };

  function routeHome(){
    navigate('/')
  }

  return (
    <div className="header--container">
      <nav className="header--content">
        <img src={logo} alt="" className="logo--title" onClick={routeHome} />

        <span className="h--span">
          <form className="search--form" onClick={handleSubmit} id="searchForm">
            <input
              type="text"
              placeholder="Search...."
              className="search--bar"
              //onChange={handleChange}
              name="searchQuery"
              onKeyPress={handleKeyPress}
            />
          </form>
        </span>

        <div className="explore">
          <Explore />
        </div>

        <span className="notification">
          <Bell size={20} />
        </span>

        <Justify size={60} className="justify--icon" color="black" />

        <span className="profile"></span>

        <span className="upload">
          <button className="upload--button">
            <Upload size={20} color="white" />
            Upload
          </button>
        </span>
      </nav>
    </div>
  );
};

export default Header;
