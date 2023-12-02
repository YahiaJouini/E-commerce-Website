import { useState, useContext, createContext, useEffect } from "react";
import { ItemsContext } from "./ItemsContext";
import { AllProducts } from "../data/Data";
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
    CalculCost: (array: CartType[]) => number
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

export const CalculCost = (array: CartType[]) => {
    let total = 0;
    for (let arr of array) {
        total += arr.orders * arr.price
    }
    return total
}

export const CartContext = createContext<CartContextType | null>(null)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {

    const provider = useContext(ItemsContext)
    const [cart, setCart] = useState<CartType[]>([])

    const HandleAdd = (id: number) => {

        setCart(prev => prev.map(pr => (
            pr.id === id ? (
                { ...pr, orders: pr.orders + 1 }) : pr
        )))
        provider?.HandleAdd(AllProducts.find(pr => pr.id === id))

    }
    const HandleRemove = (id: number) => {

        setCart(prev => prev.map(pr => (
            pr.id === id ? { ...pr, orders: pr.orders - 1 } : pr
        )))
        provider?.HandleRemove(AllProducts.find(pr => pr.id === id))
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
        <CartContext.Provider value={{ cart, HandleAdd, HandleRemove, RemoveProduct, CalculCost }}>
            {children}
        </CartContext.Provider>
    )
}