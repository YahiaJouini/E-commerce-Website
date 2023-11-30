import { NavLink, Link, useNavigate } from "react-router-dom";
import { ItemsContext } from "../Contexts/ItemsContext";
import { useContext } from "react";

// importing icons
import { MdFavoriteBorder as Fav } from "react-icons/md";
import { FaShoppingBag as Bag } from "react-icons/fa";

export default function Header() {


  const provided = useContext(ItemsContext)
  const navigate = useNavigate()

  return (

    <header className="bg-main flex items-center h-[70px] sticky top-0  z-[999]">
      <div className="container flex justify-between items-center ">

        <Link to="/"><h1 className="title font-semibold cursor-pointer">VarietyFinds</h1></Link>

        <nav className="w-full flex justify-center gap-[50px] items-center">

          <NavLink to="/">HOME</NavLink>
          <NavLink to="about">ABOUT</NavLink>
          <NavLink to="contact">CONTACT</NavLink>

          <input
            type="text"
            placeholder="Search for products ..."
            className="w-[300px] h-[30px] rounded-md px-3 search-shadow
            outline-none text-sm" />

        </nav>

        <div className="flex justify-center items-center gap-10">

          <div className="flex justify-center gap-4">
            <button><Fav size="1.2rem" /></button>
            <button className="flex gap-1" onClick={() => navigate("/cart")}>
              <Bag size="1.2rem" />
              <span className="w-4 font-medium">{provided?.items.length}</span>
            </button>
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