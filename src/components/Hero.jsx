import React from 'react'
import logo from '../assets/logo.svg'

const Hero = () => {
    return (
        <div className='HeroSection w-full'>
            <div className='header flex flex-row justify-between items-baseline w-full mt-4'>
                <img src={logo} className='w-32' />
                <button className='bg-black text-white rounded-full px-6 text-sm py-2'> Github </button>
            </div>

            <div className='Introduction mt-16'>
                <div className='IntroductionTitle'>
                    <h1 className='text-black text-6xl text-center font-extrabold'> Summarize Articles  with </h1>
                    <h1 className='text-6xl text-center font-extrabold orange_gradient '> OpenAI GPT-4 </h1>
                </div>

                <div className='IntroductionDescription text-center mt-5 text-[#4b5563] text-xl w-7/12 mx-auto'>
                    Simplify your reading with Summize, an open-source article summarizer that transforms lengthy articles into clear and concise summaries
                </div>
            </div>
        </div>
    )
}

export default Hero