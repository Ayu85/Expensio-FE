import useAuth from '../store/useAuth'
import { RiHomeOfficeLine } from "react-icons/ri";
import { IoMdCard } from "react-icons/io";
import { MdFlight } from "react-icons/md";
import { RiEqualizer3Line } from "react-icons/ri";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const { authUser } = useAuth()
    const navItems = [
        { name: 'Dashboard', icon: <RiHomeOfficeLine />, path: '/dashboard' },
        { name: 'expenses', icon: <IoMdCard />, path: '/expenses' },
        { name: 'trips', icon: <MdFlight />, path: '/trips' },
        { name: 'settings', icon: <RiEqualizer3Line />, path: '/settings' },
    ]
    return (
        <div className='text-white w-72 '>
            <div className='flex flex-col p-10 pb-0 items-center '>
                <h1 className='uppercase quicksand-bold  bg-blue-500 w-8 flex justify-center 
                items-center text-center text-lg
                 aspect-square rounded-full'>{authUser?.fullname.charAt(0)}</h1>
                <h1 className='capitalize quicksand-regular  text-xl text-[#A4A4A4]'>{authUser?.fullname}</h1>
            </div>
            <div className='space-y-2  pt-6 pl-5'>
                {navItems?.map((item, key) => {
                    return <NavLink to={item.path} key={key} className={({ isActive }) => `flex  rounded-md     hover:bg-[#28282A]   transition-all cursor-pointer
                     py-3  pl-3 text-md text-[#D8FFFB] quicksand-regular items-center ${isActive && "text-[#00DAC6] bg-[#28282A]"} gap-2`} >
                        <h1>{item?.icon}</h1>
                        <h1 className='capitalize'>{item?.name}</h1>
                    </NavLink>
                })}
            </div>

        </div>
    )
}

export default Sidebar