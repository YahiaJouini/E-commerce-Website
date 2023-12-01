import { FaPlus as Plus } from "react-icons/fa6";
import { FaMinus as Minus } from "react-icons/fa";

type QuantityType = {
    qty: number
    HandleClick: (x: number,id?:number,orders?:number) => void
    id?:number
}
export default function Quantity({ qty, HandleClick,id }: QuantityType) {
    return (
        <div className="flex justify-between items-center w-[120px] h-[35px] border-[#2f3134] border-2 p-2">
            <h1 className="text-[20px] font-bold">{qty}</h1>
            <div className="flex justify-between items-center  w-[40%]">
                <button className="hover:scale-110 transition-all" onClick={() => HandleClick(1,id,qty)}><Plus /></button>
                <button className="hover:scale-110 transition-all" onClick={() => HandleClick(-1,id,qty)}><Minus /></button>
            </div>
        </div>
    )
}
