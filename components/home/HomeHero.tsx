"use client"

import { featureCards, heroImages } from "@/lib/data"
import { SocialLinks } from "@/components/home/SocialLinks"
import SideCard from "@/components/home/SideCard"
import SplitText from "@/components/ui/SplitText"

const HomeHero = () => {
    return (
        // Changement : flex flex-col sur mobile, grid sur XL
        <main className="relative p-4 flex flex-col xl:grid xl:grid-cols-15 min-h-screen gap-4 bg-bg lg:overflow-hidden">
            
            {/* SECTION VIDÉO : 70% de hauteur sur mobile/tablette, full screen sur XL */}
            <div className="relative overflow-hidden w-full h-[70vh] xl:h-[calc(100vh-2rem)] xl:col-span-11 rounded-2xl">
                <video
                    src={heroImages.homeVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-bg/60 via-transparent to-transparent" />

                {/* TITRE : Centré sur petit mobile, à gauche dès md */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:bottom-8 md:left-8 xl:bottom-12 xl:left-12 w-full px-6 md:px-0">
                    <SplitText
                        text="Sushi Sensation"
                        tag="h1"
                        className="text-center md:text-left font-forum uppercase leading-[80%] text-cream text-[clamp(2.5rem,10vw,8rem)]"
                        textAlign="left"
                        splitType="chars"
                        delay={40}
                        duration={0.8}
                        ease="power4.out"
                        from={{ opacity: 0, y: 60 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0}
                        rootMargin="0px"
                    />
                </div>

                {/* BADGE : Hidden sur petit mobile, visible dès md */}
                <div className="hidden md:block absolute bottom-0 right-0 bg-bg p-4 pl-6 pt-6 rounded-tl-[40px]">
                    {/* Arrondi inversé HAUT (SVG) */}
                    <svg 
                    className="absolute -top-10 right-0 w-10 h-10 fill-bg pointer-events-none" 
                    viewBox="0 0 40 40"
                    >
                    <path d="M40 0L40 40L0 40A40 40 0 0 0 40 0Z" />
                    </svg>

                    {/* Arrondi inversé GAUCHE (SVG) */}
                    <svg 
                    className="absolute bottom-0 -left-10 w-10 h-10 fill-bg pointer-events-none" 
                    viewBox="0 0 40 40"
                    >
                    <path d="M40 0L40 40L0 40A40 40 0 0 0 40 0Z" />
                    </svg>
                    <SocialLinks />
                </div>
            </div>

            {/* COLONNE DE DROITE : S'adapte sous la vidéo */}
            <div className="w-full flex flex-col md:flex-row xl:flex-col gap-4 xl:h-[calc(100vh-2rem)] xl:col-span-4">
                {featureCards.map((card,i) => (
                    <SideCard key={i} {...card} index={i} />
                ))}
            </div>
        </main>
    )
}

export default HomeHero