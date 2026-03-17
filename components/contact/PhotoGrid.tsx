import Image from "next/image"
import { contactImages } from "@/lib/data"
import Link from "next/link"
import { Instagram } from "lucide-react"

const PhotoGrid = () => {
    return (
        <div className="grid grid-cols-2 gap-2 h-full">
            {contactImages.map((src, i) => (
                <Link href="" key={i} className="group relative rounded-xl overflow-hidden cursor-pointer">
                    <Image
                        src={src}
                        alt={`Photo ${i + 1}`}
                        fill
                        className="object-cover transition-all duration-500 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex items-center justify-center w-10 h-10 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out">
                            <Instagram className="w-6 h-6 text-cream" />
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default PhotoGrid
