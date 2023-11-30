import CartTable from '../Components/CartTable'
import { useContext } from 'react'
import { CartContext } from '../Contexts/CartContext'
export default function ShoppingCart() {


    const provided = useContext(CartContext)
    if (provided?.cart?.length) {
        return (
            <div className="container">
                <CartTable>
                    {provided.cart.map((product,idx) => (
                        <tr key={idx}>
                            <td>
                                <div className='flex items-center p-4'>
                                    <img className='w-[120px]' src={product.image} alt="image"/>
                                    <div>
                                    <h1 className='text-[18px] font-semibold'>{product.name}</h1>
                                    <p>Product Id : {product.id}</p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}

                </CartTable>

            </div>
        )

    } else {
        return (
            <></>
        )
    }

}
