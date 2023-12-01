import CartTable from '../Components/CartTable'
import { useContext } from 'react'
import { CartContext } from '../Contexts/CartContext'
import OrderSummary from '../Components/OrderSummary';
import { MdOutlineClose as Remove } from "react-icons/md";
import Quantity from '../Components/Quantity'
import ContinueShopping from '../Components/ContinueShopping';
import { useNavigate } from 'react-router-dom';
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
        let total = 0;
        return (
            <div className="container flex justify-between items-center">
                <div className="flex items-center sm:justify-center ml-4 sm:ml-0 w-[60%]">
                    <CartTable >
                        {Cartprovided.cart.map(cartItem => {
                            total += cartItem.price * cartItem.orders;
                            return (
                                <tr className='tr-class'>
                                    <td className="td-class">
                                        <div className='flex items-center p-4'>
                                            <img className='mr-6 w-[120px]' src={cartItem.image} alt="image" />
                                            <div>
                                                <h1 className='text-[18px] font-semibold'>{cartItem.name}</h1>
                                                <p className='font-semibold mt-1'>Product Id : {cartItem.id}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="td-class">
                                        <Quantity qty={cartItem.orders} id={cartItem.id} HandleClick={HandleClick} />
                                    </td>
                                    <td className="td-class text-[18px] font-semibold">
                                        <div className=' flex justify-center w-[150px]'>
                                            {new Intl.NumberFormat().format((cartItem.price * cartItem.orders))} TND
                                        </div>

                                    </td>
                                    <td className="td-class">
                                        <button className='float-right px-4 py-px ' onClick={() => Cartprovided.RemoveProduct(cartItem.id)}>
                                            <Remove size="2rem" />
                                        </button>
                                    </td>
                                </tr>)
                        })}

                    </CartTable>
                </div>

                <OrderSummary items={Cartprovided.cart.length} cost={total} />
            </div>
        )

    } else {
        const navigate = useNavigate()
        return (
            <div className='h-[85vh] grid place-content-center'>
                <div className='w-[40%] m-auto bg-gradient-to-r from-[#c7ebfa] to-[#e7eff9] p-12 flex flex-col justify-center items-center '>
                    <h1 className='text-[26px] font-bold text-center mb-10'>OOPS! YOUR CART IS EMPTY. EXPLORE OUR PRODUCTS AND ADD THEM TO YOUR CART. IF YOU NEED HELP, FEEL FREE TO CONTACT US. <br /> HAPPY SHOPPING!</h1>
                    <ContinueShopping HandleNavigate={() => navigate('/')} />

                </div>
            </div>
        )
    }

}
