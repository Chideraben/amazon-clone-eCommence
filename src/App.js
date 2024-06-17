import React, {useEffect}from 'react';
import './App.css';
import Homepage from './homepage';
import Login from './Login';
import AmazonNav from './AmazonNav'
import Checkout from './Checkout';
import Sidebar from './Sidebar'
import LastNav from './Last'
import {BrowserRouter as Router, Routes , Route, Navigate} from 'react-router-dom'
import { auth } from './firebase';
import { useStateValue } from './Stateprovider';
import Payment from './payment'
import Error from './errorpage'
//import {  createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const [{user}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
      // the user just logged in or the user was logged in
      dispatch({
        type:"SET_USER",
        user:authUser,
      });
    } else{
      //the user is logged out
      dispatch({
        type: "SET_USER",
        user: null
      })
    }
  })
    //cleanup subscription on unmount
   
  },[])

  return (  
    <Router >
      <AmazonNav />
      <Routes>
      <Route 
          path= '/'
          element= {user? <Navigate to ="/home" />: <Login/>}
        />
       <Route 
          path= '/home'
          element= {<Homepage/>}
        />
        <Route 
            path= '/login'
            element= {<Login/>}
        />
        <Route 
            path= '/checkout'
            element= {<Checkout/>}
           
        />
        <Route
            path = "/payment"
            element = {<Payment/>}
        />
        <Route
          path = "/errorpage"
          element = {<Error/>}
        />
      </Routes>
       {/*<RouterProvider router={router}/>*/}
        <LastNav />

     
    </Router>
  );
}

export default App;
