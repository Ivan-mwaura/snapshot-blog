import React, { useState } from "react";
import { faImage, faPalette, faVectorSquare, faVideo, faMusic, faVolumeUp, faImages } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../../ReduxStore/store";
import { useNavigate } from "react-router";


const FilterMedia = () => {

  //states and redux section
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const query = useSelector((state) => state.query );
  const dispatch = useDispatch();
  const navigate = useNavigate();

    //declaring the options
  const options = [
    { label: 'Photos', value: 'photos', icon: faImage },
    { label: 'Illustrations', value: 'illustrations', icon: faPalette },
    { label: 'Vectors', value: 'vectors', icon: faVectorSquare },
    { label: 'Videos', value: 'video', icon: faVideo },
    { label: 'Music', value: 'music', icon: faMusic },
    { label: 'Sound Effects', value: 'sound-effects', icon: faVolumeUp },
    { label: 'Gifs', value: 'gifs', icon: faImages },
  ];

    //opening and closing the toggle button function
  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

    //dispatching the selected value to state and redux store
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    dispatch(setQuery(option.value))
    setIsOpen(false);
    
    if(option.value === 'video'){
      navigate('/videospage')
    }
    else{
      navigate('/gallerypage')
    }

  };


  return (
    <div className="custom-select">

      <div className={`select-trigger ${isOpen ? "open" : ""}`} onClick={handleToggleDropdown}>

        {selectedOption ? (          
            <span className="selected-label">{selectedOption.label}</span>

        ) : (

            <span className="placeholder">Media</span>
        )}
      </div>

      {isOpen && (
        <div className="select-options">

          {options.map((option) => (
            <div
              key={option.value}
              className={`option ${query === option ? "selected" : ""}`}
              onClick={() => handleOptionSelect(option)}
            >

              <FontAwesomeIcon icon={option.icon} className="option-icon" />

              {option.label}
            </div>
          ))}

        </div>
      )}

    </div>
  );
};

export default FilterMedia;
