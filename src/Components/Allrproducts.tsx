// importing Icons
import { BsCart3 as Cart } from "react-icons/bs";
import { FaPlus as Plus } from "react-icons/fa6";
import { FaMinus as Minus } from "react-icons/fa";

// importing Context
import { Count, ItemsContext } from "../Contexts/ItemsContext";
import { useContext } from "react";


//importing Types
import { itemType } from "../Contexts/ItemsContext";


// setting up the Types
type ProductDisplayType = {
    info:itemType
}


export default function ProductDisplay({ info}: ProductDisplayType) {

    //setting the product image
    const styles = {
        backgroundImage: `URL(${info.image})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain"
    }


    const provided = useContext(ItemsContext)

    const HandleClick = () => {
        provided?.HandleAdd(info)
    }
    const buttonStyles = "bg-[#f5f5f5] hover:bg-[#e6e6e6] p-[9px] rounded-lg flex justify-center items-center"

    return (
        <div className="w-[300px] bg-white flex flex-col items-center justify-between pb-2 px-4 shadow-lg hover:scale-[1.04] cursor-pointer transition-all ease-in-out rounded-lg">
            <div style={styles} className="w-[260px] h-[320px] mb-3" ></div>

            <div>

                <h1 className="text-lg text-center break-keep mb-4">{info.name}</h1>
                {!Count(provided?.items,info) ? (
                    <div className="w-[260px] flex justify-around items-center">
                        <h1 className="text-[17px] font-bold">{info.price} TND</h1>
                        <button className={buttonStyles} onClick={HandleClick}><Cart size="1.3rem" /></button>
                    </div>
                ) :
                    <div className="w-[260px] flex flex-col justify-around items-center">
                        <h1 className="text-[17px] font-bold">{info.price} TND</h1>
                        <div className="w-full flex justify-center gap-8 items-center mt-2">

                            <button className={`${buttonStyles} p-0 w-8 h-8`}  onClick={()=>provided?.HandleAdd(info)}>

                                <Plus size="1.1rem" />

                            </button>

                            <h1 className="text-[25px]">{Count(provided?.items, info)}</h1>

                            <button className={`${buttonStyles} p-0 w-8 h-8`} onClick={()=>provided?.HandleRemove(info)}>

                                <Minus size="0.9rem" />

                            </button>
                        </div>
                    </div>
                }


            </div>

        </div>
    )
}