import Seo from "@/lib/seo";
import { Link } from "react-router-dom";

const SingleBlogPage = () => {
  return (
    <>
      <Seo title={"Public lépcsőlift | Liftech.hu"} description={"Ez az oldal bemutatja az Omega nevezetű lépcsőjáró"} robots={"follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"} />
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              <div className="animate_top mb-10 card-top p-9">
                <h4 className="mb-7.5 font-display text-3xl font-bold uppercase tracking-wide text-navy">
                  Technikai információk
                </h4>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Rakodóképesség:</h5>
                <p className="mb-5">200kg</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Lehetséges meredekség:</h5>
                <p className="mb-5">0 – 35°</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Súly:</h5>
                <p className="mb-5">115kg</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Méret:</h5>
                <p className="mb-5">1258 x 757 x 1280</p>
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top card-top p-7.5 md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <img
                      src={"/images/termekek/pub/public2.webp"}
                      alt="Public lépcsőzőről egy példa kép"
                      
                      className="absolute inset-0 h-full w-full object-cover object-center" loading="lazy" />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 font-display text-4xl font-bold uppercase text-navy 2xl:text-sectiontitle2">
                  Public - általános használatra tervezett lépcsőjáró
                </h2>
                <div className="blog-details">
                  <p>
A Public lépcsőjáró minden típusú kézi és elektromos kerekesszéket képes szállítani akár 35°-os lépcsőkön.</p>

                  <p>
Különösen középületek számára, mint például iskolák, múzeumok, egyetemek stb., ez a lépcsőjáró gazdaságos alternatívát kínál a hagyományos platformos lépcsőlift telepítéséhez.</p>
<ul>
    <li>Kézi és elektromos kerekesszékek szállítása</li>
    <li>Beltéri és kültéri használatra</li>
    <li>Költséghatékony alternatíva a hagyományos platformos lépcsőlifttel szemben</li>
</ul>
                  <p>
Ez a lépcsőjáró rendkívül tartós és robusztus. Ezért ideális bérbeadásra különféle középületek számára is, feltéve, hogy csak ideiglenesen kell biztosítaniuk az akadálymentességet alternatív módon.</p>

                 <div className="">
                    <Link
                  to="/kapcsolat"
                  className="items-center justify-center bg-navy px-7.5 py-3 font-display text-xl font-semibold uppercase tracking-wider text-white duration-300 ease-in-out hover:bg-accent"
                    >
                    Tudjon meg többet! 
                    </Link>

                  <div className="flex mt-10 flex-wrap gap-5">
                    <img
                      src={"/images/termekek/pub/public3.webp"}
                      width={350}
                      height={200}
                      alt="A public lépcsőjáróról egy alternatív kép" loading="lazy" />
                    <img
                      src={"/images/termekek/pub/public1.webp"}
                      width={350}
                      height={200}
                      alt="Egy másik kép a public lépcsőzőről" loading="lazy" />
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
