import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { Impact } from "@/components/sections/Impact";
import { Programs } from "@/components/sections/Programs";
import { Reach } from "@/components/sections/Reach";
import { Stories } from "@/components/sections/Stories";
import { Gallery } from "@/components/sections/Gallery";
import { Partners } from "@/components/sections/Partners";
import { Leadership } from "@/components/sections/Leadership";
import { Accreditations } from "@/components/sections/Accreditations";
import { JoinCTA } from "@/components/sections/JoinCTA";

export default function Home() {
  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-clip flex flex-col">
      <Header />
      <main className="flex-1 w-full bg-cream text-ink selection:bg-brand-red selection:text-white">
        <Hero />
        <Philosophy />
        <Impact />
        <Programs />
        <Reach />
        <Stories />
        <Gallery />
        <Partners />
        <Leadership />
        <Accreditations />
        <JoinCTA />
      </main>
      <Footer />
    </div>
  );
}
