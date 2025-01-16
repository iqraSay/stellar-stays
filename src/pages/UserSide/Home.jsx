import React from 'react';
// import { Link } from 'react-router-dom';
import logo from '../../logo.png';
import Header from '../../components/Header'
import Hero from '../../pages/UserSide/Hero'
import Footer from '../../components/Footer'

const Home = () => {

  
    return (
      <div className="h-auto bg-cover bg-left ">
        <Header/>
        <Hero/>
        <Footer/>


    </div>
    )
  }

export default Home;