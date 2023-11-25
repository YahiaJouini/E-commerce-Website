type AllDisplayType = {
    HandleClick: (type: string) => void
    loading: boolean
}
export default function AllDisplay({ HandleClick, loading }: AllDisplayType) {

    function ManageButton(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, type: string) {

        HandleClick(type)// setting the data

        const buttons = document.querySelectorAll("button"); //adding a custon style to the clicked button
        Array.from(buttons).forEach(btn => {
            if (e.target === btn) {
                btn.classList.add("active-btn")
            } else {
                btn.classList.remove("active-btn")
            }
        })
    }

    return (
        <div className="mb-20">
            <nav className="flex gap-10 mt-20">
                <button disabled={loading} className="text-[18px] active-btn" onClick={(e) => ManageButton(e, "")}>ALL</button>
                <button disabled={loading} className="text-[18px]" onClick={(e) => ManageButton(e, "tech")} >TECHNOLOGIES</button>
                <button disabled={loading} className="text-[18px]" onClick={(e) => ManageButton(e, "clothing")}>CLOTHING</button>
                <button disabled={loading} className="text-[18px]" onClick={(e) => ManageButton(e, "jewelry")}>JEWELRY</button>
                <button disabled={loading} className="text-[18px]" onClick={(e) => ManageButton(e, "furniture")}>FURNITURE</button>
            </nav>
        </div>
    )
}