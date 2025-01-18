import React from 'react';
// import { Link } from 'react-router-dom';
import logo from '../../logo.png';
import Hero from '../../pages/UserSide/Hero'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Booking from '../../components/Booking'

const Home = () => {

  
    return (
      <div className="h-auto bg-cover bg-left ">
        <Header/>
        <Hero/>
        <Booking/>
        <Footer/>


    </div>
    )
  }

export default Home;