import Footer from "@/components/ui/Footer"
import PageWrapper from "@/components/ui/PageWrapper"
import Divider from "@/components/ui/Divider"
import ImageSlider from "@/components/about/ImageSlider"
import AvisSlider from "@/components/about/AvisSlider"
import { heroImages, aboutImages } from "@/lib/data"

const slider1 = [aboutImages.slider1_1, aboutImages.slider1_2, aboutImages.slider1_3]
const slider2 = [aboutImages.slider2_1, aboutImages.slider2_2, aboutImages.slider2_3]

const FirstRow = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:flex-1 lg:min-h-0">
            <div className="flex flex-col justify-between gap-3 border border-border rounded-2xl p-4 lg:p-5">
                <h2 className="font-forum text-cream uppercase text-2xl lg:text-2xl tracking-wide leading-tight">
                    L&apos;Art du Sushi Réinventé
                </h2>
                <p className="text-cream/60 text-xs lg:text-sm font-satoshi leading-relaxed">
                    Là où l&apos;artisanat culinaire rencontre l&apos;élégance moderne. Savourez les meilleurs sushis, préparés avec soin pour sublimer votre expérience gastronomique.
                </p>
            </div>
            <div className="h-52 md:h-auto">
                <ImageSlider images={slider1} />
            </div>
        </div>
    )
}

const SecondRow = () => {
    return <AvisSlider />
}

const ThirdRow = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:flex-1 lg:min-h-0">
            <div className="h-52 md:h-auto">
                <ImageSlider images={slider2} />
            </div>
            <div className="flex flex-col justify-between gap-3 border border-border rounded-2xl p-4 lg:p-5">
                <div className="flex items-center justify-center">
                    <Divider lineWidth={30} diamondSize={5} />
                    <h2 className="font-forum text-cream uppercase text-xl lg:text-2xl tracking-wider mx-3">
                        Notre Histoire
                    </h2>
                    <Divider lineWidth={30} diamondSize={5} />
                </div>
                <p className="text-cream/60 text-xs lg:text-sm font-satoshi leading-relaxed">
                    Fondé avec une passion pour l&apos;excellence culinaire, le parcours de Qitchen a commencé au cœur de Paris. Au fil des années, il est devenu un havre pour les amateurs de sushi, célébré pour sa maîtrise artistique et son dévouement à redéfinir la gastronomie.
                </p>
            </div>
        </div>
    )
}

const AboutPage = () => {
    return (
        <>
            <PageWrapper image={heroImages.about} alt="Image Hero À Propos" title="à propos">
                <div className="flex flex-col gap-3 lg:h-[calc(100vh-2rem)]">
                    <FirstRow />
                    <SecondRow />
                    <ThirdRow />
                    <Footer />
                </div>
            </PageWrapper>
        </>
    )
}

export default AboutPage
