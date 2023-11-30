import { FaPlus as Plus } from "react-icons/fa6";
import { FaMinus as Minus } from "react-icons/fa";

type QuantityType = {
    qty: number
    HandleClick: (x: number) => void
}
export default function Quantity({ qty, HandleClick }: QuantityType) {
    return (
        <div className="flex justify-between items-center w-[120px] h-[35px] border-[#2f3134] border-2 p-2">
            <h1 className="text-[20px] font-bold">{qty}</h1>
            <div className="flex justify-between items-center  w-[40%]">
                <button className="hover:scale-110 transition-all" onClick={() => HandleClick(1)}><Plus /></button>
                <button className="hover:scale-110 transition-all" onClick={() => HandleClick(1)}><Minus /></button>
            </div>
        </div>
    )
}
