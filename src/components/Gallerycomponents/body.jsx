import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../Context/querycontext";
import Gallery from "./Gallery";
import MiniHeader from "./miniheader";
import SecondHeader from "./secondheader";
import { useSelector } from "react-redux";
import Footer from "../footer";
import "../style.scss";

const Body = () => {

  //states section
  const { data, setData, setHits, setFeedback, page, setPage } = useContext(AppContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const apikey = "36442909-5ba159e769d3fab129ac65640";
  const selectedImageType = useSelector((state) => state.selectedImageType);
  const selectedOrder = useSelector((state) => state.selectedOrder);
  const safeSearch = useSelector((state) => state.safeSearch);
  const publishDate = useSelector((state) => state.publishDate);
  const query = useSelector((state) => state.query);

  //function to filter the images using the maxUpload date, and minUpload date
  function getPastDate(today, months) {
    const pastDate = new Date(today.getTime());
    pastDate.setMonth(today.getMonth() - months);

    return pastDate.toISOString().slice(0, 10);
  }

  //data fetching from the api

  useEffect(() => {
    function getImages() {
        const today = new Date();
        const minUploadDate = getPastDate(today, publishDate && parseInt(publishDate)); // 1 month ago
        const maxUploadDate = today.toISOString().slice(0, 10); // Today's date
  
        const url = `https://pixabay.com/api/?key=${apikey}&q=${encodeURIComponent(query.searchQuery)}&page=${page}&per_page=50&image_type=${
        selectedImageType.value}&order=${selectedOrder.value}&safesearch=${safeSearch}&min_upload_date=${minUploadDate}&max_upload_date=${maxUploadDate}`;
  
      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          setData(response.hits);//states recieving all the objects
          setHits(response.total);//total no of hits
          setTotalPages(Math.ceil(response.total / 50)); // Calculate total pages based on total hits
          window.scrollTo({top:0, behavior:"smooth"})// Scroll to the top of the page feature after fetching data
        })
        .catch((error) => {
          console.error("Error fetching images:", error);
        });
    }
  
    getImages();
  }, [
    query,
    setData,
    setHits,
    selectedImageType,  //depedencies arrays sections
    selectedOrder,
    safeSearch,
    publishDate,
    page,
  ]);
  

  if (data > 0) {
    setFeedback(true);
  }

  //function for the nextpage button
  function handleNextPage() {
    if (currentPage < totalPages) {
      setPage((prev) => prev + 1);
      setCurrentPage((prev) => prev + 1);
    }
  }

  //function for the prevpage button
  function handlePreviousChange() {
    if (currentPage > 1) {
      setPage((prev) => prev - 1);
      setCurrentPage((prev) => prev - 1);
    }
  }

  //loading state placeholder
  /*if (!data || data.length === 0) {
    return <div className="loading--placeholder">Loading...</div>; // Add a loading state or placeholder
  }*/

  //mappin the data to the gallery component through props
  const apidata = data.map((dt) => {
    return (
      <Gallery
        key={dt.id}
        tags={dt.tags}
        webformatURL={dt.webformatURL}
        largeImageURL={dt.largeImageURL}
        fullHDURL={dt.fullHDURL}
        userProfile={dt.userImageURL}
        user={dt.user}
        likes = {dt.likes
        }
      />
    );
  });

  return (
    <div>

      <div className="mapped--container">

        <div>

          <MiniHeader />
          <SecondHeader />

          <div className="mapped--div">{apidata}</div>

            <div className="navigation-buttons">

              <button className="next--page" onClick={handlePreviousChange}>
                {currentPage - 1} &lt; ... prev
              </button>

              <button className="next--page" onClick={handleNextPage}>
                 next...
                 &gt;  {currentPage} 
              </button>

            </div>

          </div>

      </div>

        <Footer />{/*footer */}
    </div>
  );
};

export default Body;
