import React from 'react'
import CountUpNumber from './CountUpNumber';
import hero1 from './hero-1.jpeg'
import hero2 from './hero-2.jpeg'
import hero3 from './hero-3.jpeg'
import { Link } from 'react-router-dom';

const HomeMain = () => {
    return (
        <section className='flex sm:max-w-[95%] md:max-w-[90%] lg:max-w-[85%] px-4 sm:px-0 lg:px-0 items-center gap-12 mx-auto lg:mt-6'>
            <div className='py-6 sm:py-10 h-full'>

                <h1 className='font-semibold md:font-semibold md:text-6xl text-3xl mb-6 mt-2 md:mt-6 lg:mt-10'>Explore Our Exquisite Hotel</h1>
                <p className='text-[#4a4a4a] text-sm sm:text-base lg:text-lg mb-6 sm:mb-12 max-w-lg'>
                    Experience an Exquisite Hotel Immersed in Rich History and Timeless
                    Elegance.
                </p>
                <Link to={`/hotels`}>
                    <button className='px-6 md:px-[40px] lg:px-[62px] py-2 md:py-5 bg-[#038c7f] rounded-lg md:rounded-2xl shadow-sm shadow-[#038c7f] text-white font-bold text-base md:text-xl hover:scale-110 duration-300 transition-all'>Get Started</button>
                </Link>

                <div className='flex justify-between mt-8 md:mt-20'>
                    <div className='flex gap-3 flex-col items-center justify-center'>
                        <p className='text-sm lg:text-xl text-center'>Basic Room</p>
                        <CountUpNumber duration={5000} endValue={50} />
                    </div>
                    <div className='flex gap-3 flex-col items-center justify-center'>
                        <p className='text-sm lg:text-xl text-center'>Luxury Room</p>
                        <CountUpNumber duration={5000} endValue={120} />
                    </div>
                    <div className='flex gap-3 flex-col items-center justify-center'>
                        <p className='text-sm lg:text-xl text-center'>Suite</p>
                        <CountUpNumber duration={5000} endValue={60} />
                    </div>
                </div>

                <div className='sm:hidden mt-4 grid gap-4 grid-cols-1'>
                    <div className='rounded-2xl overflow-hidden h-48'>
                        <img src={hero1} alt='hero-1' width={300} height={300} className='object-cover w-full h-full hover:scale-125 transition-all duration-700' />
                    </div>

                    <div className='grid grid-cols-2 gap-8 h-48'>
                        <div className='rounded-2xl overflow-hidden'>
                            <img src={hero2} alt='hero-2' width={300} height={300} className='object-cover w-full h-full hover:scale-125 transition-all duration-700' />
                        </div>
                        <div className='rounded-2xl overflow-hidden'>
                            <img src={hero3} alt='hero-3' width={300} height={300} className='object-cover w-full h-full hover:scale-125 transition-all duration-700' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='sm:grid hidden gap-8 grid-cols-1 md:mt-10'>
                <div className='rounded-2xl overflow-hidden sm:h-40 md:h-56'>
                    <img
                        src={hero1}
                        alt='hero-1'
                        width={300}
                        height={300}
                        className='object-cover w-full h-full hover:scale-125 transition-all duration-700'
                    />
                </div>

                <div className='grid grid-cols-2 gap-8 sm:h-40 md:h-56'>
                    <div className='rounded-2xl overflow-hidden'>
                        <img
                            src={hero2}
                            alt='hero-2'
                            width={300}
                            height={300}
                            className='object-cover w-full h-full hover:scale-125 transition-all duration-700'
                        />
                    </div>
                    <div className='rounded-2xl overflow-hidden'>
                        <img
                            src={hero3}
                            alt='hero-3'
                            width={300}
                            height={300}
                            className='object-cover w-full h-full hover:scale-125 transition-all duration-700'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeMain