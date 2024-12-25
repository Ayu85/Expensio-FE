import useAuth from '../store/useAuth'
import { RiHomeOfficeLine } from "react-icons/ri";
import { IoMdCard } from "react-icons/io";
import { MdFlight } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { RiEqualizer3Line } from "react-icons/ri";
import { IoMdCall } from "react-icons/io";

const Sidebar = () => {
    const { authUser } = useAuth()
    const navItems = [
        { name: 'home', icon: <RiHomeOfficeLine /> },
        { name: 'expenses', icon: <IoMdCard /> },
        { name: 'trips', icon: <MdFlight /> },
        { name: 'approvals', icon: <FaRegCalendarCheck /> },
        { name: 'settings', icon: <RiEqualizer3Line /> },
        { name: 'support', icon: <IoMdCall /> }
    ]
    return (
        <div className='text-white w-72 '>
            <div className='flex flex-col p-10 pb-0 items-center '>
                <h1 className='uppercase quicksand-bold  bg-blue-500 w-8 flex justify-center 
                items-center text-center text-lg
                 aspect-square rounded-full'>{authUser?.fullname.charAt(0)}</h1>
                <h1 className='capitalize quicksand-regular  text-xl text-[#A4A4A4]'>{authUser?.fullname}</h1>
            </div>
            <div className='space-y  pt-6 pl-5'>
                {navItems?.map((item, key) => {
                    return <div key={key} className='flex rounded-md     hover:bg-[#28282A]   transition-all cursor-pointer
                     py-2  pl-3 text-md text-[#D8FFFB] quicksand-regular items-center gap-2'>
                        <h1>{item?.icon}</h1>
                        <h1 className='capitalize'>{item?.name}</h1>
                    </div>
                })}
            </div>

        </div>
    )
}

export default Sidebar