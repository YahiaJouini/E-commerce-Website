// importing icons and logos
import Logo from "./Logo";
import { FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";


import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <div className="bg-[#f4f5f4] mt-20 ">

            {/* Logo and description */}
            <div className=" container flex justify-between py-12">
                <div className="w-[30%]">
                    <Logo />
                    <h3 className="font-medium tracking-wide mt-2">Discover endless treasures at VarietyFinds.
                        Elevate your lifestyle with curated finds – from fashion to home, we've got it all. Shop uniqueness now!
                    </h3>
                    <div className="flex gap-10 mt-5">
                        <a href="https://www.linkedin.com/in/yahia-jouini/"><FaGithub size="2.2rem" /></a>
                        <a href="mailto:jouiniyahya117@gmail.com"><IoMail size="2.2rem" /></a>
                        <a href="https://github.com/YahiaJouini"><FaLinkedin size="2.2rem" /></a>
                    </div>

                </div>


                {/* Subscribe to newsletters */}
                <div className="mx-4  w-[30%]">
                    <h1 className="text-[20px] font-bold mb-2">Sign Up For Newsletters</h1>
                    <h3>Be the first to know. Sign up for newsletters today</h3>
                    <div className="flex items-center mt-5 ">
                        <input type="text" placeholder="Your email adress" className="w-[60%] h-[45px] rounded-l-lg outline-none px-2" />
                        <button className="btn my-1 rounded-l-none w-[25%] h-[45px] hover:scale-100 transition-none">
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* More info*/}
                <div className="w-[14%] flex flex-col">

                    <h1 className="text-[20px] font-bold">More From Us</h1>
                    <div className="flex">
                        <div className="h-[2px] w-[30%] bg-gray-600 my-2"></div>
                        <div className="h-[2px] w-[60%] bg-gray-300 mb-4 mt-2"></div>
                    </div>
                    <ul className="flex flex-col  gap-2 justify-center">
                        <li className="text-[17px] font-medium"><Link to='/contact'>About Us</Link></li>
                        <li className="text-[17px] font-medium"><Link to='/contact'>Contact Us</Link></li>
                        <li className="text-[17px] font-medium"><Link to='/contact'>Login</Link></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
