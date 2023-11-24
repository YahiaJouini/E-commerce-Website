import { NavLink } from "react-router-dom";
import { MdFavoriteBorder as Fav } from "react-icons/md";
import { BsCart3 as Cart } from "react-icons/bs";

export default function Header() {
  return (
    <header className="bg-main flex items-center h-[70px]">
      <div className="container flex justify-between items-center ">

        <h1 className="title font-semibold">VarietyFinds</h1>

        <nav className="w-full flex justify-center gap-[50px] items-center">

          <NavLink to="/">HOME</NavLink>
          <NavLink to="about">ABOUT</NavLink>
          <NavLink to="contact">CONTACT</NavLink>

          <input
            type="text"
            placeholder="Search for products ..."
            className="w-[300px] h-[30px] rounded-md px-3 shadow-sm outline-none text-sm"
          />

        </nav>
        <div className="flex justify-center items-center gap-10">

          <div className="flex justify-center gap-4">
            <button><Fav size="1.2rem" /></button>
            <button><Cart size="1.2rem" /></button>
          </div>

          <div className="flex justify-center items-center gap-2">
            <NavLink to="login">LOGIN</NavLink>
            <div className="h-[12px] w-[2px] bg-[#3b3f46]"></div>
            <NavLink to="Register">REGISTER</NavLink>
          </div>

        </div>
      </div>
    </header>
  );
}
