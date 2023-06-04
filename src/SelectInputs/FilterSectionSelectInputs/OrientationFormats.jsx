import React, { useState } from "react";
import { faCompressAlt, faArrowsAltH, faArrowsAltV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedOption } from "../../ReduxStore/store";
import { useNavigate } from "react-router";

const FilterOrientation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectOption] = useState(null);

  const selectedOrientation = useSelector((state) => state.selectedOption)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const options = [
    { label: 'Customize Orientation', value: 'customize', icon: faCompressAlt },
    { label: 'Horizontal', value: 'horizontal', icon: faArrowsAltH },
    { label: 'Vertical', value: 'vertical', icon: faArrowsAltV },
  ];

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectOption(option);
    setIsOpen(false);
    dispatch(setSelectedOption(option.value))

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
