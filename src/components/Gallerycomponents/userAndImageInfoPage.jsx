import React from  'react';
import Header from './header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faDownload, faHeart, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import Footer from '../footer';

const UserAndImageInfoPage = () =>{

const userImageInfo = useSelector((state) => state.userImageInfo);


console.log(userImageInfo.userProfileImage)
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

                        <span className='likes-icon'>
                            <FontAwesomeIcon icon ={faHeart} color='black' className='heart'/> 
                        </span>
                    </div>

                    <div className='download'>
                            <button><FontAwesomeIcon icon={faDownload} color='white'/> Download</button>
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