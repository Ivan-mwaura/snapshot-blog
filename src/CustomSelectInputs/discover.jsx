import React, { useState } from "react";
import { faImage, faFolderOpen, faStar, faVideo, faMusic, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Discover = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: 'editors choice', label: 'Editors choice' },
    { value: 'curated collections', label: 'Curated Collections' },
    { value: 'popular images', label: 'Popular Images' },
    { value: 'popular videos', label: 'Popular videos' },
    { value: 'popular music', label: 'Popular music' },
    { value: 'popular searches', label: 'popular searches' },
  ];

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const iconMap = {
    "editors choice": faImage,
    "curated collections": faFolderOpen,
    "popular images": faStar,
    "popular videos": faVideo,
    "popular music": faMusic,
    "popular searches": faSearch, 
  };


  return (
    <div className="custom-dropdown">
      <div
        className={`dropdown-toggle ${isOpen ? "open" : ""}`}
        onClick={handleToggleDropdown}
      >
        {selectedOption ? selectedOption.label : "Discover"}
      </div>
      {isOpen && (
        <div className="dropdown-options">
          {options.map((option) => (
            <div
              key={option.value}
              className={`option ${selectedOption === option ? "selected" : ""}`}
              onClick={() => handleOptionSelect(option)}
            >
              <FontAwesomeIcon icon={iconMap[option.value]} 
      className="option-icon"
       style={{marginRight: '20px', color:'#ccc'}}
      />
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Discover;
