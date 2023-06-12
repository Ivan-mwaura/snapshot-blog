import React from "react";
import Select from 'react-select';
import { useSelector,useDispatch } from "react-redux";
import { setSelectedOrder } from "../../ReduxStore/store";

const MostRelevant= () =>{

    //states and redux store section
    const selectedOrder = useSelector((state) => state.selectedOrder)
    const dispatch  = useDispatch();

    //declaring our options

    const options = [
        {label:'Sort By '},
        {  value: 'popular', label:'Popular'},
        { value: 'latest', label: 'latest' },
        { value: 'trending', label: 'Trending' },    

        
    ]

    //custom styles for the contol and option
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

    //function to dispatch the selected value to the redux store
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
