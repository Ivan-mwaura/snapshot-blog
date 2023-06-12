import React from "react";
import Select from 'react-select';
import { useSelector,useDispatch } from "react-redux";
import { setSelectedImageType } from "../../ReduxStore/store";
import { useNavigate } from "react-router";

const AllImages = () =>{

    //states and redux store section
    const selectedImageType = useSelector((state) => state.selectedImageType)
    const dispatch = useDispatch();
    const navigate = useNavigate();

     //declaring our options

    const options = [
        { value: 'category', label: 'Categories' },
        { value: 'images', label: 'All Images' },
        { value: 'photo', label: 'Photos' },
        { value: 'illustration', label: 'Illustrations' },
        { value: 'vector', label: 'Vectors' },
        { value: 'video', label: 'Videos' },
        { value: 'music', label: 'Music' },
        { value: 'sound effects', label: 'Sound Effects' },
        { value: 'gif', label: 'Gifs' },
    ]

   //custom styles for the contol and option
    const customStyles ={
        control: (provided) =>({
            ...provided,
            borderRadius:'5px',
            border:'none',           
            width:'150px',
            height:'40px',
           
            color:'#d7dbdf',
            fontSize:'15px',

            '&:hover':{backgroundColor:' #f0f0f0', border:'none' ,borderRadius:'6px'}

        }),
        option:(provided, state) => ({
            ...provided,
            backgroundColor:state.isFocused ? 'green' : 'white',
            color: state.isFocused ? 'black' : 'inherit',
            borderRadius:'6px'
        })
    }

    //function to dispatch the selected value to the redux store
    function handleSelectedImageType (selectedImageType){
        dispatch(setSelectedImageType(selectedImageType))

        if(selectedImageType.value === 'video'){
            navigate('/videospage')
        }
        else if(selectedImageType.value === 'images'){
            navigate('/gallerypage')
        }

    }

return(
    <div>
        <Select options={options} 
            styles={customStyles}
            placeholder = 'All Images'
            value={selectedImageType}
            onChange={handleSelectedImageType}
         />
    </div>
)
}
export default AllImages
