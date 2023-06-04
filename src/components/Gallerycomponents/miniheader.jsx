import React, { useState } from "react";
import { Question, Sliders,  } from "react-bootstrap-icons";
import Switch from 'react-switch';
import AllImages from "../../SelectInputs/miniHeaderSelectInputs/AllImages"
import Orientation from "../../SelectInputs/miniHeaderSelectInputs/Orientation";
import Size from "../../SelectInputs/miniHeaderSelectInputs/Size";
import PublishedDate from "../../SelectInputs/miniHeaderSelectInputs/PublishedDate";
import MostRelevant from "../../SelectInputs/miniHeaderSelectInputs/MostRelevant";
import { useSelector, useDispatch } from "react-redux";
import { setSafeSearch } from "../../ReduxStore/store";
import '../style.scss'
import {Discord, Facebook, Instagram, Pinterest, Twitter, X } from "react-bootstrap-icons";
import logo2 from "../Images/snapshot--logo3.png"

import FilterOrientation from "../../SelectInputs/FilterSectionSelectInputs/OrientationFormats";
import Sizing from "../../SelectInputs/FilterSectionSelectInputs/Sizing";
import FilterPublishedDate from "../../SelectInputs/FilterSectionSelectInputs/FilterPublishedDate";
import FilterMedia from "../../SelectInputs/FilterSectionSelectInputs/Media";


const MiniHeader = () =>{

    const[safeSearchTrue, setSafeSearchTrue] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const safeSearch = useSelector((state) => state.safeSearch);
    const dispatch = useDispatch();
    

    function handleChecked (safeSearch){
        dispatch(setSafeSearch(safeSearch));
        if(safeSearch === true){
            setSafeSearchTrue(true)
        }
        else{
            setSafeSearchTrue(false)
        }
       
    }

    const handleJustifyClick = () => {
        setIsOpen(!isOpen);
      };
      
      const handleCollapse= ()=>{
        setIsOpen((prev) => !prev)
      }

    return (
        <div className="mini-header-container">
                 
             <div className="mini-header-left">

              <AllImages/>
              <Orientation/>
               <Size/>
                <select  className = "explore">
                <option value="">Color</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                </select>
               <PublishedDate/>

            </div> 

         <div className="filter--container">
            <button 
              onClick={handleJustifyClick} 
            >
                 <Sliders className="filter"/> filter   
            </button>

            {isOpen && (
        <div className="slider-container">
          <div className="title--bar">
            <img src={logo2} alt="" className="logo"/>
          
              <X color="white"            
                size={25} 
                className="collapse-x-icon"
                onClick={handleCollapse}
              />                     
            </div>  

            <div style={{marginTop:'30px'}}>
              <FilterMedia/>
            </div>  
            <div >
              <FilterOrientation/>
            </div>  
            <div >
              <Sizing/>
            </div>  
            <div >
              <FilterPublishedDate/>
            </div>  
           

            <div style={{marginTop:'70px', display:'flex', gap:'30px',justifyContent:'center'}} className="collapsible-mininavbar-icons">
              <span style={{color:'black', fontSize:'10px'}}>
                  <Instagram style={{color:'green'}} size={30}/> <br/>instagram
              </span>
              <span style={{color:'black', fontSize:'10px'}}>
                  <Twitter style={{color:'green'}} size={30}/> <br/>twitter
              </span>
              <span style={{color:'black', fontSize:'10px'}}>
                  <Discord style={{color:'green'}} size={30}/> <br/>discord
              </span>
              <span style={{color:'black', fontSize:'10px'}}>
                  <Pinterest style={{color:'green'}} size={30}/> <br/>pinterest
              </span>
              <span style={{color:'black', fontSize:'10px'}}>
                  <Facebook style={{color:'green'}} size={30}/> <br/>facebook
              </span>
               
            </div>

        </div>
      )}

              
         </div>
         
        
         
         <span className ="mini-header-right">
            <span className ="switch">
                <Switch
                    checked={safeSearch}
                    onChange={handleChecked}
                    className="react--switch"
                />&nbsp;&nbsp;
                {safeSearchTrue ? <p className="safesearch--on" >safeSearch is turned on</p> : <p className="safesearch--off" >safeSearch is turned off</p>}
                </span> <span className ="switch--mode">Safe search</span>
           

            <span className="question">
                <Question/>
            </span>
            <div className="most--relevant">
                 <MostRelevant/>
            </div>
            
            
        </span>
        
        </div>
        
        
    )
}
export default MiniHeader;