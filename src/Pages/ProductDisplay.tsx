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
    const  styles={
        backgroundImage:`URL(${info.image})`,
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover"
    }
    return (
        <div className="w-[260px] h-[380px] ">
            <img src={info.image} className="w-fit" />
            
        </div>
    )
}