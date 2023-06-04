import React from "react";
import Navbar from "../components/HomepageComponents/navbar";
import MiniHeader from "../components/HomepageComponents/miniheader";
import Footer from '.././components/footer'
import HomePageGalleryBody from "../components/HomepageComponents/homepagegallerybody";

//all of the homepage components 
const HomePage = () =>{

    return(
        <div>
            <Navbar/>
            <MiniHeader/>
            <HomePageGalleryBody/>
            <Footer/>
            
        </div>
    )
}
export default HomePage;