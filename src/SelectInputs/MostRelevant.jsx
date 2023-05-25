import React from "react";
import Select from 'react-select';
import { useSelector,useDispatch } from "react-redux";
import { setSelectedOrder } from "../ReduxStore/store";

const MostRelevant= () =>{

    const selectedOrder = useSelector((state) => state.selectedOrder)
    const dispatch  = useDispatch();

    const options = [
        {label:'Editors Choice'},
        {  value: 'popular', label:'Popular'},
        { value: 'latest', label: 'latest' },
        { value: 'trending', label: 'Trending' },    
        { value: 'editors choice', label: 'Editors Choice' },
        { value: 'mostrelevant', label: 'Most Relevant' },
        
    ]

    const customStyles ={
        control: (provided) =>({
            ...provided,
            borderRadius:'5px',
            border:'none',
            width:'170px',
            height:'40px',
            marginLeft:'20px',

            '&:hover':{backgroundColor:'#f0f0f0', border:'none' ,borderRadius:'6px'}

        }),
        option:(provided, state) => ({
            ...provided,
            backgroundColor:state.isFocused ? 'green' : 'white',
            color: state.isFocused ? 'black' : 'inherit',
            borderRadius:'6px'
        })
    }

    function  handleSelectOrder(selectedOrder){
        dispatch(setSelectedOrder(selectedOrder))
    }

return(
    <div>
        <Select options={options}
         styles={customStyles}
          placeholder = 'Most Relevant'
          value={selectedOrder}
          onChange={handleSelectOrder}
          />
    </div>
)
}
export default MostRelevant;
