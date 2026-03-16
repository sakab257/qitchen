import Image from "next/image"
import SplitText from "@/components/ui/SplitText"

const PageWrapper = ({image, alt, title, children}: {image:string, alt:string, title:string, children?: React.ReactNode}) => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen p-4 gap-4">
            <div className="w-full h-[70vh] lg:h-[calc(100vh-2rem)] rounded-2xl relative overflow-hidden lg:sticky lg:top-4 lg:self-start">
                <Image src={image} alt={alt} fill className="object-cover"/>
                <div className="absolute inset-0 bg-linear-to-t from-bg via-transparent to-transparent" />
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:bottom-8 md:left-8 xl:bottom-12 xl:left-12 w-full px-6 md:px-0 pt-4 overflow-hidden">
                    <SplitText
                        text={title}
                        tag="h1"
                        className="text-center w-150 md:text-left font-forum uppercase leading-[80%] text-cream text-[clamp(2rem,9vw,8rem)]"
                        textAlign="left"
                        splitType="chars"
                        delay={40}
                        duration={1.2}
                        ease="power4.out"
                        from={{ opacity: 0, y: 60 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0}
                        rootMargin="0px"
                    />
                </div>
            </div>
            {children}
        </section>
    )
}

export default PageWrapper
