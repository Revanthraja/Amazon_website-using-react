import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch ,Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from "./Login";
import {auth} from './firebase'
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import Orders from "./Orders";
const promise =loadStripe('pk_test_51LiJn0SHscVHy4mTp9qzxwoEl3NcpODMpkBakAvuyzBG8J2LpI16HQhyApiH1u3Og0oZqyW6jQBiVJE9kv9Ba7WX00eJ7DzZgQ')
function App() {
  const [{},dispatch]=useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log("The user is >>",authUser);
      if(authUser){
        //the user just logged in
        dispatch({
          type :"SET_USER",
          user:authUser
        })
      }else{
        //user is logged out
        dispatch({
          type :"SET_USER",
          user:null
        })
      }
    
    })
  },[])
  return (
    //BEM
    <Router>
    <div className="App">
      
     

      <Switch>

      <Route path="/orders">
      <Header/>
        <Orders/>
        
         
        </Route>

      <Route path="/login">
        
        <Login/>
        
         
        </Route>
        
      <Route path="/checkout">
      <Header/>
        
        <Checkout/>
        
         
        </Route>
        <Route path="/payment">
      <Header/>
      <Elements stripe={promise}>
      <Payment/>
      </Elements>
        
        
        
         
        </Route>
        <Route path="/">
        <Header/>
        
         <Home/>
        </Route>
     
      </Switch>
      
    </div>
    </Router>
    
  );
}

export default App;
