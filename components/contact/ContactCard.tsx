import Divider from "@/components/ui/Divider"
import { contactInfo } from "@/lib/data"

const socials = [
    {
        label: "Instagram",
        href: "https://instagram.com",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
    {
        label: "TripAdvisor",
        href: "https://tripadvisor.com",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
            </svg>
        ),
    },
    {
        label: "X",
        href: "https://x.com",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
]

const ContactCard = () => {
    return (
        <div className="flex flex-col justify-between gap-5 border border-border rounded-2xl p-5 lg:p-6 h-full">
            <div className="flex items-center justify-center">
                <Divider lineWidth={30} diamondSize={5} />
                <h2 className="font-forum text-cream uppercase text-xl lg:text-2xl tracking-wider mx-3">
                    Contact
                </h2>
                <Divider lineWidth={30} diamondSize={5} />
            </div>

            <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between">
                    <span className="font-satoshi text-cream/50 text-xs uppercase tracking-widest">Adresse</span>
                    <div className="text-right">
                        {contactInfo.address.map((line) => (
                            <p key={line} className="font-satoshi text-cream text-xs lg:text-sm">{line}</p>
                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <span className="font-satoshi text-cream/50 text-xs uppercase tracking-widest">Téléphone</span>
                    <a href={`tel:${contactInfo.phone}`} className="font-satoshi text-cream text-xs lg:text-sm hover:text-gold transition-colors">
                        {contactInfo.phone}
                    </a>
                </div>

                <div className="flex items-center justify-between">
                    <span className="font-satoshi text-cream/50 text-xs uppercase tracking-widest">Email</span>
                    <a href={`mailto:${contactInfo.email}`} className="font-satoshi text-cream text-xs lg:text-sm hover:text-gold transition-colors">
                        {contactInfo.email}
                    </a>
                </div>

                <div className="flex items-center justify-between">
                    <span className="font-satoshi text-cream/50 text-xs uppercase tracking-widest">Suivez-nous</span>
                    <div className="flex gap-2">
                        {socials.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={s.label}
                                className="flex h-8 w-8 items-center justify-center rounded-full border border-cream/15 text-cream transition-colors hover:border-cream/30"
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactCard
