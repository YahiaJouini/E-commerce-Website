import { useContext } from "react"
import { ItemsContext } from "../Contexts/ItemsContext"
import LoginForm from "../Components/LoginForm"
import Shipping from "../Components/Shipping"
export default function Chekout() {

    const provider = useContext(ItemsContext)

    return (
        <div className="container flex justify-around mt-10">
            <div className="w-[45%] rounded-xl">
                <div className="bg-gradient-to-r from-[#e5e7eb] to-[#edeef1] rounded-lg p-6">
                    <LoginForm />
                    <div className="my-8 h-[1px] w-[90%] m-auto bg-[#E2E8F0]"></div>
                    <Shipping />
                </div>

            </div>
            <div className="">
                items are placed here
            </div>
        </div>
    )
}
