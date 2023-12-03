import { useNavigate } from "react-router-dom"
export default function LoginForm({title}: {title:string}) {
    const navigate = useNavigate()
    return (
        <div className='w-[70%] m-auto '>
            <h1 className="text-[20px] font-bold mb-6">{title}</h1>
            <form className="flex flex-col">

                <label htmlFor="email" className="text-[#718096] text-[17px] mb-2">Email adress</label>
                <input id="email" type="email" className="px-5 py-[10px] rounded-lg mb-6 outline-none text-[17px] search-shadow" />

                <label htmlFor="pwd" className="text-[#718096] text-[17px] mb-2">Password</label>
                <input id="pwd" type="password" className=" px-5 py-[10px] rounded-lg outline-none search-shadow" />

                <div className="flex justify-end gap-5 items-center">
                    <button
                        onClick={() => { navigate("/register") }}
                        className="font-semibold flex items-center">
                        REGISTER FOR ACCOUNT
                    </button>

                    <button className="btn my-10 w-[120px] h-[40px]"
                        onClick={(e) => e.preventDefault()}>
                        Login
                    </button>

                </div>
            </form>
        </div>
    )
}
