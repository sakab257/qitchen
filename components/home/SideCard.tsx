import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { FeatureCardData } from "@/lib/types"

const SideCard = ({ title, href, image }: FeatureCardData) => {
    return (
        <Link
            href={href}
            className="group w-full md:w-1/3 xl:w-full min-h-62.5 md:min-h-75 xl:min-h-0 xl:h-1/3 rounded-2xl relative overflow-hidden block"
        >
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105 opacity-70 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

            {/* Badge avec arrondis inversés */}
            <div className="absolute bottom-0 right-0 bg-bg p-2.5 pl-4 pt-4 rounded-tl-3xl">
                {/* Arrondi inversé HAUT */}
                <svg
                    className="absolute -top-6 right-0 w-6 h-6 fill-bg pointer-events-none"
                    viewBox="0 0 40 40"
                >
                    <path d="M40 0L40 40L0 40A40 40 0 0 0 40 0Z" />
                </svg>

                {/* Arrondi inversé GAUCHE */}
                <svg
                    className="absolute bottom-0 -left-6 w-6 h-6 fill-bg pointer-events-none"
                    viewBox="0 0 40 40"
                >
                    <path d="M40 0L40 40L0 40A40 40 0 0 0 40 0Z" />
                </svg>

                <div className="flex items-center gap-1.5">
                    <h2 className="font-forum text-cream text-sm uppercase tracking-wide">
                        {title}
                    </h2>
                    <ArrowRight className="w-3.5 h-3.5 text-cream transition-transform duration-300 group-hover:translate-x-1" />
                </div>
            </div>
        </Link>
    );
};

export default SideCard;