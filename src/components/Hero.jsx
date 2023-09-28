import React from 'react'
import logo from '../assets/logo.svg'

const Hero = () => {
    return (
        <header className='HeroSection w-full'>
            <nav className='header flex flex-row justify-between items-center md:items-baseline w-full mt-4'>
                <img src={logo} className='w-28' alt='logo' />
                <button className='bg-black text-white rounded-full px-6 text-sm py-2 duration-500 hover:bg-white hover:text-black hover:border hover:border-black'>
                    Github </button>
            </nav>

            <div className='Introduction mt-16'>
                <div className='IntroductionTitle'>
                    <h1 className='text-black text-3xl sm:text-5xl md:text-6xl text-center font-extrabold'> Summarize Articles  with </h1>
                    <h1 className='text-3xl sm:text-5xl md:text-6xl text-center font-extrabold orange_gradient '> OpenAI GPT-4 </h1>
                </div>

                <div className='IntroductionDescription text-center mt-5 text-[#4b5563] text-xl w-full md:w-7/12 mx-auto'>
                    Simplify your reading with Summize, an open-source article summarizer that transforms lengthy articles into clear and concise summaries
                </div>
            </div>
        </header>
    )
}

export default Hero