import CartTable from '../Components/CartTable'
import { useContext } from 'react'
import { CartContext } from '../Contexts/CartContext'
import { MdOutlineClose as Remove } from "react-icons/md";
import Quantity from '../Components/Quantity'
export default function ShoppingCart() {


    const Cartprovided = useContext(CartContext)

    function HandleClick(x: number, id?: number, orders?: number) {
        if (x > 0) {
            id && Cartprovided?.HandleAdd(id)
        } else {
            if (orders && orders > 1) {
                id && Cartprovided?.HandleRemove(id)
            }
        }
    }
    if (Cartprovided?.cart?.length) {
        return (
            <div className="container">
                <div className='w-[80%] m-auto'>
                    <CartTable>
                        {Cartprovided.cart.map((product, idx) => (
                            <tr key={idx}>
                                <td className=''>
                                    <div className='flex items-center p-4'>
                                        <img className='w-[120px]' src={product.image} alt="image" />
                                        <div>
                                            <h1 className='text-[18px] font-semibold'>{product.name}</h1>
                                            <p>Product Id : {product.id}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className=''>
                                    <Quantity qty={product.orders} id={product.id} HandleClick={HandleClick} />
                                </td>
                                <td className=''>{new Intl.NumberFormat().format((product.price * product.orders))} TND</td>
                                <td className=''>
                                    <button onClick={() => Cartprovided.RemoveProduct(product.id)}><Remove size="2rem" /></button>
                                </td>
                            </tr>
                        ))}

                    </CartTable>
                </div>

            </div>
        )

    } else {
        return (
            <></>
        )
    }

}
