import ContinueShopping from "./ContinueShopping";
import { useNavigate } from "react-router-dom";
export default function OrderSummary({ items, cost }: { items: number, cost: number }) {
    const navigate = useNavigate()
    return (
        <div className='w-full py-10 bg-gradient-to-r from-[#e5e7eb] to-[#edeef1] rounded-lg mt-4 search-shadow '>
            <div className='w-[80%] m-auto'>
                <h1 className='text-[24px] font-semibold mt-4 '> ORDER SUMMARY</h1>
                <div className='h-[2px] bg-gray-300 my-4 ' ></div>

                <h1 className='text-[20px] font-bold my-6'>ITEMS {items}</h1>
                <div>
                    <label htmlFor="code" className='text-[20px] font-semibold'>PROMO CODE</label>
                    <input id="code" type="text" className='w-full h-[40px] outline-none px-4 rounded-lg mt-2 search-shadow' />
                    <button className='btn my-4 w-[120px] h-[45px]'>APPLY</button>
                    <div className='h-[2px] bg-gray-300 my-4 ' ></div>
                </div>
                <div className='flex justify-between my-10'>
                    <h1 className='text-[20px] font-semibold'>TOTAL COST</h1>
                    <h1 className='text-[20px] font-semibold'>{new Intl.NumberFormat().format(cost)} TND </h1>
                </div>
                <div className="flex items-center justify-between">
                    <ContinueShopping HandleNavigate={() => navigate('/')} />
                    <button className="btn w-[140px] my-2" onClick={() => navigate("/chekout")}>CHECKOUT</button>
                </div>
            </div>
        </div>
    )
}
