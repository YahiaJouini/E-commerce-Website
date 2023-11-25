type ProductDisplayType ={
    info: {
        id: number;
        name: string;
        image: string;
        description: string;
        price: number;
        category: string;
    }
}
export default function ProductDisplay({ info }:ProductDisplayType) {
    return (
        <div className="w-[260px] h-[380px] bg-slate-500">
            
        </div>
    )
}