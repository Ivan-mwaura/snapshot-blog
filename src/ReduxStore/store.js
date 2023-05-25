import { createStore, combineReducers } from 'redux';

// Define your reducers
const initialState = {
  selectedOption: null,
  selectedImageType:'photo',
  selectedOrder:'order',
  safeSearch:false,
  publishDate:null,
  galleryData: [],
  dataType:'',
  query:{
    searchQuery: ''
  }
  // Add any other initial state properties here
};

// Define your action creators
export const setSelectedOption = (option) => {
  return {
    type: 'SET_SELECTED_OPTION',
    payload: option,
  };
};

export const setSelectedImageType = (option) => {
  return{
    type:'SET_SELECTED_IMAGE_TYPE',
    payload:option
  };
};


export const setSelectedOrder = (option) => {
  return{
    type:'SET_SELECTED_ORDER',
    payload:option
  }
}

export const setSafeSearch = (option) =>{
  return{
    type:'SET_SAFE_SEARCH',
    payload: option
  }
}

export const setPublishDate = (option) =>{
  return{
    type:'SET_PUBLISH_DATE',
    payload:option
  }
}

export const setQuery = (option) => {
  return {
    type: 'SET_QUERY',
    payload: option,
  };
};

export const setGalleryData = (option) => {
  return {
    type: 'SET_GALLERY_DATA',
    payload:option,
  }
}
export const setDataType= (option) => {
  return {
    type: 'SET_DATA_TYPE',
    payload:option,
  }
}



//define your Reducers
const selectedOptionReducer = (state = initialState.selectedOption, action) => {
  // Handle actions related to selectedOption
  switch (action.type) {
    case 'SET_SELECTED_OPTION':
      return action.payload;
    default:
      return state;
  }
};


const selectedImageTypeReducer = (state = initialState.selectedImageType, action) =>{
  switch(action.type){
    case 'SET_SELECTED_IMAGE_TYPE':
        return action.payload;
      default:
        return state;
  }
}

const selectedOrderReducer = (state = initialState.selectedOrder, action) => {
  switch(action.type){
    case 'SET_SELECTED_ORDER':
        return action.payload;
      default:
        return state;

  }
}

const safeSearchReducer = (state = initialState.safeSearch, action) =>{
  switch(action.type){
    case 'SET_SAFE_SEARCH':
      return action.payload
     default:
      return state
  }
}

const publishDateReducer = (state = initialState.publishDate, action) => {
  switch(action.type){
    case 'SET_PUBLISH_DATE':
      return action.payload
   default:
    return state
  }
}

const queryReducer = (state = initialState.query, action) => {
  switch (action.type) {
    case 'SET_QUERY':
      return {
        ...state,
        searchQuery: action.payload,
      };
    default:
      return state;
  }
};

const galleryDataReducer = (state = initialState.galleryData,  action) =>{
  switch(action.type){
    case 'SET_GALLERY_DATA':
      return action.payload
      default:
        return state;
  }
}
const dataTypeReducer = (state = initialState.dataType,  action) =>{
  switch(action.type){
    case 'SET_DATA_TYPE':
      return action.payload
      default:
        return state;
  }
}

// Combine all reducers
const rootReducer = combineReducers({

  selectedOption: selectedOptionReducer,
  selectedImageType: selectedImageTypeReducer,
  selectedOrder: selectedOrderReducer,
  safeSearch: safeSearchReducer,
  publishDate: publishDateReducer,
  query: queryReducer,
  galleryData: galleryDataReducer,
  dataType: dataTypeReducer
  // Add any other reducers here
});

// Create the Redux store
const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



export default store;