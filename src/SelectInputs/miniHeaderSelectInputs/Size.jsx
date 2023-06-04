import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import  {setCustomWidth, setSelectedCustomStyleOption} from '../../ReduxStore/store'
import  {setCustomHeight} from '../../ReduxStore/store'

const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const customStyleSelectedOption = useSelector((state) => state.customStyleSelectedOption);
  const customWidth = useSelector((state) => state.customWidth);
  const customHeight = useSelector((state) => state.customHeight);
  const dispatch = useDispatch();

  const options = [
    { label: 'You must set the `Orientation` to customize for this to work' },
    {label:''},
    {label: 'Set your Dimensions '},
    { label: 'width', value: 'width' },
    { label: 'Height', value: 'height' },
  ];

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    //setSelectedOption(option);
    dispatch(setSelectedCustomStyleOption(option))

    if (option && (option.value === 'width' || option.value === 'height')) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  const handleCustomWidthValueChange = (e) => {

    dispatch(setCustomWidth(e.target.value))
       
  };
  const handleCustomHeightValueChange = (e) => {

    dispatch(setCustomHeight(e.target.value))
  
  
};

  const handleApplyCustomRange = () => {
    // Perform actions specific to custom range selection
    

    setIsOpen(false);
  };

  console.log(customWidth, customHeight)

  return (
    <div className="custom-dropdown-size">
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

export default CustomDropdown;
