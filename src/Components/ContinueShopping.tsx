import { IoChevronBackOutline as Back } from "react-icons/io5";
export default function ContinueShopping({ HandleNavigate }: { HandleNavigate: () => void }) {
    return (
        <button className="font-extrabold flex items-center" onClick={HandleNavigate}>
            <Back size='1.4rem' /> CONTINUE SHOPPING
        </button>
    )
}
