import Seo from "@/lib/seo";
import { Link } from "react-router-dom";

const SingleBlogPage = () => {
  return (
    <>
      <Seo title={"Sigma platformlift | Liftech.hu"} description={"Ez az oldal bemutatja az Sigma nevezetű platformliftet"} robots={"follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"} />
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              <div className="animate_top mb-10 card-top p-9">
                <h4 className="mb-7.5 font-display text-3xl font-bold uppercase tracking-wide text-navy">
                  Technikai információk
                </h4>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Emelési magasság:</h5>
                <p className="mb-5">min. 0,65m, max. 3m</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Teherbírás:</h5>
                <p className="mb-5">385kg</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Megállók maximális száma:</h5>
                <p className="mb-5">4</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Platformméret:</h5>
                <p className="mb-5">1,1 x 1,4 m</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Meghajtási rendszer:</h5>
                <p className="mb-5">Dupla lánchajtás</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Tápellátás:</h5>
                <p className="mb-5">1 x 230 V / 50-60 Hz</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Zajszint:</h5>
                <p className="mb-5">60 dB alatt</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Opcionálisan rendelhető:</h5>
                <p className="mb-5">Automatikus ajtónyitó</p>

                 </div>
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top card-top p-7.5 md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <img
                      src={"/images/termekek/sigma/sigma2.webp"}
                      alt="Sigma platform lépcsőliftről egy példa kép"
                      
                      className="absolute inset-0 h-full w-full object-cover object-center" loading="lazy" />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 font-display text-4xl font-bold uppercase text-navy 2xl:text-sectiontitle2">Sigma</h2>
                <div className="blog-details">
                  <p>Számos jól megtervezett részlet teszi a Sigma függőleges emelvényliftet tökéletes mobilitási megoldássá a magán- és a közszféra számára.</p>

                  <p>Főbb jellemzők:</p>
                  <ul>
                    <li>Kompakt kialakítás karcsú hajtótoronnyal 3 m-es emelési magasságig.</li>
                    <li>Dupla láncos meghajtás a zökkenőmentes működésért</li>
                    <li>Bármilyen RAL-színben lehetséges bevonat</li>
                    <li>Az alumínium alkatrészek garantálják a korrózióvédelmet és a kis súlyt</li>
                    <li>Audió visszajelzés az intuitív kezeléshez</li>
                    <li>Külső rádiós vezérlés (oszlopon vagy hordozhatóan)</li>
                    <li>Integrált feljáró rámpa</li>
                    <li>Integrált vészhelyzeti áramellátás</li>
                  </ul>

                 <div className="">
                    <Link
                  to="/kapcsolat"
                  className="items-center justify-center bg-navy px-7.5 py-3 font-display text-xl font-semibold uppercase tracking-wider text-white duration-300 ease-in-out hover:bg-accent"
                    >
                    Tudjon meg többet! 
                    </Link>

                  <div className="flex mt-10 flex-wrap gap-5">
                    <img
                      src={"/images/termekek/sigma/sigma3.webp"}
                      width={350}
                      height={200}
                      alt="Az sigma platformosliftről egy alternatív kép" loading="lazy" />
                    <img
                      src={"/images/termekek/sigma/sigma4.webp"}
                      width={350}
                      height={200}
                      alt="Egy másik kép az sigma liftről" loading="lazy" />
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
