import HomeHero from "@/components/home/HomeHero";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <HomeHero />
      <div className="p-4 xl:hidden">
          <Footer />
      </div>
    </>
  );
}
