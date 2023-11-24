import Landing from "../Components/Landing"
import DisplayNav from "../Components/DisplayNav"

import { useParams } from "react-router-dom"
import { AllProducts} from "../data/Data"

export default function Tech() {
    const {page} = useParams() as any
    return (
        <h1 className="text-[40px] container">
            <Landing />
            <DisplayNav />
            {AllProducts.map(product=> {
                if(product.category===page) {
                    return (<>
                    <h1>{product.name}</h1>
                    </>)
                }
            }
            )}
        </h1>
    )
}
