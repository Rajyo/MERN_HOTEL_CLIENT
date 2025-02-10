import { useEffect } from 'react'

const About = () => {
  useEffect(()=>{
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  },[])
  return (
    <>
      <section className='mt-12 sm:mt-20 sm:m-8 md:m-12 lg:m-16'>
        <h3 className="my-5 text-center text-2xl sm:text-4xl lg:text-5xl font-bold uppercase ">About us</h3>
        <p className="text-center sm:mx-28 md:mx-40 lg:mx-60 px-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
          error amet numquam iure provident voluptate esse quasi, veritatis
          totam voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>
      </section>
      <div className='lg:mt-[-2rem]'>
        <div className='md:grid md:grid-cols-2 m-4 mt-12 sm:mt-20 sm:m-8 md:m-12 lg:m-28'>
          <div className='md:max-w-[90%]'>
            <h1 className='text-lg sm:text-2xl md:text-4xl lg:text-6xl text-wrap my-2'>We <span className='font-bold'>provide Solution</span> to grow your business</h1>

            <p className='mt-4 md:mt-10 text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>
            <p className='my-4 text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>

            <button className='px-2 sm:px-4 py-2 md:py-2 bg-[#038c7f] rounded-lg md:rounded-2xl shadow-sm shadow-[#038c7f] text-white font-bold text-xs md:text-sm hover:scale-110 duration-300 transition-all'>
              Explore more <i className='fas fa-long-arrow-alt-right'></i>
            </button>
          </div>

          <div className='overflow-hidden rounded-lg md:h-auto mt-4 md:mt-0' >
            <img src="/images/hero-1.jpeg" alt='hero' width={300} height={300} className='object-cover w-full h-full hover:scale-125 transition-all duration-700' />
          </div>
        </div>
      </div>
      <div className='sm:mb-10 md:mb-24'>
        <div className='md:grid md:grid-cols-2 m-4 mt-12 sm:mt-16 md:mt-8 sm:m-8 md:m-12 lg:mx-28'>
          <div className='max-[768px]:hidden overflow-hidden md:h-auto mt-4 md:mt-0'>
            <img src="/images/hero-2.jpeg" alt='hero' width={300} height={300} className='object-cover rounded-lg w-full h-full hover:scale-125 transition-all duration-700' />
          </div>
          <div className='md:max-w-[90%] md:ml-16'>
            <h1 className='text-lg sm:text-2xl md:text-4xl lg:text-6xl text-wrap my-2'>Our Features</h1>

            <p className='mt-4 md:mt-10 text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>
            <p className='my-4 text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>

            <button className='px-2 sm:px-4 py-2 md:py-2 bg-[#038c7f] rounded-lg md:rounded-2xl shadow-sm shadow-[#038c7f] text-white font-bold text-xs md:text-sm hover:scale-110 duration-300 transition-all'>
              Explore more <i className='fas fa-long-arrow-alt-right'></i>
            </button>
          </div>
          <div className='md:hidden overflow-hidden rounded-lg mt-4 mb-12 sm:mb-20' >
            <img src="/images/hero-2.jpeg" alt='hero' width={300} height={300} className='object-cover w-full h-full hover:scale-125 transition-all duration-700' />
          </div>
        </div>
      </div>
    </>
  )
}

export default About