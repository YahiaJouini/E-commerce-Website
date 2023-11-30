// components 
import ProductButton from "../Components/ProductButton"

// importing the custom hook and functions
import useLoader from "../CustomHooks/useLoader"
import { Count } from "../Contexts/ItemsContext"
import { AllProducts } from "../data/Data"

// importing icons,loader,toast notification
import { FaPlus as Plus } from "react-icons/fa6";
import { FaMinus as Minus } from "react-icons/fa";
import BeatLoader from "react-spinners/BeatLoader"
import { ToastContainer, toast } from "react-toastify"

import { useParams, useNavigate } from "react-router-dom"
import { useState, useContext, useEffect, useRef } from "react"
import { ItemsContext } from "../Contexts/ItemsContext"




export default function Product() {

  const { id } = useParams()
  const product = AllProducts.find(product => product.id === Number(id))

  if (!product) {

    return <div>could not find the product you are looking for</div>

  } else {

    const url = useLoader(product.image)
    const navigate = useNavigate()
    const provider = useContext(ItemsContext)
    const count = Count(provider?.items, product)
    const [qty, setQty] = useState(count > 1 ? count : 1)
    const load = useRef(0) // to only add the item once when the page is refreched or product is clicked


    useEffect(() => {

      // to prevent problems
      if (load.current < 1 && count == 0) {
        provider?.HandleAdd(product)
        toast.success("Product added to your cart", {
          position: toast.POSITION.BOTTOM_RIGHT,
          className: "w-[320px] text-[17px]",
        });
      }

      load.current++

    }, [product])

    function HandleClick(x: number) {
      if (qty === 1 && x < 0) {

        provider?.HandleRemove(product) //remove the item and leave to home page
        navigate("/")

      } else {

        if (x > 0) {
          provider?.HandleAdd(product)
        } else {
          provider?.HandleRemove(product)
        }
      }
      setQty(prev => prev + x)
    }

    return (
      <div className="container flex items-center justify-around h-[85vh] ml-40">
        <div className="w-[540px] flex justify-center items-center">
          {url ? <img className="full" src={url} alt="Image of the product" /> : <BeatLoader />}
        </div>
        <ToastContainer />

        <div className="flex flex-col items-center">

          <h1 className="text-[30px] w-fit tracking-wide font-bold border-b-[3px] mb-8 border-black ">{product.name}</h1>
          <h4 className="text-[20px] font-bold tracking-wide mb-4">{new Intl.NumberFormat().format((product.price * qty))} TND</h4>
          <p className="text-[18px] tracking-wide w-[80%] text-center">{product.description}</p>

          <div className="w-[80%] ">
            <h1 className="font-bold m-2">QUANTITY</h1>

            <div className="flex justify-between items-center w-[120px] h-[35px] border-[#2f3134] border-2 p-2">
              <h1 className="text-[20px] font-bold">{qty}</h1>
              <div className="flex justify-between items-center  w-[40%]">
                <button className="hover:scale-110 transition-all" onClick={() => HandleClick(1)}><Plus /></button>
                <button className="hover:scale-110 transition-all" onClick={() => HandleClick(-1)}><Minus /></button>
              </div>
            </div>

          </div>
          <ProductButton>VIEW CART</ProductButton>
          <ProductButton HandleNavigate={() => navigate("/")}>KEEP SHOPPING</ProductButton>
        </div>

      </div>
    )
  }

}
