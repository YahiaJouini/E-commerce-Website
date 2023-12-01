// importing Components
import CartTable from '../Components/CartTable'
import OrderSummary from '../Components/OrderSummary';
import ContinueShopping from '../Components/ContinueShopping';
import Quantity from '../Components/Quantity'

// importing toast Notification and icons
import { ToastContainer, toast } from "react-toastify"
import { MdOutlineClose as Remove } from "react-icons/md";


import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../Contexts/CartContext'


export default function ShoppingCart() {

    const Cartprovided = useContext(CartContext)

    if (Cartprovided?.cart?.length) {

        function HandleClick(x: number, id?: number, orders?: number) {
            if (x > 0) {
                id && Cartprovided?.HandleAdd(id)
            } else {
                if (orders && orders > 1) {
                    id && Cartprovided?.HandleRemove(id)

                }
            }
        }

        function RemoveToast() {
            toast.info("Product removed from your cart", {
                position: toast.POSITION.BOTTOM_RIGHT,
                className: "w-[320px] text-[17px]",
            });

        }


        let total = 0;
        return (
            <div className="container flex justify-between items-center mt-8">
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
                                        <button className='float-right px-4 py-px '
                                            onClick={() => { RemoveToast(); Cartprovided.RemoveProduct(cartItem.id) }}>
                                            <Remove size="2rem" />
                                        </button>
                                    </td>
                                </tr>)
                        })}

                    </CartTable>
                    <ToastContainer
                        position="bottom-right"
                        autoClose={3000} />
                </div>
                <div className='w-[30%]'>
                    <OrderSummary items={Cartprovided.cart.length} cost={total} />
                </div>

            </div>
        )

    } else {
        const navigate = useNavigate()
        return (
            <div className='h-[85vh] grid place-content-center '>
                <div className='w-[40%] m-auto bg-gradient-to-r from-[#e5e7eb] to-[#edeef1] p-12 
                                flex flex-col justify-center items-center rounded-lg search-shadow'>
                    <h1 className='text-[26px] font-bold text-center mb-10'>
                        OOPS! YOUR CART IS EMPTY.
                        EXPLORE OUR PRODUCTS AND ADD THEM TO YOUR CART.
                        IF YOU NEED HELP, FEEL FREE TO CONTACT US. <br /> HAPPY SHOPPING!
                    </h1>
                    <ContinueShopping HandleNavigate={() => navigate('/')} />

                </div>
            </div>
        )
    }
}
