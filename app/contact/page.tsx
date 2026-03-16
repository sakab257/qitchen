import PageWrapper from "@/components/ui/PageWrapper"
import Footer from "@/components/ui/Footer"
import OpeningCard from "@/components/contact/OpeningCard"
import ContactCard from "@/components/contact/ContactCard"
import PhotoGrid from "@/components/contact/PhotoGrid"
import MapCard from "@/components/contact/MapCard"
import { heroImages } from "@/lib/data"

const ContactPage = () => {
    return (
        <>
            <PageWrapper image={heroImages.contact} alt="Image Hero Contact" title="Contact">
                <div className="flex flex-col gap-3 lg:h-[calc(100vh-2rem)]">
                    {/* Row 1: Opening + Photos */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-3 lg:flex-1 lg:min-h-0">
                        <div className="md:col-span-2 h-full">
                            <OpeningCard />
                        </div>
                        <div className="md:col-span-3 min-h-52">
                            <PhotoGrid />
                        </div>
                    </div>

                    {/* Row 2: Map + Contact */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:flex-1 lg:min-h-0">
                        <MapCard />
                        <ContactCard />
                    </div>

                    <Footer />
                </div>
            </PageWrapper>
        </>
    )
}

export default ContactPage
