//importing componenets
import DisplayNav from "./DisplayNav"
import Allrproducts from "./Allrproducts"

//imporing loaders
import BarLoader from "react-spinners/BarLoader"

import { AllProducts, AllProductsType } from "../data/Data"
import { useState, useEffect, useRef } from "react"



export default function Content() {

    const [content, setContent] = useState<AllProductsType | null>(null)
    const [loading, setLoading] = useState(true)

    const ref = useRef<HTMLDivElement>(null)


    const [display, setDisplay] = useState(4)
    const [ButtonName, setButtonName] = useState<"SHOW MORE" | "NO MORE TO SHOW">("SHOW MORE")


    const LessOrEqual = content ? display + 4 <= content?.length : false

    useEffect(() => {

        setTimeout(() => {
            setContent(AllProducts.filter(product => product.category === "tech")) //initializing the array to tech onload
            setLoading(false)
        }, 1500)
    }, [])

    function HandleClick(type: string) {

        // when product type changes it will only display one row at first
        setDisplay(4)

        // reset the button
        setButtonName("SHOW MORE")

        // Used setTimeout for a brief loading delay during data fetching to mimic real word work environment.
        setLoading(true)
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

    const HandleDisplay = () => {

        if (content) {
            if (LessOrEqual) {
                if (display + 4 >= content.length) {
                    setButtonName("NO MORE TO SHOW")
                }
                setDisplay(prev => prev + 4)
            }
        }
        setTimeout(() => {

            ref.current?.scrollIntoView({ behavior: "smooth", block: "end" }); // scroll to the button of the parent block

        }, 100) // waits for products to load before scrolling
    }

    return (
        <div>

            <DisplayNav loading={loading} HandleClick={HandleClick} />
            {loading && (<div ref={ref} className="h-[50vh]">
                <h1 className="text-[22px] mb-2">Loading ...</h1>
                <BarLoader color="#3b3f46" height={6} width={150} />
            </div>)}

            {!loading && (
                <div ref={ref} className="flex flex-col items-center">

                    <div ref={ref} className="w-full flex gap-12 justify-between flex-wrap">
                        {content?.slice(0, display)?.map((el, idx) => <Allrproducts key={idx} info={el} />)}
                    </div>

                    <button disabled={!LessOrEqual}
                        onClick={HandleDisplay}
                        className="btn button-shadow">{ButtonName}</button>
                </div>
            )}
        </div>
    )
}