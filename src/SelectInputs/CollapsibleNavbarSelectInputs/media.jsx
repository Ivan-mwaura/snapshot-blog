import React, { useState } from "react";
import { faImage, faPalette, faVectorSquare, faVideo, faMusic, faVolumeUp, faImages } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../../ReduxStore/store";
import { useNavigate } from "react-router";



const Media = () => {
  const [isOpen, setIsOpen] = useState(false);

  const query = useSelector((state) => state.query)
   const dispatch = useDispatch();
   const navigate = useNavigate()

  const options = [
    { label: 'Photos', value: 'photo' },
    { label: 'Illustrations', value: 'illustration' },
    { label: 'Vectors', value: 'vector' },
    { label: 'Videos', value: 'videos' },
    { label: 'Music', value: 'music' },
    { label: 'Sound Effects', value: 'sound-effects' },
    { label: 'Gifs', value: 'gifs' },
  ];

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
   
    dispatch(setQuery(option.value))
    setIsOpen(false);
    navigate('/gallerypage')
  };
  console.log(query)

  const iconMap = {
    photo: faImage,
    illustration: faPalette,
    vector: faVectorSquare,
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
        { "Media"}
      </div>
      {isOpen && (
        <div className="dropdown-options">
          {options.map((option) => (
    <div
      key={option.value}
      className={`option ${query === option ? "selected" : ""}`}
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
