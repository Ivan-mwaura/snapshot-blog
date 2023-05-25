import React, { useState } from "react";
import { createContext } from "react";
import Header from "../components/Gallerycomponents/header";
import Body from "../components/Gallerycomponents/body";

//import Footer from "../components/footer";
//import Gallery from "../components/Gallery";

export const AppContext = createContext(null);

const Querycontext = () => {
  const [query, setQuery] = React.useState({
    searchQuery: ""
  });

  const [data, setData] = React.useState([]);
  const [hits, setHits] = useState(0);
  const[selectedOption, setselectOption] = useState()
  const[page, setPage] = useState(1)
 /*const [feedback, setFeedback] = useState(false); */

  return (
    <AppContext.Provider
      value={{ query, setQuery, data, setData, hits, setHits, selectedOption,setselectOption,page, setPage}}
    >

     <Header />
      <Body />
    
    </AppContext.Provider>
  );
};

export default Querycontext;
