import React from "react";
import Navbar from "../components/HomepageComponents/navbar";
import MiniHeader from "../components/HomepageComponents/miniheader";

import HomePageGalleryBody from "../components/HomepageComponents/homepagegallerybody";
const HomePage = () =>{


    return(
        <div>
            <Navbar/>
            <MiniHeader/>
            <HomePageGalleryBody/>
            
        </div>
    )
}
export default HomePage;