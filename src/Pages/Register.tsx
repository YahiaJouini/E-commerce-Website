import { useNavigate } from "react-router-dom"
export default function Register() {
    const navigate = useNavigate()
    // to fix the position inheritance when using useNavigate
    window.scrollTo(0, 0)
    return (
        <div className="container my-16">

            <div className="w-[60%] m-auto bg-gradient-to-r from-[#e5e7eb] to-[#edeef1] p-10 rounded-lg search-shadow">
                <div className="w-[70%] m-auto">
                    <h1 className="text-[24px] font-bold mb-6">CREATE YOUR ACCOUNT</h1>
                    <form className="flex flex-col">
                        <label htmlFor="user" className="text-[#718096] text-[17px] mb-2">USERNAME</label>
                        <input id="user"
                            type="text"
                            placeholder="username"
                            className="px-5 py-[10px] rounded-lg mb-6 outline-none text-[17px] search-shadow" />

                        <label htmlFor="email" className="text-[#718096] text-[17px] mb-2">EMAIL</label>
                        <input id="email"
                            type="password"
                            placeholder="email adress"
                            className=" px-5 py-[10px] rounded-lg outline-none search-shadow mb-6" />

                        <label htmlFor="pwd" className="text-[#718096] text-[17px] mb-2">PASSWORD</label>
                        <input id="pwd"
                            type="password"
                            placeholder="*****"
                            className=" px-5 py-[10px] rounded-lg outline-none search-shadow mb-6" />

                        <label htmlFor="cpwd" className="text-[#718096] text-[17px] mb-2">CONFIRM PASSWORD</label>
                        <input id="cpwd"
                            type="password"
                            placeholder="*****"
                            className=" px-5 py-[10px] rounded-lg outline-none search-shadow mb-6" />

                        <div className="flex justify-center gap-5 items-center">
                            <button
                                onClick={() => { navigate("/login") }}
                                className="font-semibold flex items-center">
                                ALREADY HAVE AN ACCOUNT ?
                            </button>

                            <button className="btn my-10 w-[120px] h-[40px]"
                                onClick={(e) => e.preventDefault()}>
                                Login
                            </button>

                        </div>
                    </form>
                </div>

            </div>

        </div>
    )
}
