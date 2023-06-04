import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import  {setCustomWidth, setSelectedCustomStyleOption} from '../../ReduxStore/store'
import  {setCustomHeight} from '../../ReduxStore/store'
import { useNavigate } from "react-router";

const Sizing = () => {

  //states and redux section
  const [isOpen, setIsOpen] = useState(false);
  const customStyleSelectedOption = useSelector((state) => state.customStyleSelectedOption);
  const customWidth = useSelector((state) => state.customWidth);
  const customHeight = useSelector((state) => state.customHeight);
  const dispatch = useDispatch();
  const navigate = useNavigate()

    //declaring the options
  const options = [
    { label: 'You must set the `Orientation` to "customize" for this to work(may not work for mobile devices)' },
    {label:''},
    {label: 'Set your Dimensions '},
    { label: 'width', value: 'width' },
    { label: 'Height', value: 'height' },
  ];

  //opening and closing the toggle button function
  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

    //dispatching the selected value to state and redux store
  const handleOptionSelect = (option) => {
    
    dispatch(setSelectedCustomStyleOption(option))
    if (option && (option.value === 'width' || option.value === 'height')) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  //dispatching customstyleselectedoption values to redux sore
  const handleCustomWidthValueChange = (e) => {
        dispatch(setCustomWidth(e.target.value))       
    };
  const handleCustomHeightValueChange = (e) => {
        dispatch(setCustomHeight(e.target.value))     
    };

    //close the toggle and submit values
  const handleApplyCustomRange = () => {   
    setIsOpen(false);
    navigate('/gallerypage')
  };



  return (
    <div className="custom-dropdown-sizing">

      <div
        className={`dropdown-toggle ${isOpen ? "open" : ""}`}
        onClick={handleToggleDropdown}
      >

        {customStyleSelectedOption ? customStyleSelectedOption.label : "Customize Orientation"}
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

          {(customStyleSelectedOption && (customStyleSelectedOption.value === "width" )) && (
            <div className="custom-input">
              
              <input
                type="text"
               placeholder=   "Enter width"
                value={customWidth}
                onChange={handleCustomWidthValueChange}
              />
            
              <button onClick={handleApplyCustomRange}>Apply</button>

            </div>
          )}

          {(customStyleSelectedOption && (customStyleSelectedOption.value === "height" )) && (
            
            <div className="custom-input">
           
              <input
                type="text"
                placeholder=  "Enter Height"
                value={customHeight}
                onChange={handleCustomHeightValueChange}
              />
              
              <button onClick={handleApplyCustomRange}>Apply</button>
            
            </div>
          )}

        </div>
      )}
      
    </div>
  );
};

export default Sizing;
