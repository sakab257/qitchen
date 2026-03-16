import HomeHero from "@/components/home/HomeHero";
import Footer from "@/components/ui/Footer";
import ImagePreloader from "@/components/ui/ImagePreloader";

export default function Home() {
  return (
    <>
      <HomeHero />
      <ImagePreloader />
      <div className="p-4 xl:hidden">
          <Footer />
      </div>
    </>
  );
}
