// i want to provide to all children an items list and a setItems to display in the cart of the header
import { createContext } from "react";
import { useState } from "react";

export type itemType = {
    id: number
    name: string;
    image: string;
    description: string;
    price: number;
    category: string;
}

type ItemsContextType = {
    items: itemType[] | []
    HandleAdd: (item: itemType | undefined) => void
    HandleRemove: (item: itemType | undefined) => void
    RemoveProduct: (id: number) => void
}

export const ItemsContext = createContext<ItemsContextType | null>(null)

// to count items and check for existance (return value > 0)
export function Count(array: itemType[] | [] | undefined, id: number) {
    let result = 0
    if (array) {
        for (let arr of array) {
            if (arr.id === id) {
                result += 1
            }
        }
    }
    return result
}

export const ItemsProvider = ({ children }: { children: React.ReactNode }) => {

    const [items, setItems] = useState<itemType[]>([])

    // adding a new item to the cart
    const HandleAdd = (item: itemType | undefined) => {
        (item && setItems(prev => [...prev, item]))
    }

    // removing an item from the cart!
    const HandleRemove = (item: itemType | undefined) => {
        if (item) {
            //used lastIndexOf because IndexOf cause the items to re-arrange when the item is at index 0
            const firstHalf = items.slice(0, items.lastIndexOf(item)) 
            const secondHalf = items.slice(items.lastIndexOf(item) + 1)
            setItems([...firstHalf, ...secondHalf])
        }
    }

    //! fix the product quantity not updating on the home page!

    const RemoveProduct = (id: number) => {
        setItems(prev => prev.filter(pr => pr.id !== id))
    }

    return (
        <ItemsContext.Provider value={{ items, HandleAdd, HandleRemove, RemoveProduct }}>
            {children}
        </ItemsContext.Provider>
    )
}