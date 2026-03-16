import PageWrapper from '@/components/ui/PageWrapper'
import { heroImages } from "@/lib/data"

const ContactPage = () => {
    return (
        <>
            <PageWrapper image={heroImages.contact} alt='Image Hero Du Menu' title="Contact"/>
        </>
    )
}

export default ContactPage