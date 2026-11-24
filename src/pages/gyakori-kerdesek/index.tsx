import Seo from "@/lib/seo";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import PageHero from "@/components/ui/PageHero";

type Faq = { question: string; answer: ReactNode };

// Answers are plain JSX so every answer stays in the page HTML (searchable,
// indexable), even while its accordion item is closed.
const faqs: Faq[] = [
  {
    question: "Honnan tudom, hogy milyen lépcsőlift telepíthető a lépcsőre?",
    answer: (
      <>
        <p>
          Ha nem biztos benne, hogy melyik típus a legmegfelelőbb választás az
          Ön számára, mi segítünk megtalálni a legtökéletesebb megoldást.
          Személyre szabott ajánlatunk, kizárólag az Ön által kiválasztott
          felszereltségben, olyan extra kiegészítőkkel segítünk, amivel a
          legkomfortosabbá tesszük a közlekedést a lépcsőn. Az Ön szükségletei
          és elvárásai a legfontosabbak számunkra.
        </p>
        <p>
          Küldjön nekünk képet e-mailben vagy az ajánlatkérő modulban, a
          telepítés helyéről, a lépcső paramétereiről, és ennek alapján máris
          tudunk segíteni, hogy a legjobb megoldást találjuk meg Önnek.
        </p>
      </>
    ),
  },
  {
    question: "Minden típusú lépcsőre fel lehet szerelni a lépcsőliftet?",
    answer: (
      <>
        <p>
          Természetesen. Akár íves, akár keskeny vagy meredek a lépcsője, van rá
          megoldásunk. A lényeg, hogy Ön könnyedén és mindenek előtt
          biztonságosan közlekedhessen saját otthonában.
        </p>
      </>
    ),
  },
  {
    question: "Terhelhetőség",
    answer: (
      <>
        <p>
          Olyan modell mellett döntsünk, amely szükségleteinknek maradéktalanul
          megfelel. Az alap modelljeink 127kg teherbírásúak. Ugyanakkor, egyes
          széktípusok különböző terhelhetőséggel rendelkeznek, így mindenki
          számára létezik megfelelő opció:
        </p>
        <p>
          Standard lépcsőliftek – max. 127kg. Tökéletes választás a legtöbb
          otthonba.
        </p>
        <p>
          Erősített lépcsőliftek – max. 140kg. Ideálisak nagyobb teherbírás
          igénye esetén.
        </p>
        <p>
          Speciális lépcsőliftek – Ezek kizárólag speciális igények
          kielégítésére, különleges tervezésű modellek, melyek még nagyobb súly
          mozgatására is alkalmasak.{" "}
        </p>
      </>
    ),
  },
  {
    question: "Hova telepítik a lépcsőliftet?",
    answer: (
      <>
        <p>
          A lépcsőliftek telepítése szinte minden otthoni környezetben
          megvalósítható. Legyen szó kültéri vagy beltéri lépcsőkről, a
          lépcsőliftek biztonságos és kényelmes megoldást nyújtanak a mozgásban
          korlátozott személyek számára. Minden esetben a lépcső lapjára
          rögzítünk.
        </p>
        <p>
          Beltér: A lakáson belül kialakított lépcsőn való közlekedés okozhatja
          a legnagyobb kihívást. A lépcsőliftek diszkréten illeszkednek az
          otthoni környezetbe, így használója könnyen elérheti otthona minden
          szintjét.
        </p>
        <p>
          Kültér: Külső lépcsők, verandák vagy akár több kerti szintet is
          összekötő lépcső esetén is van megoldás. A székliftek időjárásálló
          változatai ellenállnak az időjárás viszontagságainak, így egész évben
          biztosítják a szabad mozgást. Kültéri telepítés alkalmával,
          biztosítunk méretre gyártott takaróponyvát, ami maradéktalanul megvédi
          a gépet télen-nyáron egyaránt.
        </p>
        <p>
          Egyenes és Kanyarodó Lépcsők: Nem számít, hogy a lépcső egyenes vagy
          kanyarodó, esetleg több szinten átívelő – a lépcsőliftek személyre
          szabottan alakíthatók, a lépcső pontos geometriájához illeszkedve.
        </p>
      </>
    ),
  },
  {
    question: "Technikai paraméterek",
    answer: (
      <>
        <p>
          Először is lépcsője pontos méreteire van szükségünk. Ezen paraméterek
          alapján tudjuk előkészíteni az Ön által kiválasztott gyártmányt, hogy
          a helyszínen zökkenőmentes legyen a telepítés:{" "}
        </p>
        <p>Lépcső Teljes Hossza: A felső szint élétől a talajszintig.</p>
        <p>
          Felső Szint: A felső szint lépcső élétől az érkező szinten, fontos,
          hogy legyen minimum 70cm, úgynevezett pihenő, vagy közlekedő tér. Ez a
          biztonságos beszállás és kiszállás érdekében fontos.
        </p>
        <p>
          Alsó Szint: A lépcső alsó részén a lépcső előtti térnek legalább 61
          cm-nek kell lennie. Ez a biztonságos beszállás és kiszállás érdekében
          fontos.
        </p>
        <p>
          Lépcső Szélessége: A lépcsőnek minimum 70 cm szélesnek kell lennie. Ez
          a faltól a korlátig mért távolság. Nagyon fontos, hogy nem a teljes
          lépcsőlap szélessége határozza meg a beszereléshez szükséges
          szélességet.
        </p>
        <p>
          Felhajló sínvég: Van olyan kényelmi megoldás, ha a lépcső alsó
          szintjén, a lépcső előtt, nincs elég hely vagy folyamatos
          keresztirányú a közlekedés, hogy a lépcső elé kinyúló sínt egy zsanér
          segítségével fel lehet hajtani.
        </p>
        <p>
          Amennyiben nem egyértelmű a méretvétel bármely pontja, vegye fel
          velünk a kapcsolatot a pontos méretek és egyedi igények felméréséhez!
        </p>
        <p>
          Szakértő csapatunk készséggel várja, hogy személyre szabott megoldást
          találjon Önnek.{" "}
        </p>
      </>
    ),
  },
  {
    question: "Új vagy használt székliftet válasszak?",
    answer: (
      <>
        <p>
          Amikor az önálló élet és a költséghatékonyság egyensúlyát keresi idős
          szerettei számára, fontos döntés előtt áll: használt vagy új
          lépcsőlift a jobb választás?
        </p>
        <p>
          Használt Lift – Ideális rövid távú megoldásnak, ha a költségeket
          szeretné minimalizálni. Ugyanakkor nagyon fontos, hogy használt
          lépcsőliftet csak egyenes lépcsőre tudunk telepíteni. Egy év garanciát
          vállalunk, de számítson rá, hogy 3-5 éven belül szükség van szervizre,
          amikor akkut cserélünk és teljesen átvizsgáljuk a gyártmányt.
        </p>
        <p>
          Új Lift – Új lépcsőliftet egyenes és kanyarodó lépcsőre is lehet
          telepíteni. Kanyarodó lépcsőliftek tekintetében nem lehet használt
          gépet alkalmazni. Minden lépcső más és más, a fokok kiosztása, a
          kanyar íve, a lépcső meredeksége. Éppen ezért kanyarodó lépcsőre csak
          és kizárólag, egy milliméter pontosan felmért lépcső tervet készítünk,
          ami alapján készül el a lépcsőre egyedileg gyártott lépcsőlift. Ebben
          az esetben hosszabb, 3 éves garanciát és 15+ évnyi megbízható működést
          garantálunk, így mindenképp hosszú távú befektetés.
        </p>
        <p>
          Gondolja végig, sok esetben preventív jelleggel telepítünk
          lépcsőliftet, hogy későbbiekben ne okozzon a szervezetének extra
          terhelést a lépcsőzés. Az új lift hosszabb idő alatt kisebb
          karbantartási költségeket jelenthet, és tovább biztosíthatja szerettei
          önállóságát.
        </p>
      </>
    ),
  },
  {
    question: "Mitől különleges a lépcsőlift?",
    answer: (
      <>
        <p>
          Lehetővé teszi, hogy a csökkent mozgásképességű személyek is
          biztonságosan és önállóan használhassák a lépcsőket. Egy egyszerű és
          kényelmes ülőfelülettel felszerelt eszköz, ami az akkumulátoros
          meghajtásnak köszönhetően még áramszünet esetén is működik.
        </p>
      </>
    ),
  },
  {
    question:
      "Használható-e a lépcső mások számára is, miután a lépcsőlift beszerelésre került?",
    answer: (
      <>
        <p>
          Igen, lépcsőliftünk tervezésekor különös figyelmet fordítunk arra,
          hogy mások is kényelmesen használhassák a lépcsőt. A sín alapból is
          csak csekély mértékben foglalja el a lépcsőt, a gép része úgy van
          kialakítva, hogy összecsukva minimális helyet foglaljon el.
        </p>
      </>
    ),
  },
  {
    question: "Kültéri szerelések",
    answer: (
      <>
        <p>Téli, nyári kihívások?</p>
        <p>
          Az időjárás nehézségei nem jelentenek akadályt, ha kültéri
          lépcsőliftjeinket választja. Ezek a megbízható, vízálló és
          csúszásmentes felületű liftek tökéletes megoldást kínálnak szerettei
          számára, biztonságos közlekedést még a mostoha időjárási körülmények
          között is.
        </p>
        <p>Erős & Vízálló – ellenáll a szélsőséges időjárási viszonyoknak.</p>
        <p>
          Biztonságos & Kényelmes – csúszásmentes felületekkel a maximális
          biztonságért!
        </p>
        <p>
          Ideális Otthoni Megoldás – tökéletes illeszkedés az otthoni
          környezethez.{" "}
        </p>
      </>
    ),
  },
  {
    question: "Hogyan kell tisztítani a széklifteket",
    answer: (
      <>
        <h5>Egyszerű tippek a tökéletes állapot megőrzéséhez </h5>
        <p>
          A lépcsőliftek kiváló segítséget nyújtanak a lépcsőn való közlekedés
          esetén, de ne feledjük, hogy mint minden mechanikus berendezés, a
          lépcsőliftek is rendszeres karbantartást és tisztítást igényelnek. Íme
          néhány egyszerű tipp, hogy lépcsőliftje hosszú ideig megbízhatóan
          működjön!
        </p>
        <h5>Tisztítás gyakorisága:</h5>
        <p>
          A lépcsőliftet (a pályát és az ülést) rendszeresen tisztítani kell,
          hogy elkerüljük a por felhalmozódását. Legyen heti vagy kétheti
          takarítási rutinunk része! Ezt nedves mosószeres ruhával könnyedén
          megoldható.
        </p>
        <p>
          A tisztítás mellett időszakos megelőző karbantartás is ajánlott.
          Éppúgy, ahogy az autónkat sem hanyagoljuk el egy évnél tovább,
          ügyeljünk lépcsőliftünk éves „ellenőrzéseire” helyi szakemberrel.
        </p>
        <p>
          A rendszeres tisztítás és karbantartás hozzájárul a lépcsőlift hosszú
          élettartamához és megbízható működéséhez.{" "}
        </p>
        <p>
          Gondoskodjon lépcsőliftjéről, hogy az mindig a legjobb állapotban
          legyen!
        </p>
      </>
    ),
  },
  {
    question: "Mennyi áramot fogyaszt?",
    answer: (
      <>
        <p>
          A lépcsőliftek alapból akkumulátoros meghajtással működik. Ugyanakkor
          fontos, hogy ezeket az akkukat folyamatosan után töltse a rendszer
          automatikusan. Ezt a sínen elhelyezett töltés csatlakozó segítségével
          teszi. Ez azt jelenti, hogy a telepítéshez szükség van hálózati
          feszültségre, egy konnektorra. Ebbe a konnektorba helyezzük a töltőt,
          hogy biztosítsuk a géphez szükséges elektromos ellátást. Ezek után a
          töltéssel nem kell Önnek foglalkozni, ezt a gép automatikusan elvégzi.
        </p>
        <p>
          Ezért amikor lépcsőliftet szereltet otthonába, nem kell aggódnia a
          magas áramfogyasztás miatt.{" "}
        </p>
        <p>
          Ezek a modern eszközök rendkívül energiatakarékosak. A lépcsőliftek
          akkumulátorral működnek, így áramszünet esetén is használhatóak, és
          kézi vezérléssel vagy távirányítóval egyaránt kezelhetőek.{" "}
        </p>
        <p>
          Érdekesség, hogy a töltőjük áramfogyasztása nagyjából megegyezik egy
          átlagos telefontöltőével, tehát nem fogja számottevően megnövelni az
          áramszámláját.
        </p>
        <p>
          Ez azt jelenti, hogy a lépcsőlift nemcsak a mozgás megkönnyítésére
          szolgál, hanem az energiaköltségeket is alacsonyan tartja, miközben
          biztosítja az önálló és kényelmes életvitelt otthonában.
        </p>
      </>
    ),
  },
  {
    question: "Igényelhető valamilyen támogatás?",
    answer: (
      <>
        <h5>
          Fontolgatja a lépcsőlift beszerelését, de nem biztos a
          finanszírozásban?{" "}
        </h5>
        <p>
          Jó hírünk van! Bár a lépcsőliftek nem szerepelnek a TB listáján, van
          lehetőség Lakás Átalakítási támogatás igénylésére, amennyiben orvosi
          indoklás áll rendelkezésre.
        </p>
        <h5>Mit Kell Tudni a Támogatásról?</h5>
        <h5>Támogatás összege: </h5>
        <p>
          Akár 300.000 Ft támogatást is igényelhet, amely jelentős segítséget
          nyújthat a lépcsőlift beszereléséhez.
        </p>
        <h5>Igénylési folyamat: </h5>
        <p>
          A támogatást az OTP-nél kell megigényelni, megfelelő orvosi
          dokumentáció bemutatásával.
        </p>
        <h5>Eljárás időzítése:</h5>
        <p>
          {" "}
          A támogatási eljárást a beszerelés előtt kell elindítani, utólagos
          finanszírozásra nincs lehetőség.
        </p>
        <p>
          Ha Ön is lépcsőlift beszerelésén gondolkodik, érdemes megfontolnia a
          Lakás Átalakítási Támogatás igénylését. Jelentős segítséget nyújthat a
          finanszírozásban, és megkönnyítheti az eljárást.
        </p>
      </>
    ),
  },
];

const Gyik = () => {
  return (
    <main>
      <Seo
        title={"Gyakori kérdések | Liftech.hu"}
        description={
          "Ez oldal választ próbál adni az összes, tőlünk gyakran kérdezett kérdésekre."
        }
        robots={
          "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        }
      />

      <PageHero
        kicker="Gyakori kérdések"
        title="Válaszaink, hogy segítsük"
        highlight="eligazodni"
        lead="Összegyűjtöttük a lépcsőliftekkel kapcsolatban leggyakrabban felmerülő kérdéseket: telepítés, méretek, terhelhetőség, karbantartás és támogatás."
      />

      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto flex max-w-c-1390 flex-col gap-12 px-4 md:px-8 lg:flex-row lg:items-start lg:gap-16 2xl:px-0">
          {/* Accordion: native <details>, so it works without JavaScript and
              is keyboard accessible. The first question starts open. */}
          <div className="card-top min-w-0 lg:flex-1">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                open={index === 0}
                className="group border-b border-line last:border-none"
              >
                <summary className="flex cursor-pointer list-none items-center gap-5 px-5 py-5 transition-colors hover:bg-mist sm:px-8 sm:py-6 [&::-webkit-details-marker]:hidden">
                  <span className="w-8 shrink-0 font-display text-2xl font-bold text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-display text-xl font-bold uppercase tracking-wide text-navy sm:text-2xl">
                    {faq.question}
                  </span>
                  <span
                    className="relative flex h-10 w-10 shrink-0 items-center justify-center bg-navy text-white transition-colors group-open:bg-accent"
                    aria-hidden="true"
                  >
                    <span className="absolute h-0.5 w-4 bg-current" />
                    <span className="absolute h-4 w-0.5 bg-current transition-transform duration-300 group-open:rotate-90 group-open:opacity-0" />
                  </span>
                </summary>
                <div className="faq-answer px-5 pb-8 sm:pl-[5.25rem] sm:pr-8">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          {/* Contact panel, stays in view while scrolling the questions. */}
          <aside className="relative bg-navy p-8 text-white before:absolute before:left-0 before:top-0 before:h-1.5 before:w-full before:bg-accent lg:sticky lg:top-28 lg:w-[340px] lg:shrink-0 xl:w-[380px] xl:p-10">
            <h2 className="mb-4 font-display text-3xl font-bold uppercase leading-none xl:text-sectiontitle4">
              Nem találta a választ?
            </h2>
            <p className="mb-8 text-white/75">
              Küldjön nekünk képet és méreteket a lépcsőről, vagy hívjon minket,
              és segítünk megtalálni a legjobb megoldást.
            </p>
            <div className="flex flex-col gap-3">
              <Link
                to="/kapcsolat"
                className="inline-flex items-center justify-center bg-white px-6 py-3 font-display text-xl font-semibold uppercase tracking-wider text-navy duration-300 hover:bg-accent hover:text-white"
              >
                Írjon nekünk
              </Link>
              <a
                href="tel:+36301495552"
                className="inline-flex items-center justify-center border-2 border-white/40 px-6 py-2.5 font-display text-xl font-semibold uppercase tracking-wider text-white duration-300 hover:border-white"
              >
                +36 30 149 5552
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default Gyik;
