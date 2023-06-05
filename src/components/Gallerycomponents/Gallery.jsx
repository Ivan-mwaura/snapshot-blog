import React, { useContext, useEffect, useState } from "react";
import { saveAs } from "file-saver";
import { useSelector } from "react-redux";
import { BookmarkCheck, BookmarkPlus, Download,  Heart, X } from "react-bootstrap-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import "../style.scss";
import { Plus } from "react-bootstrap-icons";
import { AppContext } from "../../Context/querycontext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGesture } from "@use-gesture/react";

function Gallery({ webformatURL, user, userProfile, tags, likes,  }) { //props passed

  //states section

  const [hovered, setHover] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [like, setLike] = useState(false);
  const [likehovered, setLikeHovered] = useState(true);
  const [bookmarkHovered, setBookmarkHovered] = useState(true);
  const [likeCount, setLikeCount] = useState(likes);
  const [selectedImage, setSelectedImage] = useState(null);
  const [favourite, setFavourite] = useState(false);
  const [collections, setCollections] = useState([]);

  // Redux and contextAPI  section
  const{showCollection, setShowCollection} = useContext(AppContext)
  const selectedOption = useSelector((state) => state.selectedOption);
  const customWidth = useSelector((state) => state.customWidth);
  const customHeight = useSelector((state) => state.customHeight);

  
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
      height: "auto",
    };
  }


  
  //determination if the image is loaded
  useEffect(() => {
    
    const image = new Image();
    image.src = webformatURL;
    image.onload = () => {
      setImageLoaded(true);
    };


  }, [webformatURL]);

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

  function handledownload() {
    // Download logic
    const fileName = prompt("save image as : ");
    const fileURL = webformatURL;
    saveAs(fileURL, fileName);
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

  function removeCollection() {
    setShowCollection(false);
  }

  function handleFavourite() {
    setFavourite((prevFavourite) => !prevFavourite);

    setShowCollection(true);
  }

    //on doubleclicking the image, the likes are added by one
  function handleImageDoubleClick(){
    setLike((prevLike) => !prevLike)

    if(like === false){
      setLikeCount((likeCount) => likeCount + 1);
    }
    else{
      setLikeCount((likeCount) => likeCount - 1);
    }
    
  }

  //event listener  using react-use-gesture that updates the like state ondoubleclick
  //for mobile devices

  const bind = useGesture({
    onDoubleClick : () =>{

      setLike((prevLike) => !prevLike)

      if(like === false){
        setLikeCount((likeCount) => likeCount + 1);
      }
      else{
        setLikeCount((likeCount) => likeCount - 1);
      }

    }
  })


  // Creating a new collection
  function createNewCollection(){
    const collectionName = prompt("Enter collection Name : ")

    if(collectionName){
      const newCollection = {             //creating a new collection
        name: collectionName,
        id:Date.now(),
        images:[]
      };
      setCollections([...collections, newCollection]);
    }
  }

    function addToCollection(ImageSelected, collectionName){
      const collectionIndex = collections.findIndex(

        (Collection) => Collection.name === collectionName   

        );
    
    if(collectionIndex !== -1){

      const updatedCollections = [...collections];
      updatedCollections[collectionIndex].images.push({url:ImageSelected})       //adding the image selected to the collection
      setCollections(updatedCollections);
    }
  
  };

  
  
  // Storing the collections to the local storage
  useEffect(() => {
    localStorage.setItem("collections", JSON.stringify(collections));
  }, [collections]);

  // Retrieve the collections
  useEffect(() => {
    const storedCollections = localStorage.getItem("collections");
    if (storedCollections) {
      setCollections(JSON.parse(storedCollections));
    }
  }, []);

  return (
    <>
      <div
        className={`gallery--div ${hovered ? "hovered" : ""}`} //main gallery container
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
                backgroundColor: "#ddd",            //download icon (downloading)
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
                onClick={() => {
                  setSelectedImage({ webformatURL, tags }); // Set the selected image and passinf it to as params
                  handleFavourite();
                }}
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
                onClick={() => {
                  setSelectedImage({ webformatURL, tags }); // Set the selected image
                  handleFavourite();
                }}
                onMouseEnter={handleBookmarkHover}
                onMouseLeave={handleBookmarkUnhover}
              />
            )}
            {bookmarkHovered && <p className="bookmark--hover">add to collection</p>}
          </div>
        )}

        {hovered && (             //image of the picture owner
          <div className="user--profile">         
            <h1 className="user--name">{user}</h1>        
          </div>
        )}

        {hovered && <img src={userProfile} alt="" className="user--image" />}

        {hovered && (             //tags about the picture
            <div className="picture--tag">
            <p className="tag">{tags}</p>
          </div>
        )}

        {imageLoaded ? (          //the image container
          <div className="image-container" style={galleryStyles}>
            <img
              src={webformatURL}
              alt=""
              className={`searched--image ${imageLoaded ? "fade-in" : ""}`}
              onLoad={handleImageLoad}
              onDoubleClick={handleImageDoubleClick}
            />
          </div>

        ) : (

          <div className="image-container" style={galleryStyles}>
            <img
              src={webformatURL}
              alt=""
              className={`searched--image ${imageLoaded ? "fade-in" : ""}`}
              onLoad={handleImageLoad}
              style={galleryStyles}
              onDoubleClick={handleImageDoubleClick}
              {...bind()}
            />
          </div>
        )}
      </div>

      {showCollection && (    
              //the colections container and logic
        <div className="collections--container">

          <div className="collections--content">

            <X onClick={removeCollection} size={30} style={{float:'right', marginRight:'15px',marginTop:'10px',}}/>

            <h1>Add to collections</h1>

            <p>Add this image to an existing or new collection</p>

            <span className="create--collection">

              <button onClick={() => createNewCollection()}>
                <Plus />
                <span>Create new collection</span>
              </button>

            </span>

            <form>      

              <input // to be revisited!!
                type="text"
                name="searchCollection"
                className="search--collection"
                placeholder="search collections..."
              />

            </form>

            {collections.map((collection) => (    //mapping the list of collections and logic
              <div key={collection.id} className="collections">

                <h1>{collection.name} <span>-({collection.images.length} image(s) added)</span></h1>

                <button className="add-to-collection" onClick={() => addToCollection(selectedImage, collection.name)}>
                    <p>Add Image <FontAwesomeIcon icon={faThumbsUp} color="green"/></p>  
                </button>

              </div>
            ))}
            <br />

          </div>
          
        </div>
      )}
    </>
  );
}

export default Gallery;
