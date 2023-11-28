import { useNavigate } from "react-router-dom"
import { FaLongArrowAltRight as Left } from "react-icons/fa";

export default function Landing() {
    const navigate = useNavigate()
    return (
        <div className="bg-gradient-to-r from-[#c7ebfa] to-[#e7eff9] p-[180px] py-[80px] flex items-center ">
            <div>
                <h1 className="text-[30px] font-extrabold text-s  tracking-wide ">WELCOME TO VARIETY-FINDS<br />
                    UNLEASH YOUR SHOPPING ADVENTURE!</h1>
                <p className="text-[19px] w-[95%] mt-5">
                    Dive into a world of endless possibilities with VarietyFinds!
                    Discover unique treasures that redefine your shopping experience. From tech marvels to fashion gems, we've got it all.
                </p>
                <button
                    onClick={() => { navigate("/register") }}
                    className="text-[20px] mt-10 font-extrabold flex items-center gap-1 ">
                    REGISTER NOW <Left />
                </button>
            </div>
            <div>
                <img className="w-[800px]" src="https://cdn.pixabay.com/photo/2017/09/17/02/02/png-2757379_640.png" />
            </div>
        </div>
    )
}
