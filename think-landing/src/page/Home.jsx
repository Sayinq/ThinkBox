import React from 'react'
import testLogo from '../assets/think_box_logo.png';
import arrowRight from '../assets/arrow-90-right.svg';
import BlogSection from '../components/BlogSection';
import ScrollingText from '../components/ScrollingText';
import { DistortionHero } from '../components/DistortionHero';

const Home = () => {
    return (
        <main className="flex flex-col xl:flex-row overflow-x-hidden">

            {/* Hero Section */}
            <DistortionHero />



            {/* Hero About */}
            <div id="right-wrapper" className="xl:w-[50%]">
                <section className="flex flex-row w-screen h-[200px] px-4 pt-4 text-base font-bold bg-white">
                    <div className="flex flex-col w-1/2">
                        <h2>Myles Was Bored</h2>
                        <h2 className="pl-4">Foundation</h2>
                    </div>
                    <div className="flex flex-col w-1/2">
                        <h2>New Berlin</h2>
                        <div className="flex flex-row items-center pl-2">
                            <img src={arrowRight} className="w-4 h-4" />
                            <h2 className="pl-4">Conference '22</h2>
                        </div>
                    </div>
                </section>
                <section id="scrolling-text" className="min-w-[110%] h-auto mb-8">
                    <ScrollingText baseVelocity={-5}>CASE STUDY</ScrollingText>
                    <ScrollingText baseVelocity={5}>MYLES MCGHEE</ScrollingText>
                </section>
                {/* Blog Read component */}
                <BlogSection />

                <footer className="flex flex-row justify-between items-center xl:w-1/2 w-screen h-auto p-4">
                    <div id="footer-logo" className="scale-75 -translate-x-[50px]">
                        <img src={testLogo} className="" />
                    </div>
                    <div id="footer-links" className="flex flex-row gap-x-4 w-1/2 justify-start items-center">
                        <a href="www.behance.com"><span>Behance</span></a>
                        <a href="www.webflow.com"><span>Webflow</span></a>
                    </div>
                </footer>
            </div>
        </main>
    )
}

export default Home