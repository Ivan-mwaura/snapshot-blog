import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Querycontext from "../Context/querycontext";
import HomePage from "./homepage";
import '../components/style.scss' // Assuming you have a CSS file for mainpage styles

const Mainpage = () => {
  const location = useLocation();

  return (
    <div>
    

      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={300}
        >
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallerypage" element={<Querycontext />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default Mainpage;
