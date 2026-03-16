const MapCard = () => {
    return (
        <div className="relative w-full h-full rounded-2xl overflow-hidden min-h-52">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.2158684489!2d2.3044!3d48.8698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc4f1b3a0a9%3A0x19e0a3c3e9e1a0!2sAv.%20des%20Champs-%C3%89lys%C3%A9es%2C%20Paris!5e0!3m2!1sfr!2sfr!4v1"
                className="absolute inset-0 w-full h-full border-0 grayscale invert opacity-80"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Qitchen"
            />
        </div>
    )
}

export default MapCard
