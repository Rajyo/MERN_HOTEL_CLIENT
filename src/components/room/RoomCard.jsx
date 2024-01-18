import React from 'react'
import { Link } from "react-router-dom"
import hero1 from '../homeMain/hero-1.jpeg'
import { FaRupeeSign } from "react-icons/fa";

const RoomCard = ({ item, name, city }) => {

    return (
        <>
            <div className=' group mb-10 sm:mb-8 md:mb-6 lg:mb-4 border border-gray-100 rounded-md p-5 hover:bg-emerald-100 bg-white'>

                <div className="overflow-hidden">
                    <img src={hero1} alt='Gallery Pic' className='rounded-md object-cover w-full h-full group-hover:scale-125 duration-700 transition-all' />
                </div>

                <div className='my-3 justify-between items-center flex flex-wrap'>
                    <h3 className="text-xl font-semibold uppercase">{name ? name : item.hotelName}</h3>
                    <label className="rounded-md uppercase px-2 py-1 flex font-bold align-middle"><span className='mt-[5px] mr-1 '><FaRupeeSign /></span><span className='text-[#f27405] text-lg'>{item.price}</span></label>
                </div>

                <div className='my-3 justify-between items-center flex flex-wrap'>
                    {/* <span className="rounded-md text-sm text-white uppercase bg-[#d18945] px-2 py-1">{item.title}</span> */}
                    <span className="rounded-md text-sm text-white uppercase bg-[#315db9a6] px-2 py-1">{item.type}</span>
                    <label className="rounded-md text-sm text-white uppercase bg-[#31b675] px-2 py-1">{city ? city : item.cityName}</label>
                </div>

                <div className=''>
                    <p className="text-sm text-gray-800 group-hover:text-black my-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti itaque, et, ut deserunt suscipit voluptates placeat, {item.description} dolore odit vel facilis neque? Numquam, a! Perferendis blanditiis vero animi aut ex illo.</p>
                </div>

                <Link to={`/room/${item._id}`} state={[item, name, city]}>
                    <button className='w-full font-bold text-white bg-[#038c7f] rounded-md py-2 hover:scale-105 hover:text-black'>
                        BOOK NOW
                    </button>
                </Link>
            </div>
        </>
    )
}

export default RoomCard


// import React from 'react'
// import { Link } from "react-router-dom"
// import hero1 from '../homeMain/hero-1.jpeg'
// import { FaRupeeSign } from "react-icons/fa";

// const RoomCard = ({ item: { _id, adults, amenities, children, cityName, complementary, description, hotelName, price, title, type } }) => {

//     return (
//         <>
//             <div className='group mb-10 sm:mb-8 md:mb-6 lg:mb-4 border border-gray-100 rounded-md p-5 shadow-lg shadow-slate-300 hover:bg-[#31b675] transition-all duration-700'>

//                 <div className="overflow-hidden">
//                     <img src={hero1} alt='Gallery Pic' className='rounded-md object-cover w-full h-full hover:scale-125 duration-700 transition-all' />
//                 </div>

//                 <div className='my-3 justify-between items-center flex flex-wrap'>
//                     <h3 className="text-xl font-semibold uppercase group-hover:text-white">{hotelName}</h3>
//                     <label className="rounded-md uppercase px-2 py-1 flex font-bold align-middle group-hover:text-white"><span className='mt-1 mr-1'><FaRupeeSign /></span>{price}</label>
//                 </div>

//                 <div className='my-3 justify-between items-center flex flex-wrap'>
//                     <span className="rounded-md text-sm text-white uppercase bg-[#315db9a6] px-2 mr-2 py-1 group-hover:text-blue-700 group-hover:bg-white">{type}</span>

//                     <label className="rounded-md text-sm text-white uppercase bg-[#31b675] px-2 py-1 group-hover:text-green-700 group-hover:bg-white">{cityName}</label>
//                 </div>

//                 <div className=''>
//                     <p className="text-sm text-gray-500 mt-2 mb-3 group-hover:text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti itaque, et, ut deserunt suscipit voluptates placeat, {description} dolore odit vel facilis neque? Numquam, a! Perferendis blanditiis vero animi aut ex illo.</p>
//                 </div>

//                 <Link to={`/room/${_id}`} >
//                     <button className='w-full font-bold text-white bg-[#038c7f] rounded-md py-2 group-hover:bg-blue-700 hover:scale-105'>
//                         BOOK NOW
//                     </button>
//                 </Link>
//             </div>
//         </>
//     )
// }

// export default RoomCard
