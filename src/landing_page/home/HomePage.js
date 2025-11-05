import React from 'react';
import Awards from './Awards';
import Education from './Education';
import Hero from './Hero';
import OpenAccount from '../OpenAccount';
import Pricing from './Pricing';
import Stats from './Stats';
import Footer from '../Footer';
import Navbar  from '../Navbar';

function HomePage() {
    return ( 
        <>
         <Hero />
         <Awards />
         <Pricing />
         <Stats />
         <Education />
         <OpenAccount />
        </>
     );
}

export default HomePage;
