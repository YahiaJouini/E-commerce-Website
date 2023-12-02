import { useNavigate } from "react-router-dom"
import ProductButton from '../Components/ProductButton'
export default function Shipping() {
    const navigate = useNavigate()
    return (
        <div className='w-[70%] m-auto'>

            <h1 className="text-[20px] font-bold mb-6">Shipping details</h1>

            <form className="flex flex-col">

                <div className="w-full flex justify-between">
                    <div className="flex flex-col w-[45%]">
                        <label htmlFor="email" className="text-[#718096] text-[17px] mb-2">
                            First Name
                        </label>
                        <input id="email"
                            type="email"
                            className="px-5 py-[7px] rounded-lg mb-6 outline-none text-[17px] search-shadow" />
                    </div>
                    <div className="flex flex-col w-[45%]">
                        <label htmlFor="email" className="text-[#718096] text-[17px] mb-2">
                            Last Name
                        </label>
                        <input id="email"
                            type="email"
                            className="px-5 py-[7px] rounded-lg mb-6 outline-none text-[17px] search-shadow" />
                    </div>

                </div>
                <label htmlFor="pwd" className="text-[#718096] text-[17px] mb-2">
                    Street Adress *
                </label>
                <input id="email" type="text" required className=" px-5 py-[10px] rounded-lg outline-none search-shadow" />


                <div className="w-full flex justify-between mt-8">
                    <div className="flex flex-col w-[45%]">
                        <label htmlFor="email" className="text-[#718096] text-[17px] mb-2">
                            Postal Code
                        </label>
                        <input id="email"
                            type="email"
                            className="px-5 py-[7px] rounded-lg mb-6 outline-none text-[17px] search-shadow" />
                    </div>


                    <div className="flex flex-col w-[45%]">
                        <label htmlFor="email" className="text-[#718096] text-[17px] mb-2">
                            Town/City *
                        </label>
                        <input id="email"
                            type="email"
                            className="px-5 py-[7px] rounded-lg mb-6 outline-none text-[17px] search-shadow" />
                    </div>


                </div>
                <label htmlFor="pwd" className="text-[#718096] text-[17px] mb-2">
                    Phone Number *
                </label>
                <input id="email" type="text" required className=" px-5 py-[10px] rounded-lg outline-none search-shadow" />


                <div className="flex items-center justify-between">
                    <ProductButton HandleNavigate={() => navigate("/confirm")}>CONFIRM</ProductButton>
                </div>


            </form>

        </div>
    )
}
