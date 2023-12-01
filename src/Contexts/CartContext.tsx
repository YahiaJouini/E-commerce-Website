// i want to provide to all children an items list and a setItems to display in the cart of the header
import { createContext, useEffect } from "react";
import { useState, useContext } from "react";
import { ItemsContext } from "./ItemsContext";
import { Count } from "./ItemsContext";

export type itemType = {
    id: number
    name: string;
    image: string;
    description: string;
    price: number;
    category: string;
}

export type CartType = {
    id: number
    name: string;
    image: string;
    price: number;
    orders: number;

}

type CartContextType = {
    cart: CartType[] | null
    HandleAdd: (id: number) => void
    HandleRemove: (id: number) => void
    RemoveProduct: (id: number) => void
}


function uniqueItems(array: itemType[] | undefined) {
    const temp: itemType[] = []
    if (array) {
        for (let arr of array) {
            if (!temp.includes(arr)) {
                temp.push(arr)
            }
        }
        return temp
    }
    return []
}

export const CartContext = createContext<CartContextType | null>(null)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {

    const provider = useContext(ItemsContext)
    const [cart, setCart] = useState<CartType[]>([])

    const HandleAdd = (id: number) => {

        setCart(prev => prev.map(pr => (
            pr.id === id ? { ...pr, orders: pr.orders + 1 } : pr
        )))

    }
    const HandleRemove = (id: number) => {

        setCart(prev => prev.map(pr => (
            pr.id === id ? { ...pr, orders: pr.orders - 1 } : pr
        )))

    }

    const RemoveProduct = (id: number) => {

        setCart(prev => prev.filter(pr => pr.id !== id))
        provider?.RemoveProduct(id)
    }

    useEffect(() => {
        const tempCart = uniqueItems(provider?.items).map(item => {
            return { ...item, orders: Count(provider?.items, item.id) }
        })
        setCart(tempCart)

    }, [provider])

    return (
        <CartContext.Provider value={{ cart, HandleAdd, HandleRemove, RemoveProduct }}>
            {children}
        </CartContext.Provider>
    )
}