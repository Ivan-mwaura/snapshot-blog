import React from "react";
import Mainpage from "./Pages/Mainpage";
import { Provider } from "react-redux";
import store from "./ReduxStore/store";
//import AllReducers from "./ReduxStore/reducers";


const App = () => {
  return(
    <div>
      <Provider store={store}>
          <Mainpage/>
      </Provider>
        
    </div>
  )
}
export default App;