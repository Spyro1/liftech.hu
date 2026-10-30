import Seo from "@/lib/seo";
import { Link } from "react-router-dom";

const SingleBlogPage = () => {
  return (
    <>
      <Seo title={"Liftboy  4 platformlift | Liftech.hu"} description={"Ez az oldal bemutatja a Liftboy 4 nevezetű platformlifteket"} robots={"follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"} />
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              <div className="animate_top mb-10 card-top p-9">
                <h4 className="mb-7.5 font-display text-3xl font-bold uppercase tracking-wide text-navy">
                  Technikai információk
                </h4>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Max. emelési magasság:</h5>
                <ul className="mb-5">
                  <li>Liftboy 4/S: 1,075 m</li>
                  <li>Liftboy 4/L: 1,4 m</li>
                </ul>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Min. emelési magasság:</h5>
                <ul className="mb-5">
                  <li>Liftboy 4/S: 18,2 cm</li>
                  <li>Liftboy 4/L: 25 cm</li>
                </ul>
                 <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Platformméret (külső)</h5>
                <ul className="mb-5">
                  <li>Liftboy 4/S: 1,215 x 1,628 m</li>
                  <li>Liftboy 4/L: 1,188 x 1,571 m</li>
                </ul>
                  <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Platformméret (belső)</h5>
                <ul className="mb-5">
                  <li>Liftboy 4/S: 0,845 x 1,5 m</li>
                  <li>Liftboy 4/L: 0,862 x 1,41 m</li>
                </ul>              
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Emelési sebesség</h5>
                <p className="mb-5">1,7 cm/s</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Teherbírás</h5>
                <p className="mb-5">300 kg</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Biztonsági függőny</h5>
                <ul className="mb-5">
                  <li>Liftboy 4/S: Igen</li>
                  <li>Liftboy 4/L: Nem</li>
                </ul>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Tápellátás:</h5>
                <p className="mb-5">24 V DC, elemmel működik</p>
                 </div>
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top card-top p-7.5 md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <img
                      src={"/images/termekek/liftboy4/liftboy4_2.webp"}
                      alt="Liftboy 4 platform lépcsőliftről egy példa kép"
                      
                      className="absolute inset-0 h-full w-full object-cover object-center" loading="lazy" />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 font-display text-4xl font-bold uppercase text-navy 2xl:text-sectiontitle2">Liftboy 4</h2>
                <div className="blog-details">
                  <p>A Liftboy 4 mobil, és beltéren és kültéren egyaránt használható. A Liftboy 4-et eredetileg a kerekesszékesek kocsik és peronok közötti szállítására fejlesztették ki, de színházi és koncertszínpadokon is használják.</p>
                  
                  <p>A mobil lift korszerű és könnyen kezelhető a felhasználóbarát kialakításnak és a könnyűszerkezetes kivitelnek köszönhetően.</p>
                  <p>Az emelvény összecsukható rámpákkal van felszerelve, amelyek mérete a helyszínen a kívánt szélességhez igazítható.</p>
                 <div className="">
                    <Link
                  to="/kapcsolat"
                  className="items-center justify-center bg-navy px-7.5 py-3 font-display text-xl font-semibold uppercase tracking-wider text-white duration-300 ease-in-out hover:bg-accent"
                    >
                    Tudjon meg többet! 
                    </Link>

                  <div className="flex mt-10 flex-wrap gap-5">
                    <img
                      src={"/images/termekek/liftboy4/liftboy4_4.webp"}
                      width={350}
                      height={200}
                      alt="A Liftboy 4 platformosliftről egy alternatív kép" loading="lazy" />
                    <img
                      src={"/images/termekek/liftboy4/liftboy4_3.webp"}
                      width={350}
                      height={200}
                      alt="Egy másik kép a Liftboy 4 liftről" loading="lazy" />
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
