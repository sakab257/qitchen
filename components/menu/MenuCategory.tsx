import Divider from "@/components/ui/Divider"
import MenuItem from "@/components/menu/MenuItem"
import { type MenuCategoryData } from "@/lib/types"

const MenuCategory = ({ category }: { category: MenuCategoryData }) => {
    return (
        <section id={category.id} className="flex flex-col gap-6 scroll-mt-8">
            <div className="flex items-center justify-center gap-4">
                <Divider lineWidth={60} diamondSize={6} />
                <h2 className="font-forum text-cream uppercase text-2xl md:text-3xl tracking-widest">
                    {category.label}
                </h2>
                <Divider lineWidth={60} diamondSize={6} />
            </div>

            <div className="flex flex-col gap-6">
                {category.items.map((item, i) => (
                    <MenuItem key={item.name} item={item} index={i} />
                ))}
            </div>
        </section>
    )
}

export default MenuCategory
