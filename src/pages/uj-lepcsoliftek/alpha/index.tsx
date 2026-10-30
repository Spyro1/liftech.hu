import Seo from "@/lib/seo";
import { Link } from "react-router-dom";

const SingleBlogPage = () => {
  return (
    <>
      <Seo title={"Alpha lépcsőlift | Liftech.hu"} description={"Ez az oldal bemutatja az Alpha nevezetű kanyarodó lépcsőre helyezhető lépcsőliftet"} robots={"follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"} />
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              <div className="animate_top mb-10 border border-line border-t-4 border-t-navy bg-white p-9">
                <h4 className="mb-7.5 font-display text-3xl font-bold uppercase tracking-wide text-navy">
                  Technikai információk
                </h4>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Rakodóképesség:</h5>
                <p className="mb-5">130kg (opcionálisan 145kg)</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Lehetséges meredekség:</h5>
                <p className="mb-5">0 – 52°</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Motor:</h5>
                <p className="mb-5">24 V DC, akkumulátorral működik</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Sebesség:</h5>
                <p className="mb-5">0,06 – 0,12 m/s</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Meghajtási rendszer:</h5>
                <p className="mb-5">Fogasléc és fogaskerék</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Tápellátás:</h5>
                <p className="mb-5">1 x 230 V / 50-60 Hz</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Alkalmazás:</h5>
                <p className="mb-5">Lakossági, beltéri vagy kültéri</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Összecsukható szélesség:</h5>
                <p className="mb-5">37 cm</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Kihajtható szélesség:</h5>
                <p className="mb-5">64,5 cm</p>
                <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Sínrendszer:</h5>
                <p className="mb-5">44,5 mm-es porszórt acélcsőprofilok</p>
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top border border-line border-t-4 border-t-navy bg-white p-7.5 md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <img
                      src={"/images/termekek/alpha/alpha2.webp"}
                      alt="Alpha lépcsőliftről egy példa kép"
                      
                      className="absolute inset-0 h-full w-full object-cover object-center" loading="lazy" />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 font-display text-4xl font-bold uppercase text-navy 2xl:text-sectiontitle2">
                  Alpha - a széklift az íves lépcsőkhöz
                </h2>
                <div className="blog-details">
                  <p>
                  Az Alpha lépcsőlift megszünteti a lépcső akadályát, azoknál a lépcső típusoknál, ahol az Essental(Egyenes) típus nem alkalmazható. Biztonságos és könnyű hozzáférést biztosít más szintekre, ezt a lépcsőliftet kanyarodó lépcsőkre, közbenső lépcsőfokokra, vagy akár akkor is, ha diszkrét, az úttesten kívüli parkolásra van szükség.
                  </p>

                  <p>
                    Sima vezetés, kényelmes és megbízható; az Alpha lépcsőlift dupla sínrendszerrel rendelkezik az erősség és a tartósság érdekében.
                  </p>
                  <p>
A pontos számítógépes tervezés révén minden sínünket az Ön lépcsőjének pontos specifikációjára hajlítjuk, és a szék a műszaki és tervezési lehetőségek széles választékát kínálja.
                  </p>
                 <div className="">
                    <Link
                  to="/kapcsolat"
                  className="items-center justify-center bg-navy px-7.5 py-3 font-display text-xl font-semibold uppercase tracking-wider text-white duration-300 ease-in-out hover:bg-accent"
                    >
                    Tudjon meg többet! 
                    </Link>

                  <div className="flex mt-10 flex-wrap gap-5">
                    <img
                      src={"/images/termekek/alpha/alpha3.webp"}
                      width={350}
                      height={200}
                      alt="Az alpha lépcsőliftről egy alternatív kép" loading="lazy" />
                    <img
                      src={"/images/termekek/alpha/alpha1.webp"}
                      width={350}
                      height={200}
                      alt="Egy másik kép az alpha liftről" loading="lazy" />
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
