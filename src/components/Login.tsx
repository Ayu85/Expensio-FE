import { RiExchangeBoxLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";
import { useRef } from "react";
import { CgPassword } from "react-icons/cg";
import axiosInstance from "../utils/axiosInstance";
import useAuth from "../store/useAuth";

const Login = () => {
    const usernameRef = useRef()
    const passRef = useRef()
    const { login } = useAuth()
    const handleLogin = async (e) => {
        const username = usernameRef.current.value
        const password = passRef.current.value
        e.preventDefault()
        console.log(username, password);

        const data = await axiosInstance.post('/auth/login', {
            username,
            password
        })
        if (data)
            login()
        console.log(data);

    }
    return (
        <div className='bg-gray-800 min-h-screen gap-20 text-white flex justify-center items-center flex-col'>
            <div className='flex flex-col justify-center items-center'>
                <RiExchangeBoxLine className='text-4xl  text-teal-500' />
                <h1 className='text-4xl uppercase text-transparent bg-clip-text bg-gradient-to-r from-teal-200  to-teal-500  quicksand-bold '>
                    Expensio
                </h1>

            </div>
            <div className='flex flex-col gap-4 h-full bg-black py-10 px-10'>
                <label className='relative quicksand-regular '>
                    <input ref={usernameRef} className=' bg-[#3C3C3C] outline-none border-teal-600
                      focus:border h-10 pl-8 text-sm rounded-md px-32' placeholder='Useraname ' type="text" name="" id="" />
                    <FaRegUser className='absolute top-[13px] left-2 text-slate-400' />
                </label>
                <label className='relative quicksand-regular '>
                    <input ref={passRef} className=' bg-[#3C3C3C] outline-none border-teal-600
                      focus:border pl-8 h-10 text-sm rounded-md px-32' placeholder='Password ' type="password" name="" id="" />
                    <CgPassword className='absolute top-[13px] left-2 text-slate-400' />
                </label>
                <button onClick={(e) => handleLogin(e)} className='bg-teal-600 py-2 hover:bg-teal-500 transition-all rounded-md text-xl flex justify-center'><IoIosLogIn /></button>
            </div>
        </div>
    )
}

export default Login