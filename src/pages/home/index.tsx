import Seo from "@/lib/seo";
import Hero from "@/components/sections/Hero";
import Brands from "@/components/sections/Brands";
import Feature from "@/components/sections/Features";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import News from "@/components/sections/News";

export default function Home() {
  return (
    <main>
      <Seo title="Főoldal | Liftech.hu" description="Ez a főoldala weboldalunknak, itt tömören megtalálhat minden fontos információt rólunk és lépcsőliftjeinkről" robots={"follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"} />
      <Hero />
      <Brands />
      <News />
      <Feature />
      <About />
      <Contact />
    </main>
  );
}
