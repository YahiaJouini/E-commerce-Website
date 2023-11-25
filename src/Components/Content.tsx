import DisplayNav from "./DisplayNav"
import { AllProducts,AllProductsType } from "../data/Data"
import { useState , useEffect} from "react"
import ProductDisplay from "../Pages/ProductDisplay"
export default function Content() {
    const [content,setContent] = useState<AllProductsType | null >(null)
    useEffect(()=>{
        setTimeout(()=>{
            setContent(AllProducts)
        },1000)
    },[])
    function HandleClick (type:string) {
        setContent(null)

        // Used setTimeout for a brief loading delay during data fetching to mimic real word work environment.
        setTimeout(()=>{ 
            if(!type) {
                setContent(AllProducts.sort(() => Math.random() - 0.5))
            }
            else {
                setContent(AllProducts.filter(product=>product.category===type))
            }
        },1000)
    }

    return (
        <div className="">
            <DisplayNav HandleClick={HandleClick} />
            {!content && (<h1 className="h-[100vh]">Loading ...</h1>)}
            <div className="flex gap-20 justify-between flex-wrap">
            {content && (content.map((el,idx)=><ProductDisplay key={idx} info={el}/>))}
            </div>
        </div>
    )
}
