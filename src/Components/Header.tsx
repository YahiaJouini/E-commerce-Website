import { Link } from "react-router-dom";
import { MdFavoriteBorder as Fav } from "react-icons/md";

export default function Header() {
  return (
    <header className="bg-main flex items-center h-[70px]">
      <div className="container flex justify-between items-center">
        <h1 className="title">VarietyFinds</h1>
        <nav className="w-full flex justify-center gap-[60px] items-center">
          <Link to="home">Home</Link>
          <Link to="about">About</Link>
          <Link to="about">Contact</Link>
          <input type="text" 
                  placeholder="Search for products ..."
                  className="w-[300px] h-[30px] rounded-md px-3 shadow-sm outline-none"
                  />
        </nav>
        <div>
          <Fav />
        </div>
      </div>
    </header>
  );
}
