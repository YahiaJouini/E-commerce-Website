import DisplayNav from "./DisplayNav"
import { AllProducts, AllProductsType } from "../data/Data"
import { useState, useEffect } from "react"
import Allrproducts from "./Allrproducts"
import BarLoader from "react-spinners/BarLoader"

export default function Content() {

    const [content, setContent] = useState<AllProductsType | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setContent(AllProducts.filter(product => product.category === "tech")) //initializing the array to tech onload
            setLoading(false)
        }, 1500)
    }, [])

    function HandleClick(type: string) {

        setLoading(true)

        // Used setTimeout for a brief loading delay during data fetching to mimic real word work environment.
        setTimeout(() => {

            if (!type) {
                setContent(AllProducts.slice().sort(() => Math.random() - 0.5)) //.slice() so the original array does not change !
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
                <h1 className="text-[22px] mb-2">Loading ...</h1>
                <BarLoader color="#3b3f46" height={6} width={150} />
            </div>)}
            <div className="flex gap-10 justify-between flex-wrap">
                {!loading && (content?.map((el, idx) => <Allrproducts key={idx} info={el} />))}
            </div>
        </div>
    )
}