import { useContext } from "react"
import { CartContext } from "../Contexts/CartContext"
import LoginForm from "../Components/LoginForm"
import Shipping from "../Components/Shipping"
import ErrorMessage from "../Components/ErrorMessage"
import OrderSummary from "../Components/OrderSummary"

export default function Chekout() {


    // to fix the position inheritance when using useNavigate
    window.scrollTo(0, 0)

    const provider = useContext(CartContext)

    if (provider?.cart?.length) {
        return (
            <div className="container flex justify-around items-center mt-10">
                <div className="w-[45%] rounded-xl  search-shadow">
                    <div className="bg-gradient-to-r from-[#e5e7eb] to-[#edeef1] rounded-lg p-6">
                        <LoginForm title="Account details"/>
                        <div className="mb-6 h-[2px] w-[70%] m-auto bg-gray-300"></div>
                        <Shipping />
                    </div>  

                </div>
                <div>
                    <OrderSummary items={provider.cart.length} cost={provider.CalculCost(provider.cart)} checkout={false} />
                </div>
            </div>
        )

    }
    return (

        <ErrorMessage>
            <h1 className='text-[26px] font-bold text-center mb-10'>
                OOPS! YOUR CART IS EMPTY.
                EXPLORE OUR PRODUCTS AND ADD THEM TO YOUR CART.
                IF YOU NEED HELP, FEEL FREE TO CONTACT US. <br /> HAPPY SHOPPING!
            </h1>
        </ErrorMessage>

    )


}
