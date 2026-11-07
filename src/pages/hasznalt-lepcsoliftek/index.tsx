import Seo from "@/lib/seo";
import { Link } from "react-router-dom";

const SingleBlogPage = () => {
  return (
    <>
      <Seo title={"Használt lépcsőlift | Liftech.hu"} description={"Ez az oldal bemutatja az általunk kínált használt lépcsőlifteket"} robots={"follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"} />
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              <div className="animate_top mb-10 card-top p-9">
                <h3 className="mb-7.5 font-display text-3xl font-bold uppercase tracking-wide text-navy">
                  Technikai információk
                </h3>
                <h4 className="mb-7.5 font-display text-2xl font-bold uppercase tracking-wide text-navy">
                Méretek (mm)
                </h4>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >A padlótól a lábtartó tetejéig:</h5>
                <p className="mb-5">(A) 95</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >A lábtartó tetejétől az ülés tetejéig:</h5>
                <p className="mb-5">(B) 445 (410) (505)</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Ülés tetejétől a karok tetejéig:</h5>
                <p className="mb-5">(C) 250</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >A karok tetejétől az üléstámla tetejéig:</h5>
                <p className="mb-5">(D) 190</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >A kartámaszok közötti szélesség (széles karú változat):</h5>
                <p className="mb-5">(E) 445 (495)</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Teljes szélesség:</h5>
                <p className="mb-5">(F) 605</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Teljes magasság a padlótól:</h5>
                <p className="mb-5">(G) 980</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >A karok hossza az üléstámlától:</h5>
                <p className="mb-5">(H) 470</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Ülőlap hossza az üléstámlától számítva:</h5>
                <p className="mb-5">(I) 435</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Lábtartó hossza:</h5>
                <p className="mb-5">(J) 325</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Lábtartó szélessége:</h5>
                <p className="mb-5">(K) 310</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Lábtartó eleje a faltól:</h5>
                <p className="mb-5">(L) 570</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Üléstámla távolsága a faltól:</h5>
                <p className="mb-5">(N) 13</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Összecsukott állapotban a szélessége a faltól:</h5>
                <p className="mb-5">(O) 310</p> 
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >A tetején az elforgatáshoz szükséges minimális szélesség:</h5> <p className="mb-5">670</p> 
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Távolság a sín eleje és a fal között:</h5>
                <p className="mb-5">(P) 215</p> 
                <h4 className="mb-7.5 font-display text-2xl font-bold uppercase tracking-wide text-navy"> Egyéb </h4> 
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Motor fordulatszáma:</h5> 
                <p className="mb-5">Legfeljebb 0,15 méter másodpercenként</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >A meghajtás módja:</h5>
                <p className="mb-5">Csiga fogaskerék és fogasléc meghajtás</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Motor erő:</h5>
                <p className="mb-5">0.25KW</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Maximum terhelhetőség:</h5>
                <p className="mb-5">127kg</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Tápegység bemeneti feszültség:</h5>
                <p className="mb-5">50-60Hz, 120-240V AC</p>
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top card-top p-7.5 md:p-10">
                    <h2 className="mb-5 mt-11 font-display text-4xl font-bold uppercase text-navy 2xl:text-sectiontitle2">
                    Használt lépcsőliftek
                </h2>
                <div className="blog-details">
<p>Cégünk fő tevékenysége<b> a mozgásukban korlátozott személyek otthonainak akadálymentesítése használt
lépcsőlift telepítésével.</b> Használt lépcsőliftjeinket közvetlenül az angliai gyártótól illetve partnereinktől
szerezzük be, ezek Acorn gyártmányú T130 és T700-as modellek. Így amellett, hogy elérhető árat tudunk
biztosítani az Önök számára, még <b>12 hónap garanciát is vállalunk termékeinkre.</b></p>

<p><b>A lépcsőlift olyan akadálymentesítő eszköz, melyet minden esetben a lépcső felületére rögzítünk.</b>
A lépcső átalakítása nélkül néhány óra alatt telepíthető, így gyors és egyszerű megoldás minden olyan
lakásban, ahol a lépcsőt gyalogosan továbbra is használni szeretnék.</p>

<p>Székliftünk keskeny kialakításának köszönhetően nem foglal sok helyet, igényes formatervezése és az
egyénileg választható kárpitozása révén otthona szerves részévé válhat rövid időn belül.</p>
<p>A lépcsőlifttel egyszerre egy személy szállítható, akinek súlya nem haladja meg a 127 kg-ot. Belső
akkumulátora áramszünet esetén is működteti a lépcső liftet. A széklift karfáján található gombbal, vagy
igény esetén távirányítóval is irányítható. A könnyebb ki- és beszállás érdekében az ülés a végállásokban
elforgatható, használaton kívül pedig a lábtartóval együtt a karfa is felhajtható.</p>
<p>Kiváló megoldás lehet azok számára is, akik rövidebb távra keresnek megoldást lakószintjei biztonságos
megközelíthetőségére.</p>
<p>Legfőbb jellemzői:</p>
<ul>
    <li>Bármilyen anyagú és szerkezetű lépcsőre felszerelhető</li>
    <li>A karfán elhelyezett gombbal, vagy távezérlővel működtethető</li>
    <li>Parkolóállásban felhajtható az ülőfelület, a kar- ill. lábtartó, így a lehető legkevesebb helyet foglalja el a
lépcsőn</li>
    <li>A könnyebb kiszállás érdekében a szék 90°-kal kifordítható</li>
    <li>Akkumulátorral működik, így áramszünet esetén is használható</li>
    <li>Töltéséhez csupán egy 230 voltos dugaljra van szükség.</li>
    <li>Haszálata egyszerű, a végállásokon automatikusan megáll</li>
    <li>Csendes működés</li>
    <li>Kül- és beltérre egyaránt felszerelhető</li>
</ul>

                <div className="">
                    <Link
                  to="/kapcsolat"
                  className="items-center justify-center bg-navy px-7.5 py-3 font-display text-xl font-semibold uppercase tracking-wider text-white duration-300 ease-in-out hover:bg-accent"
                    >
                    Tudjon meg többet! 
                    </Link>
                    <div className="flex gap-5 mt-10">
                    <img
                      src={"/images/termekek/hasznalt-lepcso/hasz1.webp"}
                      width={300}
                      height={300}
                      alt="A használt lépcsőliftről egy kép" loading="lazy" />
                    <img
                      src={"/images/termekek/hasznalt-lepcso/hasz2.webp"}
                      width={300}
                      height={300}
                      alt="Egy másik kép a használt liftről" loading="lazy" />
                    </div>
                  <div className="flex flex-wrap mt-10 gap-5">
                    <img
                      src={"/images/termekek/hasznalt-lepcso/hasz3.webp"}
                      width={200}
                      height={200}
                      alt="Egy másik kép a használt liftről" loading="lazy" />
                    <img
                      src={"/images/termekek/hasznalt-lepcso/hasz4.webp"}
                      width={200}
                      height={200}
                      alt="Egy másik kép a használt liftről" loading="lazy" />
                    <img
                      src={"/images/termekek/hasznalt-lepcso/hasz5.webp"}
                      width={200}
                      height={200}
                      alt="Egy másik kép a használt liftről" loading="lazy" />
                    <img
                      src={"/images/termekek/hasznalt-lepcso/hasz6.webp"}
                      width={200}
                      height={200}
                      alt="Egy másik kép a használt liftről" loading="lazy" />
                    <img
                      src={"/images/termekek/hasznalt-lepcso/hasz8.webp"}
                      width={200}
                      height={200}
                      alt="Egy másik kép a használt liftről" loading="lazy" />
                    <img
                      src={"/images/termekek/hasznalt-lepcso/hasz9.webp"}
                      width={200}
                      height={200}
                      alt="Egy másik kép a használt liftről" loading="lazy" />
                    <img
                      src={"/images/termekek/hasznalt-lepcso/hasz10.webp"}
                      width={200}
                      height={200}
                      alt="Egy másik kép a használt liftről" loading="lazy" />
                    <img
                      src={"/images/termekek/hasznalt-lepcso/hasz11.webp"}
                      width={200}
                      height={200}
                      alt="Egy másik kép a használt liftről" loading="lazy" />
                    <img
                      src={"/images/termekek/hasznalt-lepcso/hasz12.webp"}
                      width={200}
                      height={200}
                      alt="Egy másik kép a használt liftről" loading="lazy" />

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
