// importing the data to fetch
import { AllProducts } from "../data/Data"

import { useParams } from "react-router-dom"

// importing the custom hook
import useLoader from "../CustomHooks/useLoader"

// importing the loader
import BeatLoader from "react-spinners/BeatLoader"


export default function Product() {
  const { id } = useParams()

  const product = AllProducts.find(product => product.id === Number(id))

  if (!product) {

    return <div>could not find the product you are looking for</div>

  } else {

    const url = useLoader(product.image)

    return (

      <div>
        <div>
          {url ? <img src={url} alt="Image of the product" /> : <BeatLoader />}
        </div>
        <div>
          <h1>{product.name}</h1>
          <h4>{product.price}</h4>
          <p>{product.description}</p>
        </div>

      </div>

    )
  }

}
