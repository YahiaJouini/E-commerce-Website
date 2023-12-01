import CartTable from '../Components/CartTable'
import { useContext } from 'react'
import { CartContext } from '../Contexts/CartContext'
import Quantity from '../Components/Quantity'
export default function ShoppingCart() {
    

    const Cartprovided = useContext(CartContext)

    function HandleClick(x:number,id?:number,orders?: number) {
        if(x>0) {
            id && Cartprovided?.HandleAdd(id)
        }else {
            if(orders && orders>1) {
                id && Cartprovided?.HandleRemove(id)
            }
        }
    }
    if (Cartprovided?.cart?.length) {
        return (
            <div className="container">
                <CartTable>
                    {Cartprovided.cart.map((product,idx) => (
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
                            <td>
                                <Quantity qty={product.orders} id={product.id} HandleClick={HandleClick} />
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
