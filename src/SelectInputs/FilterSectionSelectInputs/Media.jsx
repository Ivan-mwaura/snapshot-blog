import React, { useState } from "react";
import { faImage, faPalette, faVectorSquare, faVideo, faMusic, faVolumeUp, faImages } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const CustomSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { label: 'Photos', value: 'photos', icon: faImage },
    { label: 'Illustrations', value: 'illustrations', icon: faPalette },
    { label: 'Vectors', value: 'vectors', icon: faVectorSquare },
    { label: 'Videos', value: 'videos', icon: faVideo },
    { label: 'Music', value: 'music', icon: faMusic },
    { label: 'Sound Effects', value: 'sound-effects', icon: faVolumeUp },
    { label: 'Gifs', value: 'gifs', icon: faImages },
  ];

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    // Handle option selection logic here
  };

  return (
    <div className="custom-select">
      <div className={`select-trigger ${isOpen ? "open" : ""}`} onClick={handleToggleDropdown}>
        {selectedOption ? (
          <div>
            <FontAwesomeIcon icon={selectedOption.icon} className="select-icon" />
            <span className="selected-label">{selectedOption.label}</span>
          </div>
        ) : (
          <span className="placeholder">Media</span>
        )}
      </div>
      {isOpen && (
        <div className="select-options">
          {options.map((option) => (
            <div
              key={option.value}
              className={`option ${selectedOption === option ? "selected" : ""}`}
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

export default CustomSelect;
