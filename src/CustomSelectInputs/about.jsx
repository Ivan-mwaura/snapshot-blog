import React, { useState } from "react";
import {  faUsers,
  faQuestionCircle,
  faBalanceScale,
  faHandshake,
  faCode,
  faLanguage,
  faCookieBite,} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About= () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { label: 'About us', value: 'aboutus' },
    { label: 'FAQ', value: 'faq' },
    { label: 'License Summary', value: 'license' },
    { label: 'Terms of Service', value: 'tos' },
    { label: 'Privacy Policy', value: 'pop' },
    { label: 'Cookies Policy', value: 'cp' },
    { label: 'API', value: 'api' },

  ];

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const iconMap = {
    "aboutus": faUsers,
    faq: faQuestionCircle,
    "license": faBalanceScale,
    "tos": faHandshake,
    "pop": faBalanceScale,
    "cp": faCookieBite,
    "api": faCode,
    Language: faLanguage,
  };

  return (
    <div className="custom-dropdown">
      <div
        className={`dropdown-toggle ${isOpen ? "open" : ""}`}
        onClick={handleToggleDropdown}
      >
        {selectedOption ? selectedOption.label : "About"}
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

export default About;
