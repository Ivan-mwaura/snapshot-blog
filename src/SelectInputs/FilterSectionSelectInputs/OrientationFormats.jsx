import React, { useState } from "react";
import { faCompressAlt, faArrowsAltH, faArrowsAltV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedOption } from "../../ReduxStore/store";
import { useNavigate } from "react-router";

const FilterOrientation = () => {

  //states and redux section
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectOption] = useState(null);
  const selectedOrientation = useSelector((state) => state.selectedOption)
  const dispatch = useDispatch();
  const navigate = useNavigate();

    //declaring the options
  const options = [
    { label: 'Customize Orientation', value: 'customize', icon: faCompressAlt },
    { label: 'Horizontal', value: 'horizontal', icon: faArrowsAltH },
    { label: 'Vertical', value: 'vertical', icon: faArrowsAltV },
  ];

  //opening and closing the toggle button function
  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

    //dispatching the selected value to state and redux store
  const handleOptionSelect = (option) => {
    setSelectOption(option);
    setIsOpen(false);
    dispatch(setSelectedOption(option.value))

    //orientation logic
    if(option.value === "horizontal" || option.value === "vertical"){
      navigate('/gallerypage')
    }
  };

  
  return (
    <div className="custom-select">

      <div className={`select-trigger ${isOpen ? "open" : ""}`} onClick={handleToggleDropdown}>

        {selectedOption ? ( <span className="selected-label">{selectedOption.label}</span>

         ) : (

          <span className="placeholder">Orientation</span>

        )}
      </div>

      {isOpen && (
        <div className="select-options">

          {options.map((option) => (
            <div
              key={option.value}
              className={`option ${selectedOrientation === option ? "selected" : ""}`}
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

export default FilterOrientation;
