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
    added: boolean
}

type ItemsContextType = {
    items: itemType[] | []
    HandleItem: (item: itemType) => void
}

export const ItemsContext = createContext<ItemsContextType | null>(null)

export const ItemsProvider = ({ children }: { children: React.ReactNode }) => {

    function exists(array: itemType[], element: itemType) {
        for (let arr of array) {
            if (arr.id === element.id) {
                return true
            }
        }
        return false
    }

    const HandleItem = (item: itemType) => {
        if (exists(items, item)) {
            setItems(prev => prev.filter(pr => pr.id !== item.id))
        }
        else {
            setItems(prev => [...prev, item])
        }

    }

    const [items, setItems] = useState<itemType[]>([])

    return (
        <ItemsContext.Provider value={{ items, HandleItem }}>
            {children}
        </ItemsContext.Provider>
    )
}