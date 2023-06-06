import React, { useState } from "react";
import { faImage,  faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { setImageResolution} from "../../ReduxStore/store";
import { saveAs } from "file-saver";


const Download = () => {

  //states and redux section
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const imageResolution = useSelector((state) => state.imageResolution);
  const userImageInfo = useSelector((state) => state.userImageInfo);

  
  const dispatch = useDispatch();


    //declaring the options
  const options = [
    { label: '640 x 359 -- JPG      (79KB)', value: 'webformatURL', icon: faImage },
    { label: '1280 x 719 -- JPG      (262KB)', value: 'largeImageURL', icon:  faImage },
    { label: '1920 x 1079 -- JPG   (556KB)', value: 'fullHDURL', icon:  faImage },
    

  ];

    //opening and closing the toggle button function
  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

    //dispatching the selected value to state and redux store
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    dispatch(setImageResolution(option.value))
    
  };

  function handleDownload(){

    const FileName = prompt("save Image as :");

    let fileURL;

    if(imageResolution === 'webformatURL'){
        fileURL = userImageInfo.image
    }
    else if(imageResolution === 'largeImageURL'){
        fileURL = userImageInfo.largeImageURL
    }
    else if(imageResolution === 'fullHDURL'){
        fileURL = userImageInfo.fullHDURL
    }

    saveAs(fileURL, FileName);
  
  }
  console.log(userImageInfo)
  return (
    <div className="custom-select">

      <div className={`select-trigger ${isOpen ? "open" : ""}`} onClick={handleToggleDropdown}>

        {selectedOption ? (          
            <span className="selected-label">{selectedOption.label}</span>

        ) : (

            <span className="placeholder"><FontAwesomeIcon icon={faDownload} color='white'/> Download</span>
        )}
      </div>

      {isOpen && (
        <div className="select-options">

          {options.map((option) => (
            <div
              key={option.value}
              className={`option ${imageResolution === option.value ? "selected" : ""}`}
              onClick={() => handleOptionSelect(option)}
              
            >

              <FontAwesomeIcon icon={option.icon} className="option-icon" />

                 {option.label }

            </div>
          ))}
          <div className="buttons">        
            <button className="btn-download" onClick={handleDownload}> Download</button>
            <button className="btn-view">View</button>
        </div>
        </div>
      )}

    </div>
  );
};

export default Download;
