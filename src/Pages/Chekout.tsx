import { useContext } from "react"
import { ItemsContext } from "../Contexts/ItemsContext"
import LoginForm from "../Components/LoginForm"
import Shipping from "../Components/Shipping"
export default function Chekout() {

    const provider = useContext(ItemsContext)
    console.log(provider?.items)

    return (
        <div className="container flex justify-around mt-10">
            <div className="w-[45%] rounded-xl">
                <div className="bg-[#f6fafd] p-6">
                    <LoginForm />
                    <div className="my-8 h-[1px] w-[90%] m-auto bg-[#E2E8F0]"></div>
                    <Shipping />
                </div>

            </div>
            <div>
                items are placed here
            </div>
        </div>
    )
}
