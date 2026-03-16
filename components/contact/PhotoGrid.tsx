import Image from "next/image"
import { contactImages } from "@/lib/data"

const PhotoGrid = () => {
    return (
        <div className="grid grid-cols-2 gap-2 h-full">
            {contactImages.map((src, i) => (
                <div key={i} className="relative rounded-xl overflow-hidden">
                    <Image
                        src={src}
                        alt={`Photo ${i + 1}`}
                        fill
                        className="object-cover"
                    />
                </div>
            ))}
        </div>
    )
}

export default PhotoGrid
