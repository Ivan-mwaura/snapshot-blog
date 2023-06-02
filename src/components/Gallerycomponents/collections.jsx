import React, { useContext, useEffect, useState } from 'react'
import { Plus, X } from 'react-bootstrap-icons';
import { AppContext } from '../../Context/querycontext';

const Collections = () => {

    const [collections, setCollections] = useState([]);
    const [selectedCollection, setSelectedCollection] = useState(null);
    const [addedImageToCollection, setAddedImageToCollection] = useState(false);

    const{showCollection, setShowCollection} = useContext(AppContext)


    function removeCollection() {
        setShowCollection(false);
      }

     // Creating a new collection
  function createNewCollection(){
    const collectionName = prompt("Enter collection Name : ")

    if(collectionName){
      const newCollection = {
        name: collectionName,
        id:Date.now(),
        images:[]
      };
      setCollections([...collections, newCollection]);
    }
  }

    function addToCollection(ImageURL, ImageTags){
      const collectionIndex = collections.findIndex(
        (Collection) => Collection.name )
    

    if(collectionIndex !== -1){

      const updatedCollections = [...collections];
      updatedCollections[collectionIndex].images.push({url:ImageURL, tags:ImageTags})
      setCollections(updatedCollections);
    }else{

      const collectionName = prompt("Enter collection Name : ")

      const newCollection = {
        name: {collectionName},
        id:Date.now(),
        images:[{url:ImageURL, tags:ImageTags}]
      }
      setCollections([...collections, newCollection])
    }

  };

console.log(collections)
  
  
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

    

        return(
        <div>
            {showCollection && (
                <div className="collections--container">
                  <div className="collections--content">
                    <X onClick={removeCollection} size={30} style={{float:'right', marginRight:'15px',marginTop:'10px',}}/>
                    <h1>Add to collections</h1>
                    <p>Add this image to an existing or new collection</p>
        
                    <span className="create--collection">
                      <button onClick={() => createNewCollection(webformatURL, tags)}>
                        <Plus />
                        <span>Create new collection</span>
                      </button>
                    </span>
        
                    <form>
                      <input
                        type="text"
                        name="searchCollection"
                        className="search--collection"
                        placeholder="search collections..."
                      />
                    </form>
        
                    {collections.map((collection) => (
                      <div key={collection.id} className="collections">
                        <h1>{collection.name}</h1>
                        <button className="add-to-collection" onClick={() => addToCollection(webformatURL, tags)}>
                          {addedImageToCollection ? "Added" : "Add to Collection"}
                        </button>
                      </div>
                    ))}
                    <br />
                  </div>
                </div>
              )}
        </div>
            
        )
}

export default Collections;