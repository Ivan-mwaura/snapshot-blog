import React ,{useRef}from 'react'
import '../style.scss'
import Explore from '../../SelectInputs/Explore'
import AllImages from '../../SelectInputs/AllImages'
import { Bell, Search, Upload } from 'react-bootstrap-icons'
import { useDispatch } from 'react-redux'
import { setQuery } from '../../ReduxStore/store'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import { useEffect } from 'react'


const Navbar = () => {
  const [scrollDirection, setScrollDirection] = useState('down');
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarRef = useRef()

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      console.log(currentPosition)
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
      
    
    return(
    <div className='navbar--container'>
      <div className={`navbar ${scrollDirection === 'up' ? 'scroll-up' : ''}` } ref = {navbarRef}>
        <span className = 'website--name'>    
            <h1 className='snapshot--name'>SnapShot</h1>
            {/*<button onClick={() => app.auth().signOut()}>SignOut</button>*/}
        </span>

        <div className='navbar-top-left-items'>
            
        <div className="explore">
          <Explore />
        </div>

        <span className="notification">
          <Bell size={20} 
          color='white'
          fill='white'
          />
        </span>
            <div className='profile'>
                <img  src='' alt='' className='my--profile'/>
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