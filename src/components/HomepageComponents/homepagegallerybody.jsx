import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomePageGallery from "./Homepagegallery";

const HomePageGalleryBody = () => {

    
    //states and redux section
    const[galleryData,setGalleryData] = useState([])
    const query = useSelector((state ) => state.query)
    const dataType = useSelector((state)=> state.dataType)
    const dispatch = useDispatch()
    const apikey = "36442909-5ba159e769d3fab129ac65640"


        //dat handling from the api
    useEffect(() => {

        function getimage() {

            const url = `https://pixabay.com/api/?key=${apikey}&q=${encodeURIComponent(query.searchQuery)}&image_type=${dataType}&page=3&per_page=`;
      
            fetch(url)
              .then((response) => response.json())
              .then((response) => {             
               setGalleryData(response.hits)//recieves all objects
              })
              .catch((error) => {
                console.error("Error fetching images:", error);
              });
          }
        
        getimage()
 
    },[dispatch, query.searchQuery,dataType])

    if (!galleryData || galleryData.length === 0) {
        return <div className="loading--placeholder">
                    <div>
                        Loading...
                    </div>
                </div>; // Adding a loading state or placeholder
      }


       //mapping the data to our homepage component
    const apidata = galleryData.map((gdt) => {                     
        return(
            <HomePageGallery
                key={gdt.id}
                tags = {gdt.tags}
                webformatURL={gdt.webformatURL}
                userProfile = {gdt.userImageURL}
                user = {gdt.user}  
            />
        )

    })

    return (
        <div className="mapped--container">
                                
            <div className="mapped--div">
               
                    {apidata}
                                   
            </div>
            
    </div>
    )
}
export default HomePageGalleryBody