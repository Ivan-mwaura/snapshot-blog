import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import { setSelectedOption } from '../../ReduxStore/store'; // Update the import path according to your project structure

const Orientation = () => {
  const selectedOption = useSelector((state) => state.selectedOption);
  const dispatch = useDispatch();




  const options = [
    
    { value: 'horizontal', label: 'horizontal' },
    { value: 'vertical', label: 'vertical' },
    { value: 'any', label: 'customize ' }
  ];

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

  const handleSelectOption = (selectedOption) => {
    // Dispatch an action to update the selectedOption in Redux store
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
