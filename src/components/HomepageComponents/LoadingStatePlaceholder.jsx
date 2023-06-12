import React, { useEffect, useState } from 'react';
import '../style.scss'
import ReactLoading from 'react-loading';


const LoadingPage = () => {

    const [isLoading, setIsLoading] = useState(true);
    const[showText, setShowText] = useState(false)

    useEffect(() => {
        const startTime = Date.now();
    
        const timer = setInterval(() => {
          const elapsedTime = Date.now() - startTime;
    
          if (elapsedTime >= 4000) {
            setIsLoading(false);
            setShowText(true);
            clearInterval(timer);
          }
        }, 100);
    
        return () => clearInterval(timer);
      }, []);

return(
    <div className="loading-container">
        
    
        {isLoading ? (

        <ReactLoading type={'cylon'} color={'green'} height={'10%'} width={'10%'} />

        ) : showText ? (

                <h1 className='welcome-text'>Welcome to Snapshot</h1>

        ) : null}
        
    </div>
)
}
export default LoadingPage;