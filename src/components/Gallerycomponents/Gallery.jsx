import React, { useEffect, useState } from "react";
import { saveAs } from "file-saver";
import { useSelector } from "react-redux";
import { BookmarkCheck, BookmarkPlus, Download, Heart } from "react-bootstrap-icons";
import '../style.scss'

function Gallery({ webformatURL, user, userProfile, tags }) {
  const [hovered, setHover] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [like, setLike] = useState(false);
  const [favourite, setFavourite] = useState(false);
  const selectedOption = useSelector((state) => state.selectedOption);

  useEffect(() => {
    const image = new Image();
    image.src = webformatURL;
    image.onload = () => {
      setImageLoaded(true);
    };
  }, [webformatURL]);

  function handleMouseEnter() {
    setHover(true);
  }

  function handleMouseLeave() {
    setHover(false);
  }

  function handleImageLoad() {
    setImageLoaded(true);
  }

  function handledownload() {
    console.log("click download");
    // Download logic
    const fileName = "Image.jpg";
    const fileURL = webformatURL;
    saveAs(fileURL, fileName);
  }

  function handleLike() {
    setLike((prevLike) => !prevLike);
  }

  function handleFavourite() {
    setFavourite((prevFavourite) => !prevFavourite);
  }
let galleryStyles;

  if(selectedOption && selectedOption.value === 'horizontal'){  
     galleryStyles = {
        width:'300px',
        height: '250px'
    }
    
  }else if(selectedOption && selectedOption.value === 'vertical'){
     galleryStyles = {
      width:'100%',
      height: 'auto'
  }
  }
  else if(selectedOption && selectedOption.value === 'any'){
    galleryStyles = {
     width:'100%',
     height: 'auto'
 }
 }
  else{
    galleryStyles = {
      width:'100%',
      height: 'auto'
  }
  }

  return (
    <div
      className={`gallery--div ${hovered ? "hovered" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={galleryStyles}
    >
      {hovered && (
        <div className="downloadicon--div">
          <Download
            className="download--icon"
            color="black"
            size={35}
            style={{
              backgroundColor: "#ddd",
              padding: "5px",
              borderRadius: "5px",
            }}
            onClick={handledownload}
          />
        </div>
      )}
      {hovered && (
        <div className="hearticon--div">
          <Heart
            className="heart--icon"
            color={like ? "red" : "white"}
            fontSize="bold"
            size={35}
            style={{
              padding: "6px",
              borderRadius: "6px",
              border: like ? "none" : "1px solid white",
              backgroundColor: like ? "white" : "",
            }}
            onClick={handleLike}
          />
        </div>
      )}
      {hovered && (
        <div className={`favourites-icon-div ${hovered ? "hovered" : ""}`}>
          {favourite ? (
            <BookmarkCheck
              className="favourites--icon"
              color={favourite ? "rgb(139, 231, 139)" : "white"}
              size={35}
              style={{
                padding: "5px",
                borderRadius: "6px",
                border: favourite ? "none" : "1px solid white",
                backgroundColor: favourite ? "white" : "",
              }}
              onClick={handleFavourite}
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
              onClick={handleFavourite}
            />
          )}
        </div>
      )}
      {hovered && (
        <div className="user--profile">
          <h1 className="user--name">{user}</h1>
        </div>
      )}
      {hovered && <img src={userProfile} alt="" className="user--image" />}
      {hovered && (
        <div className="picture--tag">
          <p className="tag">{tags}</p>
        </div>
      )}
    {imageLoaded ?<div className="image-container" style={galleryStyles}>
      <img
         src={webformatURL}
          alt=""
          className={`searched--image ${imageLoaded ? "fade-in" : ""}`}
        onLoad={handleImageLoad}
      />
    </div> : <div className="image-container" style={galleryStyles}>
      <img
         src={webformatURL}
          alt=""
          className={`searched--image ${imageLoaded ? "fade-in" : ""}`}
          onLoad={handleImageLoad}
          style={galleryStyles}
      />
    </div> }

    </div>
  );
}

export default Gallery;
