import React from "react";
import Select from 'react-select';
import { useSelector,useDispatch } from "react-redux";
import { setPublishDate } from "../../ReduxStore/store";

const PublishedDate= () =>{

    const publishDate = useSelector((state) => state.publishDate) 
    const dispatch = useDispatch()

    const options = [
        {  label: 'Filter Images by ' },
        { value: '1', label: '1 month' },
        { value: '2', label: '2 months' },
        { value: '3', label: '3 months' },
        { value: '4', label: '4 months' },
        { value: '5', label: '5 months' },   
        { value: '6', label: '6 months' },     
        
    ]

    const customStyles ={
        control: (provided) =>({
            ...provided,
            borderRadius:'5px',
            border:'none',
            width:'180px',
            height:'40px',

            '&:hover':{backgroundColor:' #f0f0f0', border:'none' ,borderRadius:'6px'}

        }),
        option:(provided, state) => ({
            ...provided,
            backgroundColor:state.isFocused ? 'green' : 'white',
            color: state.isFocused ? 'black' : 'inherit',
            borderRadius:'6px'
        })
    }

    function handlePublishDate (publishDate){
        dispatch(setPublishDate(publishDate))
    }

return(
    <div>
        <Select options={options} 
        styles={customStyles} 
        placeholder = 'Published Date'
        value={publishDate}
        onChange={handlePublishDate}
        />
    </div>
)
}
export default PublishedDate;
