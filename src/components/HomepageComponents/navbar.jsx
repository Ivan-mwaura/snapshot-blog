import React ,{useRef}from 'react'
import '../style.scss'
import AllImages from '../../SelectInputs/miniHeaderSelectInputs/AllImages'
import { Bell, Discord, Facebook, Instagram, Pinterest, Search, Twitter, Upload } from 'react-bootstrap-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrush, faCamera, faFileAudio, faFileVideo, faMusic, faVectorSquare, faVideo } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux'
import { setQuery } from '../../ReduxStore/store'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import { useEffect } from 'react'
import { auth } from '../../firebase';
import zebra from '../Images//zebra-7853009_1920.jpg'


const Navbar = () => {
  const [scrollDirection, setScrollDirection] = useState('down');
  const [scrollPosition, setScrollPosition] = useState(0);
  const[showExplorer, setShowExplorer] = useState(false)
  const navbarRef = useRef()

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
     
      if (currentPosition > scrollPosition) {
        setScrollDirection('up');
      } else {
        setScrollDirection('down');
      }
      setScrollPosition(currentPosition);
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);
  


    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(document.getElementById('searchForm'));
        const searchQuery = formData.get('searchQuery');
        dispatch(setQuery(searchQuery));
        navigate('/gallerypage');
      };

      const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          handleSubmit(event);
        }
      };
      
  const handleSignOut = async() => {
try {
  await auth.signOut()
  navigate('/login')
} catch (err) {
  console.log(err)
}
    }

    function handleExplorer(){
      setShowExplorer((prevState) => !prevState)
    }

    return(
    <div className='navbar--container'>
      <div className={`navbar ${scrollDirection === 'up' ? 'scroll-up' : ''}` } ref = {navbarRef}>
        <span className = 'website--name'>    
            <h1 className='snapshot--name'>SnapShot</h1>
            
        </span>
        

        <div className='navbar-top-left-items'>
            
        <div className="explorer">
          <button className="explore--button"
            onClick={handleExplorer}
            
          >
            Explore
          </button>
        </div>
      {showExplorer &&  <div className="explorerhomepage--menu">
        <div className="list--div">
          <div className="list1">
              <ul><label>Media</label><br/>
                <li><FontAwesomeIcon icon={faCamera}/> &nbsp; &nbsp; Photos</li>
                <li> <FontAwesomeIcon icon={faBrush}/>&nbsp; &nbsp;  Illustrations</li>
                <li><FontAwesomeIcon icon={faVectorSquare}/> &nbsp; &nbsp; vectors</li>
                <li><FontAwesomeIcon icon={faVideo}/>&nbsp; &nbsp;  Videos</li>
                <li> <FontAwesomeIcon icon={faMusic}/> &nbsp; &nbsp; Music</li>
                <li> <FontAwesomeIcon icon={faFileAudio}/>&nbsp; &nbsp;  sound Effects</li>
                <li><FontAwesomeIcon icon={faFileVideo}/>&nbsp; &nbsp;  Gifs</li>
              </ul>
            
            </div>

            <div className="list2">
              <ul><label>Discover</label><br/>
                <li>Editors Choice</li>
                <li>curated Collections</li>
                <li>popular Images</li>
                <li>Popular videos</li>
                <li>Popular Music</li>
                <li>Popular searches</li>
              </ul>             
            </div>

            <div className="list3">
              <ul><label>Community</label><br/>
                <li>Creators</li>
                <li>Forum</li>
                <li>Blog</li>
                <li>Cameras</li>
              
              </ul>
            </div>

            <div className="list4">
              <ul><label>About</label><br/>
                <li>About us</li>
                <li>FAQ</li>
                <li>License Summary</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>cookies Policy</li>
                <li>API</li>
                <li>Language</li>
              </ul>

            </div>
          </div>
           <div className="social--media">
            <div>
                <Instagram style={{color:'white'}}/> &nbsp;&nbsp; &nbsp;
                <Twitter style={{color:'white'}}/>&nbsp;&nbsp;&nbsp;
                <Discord style={{color:'white'}}/>&nbsp;&nbsp;
                <Pinterest style={{color:'white'}}/>&nbsp;&nbsp;&nbsp;
                <Facebook style={{color:'white'}}/>&nbsp;&nbsp;&nbsp;
            </div>
               
           </div>
      </div>}

             

        <span className="notification">
          <Bell size={20} 
          color='white'
          fill='white'
          />
        </span>
            <div className='profile'>
                <img  src={zebra} alt='' className='my--profile'/>
                <button onClick={handleSignOut} className='signout'>SignOut</button>
            </div>
            
            
            <span className="upload">
                <button className="upload--button">
                    <Upload size={20} color="white" />
                Upload
                </button>
            </span>
        </div>

        
        </div>
        <div className='navbar-center-items'>
            <h1 className='nav-h1'>Stunning royalty-free images & royalty-free stock</h1>

             <p className='nav-p1'>Over 4 million+ high quality stock images, videos and music shared by our talented community.</p>

            <form className="search--form" id='searchForm' onSubmit={handleSubmit}>
                <div className='search--container'>
                   <Search size={20} style={{color:'green'}} onClick={handleSubmit}/>
                    <input
                         type="text"
                        placeholder="Search for all images on snapshot ..."
                        className="search--bar"              
                        name="searchQuery"    
                        onKeyPress={handleKeyPress}            
                    />
                    <span className='all-images'><AllImages/></span>
                    
                </div>
               
          </form>

        </div>

    </div>
    )



}
export default Navbar;