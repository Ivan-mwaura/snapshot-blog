import React, { useState } from  'react';
import Header from './header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faHeart, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import Footer from '../footer';
import Download from '../../SelectInputs/UserImageInfoPageSelectInputs.jsx/Download';


const UserAndImageInfoPage = () =>{

const userImageInfo = useSelector((state) => state.userImageInfo);
const [likeCount, setLikeCount] = useState(userImageInfo.likes);


const [like, setLike] = useState(false);



function handleLike(){

setLike((prevLike) => !prevLike);

    if(like === false){
      setLikeCount((likeCount) => likeCount + 1);
    }
    else{
      setLikeCount((likeCount) => likeCount - 1);
    }
}



    return (
        <>
        <Header/>

        <div className='user-image-info-container'>
            

            <div className='all-info-container'>

                <div className='user-info-container'>

                    <div className='user-info-left'>

                        <img src={userImageInfo.userProfileImage} alt='' className=''/>

                        <div className='title'>
                            <h1>{userImageInfo.userName}</h1>
                            <p> followers</p>
                        </div>

                    </div>

                    <div className='user-info-right'>
                        <h1><FontAwesomeIcon icon={faUserPlus}/> &nbsp;Follow</h1>
                    </div>
                   
                </div>

                <div className='image-info-container'>

                    <div className='icons'>
                        <span className='collection-icon'>
                            <FontAwesomeIcon icon={faBookmark } color='green' className='bookmark' />
                        </span>

                        <span className="likes-icon "  onClick={handleLike}>
                            <FontAwesomeIcon icon ={faHeart} color='black' className={`heart ${like ? "liked" : " "}`}/> 
                            <span>{likeCount} likes</span>
                        </span>
                    </div>

                    <div className='download'>
                            
                            <div className='download--menu'>
                                <Download/>
                            </div>
                           
                    </div>

                </div>

            </div>

            <div className='selected--image'>

                <div className='image'>
                     <img src={userImageInfo.image} alt=''/>
                </div>     

            </div>
        </div>

        <Footer/>
        </>
   
    )

}
export default UserAndImageInfoPage