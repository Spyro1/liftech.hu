import Seo from "@/lib/seo";
import Contact from "@/components/Contact";

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Seo title="Kapcsolat | Liftech.hu" description="Ezen az oldalon tud kapcsolatba lépni velünk, az űrlap segítségével" />
      <Contact />
    </div>
  );
};

export default SupportPage;
