import Seo from "@/lib/seo";
import { Link } from "react-router-dom";

const SingleBlogPage = () => {
  return (
    <>
      <Seo title={"Stairmax lépcsőjáró | Liftech.hu"} description={"Ez az oldal bemutatja a Stairmax nevezetű lépcsőjárót"} robots={"follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"} />
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              <div className="animate_top mb-10 border border-line border-t-4 border-t-navy bg-white p-9">
                <h4 className="mb-7.5 font-display text-3xl font-bold uppercase tracking-wide text-navy">
                  Technikai információk
                </h4>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Rakodóképesség:</h5>
                <p className="mb-5">110kg</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Lehetséges meredekség:</h5>
                <p className="mb-5">0 – 35°</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Tápellátás:</h5>
                <p className="mb-5">2 x 6V akkumulátor</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Súly:</h5>
                <p className="mb-5">54kg</p>
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top border border-line border-t-4 border-t-navy bg-white p-7.5 md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <img
                      src={"/images/termekek/stair/stairmax1.webp"}
                      alt="Stairmax lépcsőjáróról egy példa kép"
                      
                      className="absolute inset-0 h-full w-full object-cover object-center" loading="lazy" />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 font-display text-4xl font-bold uppercase text-navy 2xl:text-sectiontitle2">
                  Stairmax - az önálló lécspőjáró
                </h2>
                <div className="blog-details">
                  <p>
A Stairmax az egyetlen lépcsőjáró a világon, amely lehetővé teszi az aktív kerekesszék-használók számára, hogy segítség nélkül fel- és lemenjenek a lépcsőkön.</p>

                  <p>
Teljesen autonóm módon használható, és segít a kerekesszék-használóknak visszanyerni a függetlenséget.</p>
                  <p>
Ez a mobil kerekesszék lépcsőlift képes fordulni a legalább 1 m sugaró lépcsőforduló.</p>

<ul>
    <li>Mobil lépcsőlift, amelyhez nincs szükség segítő személyre</li>
    <li>Beltéri és kültéri lépcsőkön is használható</li>
    <li>Gazdaságos alternatíva a hagyományos kerekesszék lépcsőliftekhez képest</li>
    <li>Kis átalakítás szükséges a felhasználó kerekesszékén</li>
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
                      src={"/images/termekek/stair/stairmax3.webp"}
                      width={350}
                      height={200}
                      alt="A Stairmax lépcsőzőről egy alternatív kép" loading="lazy" />
                    <img
                      src={"/images/termekek/stair/stairmax2.webp"}
                      width={350}
                      height={200}
                      alt="Egy másik kép az stairmax liftről" loading="lazy" />
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
