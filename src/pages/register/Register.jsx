import { useEffect, useState } from "react";
import hero from "../login/login.jpg"
import axiosInstance from "../../axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      alert("Password should be more than 6 letters")
      return
    }

    const user = {
      username: username.replace(/ /g,"_").toLocaleLowerCase(),
      email: email,
      password: password,
    };

    await axiosInstance.post(`api/auth/register/`,
      user,
    ).then((res) => {
      console.log(res.data)
      alert("Success");
      window.location.href = "/login";
    })
      .catch((e) => {
        console.log("Error", e);
        alert("Error", e);
        return Promise.reject(e);
      });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])

  return (
    <>
      <section className='m-6 sm:m-8 md:m-12 mt-12 sm:mt-20 sm:grid sm:grid-cols-2 border'>

        <div className="max-[640px]:hidden sm:h-auto overflow-hidden">
          <img src={hero} width={300} height={300} alt="cover" className="object-cover w-full h-full" />
        </div>


        <form onSubmit={formSubmit} className="m-6 lg:m-28">

          <div className='flex flex-col'>
            <h1 className="text-2xl lg:text-3xl font-semibold mb-7 lg:mb-10 text-[#908dcd]">Register your account</h1>

            <div className='flex flex-col'>
              <span className="text-black">
                Username <label className="text-red-900">*</label>
              </span>
              <input className="border border-gray-300 py-2 rounded-md mt-2 pl-2" type='text' name='username' value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div className='flex flex-col mt-4'>
              <span className="text-black">
                Email <label className="text-red-900">*</label>
              </span>
              <input className="border border-gray-300 py-2 rounded-md mt-2 pl-2" type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className='flex flex-col mt-4'>
              <span className="text-black">
                Password <label className="text-red-900">*</label>
              </span>
              <input className="border border-gray-300 py-2 rounded-md mt-2 px-2" type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
          </div>

          <button className='w-full rounded-md py-2 mt-8 bg-[#4f46e5] text-white hover:bg-[#6661c7]'>Register</button>
        </form>

      </section>
    </>
  );
};

export default Register;