import HomeHero from "@/components/home/HomeHero";

export default function Home() {
  return (
    <>
      <HomeHero />
      <div className="p-4">
          <footer className="xl:hidden w-full py-4 text-center text-cream/40 text-sm font-satoshi uppercase border border-gold/40 rounded-md">
            © 2026 | Créé par <span className="font-bold">SAKAB</span>
          </footer>
      </div>
    </>
  );
}
