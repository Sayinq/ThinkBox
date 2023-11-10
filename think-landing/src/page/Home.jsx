import React from 'react'
import testLogo from '../assets/casestudy_grundge_logo.png';
import arrowRight from '../assets/arrow-90-right.svg';
import BlogSection from '../components/BlogSection';
import ScrollingText from '../components/ScrollingText';

const Home = () => {
    return (
        <main>

            {/* Hero Section */}
            <section className="relative w-screen h-[500px] bg-[#D2D2D2]">
                <div className="absolute flex flex-col gap-y-4 p-4">
                    <img src={testLogo} />
                    <h1 className="text-4xl font-bold mb-8">Myles McGhee</h1>
                    <div className="flex flex-col text-2xl font-semibold">
                        <h2 className="mb-2">Conference 20'</h2>
                        <div className="flex flex-row items-center">
                            <img src={arrowRight} className="w-4 h-4" />
                            <h2 className="pl-4">Conference '22</h2>
                        </div>
                        <div className="flex flex-row items-center">
                            <img src={arrowRight} className="w-4 h-4" />
                            <h2 className="pl-4">Conference '22</h2>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hero About */}
            <section className="flex flex-row w-screen h-[200px] px-4 pt-4 text-base font-bold bg-white">
                <div className="flex flex-col w-1/2">
                    <h2>Test Text Title</h2>
                    <h2 className="pl-4">foundation</h2>
                </div>
                <div className="flex flex-col w-1/2">
                    <h2>New Berlin</h2>
                    <div className="flex flex-row items-center pl-2">
                        <img src={arrowRight} className="w-4 h-4" />
                        <h2 className="pl-4">Conference '22</h2>
                    </div>
                </div>
            </section>
            <section id="scrolling-text" className="w-[200%] min-w-[110%] h-auto mb-8">
                <ScrollingText baseVelocity={-5}>CASE STUDY</ScrollingText>
                <ScrollingText baseVelocity={5}>MYLES MCGHEE</ScrollingText>
            </section>
            {/* Blog Read component */}
            <BlogSection />

            <footer className="flex flex-row justify-between items-center w-screen h-auto p-4">
                <div id="footer-logo">
                    <img src={testLogo} className="w-16 h-16" />
                </div>
                <div id="footer-links" className="flex flex-row gap-x-4 w-1/2 justify-start items-center">
                    <a href="www.behance.com"><span>Behance</span></a>
                    <a href="www.webflow.com"><span>Webflow</span></a>
                </div>
            </footer>
        </main>
    )
}

export default Home