import React from "react";
import { Question, Sliders,  } from "react-bootstrap-icons";
import Switch from 'react-switch';
import AllImages from "../../SelectInputs/AllImages"
import Orientation from "../../SelectInputs/Orientation";
import Size from "../../SelectInputs/Size";
import PublishedDate from "../../SelectInputs/PublishedDate";
import MostRelevant from "../../SelectInputs/MostRelevant";
import { useSelector, useDispatch } from "react-redux";
import { setSafeSearch } from "../../ReduxStore/store";
import '../style.scss'


const MiniHeader = () =>{

    

    const safeSearch = useSelector((state) => state.safeSearch)
    const dispatch = useDispatch()
    

    function handleChecked (safeSearch){
        dispatch(setSafeSearch(safeSearch))
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
            <button>
                 <Sliders className="filter"/> filter   
            </button>
              
         </div>
         
         <span className ="mini-header-right">
            <span className ="switch">
                <Switch
                    checked={safeSearch}
                    onChange={handleChecked}
                    size={100}
                />&nbsp;&nbsp;
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