import ContinueShopping from "./ContinueShopping"
import { useNavigate } from "react-router-dom"

export default function ErrorMessage({ children }: { children: React.ReactNode }) {
    const navigate = useNavigate()
    return (
        <div className='h-[58vh] grid place-content-center '>
            <div className='w-[40%] m-auto bg-gradient-to-r from-[#e5e7eb] to-[#edeef1] p-12 
                    flex flex-col justify-center items-center rounded-lg search-shadow'>
                {children}
                <ContinueShopping HandleNavigate={() => navigate('/')} />

            </div>
        </div>
    )
}
