import React from 'react'
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Home from './pages/dashboard/Home';
import Income from './pages/dashboard/Income';
import Expense from './pages/dashboard/Expense';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path = "/" element = {<Root/>} />
          <Route path ="/login" exact element ={<Login/>} />
          <Route path = "/signup" exact element ={<Signup/>}/>
          <Route path = "/dashboard" exact element ={<Home/>}/>
          <Route path = "/income" exact element ={<Income/>}/>
          <Route path = "/expense" exact element ={<Expense/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App

const Root = () => {
  //check if token exists in localStorage
  const isAuthenticated = !!localStorage.getItem("token");

  //REdirect to dashoard if authenticated , otherwise to login
  return isAuthenticated ?(
    <Navigate to ="/dashboard"/>
  ):(
    <Navigate to ="/login" />

  )
  

}
