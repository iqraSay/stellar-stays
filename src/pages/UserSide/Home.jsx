import React from 'react';
// import { Link } from 'react-router-dom';
import logo from '../../logo.png';
import Hero from '../../pages/UserSide/Hero'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Booking from '../../components/Booking'
import About from '../../components/About'
import Offers from '../../components/Offers'
import Rooms from '../../components/Rooms'
import Amenities from '../../components/Amenities'
import Pricing from '../../components/Pricing'


const Home = () => {

  
    return (
      <div className="h-auto bg-cover bg-left ">
        <Header/>
        <Hero/>
        <Booking/>
        <About/>
        <Offers/>
        <Rooms/>
        <Amenities/>
        <Pricing/>
        <Footer/>


    </div>
    )
  }

export default Home;