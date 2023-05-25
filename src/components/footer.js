import React from "react";
import snapshot from './Images/logo_1.jpg'
import { Facebook, Instagram, Pinterest, Twitter } from "react-bootstrap-icons";
import './style.scss'

const Footer  = () =>{

    return(
        <div className="footer--container">
          
            <div className="footer-content-left">
                <img src={snapshot} alt="" className="snapshot--logo"/>
                <p className = "ftl--heading">Over 4.2 million+ high quality stock images,
                 videos and music shared by our talented community.
                 </p>
                 <div className="icons--div">
                    <Instagram/>
                    <Pinterest/>
                    <Twitter/>
                    <Facebook/>
                 </div>
            </div>
            <div className="footer-content-right">
            <div className="discover">
                    <ul><label className="footer--label">Discover</label>
                        <li>Editors choice</li>
                        <li>Curated collection</li>
                        <li>Popular Images</li>
                        <li>Popular videos</li>
                        <li>Popular Music</li>
                        <li>popular Searches</li>
                        <li></li>
                    </ul>
                </div>
                <div className="community">
                    <ul><label className="footer--label">Community</label>
                        <li>Blog</li>
                        <li>Forum</li>
                        <li>Creators</li>
                        <li>Cameras</li>
                        
                    </ul>
                </div>
            <div className="about">
                    <ul><label className="footer--label">About</label>
                        <li>About Us</li>
                        <li>FAQ</li>
                        <li>License Summary</li>
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                        <li>cookies Policy</li>
                        <li>Api</li>
                    </ul>
                </div>
                
               
            </div>
            <div className="policy">
                <p>This site is protected by and the Google <b>Privacy Policy</b> and <b>Terms of Service</b> apply.</p>
            </div>
          
                
        </div>
    )
}
export default Footer;