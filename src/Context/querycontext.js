import React, { useState } from "react";
import { createContext } from "react";
import Header from "../components/Gallerycomponents/header";
import Body from "../components/Gallerycomponents/body";

//initialize and export  context as a named export
export const AppContext = createContext(null);

const Querycontext = () => {
  const [query, setQuery] = React.useState({
      searchQuery: ""
   });

   //states section
  const [data, setData] = React.useState([]);
  const [hits, setHits] = useState(0);
  const[selectedOption, setselectOption] = useState()
  const[page, setPage] = useState(1)
  const [showCollection, setShowCollection] = useState(false);

//provide the value / data to our componens with our provider
  return (
    <AppContext.Provider
      value={{ query, setQuery,
         data, setData,
          hits, setHits,
           selectedOption,setselectOption,
           page, setPage,
           showCollection, setShowCollection,    
          }}
    >

      <Header />
      <Body />
   
    </AppContext.Provider>
  );
};

export default Querycontext;
