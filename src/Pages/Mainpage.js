import React, { useContext } from "react";
import { Routes, Route, useLocation, Navigate} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Querycontext from "../Context/querycontext";
import "../components/style.scss"; // Assuming you have a CSS file for mainpage styles
import LogIn from "./login";
import Signin from "./signup";
import { AuthContext } from "../Auth";
import HomePage from "./homepage";


const Mainpage = () => {
  const location = useLocation();
  const { currentUser } = useContext(AuthContext);
  //const navigate = useNavigate()

  


  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      //navigate('login')
      return <Navigate to="/login" />;
    }

    return children
  };


  return (
    <div>
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
            
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default Mainpage;
