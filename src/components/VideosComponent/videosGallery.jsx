import React, { useEffect, useState } from 'react'
import {  useSelector } from "react-redux";
import { BookmarkCheck, BookmarkPlus,  Heart } from "react-bootstrap-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faVideo } from '@fortawesome/free-solid-svg-icons';




const VideosGallery = ({video, user, tags, likes }) => {
    const [hovered, setHover] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [like, setLike] = useState(false);
    const [likehovered, setLikeHovered] = useState(true);
    const [bookmarkHovered, setBookmarkHovered] = useState(true);
    const [likeCount, setLikeCount] = useState(likes);
    const [favourite, setFavourite] = useState(false);
  
    
  
    // Redux and contextAPI  section

    const selectedOption = useSelector((state) => state.selectedOption);
    const customWidth = useSelector((state) => state.customWidth);
    const customHeight = useSelector((state) => state.customHeight);
    const videoURL = video.tiny.url;
    
    let galleryStyles;//orientation format determination
  
    if (selectedOption && selectedOption.value === "horizontal") {
        galleryStyles = {
          width: "315px",
          height:"270px"
        };
    } else if (selectedOption && selectedOption.value === "vertical") {
      galleryStyles = {
        width: "100%",
        height: "auto",
      };
    } else if (selectedOption && selectedOption.value === "customize") {
      galleryStyles ={
        width: `${customWidth}px`,
        height: `${customHeight}px`,
      }
    } 
    else {
      galleryStyles = {
        width: "100%",
        height: "270px",
      };
    }
  
  
    
    //determination if the image is loaded
    useEffect(() => {
      
      const image = new Image();
      image.src = videoURL;
      image.onload = () => {
        setImageLoaded(true);
      };
  
  
    }, [videoURL]);
  
  //functions to handle various events
    function handleMouseEnter() {
      setHover(true);
      setLikeHovered(false);
      setBookmarkHovered(false);
    }
  
    function handleMouseLeave() {
      setHover(false);
    }
  
    function handleImageLoad() {
      setImageLoaded(true);
    }

  
   
  
    //likecount logic function
    function handleLikeCount() {
  
      setLike((prevLike) => !prevLike);
      if(like === false){
        setLikeCount((likeCount) => likeCount + 1);
      }
      else{
        setLikeCount((likeCount) => likeCount - 1);
      }
     
    }
  
    // Like and bookmark hovered functions
    function handleLikeHover() {
      setLikeHovered(true);
    }
    function handleLikeUnhover() {
      setLikeHovered(false);
    }
    function handleBookmarkHover() {
      setBookmarkHovered(true);
    }
    function handleBookmarkUnhover() {
      setBookmarkHovered(false);
    }
  
    
  
    function handleFavourite() {
      setFavourite((prevFavourite) => !prevFavourite);
     
    }


    return(
    <div className='video-gallery-container'>

        <div
        className={`gallery--div ${hovered ? "hovered" : ""}`} //main gallery container
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={galleryStyles}       
       
        >
        
        {!hovered && (
          <div className="videoicon--div">
            
                <FontAwesomeIcon icon={faVideo}
                    className="video--icon"
                    color="white"
                    style={{                        
                        padding: "15px",
                        borderRadius: "50%",
                }}              
                />
            </div>
          
          
        )}
        {hovered && (
          <div className="hearticon--div">
            <Heart
              className="heart--icon"
              color={like ? "red" : "white"}                    //heart icon (likes)
              fontSize="bold"
              size={35}
              style={{
                padding: "6px",
                borderRadius: "6px",
                border: like ? "none" : "1px solid white",
                backgroundColor: like ? "white" : "",
              }}
              onClick={handleLikeCount}
              onMouseEnter={handleLikeHover}
              onMouseLeave={handleLikeUnhover}
            />
            {likehovered && (
              <p className="like--hover">
                {likeCount} <span>likes</span>{" "}
              </p>
            )}
          </div>
        ) } 

        {hovered && (
          <div className={`favourites-icon-div ${hovered ? "hovered" : ""}`}>

            {favourite ? (

              <BookmarkCheck
                className="favourites--icon"
                color={favourite ? "rgb(139, 231, 139)" : "white"}       //bookmark icon(adding images to collections)
                size={35}
                style={{
                  padding: "5px",
                  borderRadius: "6px",
                  border: favourite ? "none" : "1px solid white",
                  backgroundColor: favourite ? "white" : "",
                }}
                onClick={ handleFavourite}
                onMouseEnter={handleBookmarkHover}
                onMouseLeave={handleBookmarkUnhover}
              />

              ) : (

              <BookmarkPlus
                className="favourites--icon"
                color={favourite ? "rgb(139, 231, 139)" : "white"}
                size={35}
                style={{
                  padding: "5px",
                  borderRadius: "6px",
                  border: favourite ? "none" : "1px solid white",
                  backgroundColor: favourite ? "white" : "",
                }}
                onClick={ handleFavourite}
                onMouseEnter={handleBookmarkHover}
                onMouseLeave={handleBookmarkUnhover}
              />
            )}
            {bookmarkHovered && <p className="bookmark--hover">add to collection</p>}
          </div>
        )}

       {/* {hovered && (             //image of the picture owner
          <div className="user--profile">         
            <h1 className="user--name">{user}</h1>        
          </div>
        )}

        {hovered && <img src={userProfile} alt="" className="user--image" />}*/}

        {hovered && (             //tags about the picture
            <div className="picture--tag">
            <p className="tag">{tags}</p>
          </div>
        )}

        {imageLoaded ? (          //video  container
          <div className="image-container" style={galleryStyles}>
            <div >
                <video 
                src={videoURL} 
                controls ={hovered ? true : false}
                autoPlay={hovered ? true : false}
                className={`searched--image ${imageLoaded ? "fade-in" : ""}`}
                onLoad={handleImageLoad}
                style={galleryStyles}
                
                
                />        
            </div>
          </div>

        ) : (

          <div className="image-container" style={galleryStyles}>
           <div >
                <video 
                src={videoURL} 
                controls ={hovered ? true : false} 
                autoPlay={hovered ? true : false}
                className={`searched--image ${imageLoaded ? "fade-in" : ""}`}
                onLoad={handleImageLoad}
                style={galleryStyles}
                              
                />        
            </div>
          </div>
        )}
      </div>
    </div>
    )

}
export default VideosGallery;