import React, { useContext } from "react";
import  { AppContext } from "../../Context/querycontext";
import '../style.scss'
import { useSelector,useDispatch } from "react-redux";
import { setQuery } from "../../ReduxStore/store";


const SecondHeader = () =>{

    const {hits} = useContext(AppContext)
    const query = useSelector((state) => state.query)
    const dispatch = useDispatch()
    

 
    const handleQuery1= () =>{
        dispatch(setQuery("mountain" ))
    }

    const handleQuery2= () =>{
        dispatch(setQuery("beaches" ))
    }

    const handleQuery3= () =>{
        dispatch(setQuery("birds" ))
    }
    const handleQuery4= () =>{
        dispatch(setQuery("Food" ))
    }
    const handleQuery5= () =>{
        dispatch(setQuery("nature" ))
    }
    const handleQuery6= () =>{
        dispatch(setQuery("wildlife" ))
    }
    const handleQuery7= () =>{
        dispatch(setQuery("oceans" ))
    }
    const handleQuery8= () =>{
        dispatch(setQuery("pets" ))
    }


    return(
        <div className="second-header-container">
            <div className="second-header-content">
                <h1>{hits}&nbsp;&nbsp; {query.searchQuery === "" ? "Background" : query.searchQuery} Photos and Images </h1>
            </div>
            <div className="buttons">    
                        <h1>Suggestions<br/>&nbsp;&nbsp;For you </h1>&nbsp;&nbsp;
                       <button className="btn" onClick={handleQuery1}>Mountain</button> &nbsp;&nbsp;
                        <button className="btn" onClick={handleQuery2}>Beaches</button>&nbsp;&nbsp;
                        <button className="btn" onClick={handleQuery3}>Birds</button>&nbsp;&nbsp;
                        <button className="btn" onClick={handleQuery4}>Food</button>&nbsp;&nbsp; 
                        <button className="btn" onClick={handleQuery5}>Nature</button> &nbsp;&nbsp;
                        <button className="btn" onClick={handleQuery6}>Wildlife</button>&nbsp;&nbsp;
                        <button className="btn" onClick={handleQuery7}>Oceans</button>&nbsp;&nbsp;
                        <button className="btn" onClick={handleQuery8}>Pets</button>&nbsp;&nbsp;                                                      
            </div>
        </div>
    )
}
export default SecondHeader;