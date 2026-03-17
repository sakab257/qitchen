"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Divider from "@/components/ui/Divider"
import Link from "next/link"

const ReservationForm = () => {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <AnimatePresence mode="wait">
            {!submitted ? (
                <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col gap-8 border border-border rounded-2xl p-6 md:p-10 lg:p-12 justify-center flex-1"
                >
                    <div className="flex flex-col items-center gap-4">
                        <Divider />
                        <h2 className="font-forum text-cream text-3xl md:text-4xl uppercase tracking-wide">
                            Réservation
                        </h2>
                        <Divider />
                        <p className="text-cream/60 font-satoshi text-sm text-center max-w-md leading-relaxed">
                            Réservez votre table chez Qitchen, où des sushis d&apos;exception et une expérience culinaire remarquable vous attendent.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="flex flex-col gap-2">
                                <label className="text-cream/80 font-satoshi text-xs uppercase tracking-widest">
                                    Nom
                                </label>
                                <input
                                    type="text"
                                    placeholder="Jean Dupont"
                                    required
                                    className="bg-transparent border border-border rounded-lg px-4 py-3 text-cream font-satoshi text-sm placeholder:text-cream/30 outline-none focus:border-gold/60 transition-colors"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-cream/80 font-satoshi text-xs uppercase tracking-widest">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="exemple@email.com"
                                    required
                                    className="bg-transparent border border-border rounded-lg px-4 py-3 text-cream font-satoshi text-sm placeholder:text-cream/30 outline-none focus:border-gold/60 transition-colors"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="flex flex-col gap-2">
                                <label className="text-cream/80 font-satoshi text-xs uppercase tracking-widest">
                                    Téléphone
                                </label>
                                <input
                                    type="tel"
                                    placeholder="+33 1 23 45 67 89"
                                    required
                                    className="bg-transparent border border-border rounded-lg px-4 py-3 text-cream font-satoshi text-sm placeholder:text-cream/30 outline-none focus:border-gold/60 transition-colors"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-cream/80 font-satoshi text-xs uppercase tracking-widest">
                                    Personnes
                                </label>
                                <select
                                    required
                                    defaultValue=""
                                    className="bg-transparent border border-border rounded-lg px-4 py-3 text-cream font-satoshi text-sm outline-none focus:border-gold/60 transition-colors appearance-none cursor-pointer"
                                >
                                    <option value="" disabled className="bg-bg text-cream/30">1-10</option>
                                    {Array.from({ length: 10 }, (_, i) => (
                                        <option key={i + 1} value={i + 1} className="bg-bg text-cream">
                                            {i + 1}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="flex flex-col gap-2">
                                <label className="text-cream/80 font-satoshi text-xs uppercase tracking-widest">
                                    Date
                                </label>
                                <input
                                    type="date"
                                    required
                                    className="bg-transparent border border-border rounded-lg px-4 py-3 text-cream font-satoshi text-sm outline-none focus:border-gold/60 transition-colors"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-cream/80 font-satoshi text-xs uppercase tracking-widest">
                                    Heure
                                </label>
                                <input
                                    type="time"
                                    required
                                    className="bg-transparent border border-border rounded-lg px-4 py-3 text-cream font-satoshi text-sm outline-none focus:border-gold/60 transition-colors"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full border border-border rounded-lg py-3.5 text-cream/80 font-satoshi text-sm uppercase tracking-widest hover:bg-cream/5 hover:border-gold/40 transition-all duration-300 cursor-pointer mt-2"
                        >
                            Réserver une table
                        </button>
                    </form>
                </motion.div>
            ) : (
                <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-8"
                >
                    <div className="flex flex-col items-center gap-4 border border-border rounded-2xl p-6 md:p-10 lg:p-12">
                        <Divider />
                        <h2 className="font-forum text-cream text-3xl md:text-4xl uppercase tracking-wide">
                            Merci
                        </h2>
                        <Divider />
                        <p className="text-cream/60 font-satoshi text-sm text-center max-w-md leading-relaxed">
                            Merci d&apos;avoir réservé une table chez nous ! Nous avons hâte de vous accueillir et de partager avec vous nos saveurs japonaises authentiques.
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-4 border border-border rounded-2xl p-6 md:p-10 lg:p-12">
                        <h3 className="font-forum text-cream text-xl uppercase tracking-wide">
                            Informations complémentaires
                        </h3>
                        <p className="text-cream/60 font-satoshi text-sm text-center max-w-md leading-relaxed">
                            Merci d&apos;arriver 10 minutes en avance pour vous assurer que votre table est prête. Si vous devez annuler, veuillez nous prévenir au moins 24 heures à l&apos;avance.
                        </p>
                        <Link
                            href="/menu"
                            className="text-cream font-satoshi text-sm uppercase tracking-widest underline underline-offset-4 hover:text-gold transition-colors mt-2"
                        >
                            Découvrir notre menu
                        </Link>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ReservationForm
