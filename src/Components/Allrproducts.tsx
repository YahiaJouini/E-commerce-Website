// importing icons,loader,toast notification
import { BsCart3 as Cart } from "react-icons/bs";
import { FaPlus as Plus } from "react-icons/fa6";
import { FaMinus as Minus } from "react-icons/fa";
import BeatLoader from "react-spinners/BeatLoader"
import { toast } from 'react-toastify';

//importing Types
import { itemType } from "../Contexts/ItemsContext";

// importing our custom hook
import useLoader from "../CustomHooks/useLoader";


import { Count, ItemsContext } from "../Contexts/ItemsContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";



// setting up the Types
type ProductDisplayType = {
    info: itemType
}


export default function ProductDisplay({ info }: ProductDisplayType) {

    const url = useLoader(info.image)
    const navigate = useNavigate()

    //setting the product image

    const styles = {
        backgroundImage: `URL(${url})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain"
    }

    const provided = useContext(ItemsContext)

    const HandleClick = () => {
        provided?.HandleAdd(info)
        toast.success("Product added to your cart", {
            position: toast.POSITION.BOTTOM_RIGHT,
            className: "w-[320px] text-[17px]",
        });
    }

    const HandleNavigate = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

        const check = ["path", "svg", "BUTTON"]// to make sure the button with functions are not links to product page

        if (!check.includes((e.target as Element).tagName)) {
            navigate(`/product/${info.id}`)
        }

    }
    const buttonStyles = "bg-[#f5f5f5] hover:bg-[#e6e6e6] p-[9px] rounded-lg flex justify-center items-center no-event"

    const HandleIcon = (x: number) => {
        if (x > 0) {
            if (Count(provided?.items, info) < 1) {
                toast.success("Product added to your cart", {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    className: "w-[320px] text-[17px]",
                });
            }
            provided?.HandleAdd(info)
        }
        else {
            if (Count(provided?.items, info) === 1) {
                toast.info("Product removed from your cart", {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    className: "w-[320px] text-[17px]",
                });
            }

            provided?.HandleRemove(info)

        }

    }

    return (
        <div onClick={(e) =>
            HandleNavigate(e)}
            className="w-[300px] bg-white flex flex-col items-center 
                        justify-between pb-2 px-4 product-shadow hover:scale-[1.04] 
                        cursor-pointer transition-all ease-in-out rounded-lg">

            {/* displaying a loader if the image is not loaded yet (url is still null) */}

            {url ?
                (<div style={styles} className="w-full h-[320px] mb-3" ></div>) :
                (<div className="w-full flex justify-center items-center h-[320px] bg-gray-100 mb-3" >
                    <BeatLoader color="#3b3f46" size={20} />
                </div>)

            }

            <div>
                <h1 className="text-lg text-center break-keep mb-4">{info.name}</h1>

                {!Count(provided?.items, info) ?
                    <div className="w-[260px] flex justify-around items-center">

                        <h1 className="text-[17px] font-bold">{new Intl.NumberFormat().format(info.price)} TND</h1>

                        <button className={buttonStyles} onClick={HandleClick}>
                            <Cart size="1.3rem" className="no-event" />
                        </button>
                    </div>
                    :
                    <div className="w-[260px] flex flex-col justify-around items-center">
                        <h1 className="text-[17px] font-bold">{info.price} TND</h1>
                        <div className="w-full flex justify-center gap-8 items-center mt-2">

                            <button className={`${buttonStyles} p-0 w-8 h-8`} onClick={() => HandleIcon(1)}>

                                <Plus size="1.1rem" />

                            </button>

                            <h1 className="text-[25px]">{Count(provided?.items, info)}</h1>

                            <button className={`${buttonStyles} p-0 w-8 h-8`} onClick={() => HandleIcon(-1)}>

                                <Minus size="0.9rem" value="dd" />

                            </button>
                        </div>
                    </div>
                }

            </div>

        </div>
    )
}