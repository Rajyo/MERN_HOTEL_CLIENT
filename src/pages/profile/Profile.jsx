import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import userIcon from "./profile.png"
import axiosInstance from '../../axios'


const Profile = () => {
  const location = useLocation()

  const [email] = useState(location.state.email)
  const [username, setUsername] = useState(location.state.username)
  const [password, setPassword] = useState(null)
  const [isAdmin] = useState(location.state.isAdmin)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])

  const updateProfile = async (e) => {
    e.preventDefault()

    const updatedUser = {}

    username != location.state.username && (updatedUser['username'] = username)

    if (password !== null && password !== '') {
      if (password.length < 6) {
        alert("Password must be more than 6 characters")
        return
      }
      updatedUser["password"] = password
    }

    const size = Object.keys(updatedUser).length

    size > 0 && await axiosInstance.put(`api/users/`, updatedUser)
      .then(() => {
        //console.log(res.data); 
        window.location.href = '/'
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <section className='mt-12 sm:mt-20 sm:m-8 md:m-12'>
        <h3 className="my-5 text-center text-2xl sm:text-4xl lg:text-5xl font-bold uppercase ">My Profile</h3>
        <p className="text-center sm:mx-28 md:mx-40 lg:mx-60 px-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
          error amet numquam iure provident voluptate esse quasi, veritatis
          totam voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>
      </section>

      <div className='max-w-[95%] md:max-w-[90%] lg:max-w-[85%] m-auto mb-10 md:mb-28 mt-6'>
        <section className='grid sm:grid-cols-2 gap-4'>
          <div className='m-auto'>
            <img src={userIcon} alt="" width={300} height={300} />
          </div>

          <form onSubmit={updateProfile} className='p-4 flex flex-col gap-4 sm:gap-0 m-auto sm:m-0 '>

            <div className='flex mb-6'>
              <div className='m-auto sm:m-0 border'>
                {
                  isAdmin
                    ? <div className='flex flex-wrap'><span className='px-4 py-2 min-[350px]:px-7 min-[350px]:py-4 bg-blue-500 text-white'>Admin</span> <span className='px-4 py-2 min-[350px]:px-6 min-[350px]:py-4'>Regular</span></div>
                    : <div className='flex flex-wrap'><span className='px-4 py-2 min-[350px]::px-7 min-[350px]:py-4'>Admin</span> <span className='px-4 py-2 min-[350px]:px-3 min-[350px]:py-4 bg-red-500 text-wrap'>Regular</span></div>
                }
              </div>
            </div>

            <div className='flex flex-col'>
              <span className="text-gray-500">Email</span>
              <input className="pl-2 border border-gray-300 py-2 mt-1 rounded-md max-[350px]:w-48 w-72 md:w-80" type='text' value={email} disabled />
            </div>

            <div className='flex flex-col mt-4'>
              <span className="text-gray-500">Username</span>
              <input className="pl-2 border border-gray-300 py-2 mt-1 rounded-md max-[350px]:w-48 w-72 md:w-80" type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>

            <div className='flex flex-col mt-4'>
              <span className="text-gray-500">Password</span>
              <input className="pl-2 border border-gray-300 py-2 mt-1 rounded-md max-[350px]:w-48 w-72 md:w-80" type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button type="submit" className='max-[350px]:w-48 w-72 md:w-80 rounded-md py-2 mt-6 bg-green-500 text-white'>Submit</button>

          </form>

        </section>
      </div>
    </>
  )
}

export default Profile