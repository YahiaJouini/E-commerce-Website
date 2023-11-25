type ProductDisplayType = {
    info: {
        id: number;
        name: string;
        image: string;
        description: string;
        price: number;
        category: string;
    }
}
export default function ProductDisplay({ info }: ProductDisplayType) {
    const styles = {
        backgroundImage: `URL(${info.image})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain"
    }
    return (
        <div className="w-[300px] flex flex-col items-center pb-2 px-4 hover:shadow-lg hover:scale-[1.03] cursor-pointer transition-all rounded-lg">
            <div style={styles} className="w-[260px] h-[320px] mb-3" ></div>
            <h1 className="text-lg break-keep mb-3">{info.name}</h1>
            <h1 className="text-base font-bold">{info.price} TND</h1>
        </div>
    )
}