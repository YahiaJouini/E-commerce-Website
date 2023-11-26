import { BsCart3 as Cart } from "react-icons/bs";
import { ItemsContext } from "../Contexts/ItemsContext";
import { useContext } from "react";
import { itemType } from "../Contexts/ItemsContext";

type ProductDisplayType = {
    info: {
        id: number;
        name: string;
        image: string;
        description: string;
        price: number;
        category: string;
        added: boolean
    }
    HandleAdd: (item: itemType) => void
}
export default function ProductDisplay({ info, HandleAdd }: ProductDisplayType) {

    const styles = {
        backgroundImage: `URL(${info.image})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain"
    }
    const buttonColor = info.added ? "bg-[#a6f5e3]" : "bg-[#f5f5f5]"


    const provided = useContext(ItemsContext)

    const HandleClick = () => {
        provided?.HandleItem(info)
        HandleAdd(info)
    }

    return (
        <div className="w-[300px] flex flex-col items-center justify-between pb-2 px-4 hover:shadow-lg hover:scale-[1.04] cursor-pointer transition-all ease-in-out rounded-lg">
            <div style={styles} className="w-[260px] h-[320px] mb-3" ></div>
            <div>
                <h1 className="text-lg text-center break-keep mb-4">{info.name}</h1>
                <div className="w-[260px] flex justify-around items-center">

                    <h1 className="text-[17px] font-bold">{info.price} TND</h1>
                    <button className={`${buttonColor} p-[9px] rounded-lg`} onClick={HandleClick}><Cart size="1.3rem" /></button>
                </div>
            </div>

        </div>
    )
}