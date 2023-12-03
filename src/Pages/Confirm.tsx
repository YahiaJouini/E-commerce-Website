import { useNavigate } from "react-router-dom"
import { nanoid } from 'nanoid'
import ContinueShopping from "../Components/ContinueShopping"
import { useContext } from "react"
import { CartContext } from "../Contexts/CartContext"
import ErrorMessage from "../Components/ErrorMessage"

export default function Confirm() {

    const navigate = useNavigate()

    // to fix the position inheritance when using useNavigate
    window.scrollTo(0, 0)

    const provided = useContext(CartContext)

    if (!provided?.cart?.length) {
        return (<ErrorMessage>
            <h1 className='text-[26px] font-bold text-center mb-10'>
                YOUR CART IS EMPTY!
                EXPLORE OUR PRODUCTS AND ADD THEM TO YOUR CART.
                IF YOU NEED HELP, FEEL FREE TO CONTACT US. <br /> HAPPY SHOPPING!
            </h1>
        </ErrorMessage>)
    }

    return (

        <div className="container h-[50vh] my-16">

            <div className="w-[50%] m-auto bg-gradient-to-r from-[#e5e7eb] to-[#edeef1] p-10 rounded-lg search-shadow">

                <div className="w-[80%] m-auto flex flex-col items-center ">
                    <h1 className="text-[20px] font-bold mb-6">Your order is confirmed!</h1>
                    <h1 className="text-[22px] font-semibold mb-6">Order Number: {nanoid()}</h1>
                    <h3 className="text-[18px] text-center mb-6 font-semibold">
                        Our team is already hard at work processing your order.
                        Expect a confirmation email with further details shortly!
                    </h3>
                    <h3 className="text-[18px] text-center mb-6 font-medium ">
                        For any questions or assistance, our dedicated support team is ready to help..
                        Thank you for choosing VarietyFinds. We appreciate your trust.
                    </h3>
                    <ContinueShopping HandleNavigate={() => navigate('/')} />
                </div>


            </div>
        </div>
    )
}
