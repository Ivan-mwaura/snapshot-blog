import React, { useState } from "react";
import {  useDispatch } from "react-redux";
import { Bell, Discord, Facebook, Instagram, Justify, Pinterest, Twitter, Upload, X } from "react-bootstrap-icons";
import logo from "../Images/logo_1.jpg";
import { faBrush, faCamera, faFileAudio, faFileVideo, faMusic, faVectorSquare, faVideo } from '@fortawesome/free-solid-svg-icons';
import { setQuery } from "../../ReduxStore/store";
import "../style.scss";
import {  useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Media from "../../CustomSelectInputs/media";
import Discover from "../../CustomSelectInputs/discover";
import Community from "../../CustomSelectInputs/community";
import About from "../../CustomSelectInputs/about";


const Header = () => {

  const[showExplorer, setShowExplorer] = useState(false)
  const [isOpen, setIsOpen] = useState(false);

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

  function handleExplorer(){
    setShowExplorer((prevState) => !prevState)
  }

  const handleJustifyClick = () => {
    setIsOpen(!isOpen);
  };
  
  const handleCollapse= ()=>{
    setIsOpen((prev) => !prev)
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

        <div className="explorer">
          <button className="explore--button"
            onClick={handleExplorer}
            
          >
            Explore
          </button>
        </div>
      {showExplorer &&  <div className="explorer--menu">
        <div className="list--div">
          <div className="list1">
              <ul><label>Media</label><br/>
                <li><FontAwesomeIcon icon={faCamera}/> &nbsp; &nbsp; Photos</li>
                <li> <FontAwesomeIcon icon={faBrush}/>&nbsp; &nbsp;  Illustrations</li>
                <li><FontAwesomeIcon icon={faVectorSquare}/> &nbsp; &nbsp; vectors</li>
                <li><FontAwesomeIcon icon={faVideo}/>&nbsp; &nbsp;  Videos</li>
                <li> <FontAwesomeIcon icon={faMusic}/> &nbsp; &nbsp; Music</li>
                <li> <FontAwesomeIcon icon={faFileAudio}/>&nbsp; &nbsp;  sound Effects</li>
                <li><FontAwesomeIcon icon={faFileVideo}/>&nbsp; &nbsp;  Gifs</li>
              </ul>
            
            </div>

            <div className="list2">
              <ul><label>Discover</label><br/>
                <li>Editors Choice</li>
                <li>curated Collections</li>
                <li>popular Images</li>
                <li>Popular videos</li>
                <li>Popular Music</li>
                <li>Popular searches</li>
              </ul>             
            </div>

            <div className="list3">
              <ul><label>Community</label><br/>
                <li>Creators</li>
                <li>Forum</li>
                <li>Blog</li>
                <li>Cameras</li>
              
              </ul>
            </div>

            <div className="list4">
              <ul><label>About</label><br/>
                <li>About us</li>
                <li>FAQ</li>
                <li>License Summary</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>cookies Policy</li>
                <li>API</li>
                <li>Language</li>
              </ul>

            </div>
          </div>
           <div className="social--media">
            <div>
                <Instagram style={{color:'white'}}/> &nbsp;&nbsp; &nbsp;
                <Twitter style={{color:'white'}}/>&nbsp;&nbsp;&nbsp;
                <Discord style={{color:'white'}}/>&nbsp;&nbsp;
                <Pinterest style={{color:'white'}}/>&nbsp;&nbsp;&nbsp;
                <Facebook style={{color:'white'}}/>&nbsp;&nbsp;&nbsp;
            </div>
               
           </div>

        </div>}

        <span className="notification">
          <Bell size={20} />
        </span>

        {/*<Justify size={40}  color="black" className={`toggle-button ${isOpen ? 'open' : ''}`} onClick={toggleMenu} />*/}

        <span className="profile"></span>

        {/*for mobile devices, custom collapsible menu*/}

        <div>
      <Justify size={40}
       color="black" 
       onClick={handleJustifyClick} 
       className="justify--icon"
       
       />

      {isOpen && (
        <div className="slide-container">
          <div className="title--bar">
            <img src={logo} alt="" className="logo"/>
          
              <X color="white"            
                size={30} 
                className="collapse--mininavbar"
                onClick={handleCollapse}
             />                     
            </div>  

            <div>
              <Media/>
            </div>    
            <div>
              <Discover/>
            </div>   
            <div>
              <Community/>
            </div>  
            <div>
              <About/>
            </div> 
     

        </div>
      )}
    </div>

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
