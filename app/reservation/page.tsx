import PageWrapper from '@/components/ui/PageWrapper'
import Footer from '@/components/ui/Footer'
import ReservationForm from '@/components/reservation/ReservationForm'
import { heroImages } from "@/lib/data"

const ReservationPage = () => {
    return (
        <PageWrapper image={heroImages.reservation} alt='Image Hero De Réservation' title="Réserver">
            <div className="flex flex-col gap-4 lg:h-[calc(100vh-2rem)]">
                <ReservationForm />
                <Footer />
            </div>
        </PageWrapper>
    )
}

export default ReservationPage