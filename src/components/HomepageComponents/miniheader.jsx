import React from 'react'
import { faBrush, faCamera, faFileAudio, faFileVideo, faHome, faMusic, faVectorSquare, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setDataType, setQuery} from '../../ReduxStore/store';


const MiniHeader = () => {

    //redux and states section
    const navigate = useNavigate()   
    const dispatch = useDispatch()

  
    //functions to handle various logic(suggestions)

    function handleClick1(){
        navigate('/gallerypage')
        dispatch(setQuery('nature'))
    }

    function handleClick2(){
        navigate('/gallerypage')
        dispatch(setQuery('wallpaper'))
    }

    function handleClick3(){
        navigate('/gallerypage')
        dispatch(setQuery('background'))
    }

    function handleClick4(){
        navigate('/gallerypage')
        dispatch(setQuery('sky'))
    }

    function handleClick5(){
        navigate('/gallerypage')
        dispatch(setQuery('flowers'))
    }

    function handleClick6(){
        navigate('/gallerypage')
        dispatch(setQuery('food'))
    }

    function handleClick7(){
        navigate('/gallerypage')
        dispatch(setQuery('water'))
    }

    function handleClick8(){
        navigate('/gallerypage')
        dispatch(setQuery('cat'))
    }

    function handleClick9(){
        navigate('/gallerypage')
        dispatch(setQuery('flower'))
    }

    function handleClick10(){
        navigate('/gallerypage')
        dispatch(setQuery('love'))
    }

    function handleClick11(){
        navigate('/gallerypage')
        dispatch(setQuery('money'))
    }
    function handleClick12(){
        navigate('/gallerypage')
        dispatch(setQuery('beach'))
    }

    function handleClick13(){
        navigate('/gallerypage')
        dispatch(setQuery('iphone'))
    }

    function handleImageType1(){
        const imageType = 'photo';
        dispatch(setDataType(imageType))
    }

    function handleImageType2(){

        const imageType = 'illustration';      
        dispatch(setDataType(imageType))
    }

    function handleImageType3(){
        const imageType = 'vector';
        dispatch(setDataType(imageType))
    }
    function handleImageType4(){       
        navigate('/videospage')
    }

    return(
        <div className='mini--header'>

            <div className='mini-header-wrap'>
                
                <div className='all-options'>
                    <button className='butn1' onClick={handleImageType1}><FontAwesomeIcon icon={faHome} color='green' /> &nbsp; All Images</button>
                    <button className='butn2' onClick={handleImageType1} > <FontAwesomeIcon icon={faCamera}/>&nbsp; Photos</button>                   
                    <button className='butn3' onClick={handleImageType3}><FontAwesomeIcon icon={faVectorSquare}/>&nbsp; Vectors</button>
                    <button className='butn4'  onClick={handleImageType2}><FontAwesomeIcon icon={faBrush}/>&nbsp; Illustrations</button>
                    <button className='butn5' onClick={handleImageType4}><FontAwesomeIcon icon={faVideo}/>&nbsp; Videos</button>
                    <button className='butn6'><FontAwesomeIcon icon={faMusic}/>&nbsp; Music</button>
                    <button className='butn6'><FontAwesomeIcon icon={faFileAudio}/>&nbsp; Sound Effects</button>
                    <button className='butn7'><FontAwesomeIcon icon={faFileVideo}/>&nbsp; Gifs</button>
                </div>

                <div className='suggestions'>
                    <button className='suggestion--button1' onClick={handleClick1}>nature</button>
                    <button className='suggestion--button2' onClick={handleClick2}>wallpaper</button>
                    <button className='suggestion--button3' onClick={handleClick3}>background</button>
                    <button className='suggestion--button4' onClick={handleClick4}>sky</button>
                    <button className='suggestion--button5' onClick={handleClick5}>flowers</button>
                    <button className='suggestion--button6' onClick={handleClick6}>food</button>
                    <button className='suggestion--button7' onClick={handleClick7}>water</button>
                    <button className='suggestion--button8' onClick={handleClick8}>cat</button>
                    <button className='suggestion--button9' onClick={handleClick9}>flower</button>
                    <button className='suggestion--button10' onClick={handleClick10}>love</button>
                    <button className='suggestion--button11' onClick={handleClick11}>money</button>
                    <button className='suggestion--button12' onClick={handleClick12}>beach</button>
                    <button className='suggestion--button13' onClick={handleClick13}>Iphone</button>
                    <hr/>
                </div>
             
            </div>          
        </div>
    )
}
export default MiniHeader;