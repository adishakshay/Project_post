import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Signup from '../src/components/Signup';
import Login from '../src/components/Login';
import Home from './components/Home';
import Contact from './components/Contact';
import ProfileSettings from './components/ProfileSettings';

function App() {
  return (
      <div>
        {/* <Contact /> */}
        {/* <Home /> */}
        {/* <ProfileSettings /> */}
        <Router>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Contact" element={<Contact />}/>
            <Route path="/Home" element={<Home />}/>
            <Route path="/Login" element={<Login />}/>
            <Route path="/Signup" element={<Signup />}/>
            <Route path="/ProfileSettings" element={<ProfileSettings />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;

// import React from "react";
// import { Provider } from 'react-redux';
// import CounterComponent from "./redux/CounterComponent";
// import store from "./redux/store";

// function App()
// {
//   return(
//     <Provider store={store}>
//       <CounterComponent />
//     </Provider>
//   );
// };

// export default App;
