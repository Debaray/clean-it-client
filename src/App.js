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
import BookService from './components/DashBoard/BookService/BookService';
import BookingList from './components/DashBoard/BookingList/BookingList';
import Review from './components/DashBoard/Review/Review';
import OrderList from './components/DashBoard/OrderList/OrderList';
import AddService from './components/DashBoard/AddService/AddService';
import MakeAdmin from './components/DashBoard/MakeAdmin/MakeAdmin';
import ManageServices from './components/DashBoard/ManageServices/ManageServices';
import NotFound from './components/NotFound/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [selectService, setSelectService] = useState({});
  return (
    <UserContext.Provider value={{ loggedUser: [loggedInUser, setLoggedInUser], selectedService: [selectService, setSelectService] }}>
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
          <PrivateRoute path="/userDashBoard">
            <DashBoard></DashBoard>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <DashBoard></DashBoard>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/bookService">
            <BookService></BookService>
          </PrivateRoute>
          <PrivateRoute path="/bookingList">
            <BookingList></BookingList>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path="/orderList">
            <OrderList></OrderList>
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path="/manageServices">
            <ManageServices></ManageServices>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>


      </Router>
    </UserContext.Provider>
  );
}

export default App;
