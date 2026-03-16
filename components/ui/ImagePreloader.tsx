"use client"

import { useEffect } from "react"

const imagesToPreload = [
    // Hero images
    "/images/hero-menu.webp",
    "/images/hero-contact.webp",
    "/images/hero-reservation.webp",
    // About
    "/images/about/about-hero.webp",
    "/images/about/about-slider1-1.webp",
    "/images/about/about-slider1-2.webp",
    "/images/about/about-slider1-3.webp",
    "/images/about/about-slider2-1.webp",
    "/images/about/about-slider2-2.webp",
    "/images/about/about-slider2-3.webp",
    // Menu
    "/images/menu/maki-salmon.webp",
    "/images/menu/maki-tuna.webp",
    "/images/menu/maki-mango.webp",
    "/images/menu/maki-spicy-tuna.webp",
    "/images/menu/uramaki-dragon.webp",
    "/images/menu/uramaki-rainbow.webp",
    "/images/menu/uramaki-volcano.webp",
    "/images/menu/uramaki-ocean.webp",
    "/images/menu/uramaki-sunset.webp",
    "/images/menu/uramaki-tokyo.webp",
    "/images/menu/uramaki-mystic.webp",
    "/images/menu/special-truffle.webp",
    "/images/menu/special-sunrise.webp",
    "/images/menu/special-pacific.webp",
    "/images/menu/special-mango.webp",
    "/images/menu/special-eternal.webp",
    // Contact
    "/images/contact/contact1.webp",
    "/images/contact/contact2.webp",
    "/images/contact/contact3.webp",
    "/images/contact/contact4.webp",
]

const ImagePreloader = () => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            imagesToPreload.forEach((src) => {
                const img = new Image()
                img.src = src
            })
        }, 1000)

        return () => clearTimeout(timeout)
    }, [])

    return null
}

export default ImagePreloader
