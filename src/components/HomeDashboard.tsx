import { IoMdCard } from "react-icons/io";
import { MdFlight } from "react-icons/md";
import { TbPigMoney } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";

const HomeDashboard = () => {
    return (
        <div className='bg-[#0B0B0B] w-full m-10 rounded-md'>
            {/* quick access */}
            <div className="flex flex-col bg-[#1B1B1B] m-5 rounded-md 
            text-white quicksand-regular text-sm  space-y-2">
                <h1 className=" border-b-[#28282A] border-b pb-1 p-2 ">Quick Access</h1>
                <div className="text-white flex justify-between gap-8 p-3  ">
                    <div className="bg-[#28282A] cursor-pointer px-5 py-4 w-44 rounded-md flex items-center gap-2">
                        <h1 className="text-pink-600 bg-[#6F2751] px-2 py-2 rounded-full"><IoMdCard /></h1>
                        <h1>New expense</h1>
                    </div>
                    <div className="bg-[#28282A] cursor-pointer px-5 py-4 w-44 rounded-md flex items-center gap-2">
                        <h1 className="text-purple-600 bg-[#222355] px-2 py-2 rounded-full"><MdFlight /></h1>
                        <h1>Create trip</h1>
                    </div>
                    <div className="bg-[#28282A]  cursor-pointer px-5 py-4 w-44 rounded-md flex items-center gap-2">
                        <h1 className="text-teal-600 bg-[#124241] px-2 py-2 rounded-full"><TbPigMoney /></h1>
                        <h1>Investments</h1>
                    </div>
                    <div className="bg-[#28282A]  cursor-pointer px-5 py-4  w-44 rounded-md flex items-center gap-2">
                        <h1 className="text-pink-600 bg-[#682B3B] px-2 py-2 rounded-full"><GiReceiveMoney /></h1>
                        <h1>Payments</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeDashboard