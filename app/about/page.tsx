import PageWrapper from '@/components/ui/PageWrapper'
import { heroImages } from "@/lib/data"

const AboutPage = () => {
    return (
        <>
            <PageWrapper image={heroImages.about} alt='Image Hero Du Menu' title="à propos"/>
        </>
    )
}

export default AboutPage