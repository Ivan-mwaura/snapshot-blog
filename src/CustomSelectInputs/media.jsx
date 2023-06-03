import React, { useState } from "react";
import { faImage, faPalette, faVectorSquare, faVideo, faMusic, faVolumeUp, faImages } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Media = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { label: 'Photos', value: 'photos' },
    { label: 'Illustrations', value: 'illustrations' },
    { label: 'Vectors', value: 'vectors' },
    { label: 'Videos', value: 'videos' },
    { label: 'Music', value: 'music' },
    { label: 'Sound Effects', value: 'sound-effects' },
    { label: 'Gifs', value: 'gifs' },
  ];

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const iconMap = {
    photos: faImage,
    illustrations: faPalette,
    vectors: faVectorSquare,
    videos: faVideo,
    music: faMusic,
    "sound-effects": faVolumeUp,
    gifs: faImages,
  };
  

  return (
    <div className="custom-dropdown">
      <div
        className={`dropdown-toggle ${isOpen ? "open" : ""}`}
        onClick={handleToggleDropdown}
      >
        {selectedOption ? selectedOption.label : "Media"}
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

export default Media;
