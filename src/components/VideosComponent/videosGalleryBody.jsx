import React, { useState } from 'react';
import { useEffect } from 'react';
import VideosGallery from './videosGallery';
import {  useSelector } from 'react-redux';


const VideosGalleryBody = ()=>{

    const [videoData, setVideoData ] = useState([])
    const apikey = "36442909-5ba159e769d3fab129ac65640";
    const query = useSelector((state) => state.query);
    const safeSearch = useSelector((state) => state.safeSearch);
    const publishDate = useSelector((state) => state.publishDate);
    const selectedOrder = useSelector((state) => state.selectedOrder);
    const [currentPage, setCurrentPage] = useState(1);
    const[page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0);


     //function to filter the images using the maxUpload date, and minUpload date
  function getPastDate(today, months) {
    const pastDate = new Date(today.getTime());
    pastDate.setMonth(today.getMonth() - months);

    return pastDate.toISOString().slice(0, 10);
  }

  //data fetching from the api

   

    useEffect(()=>{
        const today = new Date();
        const minUploadDate = getPastDate(today, publishDate && parseInt(publishDate)); // 1 month ago
        const maxUploadDate = today.toISOString().slice(0, 10);

        const URL = `https://pixabay.com/api/videos/?key=${apikey}&q=${encodeURIComponent(query.searchQuery)}
        &safesearch=${safeSearch}&min_upload_date=${minUploadDate}&max_upload_date=${maxUploadDate}
        &order=${selectedOrder.value}&page=${page}&per_page=30`
       
        function getVideos (){
            fetch(URL)
            .then(response => response.json())
            .then(response => {
                                setVideoData(response.hits)
                                setTotalPages(Math.ceil(response.total / 50)); // Calculate total pages based on total hits
                                window.scrollTo({top:0, behavior:"smooth"})// Scroll to the top of the page feature after fetching data
                            })
    
            .catch((err)=> {
                console.log("Error fetching Videos : " , err)
            })
        }

        getVideos()
    },[
        publishDate,
        query.searchQuery,
        safeSearch,
        selectedOrder.value,
        page
        ])
        
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

    const apiVideoData = videoData.map((vdt)=>{
        
       return(           
            <VideosGallery
                video = {vdt.videos}
                
                key = {vdt.id}
                userProfile = {vdt.userImageURL}
                user = {vdt.user}
                likes = {vdt.likes}
                tags = {vdt.tags}
            />               
        )
      }
    )
 
    

    return(
        <div className='mapped-video-container'>

           <div className='mapped--div'>
                {apiVideoData}
           </div>
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
    )
}
export default VideosGalleryBody;