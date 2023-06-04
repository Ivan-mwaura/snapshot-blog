import React, { useState } from "react";
import { faCompressAlt, faArrowsAltH, faArrowsAltV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FilterOrientation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { label: 'Any orientation', value: 'any-orientation', icon: faCompressAlt },
    { label: 'Horizontal', value: 'horizontal', icon: faArrowsAltH },
    { label: 'Vertical', value: 'vertical', icon: faArrowsAltV },
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
          <span className="placeholder">Orientation</span>
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

export default FilterOrientation;
