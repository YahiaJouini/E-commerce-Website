import { BsCart3 as Cart } from "react-icons/bs";
import { ItemsContext } from "../Contexts/ItemsContext";
import { useContext } from "react";

type ProductDisplayType = {
    info: {
        id: number;
        name: string;
        image: string;
        description: string;
        price: number;
        category: string;
    }
}
export default function ProductDisplay({ info }: ProductDisplayType) {

    const styles = {
        backgroundImage: `URL(${info.image})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain"
    }

    const provided  = useContext(ItemsContext)
    return (
        <div className="w-[300px] flex flex-col items-center pb-2 px-4 hover:shadow-lg hover:scale-[1.04] cursor-pointer transition-all ease-in-out rounded-lg">
            <div style={styles} className="w-[260px] h-[320px] mb-3" ></div>
            <h1 className="text-lg break-keep mb-4">{info.name}</h1>
            <div className="w-[260px] flex justify-around items-center">
                <h1 className="text-[17px] font-bold">{info.price} TND</h1>
                <button className="bg-[#f5f5f5] p-[9px] rounded-[50%]" onClick={() => { provided?.HandleItem(info); console.log(provided?.items) }}><Cart size="1.3rem" /></button>
            </div>

        </div>
    )
}