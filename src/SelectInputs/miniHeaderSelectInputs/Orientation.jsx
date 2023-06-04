import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import { setSelectedOption } from '../../ReduxStore/store'; // Update the import path according to your project structure


const Orientation = () => {

  //states and redux store section
  const selectedOption = useSelector((state) => state.selectedOption);
  const dispatch = useDispatch();

   //declaring our options
  const options = [  
    { value: 'horizontal', label: 'horizontal' },
    { value: 'vertical', label: 'vertical' },
    { value: 'customize', label: 'customize ' }
  ];


   //custom styles for the contol and option
  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: '5px',
      border: 'none',
      width: '150px',
      height: '40px',
      '&:hover': {
        backgroundColor: '#f0f0f0',
        border: 'none',
        borderRadius: '6px',
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? 'green' : 'white',
      color: state.isFocused ? 'black' : 'inherit',
      borderRadius: '6px',
    }),
  };


   //function to dispatch the selected value to the redux store
  const handleSelectOption = (selectedOption) => { 
    dispatch(setSelectedOption(selectedOption));
  };

  return (
    <div>
      <Select
        options={options}
        styles={customStyles}
        placeholder="Orientation"
        value={selectedOption}
        onChange={handleSelectOption}
      />
    </div>
  );
};

export default Orientation;
