import Divider from "@/components/ui/Divider"
import { openingHours } from "@/lib/data"

const OpeningCard = () => {
    return (
        <div className="flex flex-col justify-between gap-4 border border-border rounded-2xl p-5 lg:p-6 h-full">
            <div className="flex items-center justify-center">
                <Divider lineWidth={30} diamondSize={5} />
                <h2 className="font-forum text-cream uppercase text-xl lg:text-2xl tracking-wider mx-3">
                    Horaires
                </h2>
                <Divider lineWidth={30} diamondSize={5} />
            </div>

            <div className="flex flex-col gap-2.5">
                {openingHours.map((item) => (
                    <div key={item.day} className="flex items-baseline gap-2">
                        <span className="font-satoshi text-cream text-xs lg:text-sm">{item.day}</span>
                        <div className="flex-1 border-b border-dotted border-cream/20 -translate-y-1 min-w-4" />
                        <span className="font-satoshi text-cream text-xs lg:text-sm">{item.hours}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OpeningCard
