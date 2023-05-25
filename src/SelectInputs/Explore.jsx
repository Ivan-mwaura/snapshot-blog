
import React, { useState } from 'react';
import { X } from 'react-bootstrap-icons';
import Select from 'react-select';

const Explore = () => {
  const options = [
    {
      value: 'media',
      label: 'Media',
    },
    {
      value: 'discover',
      label: 'Discover',
    },
  ];

  const childrenMapping = {
    media: [
      { value: 'photos', label: 'Photos' },
      { value: 'illustrations', label: 'Illustrations' },
      { value: 'vectors', label: 'Vectors' },
      { value: 'videos', label: 'Videos' },
      { value: 'music', label: 'Music' },
      { value: 'sound effects', label: 'Sound Effects' },
      { value: 'gifs', label: 'Gifs' },
    ],
    discover: [
      { value: 'editors choice', label: 'Photos' },
      { value: 'curated collections', label: 'Curated Collections' },
      { value: 'popular images', label: 'Popular Images' },
      { value: 'popular videos', label: 'Popular videos' },
      { value: 'popular music', label: 'Popular music' },
      { value: 'popular searches', label: 'popular searches' },
    ],
  };

  const [selectedOption, setSelectedOption] = useState(null);
  const [collapse, setCollapse] = useState(true);

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    setCollapse(!collapse);
  };

  const handleCollapse = () => {
    setCollapse((prevState) => !prevState);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: '5px',
      border: 'none',
      width: '150px',
      height: '40px',

      '&:hover': { backgroundColor: '#f0f0f0', border: 'none', borderRadius: '6px' },
    }),

    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? 'green' : 'white',
      color: state.isFocused ? 'black' : 'black',
      borderRadius: '6px',
    }),
  };

  const nestedOptionStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isFocused ? 'green' : 'green',
      fontSize: state.isFocused ? '5px' : '5px',
      fontWeight: state.isFocused ? '5' : '5',
    }),
  };

  return (
    <div className='select--container'>
      <Select
        options={options}
        onChange={handleSelectChange}
        styles={customStyles}
        placeholder='Explorer'
      />

      {selectedOption && (
        <div className='list--container'>
          {childrenMapping[selectedOption.value] && (
            <div className='list--content' style={{border : collapse ? '2px solid #f0f0f0' :  'none'}}>
              <ul>
                {collapse && (
                  <X
                    color='Black'
                    
                    size={35}
                    className='x--icon'
                    onClick={handleCollapse}
                  />
                )}

                {collapse &&
                  childrenMapping[selectedOption.value].map((child) => (
                    <li key={child.value} styles={nestedOptionStyles.option}>
                      {child.label}
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Explore;
