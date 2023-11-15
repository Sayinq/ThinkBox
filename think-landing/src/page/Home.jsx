import React from 'react'
import testLogo from '../assets/think_box_logo.png';
import BlogSection from '../components/BlogSection';
import ScrollingText from '../components/ScrollingText';
import { DistortionHero } from '../components/DistortionHero';

const Home = () => {
    return (
        <main className="flex flex-col xl:flex-row overflow-x-hidden">

            {/* Hero Section */}
            <DistortionHero />



            {/* Hero About */}
            <div id="right-wrapper" className="xl:w-[50%] h-min">
                <section id="scrolling-text" className="w-full h-auto my-8">
                    <ScrollingText baseVelocity={-5}> CASECASECASECASE  </ScrollingText>
                    <ScrollingText baseVelocity={5}> STUDYSTUDYSTUDYSTUDY </ScrollingText>
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