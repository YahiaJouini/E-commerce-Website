// components 
import ProductButton from "../Components/ProductButton"
import Quantity from "../Components/Quantity"

// importing the custom hook and functions
import useLoader from "../CustomHooks/useLoader"
import { Count } from "../Contexts/ItemsContext"
import { AllProducts } from "../data/Data"

// importing icons,loader,toast notification
import BeatLoader from "react-spinners/BeatLoader"
import { ToastContainer, toast } from "react-toastify"

import { useParams, useNavigate } from "react-router-dom"
import { useState, useContext, useEffect, useRef } from "react"
import { ItemsContext } from "../Contexts/ItemsContext"
import ErrorMessage from "../Components/ErrorMessage"




export default function Product() {

  const { id } = useParams()
  const product = AllProducts.find(product => product.id === Number(id))


  // to fix the position inheritance when using useNavigate
  window.scrollTo(0, 0)

  if (!product) {

    return (
      <ErrorMessage>
        <h1 className='text-[26px] font-bold text-center mb-6'>404 Not Found</h1>
        <h1 className='text-[26px] font-bold text-center mb-10'>
          It seems like the product you are trying to access doesn't exist.
          Please double-check the product ID and ensure that it's correct.
          If you continue to experience issues, please contact our support team. <br />
          Thank you for your understanding.
        </h1>
      </ErrorMessage>

    )

  } else {

    const url = useLoader(product.image)
    const navigate = useNavigate()
    const provider = useContext(ItemsContext)
    const count = Count(provider?.items, Number(id))
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
          {url ? <img src={url} alt="Image of the product" /> : <BeatLoader />}
        </div>
        <ToastContainer />

        <div className="flex flex-col items-center">

          <h1 className="text-[30px] w-fit tracking-wide font-bold border-b-[3px] mb-8 border-black ">{product.name}</h1>
          <h4 className="text-[20px] font-bold tracking-wide mb-4">{new Intl.NumberFormat().format((product.price * qty))} TND</h4>
          <p className="text-[18px] tracking-wide w-[80%] text-center">{product.description}</p>

          <div className="w-[80%] ">

            <h1 className="font-bold m-2">QUANTITY</h1>
            <Quantity qty={qty} HandleClick={HandleClick} />

          </div>
          <div className="w-[80%]">
            <ProductButton HandleNavigate={() => navigate("/cart")}>VIEW CART</ProductButton>
            <ProductButton HandleNavigate={() => navigate("/")}>KEEP SHOPPING</ProductButton>
          </div>

        </div>

      </div>
    )
  }

}
