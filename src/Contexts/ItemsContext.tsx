// i want to provide to all children an items list and a setItems to display in the cart of the header
import { createContext } from "react";
import { AllProductsType } from "../data/Data";
import { useState } from "react";

type itemType = {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
    category: string;
}

type ItemsContextType = {
    items: AllProductsType | []
    HandleItem: (item: itemType) => void
}

export const ItemsContext = createContext<ItemsContextType | null>(null)

export const ItemsProvider = ({ children }: { children: React.ReactNode }) => {

    const HandleItem = (item: itemType) => {
        setItems(prev => [...prev, item])
    }

    const [items, setItems] = useState<AllProductsType>([])

    return (
        <ItemsContext.Provider value={{ items, HandleItem }}>
            {children}
        </ItemsContext.Provider>
    )
}