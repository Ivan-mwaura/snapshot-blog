import React from "react";
import Mainpage from "./Pages/Mainpage";
import { Provider } from "react-redux";
import store from "./ReduxStore/store";
import { BrowserRouter } from "react-router-dom";

//import AllReducers from "./ReduxStore/reducers";


const App = () => {
  return(
    <div>
    <BrowserRouter>
      <Provider store={store}>
       
       <Mainpage/>
    
   </Provider>
      </BrowserRouter>
      
        
    </div>
  )
}
export default App;