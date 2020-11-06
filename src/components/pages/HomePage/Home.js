import React from 'react';
import HeroSection from "../../HeroSection/HeroSection";
import { homepageData } from './Data'
import Pricing from "../../Pricing/Pricing";


function Home() {
    return (
        <>
            <HeroSection {...homepageData[0]} />
            <HeroSection {...homepageData[1]} />
            <HeroSection {...homepageData[2]} />
            <HeroSection {...homepageData[3]} />
            <Pricing />
        </>
    );
}

export default Home;