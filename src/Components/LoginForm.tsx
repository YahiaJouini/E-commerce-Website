import { useNavigate } from "react-router-dom"
export default function LoginForm() {
    const navigate = useNavigate()
    return (
        <div className='w-[70%] m-auto'>
            <h1 className="text-[20px] font-bold mb-6">Account details</h1>
            <form className="flex flex-col">
                <label htmlFor="email" className="text-[#718096] text-[17px] mb-2">Email adress</label>
                <input id="email" type="email" className="bg-[#E2E8F0] px-5 py-[10px] rounded-lg mb-6 outline-none text-[17px]" />

                <label htmlFor="pwd" className="text-[#718096] text-[17px] mb-2">Password</label>
                <input id="email" type="password" className="bg-[#E2E8F0] px-5 py-[10px] rounded-lg outline-none" />
                <div className="flex justify-end gap-5 items-center">
                    <button
                        onClick={() => { navigate("/register") }}
                        className="">
                        Register for account
                    </button>
                    <button className="btn my-10 w-[120px] h-[40px]">Login</button>
                </div>
            </form>
        </div>
    )
}
