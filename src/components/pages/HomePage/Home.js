import React from 'react';
import HeroSection from "../../HeroSection/HeroSection";
import { homepageData } from './Data'


function Home() {
    return (
        <>
            <HeroSection {...homepageData[0]} />
            <HeroSection {...homepageData[1]} />
            <HeroSection {...homepageData[2]} />
            <HeroSection {...homepageData[3]} />
        </>
    );
}

export default Home;