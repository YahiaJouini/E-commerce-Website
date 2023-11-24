import { NavLink } from "react-router-dom"
export default function AllDisplay() {
    return (
        <div className="mb-20">
            <nav className="flex gap-10 mt-20">
                <NavLink to='/' className="text-[18px]">ALL</NavLink>
                <NavLink to='/tech' className="text-[18px]" >TECHNOLOGIES</NavLink>
                <NavLink to='/clothing' className="text-[18px]">CLOTHING</NavLink>
                <NavLink to='/jewelry' className="text-[18px]">JEWLERY</NavLink>
                <NavLink to='/furniture' className="text-[18px]">FURNITURE</NavLink>
            </nav>
        </div>
    )
}
