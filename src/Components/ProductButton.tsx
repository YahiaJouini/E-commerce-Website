type ProductButtonType = {
    children: React.ReactNode
    HandleNavigate?: () => void
}

export default function ProductButton({ children, HandleNavigate }: ProductButtonType) {
    return (
        <button onClick={HandleNavigate} className="h-[50px] w-[80%] mt-6 text-[17px]  bg-transparent text-[#2f3134] 
                             border-2 border-[#2f3134] font-bold search-shadow
                             hover:bg-[#2f3134] hover:text-white transition-all duration-300
                             ">
            {children}
        </button>
    )
}
