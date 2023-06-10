import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, useLocation, Navigate} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Querycontext from "../Context/querycontext";
import "../components/style.scss"; // Assuming you have a CSS file for mainpage styles
import LogIn from "./login";
import Signin from "./signup";
import { AuthContext } from "../Auth";
import HomePage from "./homepage";
import UserAndImageInfoPage from "../components/Gallerycomponents/userAndImageInfoPage";
import LoadingPage from "../components/HomepageComponents/LoadingStatePlaceholder";


const Mainpage = () => {
  // States section
  const location = useLocation();
  const { currentUser } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to show the loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);



  // Protected route -> check if the user is logged in, else, go back to login page
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  // Routing with CSS transitions
  return (
    <div className="mainpage--container" style={{ backgroundColor: "transparent" }}>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routes>
            <Route
              path="*"
              index
              element={
                <ProtectedRoute>
                  {isLoading ? <LoadingPage /> : <HomePage />}
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<Signin />} />
            <Route path="/gallerypage" element={<Querycontext />} />
            <Route path="/userimageinfopage" element={<UserAndImageInfoPage />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default Mainpage;
