import React, { useContext } from "react";
import { Routes, Route, useLocation, Navigate} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Querycontext from "../Context/querycontext";
import "../components/style.scss"; // Assuming you have a CSS file for mainpage styles
import LogIn from "./login";
import Signin from "./signup";
import { AuthContext } from "../Auth";
import HomePage from "./homepage";
import UserAndImageInfoPage from "../components/Gallerycomponents/userAndImageInfoPage";


const Mainpage = () => {

  //states section
  const location = useLocation();
  const { currentUser } = useContext(AuthContext);


  //protected route -> check if the user is logged in, else, go back to login page
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      //navigate('login')
      return <Navigate to="/login" />;
    }

    return children
  };

  //routing via react router to various pages of the website
  //react transitions is also included to help with smooth transitions from one page to anothe
  return (
    <div className="mainpage--container" style={{backgroundColor: "transparent" }}>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300} >
          <Routes>

            <Route path="*" index element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<Signin />} />
            <Route path="/gallerypage" element={<Querycontext/>}/>
            <Route path="/userimageinfopage" element={<UserAndImageInfoPage/>}/>
            
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default Mainpage;
