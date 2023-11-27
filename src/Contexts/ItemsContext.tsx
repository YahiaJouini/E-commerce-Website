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
    HandleAdd: (item: itemType) => void
    HandleRemove: (item: itemType) => void
}

export const ItemsContext = createContext<ItemsContextType | null>(null)

// to count items and check for existance (return value > 0)
export function Count(array: itemType[] | [] | undefined, element: itemType) {
    let result = 0
    if (array) {
        for (let arr of array) {
            if (arr.id === element.id) {
                result += 1
            }
        }
    }
    return result
}

export const ItemsProvider = ({ children }: { children: React.ReactNode }) => {

    const [items, setItems] = useState<itemType[]>([])

    // adding a new item to the cart
    const HandleAdd = (item: itemType) => {
        setItems(prev => [...prev, item])
    }

    // removing an item from the cart!
    const HandleRemove = (item: itemType) => {
        const firstHalf = items.slice(0, items.indexOf(item))
        const secondHalf = items.slice(items.indexOf(item) + 1)
        setItems([...firstHalf, ...secondHalf])
    }

    return (
        <ItemsContext.Provider value={{ items, HandleAdd, HandleRemove }}>
            {children}
        </ItemsContext.Provider>
    )
}