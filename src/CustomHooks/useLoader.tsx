import { useEffect, useState } from "react"
export default function useLoader(image: string) {
    const [url, setUrl] = useState<string | null>(null)

    useEffect(() => {
        const img = new Image()
        img.src = image
        img.onload = () => setUrl(image)
    }, [image]) // for loading effect and speed efficiency
    return url
}
