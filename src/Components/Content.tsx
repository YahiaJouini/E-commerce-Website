import DisplayNav from "./DisplayNav"
import { AllProducts, AllProductsType } from "../data/Data"
import { useState, useEffect } from "react"
import ProductDisplay from "../Pages/ProductDisplay"
import BarLoader from "react-spinners/BarLoader"
export default function Content() {
    const [content, setContent] = useState<AllProductsType | null>(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setContent(AllProducts.sort(() => Math.random() - 0.5))
            setLoading(false)
        }, 1500)
    }, [])
    function HandleClick(type: string) {
        setLoading(true)
        // Used setTimeout for a brief loading delay during data fetching to mimic real word work environment.
        setTimeout(() => {

            if (!type) {
                setContent(AllProducts.sort(() => Math.random() - 0.5))
            }
            else {
                setContent(AllProducts.filter(product => product.category === type))
            }
            setLoading(false)
        }, 1500)
    }

    return (
        <div>
            <DisplayNav loading={loading} HandleClick={HandleClick} />
            {loading && (<div className="h-[50vh]">
                <BarLoader color="#3b3f46" height={6} width={200} />
            </div>)}
            <div className="flex gap-10 justify-between flex-wrap">
                {content && (content.map((el, idx) => <ProductDisplay key={idx} info={el} />))}
            </div>
        </div>
    )
}
