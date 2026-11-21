import Seo from "@/lib/seo";
import { Link } from "react-router-dom";

const SingleBlogPage = () => {
  return (
    <>
      <Seo
        title={"Acorn lépcsőlift | Liftech.hu"}
        description={
          "Ez az oldal bemutatja az Acorn nevezetű, összecsukható, akkumulátoros otthoni lépcsőliftet"
        }
        robots={
          "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        }
      />
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              <div className="animate_top card-top mb-10 p-9">
                <h4 className="mb-7.5 font-display text-3xl font-bold uppercase tracking-wide text-navy">
                  Technikai információk
                </h4>
                {/* Forrás: acornstairlifts.com/stairlift/stairlift-straight-staircase (Acorn 130) */}
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy">
                  Rakodóképesség:
                </h5>
                <p className="mb-5">127 kg</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy">
                  Motor:
                </h5>
                <p className="mb-5">24 V DC, akkumulátorral működik</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy">
                  Sebesség:
                </h5>
                <p className="mb-5">0,12 m/s</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy">
                  Meghajtási rendszer:
                </h5>
                <p className="mb-5">Fogasléc és fogaskerék</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy">
                  Tápellátás:
                </h5>
                <p className="mb-5">100-240 V AC / 50-60 Hz</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy">
                  Sín:
                </h5>
                <p className="mb-5">Extrudált alumínium, opcionálisan csuklós (lehajtható) kivitelben</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy">
                  Teljes szélesség:
                </h5>
                <p className="mb-5">59 cm</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy">
                  Mélység a faltól:
                </h5>
                <p className="mb-5">57 cm (összecsukva: 31 cm)</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy">
                  Teljes magasság:
                </h5>
                <p className="mb-5">98 cm</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy">
                  Ülésmagasság / ülésmélység:
                </h5>
                <p className="mb-5">44 cm / 41 cm</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy">
                  Lábtartó szélessége:
                </h5>
                <p className="mb-5">31 cm</p>
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top card-top p-7.5 md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <img
                      src={"/images/termekek/acorn/130-stairlift-wh.png"}
                      alt="Acorn lépcsőliftről egy példa kép"
                      className="absolute inset-0 h-full w-full object-contain object-center"
                      loading="lazy"
                    />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 font-display text-4xl font-bold uppercase text-navy 2xl:text-sectiontitle2">
                  Acorn - kényelmes segítség az otthoni lépcsőn
                </h2>
                <div className="blog-details">
                  <p>
                    Az Acorn lépcsőlift biztonságos és kényelmes segítséget
                    nyújt az otthoni lépcsőhasználathoz.
                  </p>
                  <p>
                    Egyenes lépcsőre tervezett, karcsú lift, amely a lépcsőre
                    rögzül, nem a falra, így telepítése gyors, tiszta, és nem
                    igényel szerkezeti átalakítást az otthonában. Használaton
                    kívül összecsukható, így a lépcső a többi családtag számára
                    is szabadon járható marad.
                  </p>
                  <p>
                    Akkumulátoros működésének köszönhetően áramszünet esetén is
                    használható, így soha nem kell a lépcső alján vagy tetején
                    rekednie. A lágy indulás és megállás egyenletes, kényelmes
                    utazást biztosít.
                  </p>
                  <p>Az Acorn további különleges jellemzői a következők:</p>
                  <ul>
                    <li>Lehajtható lábtartó és biztonsági öv</li>
                    <li>Diagnosztikai kijelző és távirányító</li>
                    <li>Tartalék akkumulátor</li>
                    <li>
                      Opcionális csuklós sín, amely megszünteti a botlásveszélyt
                      a lépcső alján
                    </li>
                    <li>Megbízható működés, alacsony üzemeltetési költség</li>
                  </ul>
                  <div className="">
                    <Link
                      to="/kapcsolat"
                      className="items-center justify-center bg-navy px-7.5 py-3 font-display text-xl font-semibold uppercase tracking-wider text-white duration-300 ease-in-out hover:bg-accent"
                    >
                      Tudjon meg többet!
                    </Link>

                    <div className="mt-10 flex flex-wrap gap-5">
                      <img
                        src={"/images/termekek/acorn/130-stairlift-seated.png"}
                        width={350}
                        height={200}
                        alt="Az Acorn lépcsőlift használat közben"
                        loading="lazy"
                      />
                      <img
                        src={"/images/termekek/acorn/130-stairlift-side.png"}
                        width={350}
                        height={200}
                        alt="Az Acorn lépcsőlift oldalnézetből"
                        loading="lazy"
                      />
                      <img
                        src={"/images/termekek/acorn/130-stairlift-hinge.png"}
                        width={350}
                        height={200}
                        alt="Az Acorn lépcsőlift csuklós sínje"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <h3 className="pt-8">
                    CE jelöléssel rendelkezik, és megfelel az EN 81-40 európai
                    szabványnak, valamint az ISO 9386-2 nemzetközi
                    lépcsőlift-szabványnak.
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
