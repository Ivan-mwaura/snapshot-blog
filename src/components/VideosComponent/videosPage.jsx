import React from  'react'
import Header from '../Gallerycomponents/header';
import MiniHeader from '../Gallerycomponents/miniheader';
import VideosGalleryBody from '../VideosComponent/videosGalleryBody';
import '../VideosComponent/videosPage.scss'
import Footer from '../footer';


const VideosPage = () => {

    return (
        <div className='videos-page-container'>
            <div className='header-div'>
                <Header/>
            </div>
            <div className='miniheader-div'>
                <MiniHeader/>
            </div>

            <div className='videos-gallery-div'>
                <VideosGalleryBody />
            </div>    
            <div>
                <Footer/>
            </div>     
        </div>

    )
}
export default VideosPage;