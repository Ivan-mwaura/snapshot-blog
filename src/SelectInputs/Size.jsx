import React, { useState } from "react";

const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [customValue, setCustomValue] = useState("");

  const options = [
    { label: 'Size ' },
    { label: 'width', value: 'width' },
    { label: 'Height', value: 'height' },
  ];

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    if (option && (option.value === 'width' || option.value === 'height')) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  const handleCustomValueChange = (e) => {
    setCustomValue(e.target.value);
  };

  const handleApplyCustomRange = () => {
    // Perform actions specific to custom range selection
    console.log('Custom range selected:', customValue);
    setIsOpen(false);
  };

  return (
    <div className="custom-dropdown">
      <div
        className={`dropdown-toggle ${isOpen ? "open" : ""}`}
        onClick={handleToggleDropdown}
      >
        {selectedOption ? selectedOption.label : "Select"}
      </div>
      {isOpen && (
        <div className="dropdown-options">
          {options.map((option) => (
            <div
              key={option.label}
              className={`option ${option.value === "width" || option.value === "height" ? "custom-option" : ""}`}
              onClick={() => handleOptionSelect(option)}
            >
              {option.label}
            </div>
          ))}
          {(selectedOption && (selectedOption.value === "width" || selectedOption.value === "height" )) && (
            <div className="custom-input">
              <input
                type="text"
               placeholder=  {selectedOption.value === 'width' ? "Enter width" : "Enter Height"}
                value={customValue}
                onChange={handleCustomValueChange}
              />
              <button onClick={handleApplyCustomRange}>Apply</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
