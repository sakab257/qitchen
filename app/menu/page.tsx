import PageWrapper from "@/components/ui/PageWrapper"
import Footer from "@/components/ui/Footer"
import MenuNav from "@/components/menu/MenuNav"
import MenuCategory from "@/components/menu/MenuCategory"
import { heroImages, menuCategories } from "@/lib/data"

const MenuPage = () => {
    return (
        <>
            <PageWrapper image={heroImages.menu} alt="Image Hero Du Menu" title="Menu">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-10 py-6 px-20 border-border border rounded-2xl">
                        <MenuNav />
                        {menuCategories.map((category) => (
                            <MenuCategory key={category.id} category={category} />
                        ))}
                    </div>
                    <Footer />
                </div>
            </PageWrapper>
            
        </>
    )
}

export default MenuPage
