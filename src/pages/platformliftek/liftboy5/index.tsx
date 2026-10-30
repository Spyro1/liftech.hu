import Seo from "@/lib/seo";
import { Link } from "react-router-dom";

const SingleBlogPage = () => {
  return (
    <>
      <Seo title={"Liftboy 5 platformlift | Liftech.hu"} description={"Ez az oldal bemutatja a Liftboy 5 nevezetű platformliftet"} robots={"follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"} />
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              <div className="animate_top mb-10 border border-line border-t-4 border-t-navy bg-white p-9">
                <h4 className="mb-7.5 font-display text-3xl font-bold uppercase tracking-wide text-navy">
                  Technikai információk
                </h4>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Max. Emelési magasság:</h5>
                <p className="mb-5">1,3 m</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Teherbírás:</h5>
                <p className="mb-5">315 kg</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Platformméret:</h5>
                <p className="mb-5">0,9 x 1,4 m vagy 1,1 x 1,4 m</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Meghajtási rendszer:</h5>
                <p className="mb-5">24 V-os ollós mechanizmus</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Tápellátás:</h5>
                <p className="mb-5">1 x 230 V / 50-60 Hz</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Emelési sebesség:</h5>
                <p className="mb-5">2,5 m/s</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Egyéb:</h5>
                <ul className="mb-5">
                  <li>Opcionálisan automatikusan összecsukható rámpa</li>
                  <li>Opcionálisan automatikus kapunyitó</li>
                  <li>Vészhelyzeti áramellátás és a platform vészhelyzeti leeresztése</li>
                </ul>
                 </div>
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top border border-line border-t-4 border-t-navy bg-white p-7.5 md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <img
                      src={"/images/termekek/liftboy5/liftboy5_2.webp"}
                      alt="Liftboy 5 platform lépcsőliftről egy példa kép"
                      
                      className="absolute inset-0 h-full w-full object-cover object-center" loading="lazy" />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 font-display text-4xl font-bold uppercase text-navy 2xl:text-sectiontitle2">Liftboy 5</h2>
                <div className="blog-details">
                  <p>A Liftboy 5 egy egyedülálló függőleges platformos felvonó 1300 mm-es emelési magassággal. Ezt a dupla ollós emelőasztalt 2 elektromos működtető hajtja, és mindössze 120 mm-es összecsukott magasságot ér el.</p>
                  <p>Az emelőszerkezet az EN 81-41 európai szabványon alapul. Így köz- és magántulajdonban történő telepítésre egyaránt alkalmas, modern és robusztus kialakítása pedig megfelel az esztétikával és tartóssággal kapcsolatos legmagasabb vevői elvárásoknak.</p>
                 <div className="">
                    <Link
                  to="/kapcsolat"
                  className="items-center justify-center bg-navy px-7.5 py-3 font-display text-xl font-semibold uppercase tracking-wider text-white duration-300 ease-in-out hover:bg-accent"
                    >
                    Tudjon meg többet! 
                    </Link>

                  <div className="flex mt-10 flex-wrap gap-5">
                    <img
                      src={"/images/termekek/liftboy5/liftboy5_3.webp"}
                      width={350}
                      height={200}
                      alt="A Liftboy 5 platformosliftről egy alternatív kép" loading="lazy" />
                    <img
                      src={"/images/termekek/liftboy5/liftboy5_4.webp"}
                      width={350}
                      height={200}
                      alt="Egy másik kép a Liftboy 5 liftről" loading="lazy" />
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
