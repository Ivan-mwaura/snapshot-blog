import React, { useState } from "react";
import { faUser, faBlog, faComments, faCamera  } from "@fortawesome/free-solid-svg-icons"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Community = () => {

  //states section
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);


  //declaring our options
  const options = [
    { label: 'Creators', value: 'creators' },
    { label: 'Blog', value: 'blog' },
    { label: 'Forum', value: 'forum' },
    { label: 'Cameras', value: 'cameras' },

  ];

  //opening and closing the toggle
  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  //dispatching selected values to our state
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  //icons for each repspective option
  const iconMap = {
    creators: faUser,
    blog: faBlog,
    forum: faComments,
    cameras: faCamera,

  };
  

  return (
    <div className="custom-dropdown">
      <div
        className={`dropdown-toggle ${isOpen ? "open" : ""}`}
        onClick={handleToggleDropdown}
      >
      {selectedOption ? selectedOption.label : "Community"}
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

export default Community;
