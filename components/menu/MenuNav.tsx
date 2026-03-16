"use client"

import { menuCategories } from "@/lib/data"

const MenuNav = () => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault()
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
        history.replaceState(null, "", window.location.pathname)
    }

    return (
        <nav className="flex items-center justify-center gap-3 flex-wrap sticky top-0 z-10 bg-bg/80 backdrop-blur-sm py-3 -mx-4 px-4">
            {menuCategories.map((cat) => (
                <a
                    key={cat.id}
                    href={`#${cat.id}`}
                    onClick={(e) => handleClick(e, cat.id)}
                    className="px-4 py-2 border border-cream/30 rounded-md text-cream text-[10px] md:text-xs font-satoshi uppercase tracking-wider hover:border-gold/60 hover:text-gold transition-colors"
                >
                    {cat.label}
                </a>
            ))}
        </nav>
    )
}

export default MenuNav
