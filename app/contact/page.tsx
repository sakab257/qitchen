"use client"

import { motion } from "framer-motion"
import PageWrapper from "@/components/ui/PageWrapper"
import Footer from "@/components/ui/Footer"
import OpeningCard from "@/components/contact/OpeningCard"
import ContactCard from "@/components/contact/ContactCard"
import PhotoGrid from "@/components/contact/PhotoGrid"
import MapCard from "@/components/contact/MapCard"
import { heroImages } from "@/lib/data"

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
}

const ContactPage = () => {
    return (
        <>
            <PageWrapper image={heroImages.contact} alt="Image Hero Contact" title="Contact">
                <div className="flex flex-col gap-3 lg:h-[calc(100vh-2rem)]">
                    {/* Row 1: Opening + Photos */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-3 lg:flex-1 lg:min-h-0">
                        <motion.div className="md:col-span-2 h-full" variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.1 }}>
                            <OpeningCard />
                        </motion.div>
                        <motion.div className="md:col-span-3 min-h-52" variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.2 }}>
                            <PhotoGrid />
                        </motion.div>
                    </div>

                    {/* Row 2: Map + Contact */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:flex-1 lg:min-h-0">
                        <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.3 }}>
                            <MapCard />
                        </motion.div>
                        <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.4 }}>
                            <ContactCard />
                        </motion.div>
                    </div>

                    <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.5 }}>
                        <Footer />
                    </motion.div>
                </div>
            </PageWrapper>
        </>
    )
}

export default ContactPage
