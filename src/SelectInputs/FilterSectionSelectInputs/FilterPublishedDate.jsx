import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { useDispatch} from "react-redux";
import { setPublishDate } from "../../ReduxStore/store";
import { useNavigate } from "react-router";

const FilterPublishedDate = () => {

    //states and redux section
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

   //declaring the options
  const options = [
    { label: "Filter Images by"},
    { label: "1 month", value: '1' },
    { label: "2 months", value: '2' },
    { label: "3 months", value: '3' },
    { label: "4 months", value: '4' },
    { label: "5 months", value: '5' },
    { label: "6 months", value: '6' },
  ];

   //opening and closing the toggle button function
  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

    //dispatching the selected value to state and redux
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    dispatch(setPublishDate(option.value));
    navigate('/gallerypage');
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
              key={option.label}
              className={`option ${
                selectedOption === option ? "selected" : "" }`}
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
