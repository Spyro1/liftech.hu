import Seo from "@/lib/seo";
import { Link } from "react-router-dom";

const SingleBlogPage = () => {
  return (
    <>
      <Seo title={"Elevex platformlift | Liftech.hu"} description={"Ez az oldal bemutatja az Elevex nevezetű platformliftet"} robots={"follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"} />
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              <div className="animate_top mb-10 border border-line border-t-4 border-t-navy bg-white p-9">
                <h4 className="mb-7.5 font-display text-3xl font-bold uppercase tracking-wide text-navy">
                  Technikai információk
                </h4>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Emelési magasság:</h5>
                <p className="mb-5">Elevex 1: 1,219 m</p>
                <p className="mb-5">Elevex 2: 1,829 m</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Teherbírás:</h5>
                <p className="mb-5">340 kg</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Meghajtási rendszer:</h5>
                <p className="mb-5">ACME csavaros meghajtás</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Tápellátás:</h5>
                <p className="mb-5">1 x 230 V / 50-60 Hz</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Emelési sebesség:</h5>
                <p className="mb-5">4 cm/s</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Opcionálisan rendelhető:</h5>
                <p className="mb-5">Ajtóval a felső lépcsőfokon</p>

                 </div>
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top border border-line border-t-4 border-t-navy bg-white p-7.5 md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <img
                      src={"/images/termekek/elevex/elevex4.webp"}
                      alt="Elevex platform lépcsőliftről egy példa kép"
                      
                      className="absolute inset-0 h-full w-full object-cover object-center" loading="lazy" />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 font-display text-4xl font-bold uppercase text-navy 2xl:text-sectiontitle2">Elevex</h2>
                <div className="blog-details">
                  <p>Az Elevex platformlift egyszerű és költséghatékony megoldás az akár 1829 mm-es magasságkülönbségek leküzdésére. Ez a robusztus felépítésű lift, mint keményen dolgozó, alacsony karbantartási igényű akadálymentesítési megoldás, amely a lakossági kerekesszékes felvonók szabványát állítja fel, verhetetlennek bizonyult mind beltéri, mind kültéri alkalmazásokban.</p>

                  <p>A szabadon álló hajtótorony és az alacsony szabad magasság lehetővé teszi a helytakarékos telepítést. A lift gyorsan telepíthető és könnyen karbantartható, és robusztus kialakítása jellemzi.</p>
                 <div className="">
                    <Link
                  to="/kapcsolat"
                  className="items-center justify-center bg-navy px-7.5 py-3 font-display text-xl font-semibold uppercase tracking-wider text-white duration-300 ease-in-out hover:bg-accent"
                    >
                    Tudjon meg többet! 
                    </Link>

                  <div className="flex mt-10 flex-wrap gap-5">
                    <img
                      src={"/images/termekek/elevex/elevex3.webp"}
                      width={350}
                      height={200}
                      alt="Az Elevex platformosliftről egy alternatív kép" loading="lazy" />
                    <img
                      src={"/images/termekek/elevex/elevex2.webp"}
                      width={350}
                      height={200}
                      alt="Egy másik kép az Elevex liftről" loading="lazy" />
                  </div>

                  </div> 
                  <h3 className="pt-8">
                    CE és TÜV tanúsítvánnyal rendelkezik a legújabb EN 81-40 európai irányelv szerint.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;
