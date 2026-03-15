import { navLinks } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"
import MobileMenu from "@/components/navigation/MobileMenu"


const Navbar = () => {
    return (
        <nav className="absolute top-8 left-8 right-8 z-50 flex items-center w-fit p-2 bg-bg rounded-xl mx-auto md:mx-0 gap-2">
            <MobileMenu />
            <Link href="/">
                <Image src="/images/logo-qitchen.webp" alt="Logo Qitchen" width={500} height={500} className="w-16 md:w-20 xl:w-24 h-auto"/>
            </Link>
            <ul className="gap-2 uppercase hidden md:flex pl-4">
                {navLinks.map((link)=>(
                    <Link key={link.label} href={link.href} className="hover:text-gold border border-bg hover:border-gold/30 p-2 rounded-md transition-all hover:bg-card">
                        <li className="text-xs">{link.label}</li>
                    </Link>
                ))}
            </ul>
            <Link href="/reservation">
                <button className="hover:text-gold border border-gold/30 p-2 rounded-md transition-all bg-card text-[10px] sm:text-xs uppercase flex items-center cursor-pointer ml-4 md:ml-0">
                    Réserver une table
                </button>
            </Link>
        </nav>
    )
}

export default Navbar
