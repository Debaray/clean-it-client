import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/Home/Home/Home';
import AboutUs from './components/AboutUs/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs/ContactUs';
import Services from './components/Services/Services/Services';
import Pricing from './components/Services/Pricing/Pricing';
import Admin from './components/Admin/Admin/Admin';
import Login from './components/Login/Login/Login';
import DashBoard from './components/DashBoard/DashBoard/DashBoard';

import 'bootstrap/dist/css/bootstrap.min.css';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Switch>
      <Route path="/home">
        <Home></Home>
      </Route>
        <Route path="/aboutUs">
        <AboutUs></AboutUs>
      </Route>
      <Route path="/contactUs">
        <ContactUs></ContactUs>
      </Route>
      <Route path="/services">
        <Services></Services>
      </Route>
      <Route path="/pricing">
       <Pricing></Pricing>
      </Route>
      <Route path="/userDashBoard">
        <DashBoard></DashBoard>
      </Route>
      <Route path="/admin">
        <Admin></Admin>
      </Route>
      <Route path="/login">
        <Login></Login>
      </Route>
      <Route exact path="/">
        <Home></Home>
      </Route>

      </Switch>


      </Router>
    </UserContext.Provider>
  );
}

export default App;
