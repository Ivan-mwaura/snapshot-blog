import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const FilterPublishedDate = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { label: "Filter Images by", value: "filter" },
    { label: "1 month", value: "1" },
    { label: "2 months", value: "2" },
    { label: "3 months", value: "3" },
    { label: "4 months", value: "4" },
    { label: "5 months", value: "5" },
    { label: "6 months", value: "6" },
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
      <div
        className={`select-trigger ${isOpen ? "open" : ""}`}
        onClick={handleToggleDropdown}
      >
        {selectedOption ? (
          <div>
            <FontAwesomeIcon
              icon={faCalendarAlt}
              className="select-icon"
            />
            <span className="selected-label">{selectedOption.label}</span>
          </div>
        ) : (
          <span className="placeholder">Published Date</span>
        )}
      </div>
      {isOpen && (
        <div className="select-options">
          {options.map((option) => (
            <div
              key={option.value}
              className={`option ${
                selectedOption === option ? "selected" : ""
              }`}
              onClick={() => handleOptionSelect(option)}
            >
              <FontAwesomeIcon
                icon={faCalendarAlt}
                className="option-icon"
              />
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterPublishedDate;
