type AllDisplayType ={
    HandleClick:(type:string)=>void
}
export default function AllDisplay({HandleClick}:AllDisplayType) {
    return (
        <div className="mb-20">
            <nav className="flex gap-10 mt-20">
                <button className="text-[18px]" onClick={()=>HandleClick("")}>ALL</button>
                <button className="text-[18px]" onClick={()=>HandleClick("tech")} >TECHNOLOGIES</button>
                <button className="text-[18px]" onClick={()=>HandleClick("clothing")}>CLOTHING</button>
                <button className="text-[18px]" onClick={()=>HandleClick("jewelry")}>JEWELRY</button>
                <button className="text-[18px]" onClick={()=>HandleClick("furniture")}>FURNITURE</button>
            </nav>
        </div>
    )
}
