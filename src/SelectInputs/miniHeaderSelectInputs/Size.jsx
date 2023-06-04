import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import  {setCustomWidth, setSelectedCustomStyleOption} from '../../ReduxStore/store'
import  {setCustomHeight} from '../../ReduxStore/store'

const Size = () => {

      //states and redux store section
  const [isOpen, setIsOpen] = useState(false);
  const customStyleSelectedOption = useSelector((state) => state.customStyleSelectedOption);
  const customWidth = useSelector((state) => state.customWidth);
  const customHeight = useSelector((state) => state.customHeight);
  const dispatch = useDispatch();


  //declaring our options
  const options = [
    { label: 'You must set the `Orientation` to customize for this to work' },
    {label:''},
    {label: 'Set your Dimensions '},
    { label: 'width', value: 'width' },
    { label: 'Height', value: 'height' },
  ];


   //custom styles for the contol and option
  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  //function to dispatch the selected value to the redux store
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
  };


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

export default Size;
