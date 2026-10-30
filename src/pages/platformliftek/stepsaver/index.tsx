import Seo from "@/lib/seo";
import { Link } from "react-router-dom";

const SingleBlogPage = () => {
    return (
        <>
      <Seo title={"StepSaver lépcsőlift | Liftech.hu"} description={"Ez az oldal bemutatja a StepSaver nevezetű lépcsőliftet"} robots={"follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"} />
        <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
        <div className="md:w-1/2 lg:w-[32%]">
        <div className="animate_top mb-10 border border-line border-t-4 border-t-navy bg-white p-9">
        <h4 className="mb-7.5 font-display text-3xl font-bold uppercase tracking-wide text-navy">
        Technikai információk
        </h4>
        <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Max. emelési magasság:</h5>
        <p className="mb-5">0,5 m</p>
        <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Rakodóképesség:</h5>
        <p className="mb-5">250kg</p>
        <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Súly::</h5>
        <p className="mb-5">150kg</p>
        <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Méretek:</h5>
        <p className="mb-0">Belső: 780 x 1040 mm</p>
        <p className="mb-5">Külső: 940 x 1110 mm</p>
        <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Sebesség:</h5>
        <p className="mb-5">18 mm/s</p>
        <h5 className="text-xl font-semibold uppercase tracking-wide text-navy" >Vészhelyzeti áramellátás:</h5>
        <p className="mb-5">Igen</p>
        </div>
        </div>

        <div className="lg:w-2/3">
        <div className="animate_top border border-line border-t-4 border-t-navy bg-white p-7.5 md:p-10">
        <div className="mb-10 w-full overflow-hidden ">
        <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
        <img
        src={"/images/termekek/step/stepsaver3.webp"}
        alt="StepSaver lifről egy példa kép"
        
        className="absolute inset-0 h-full w-full object-cover object-center" loading="lazy" />
        </div>
        </div>

        <h2 className="mb-5 mt-11 font-display text-4xl font-bold uppercase text-navy 2xl:text-sectiontitle2">StepSaver - a lift alacsony szintkülönbségekhez</h2>
        <div className="blog-details">
        <p>A StepSaver az egyetlen lift a piacon, amely akár két stabil, integrált áthidaló lépcsővel rendelkezik. Ahogy a neve is sugallja, a lépcsők használhatóságát nem befolyásolja. Az innovatív lift gyors és költséghatékony alternatívát kínál az utólagos átalakításokhoz, különösen magánlakásokban.</p>

        <p>Főbb jellemzők:</p>
        <ul>
        <li>Egyszerű mobilitási megoldás meglévő lépcsőkhöz</li>
        <li>A gyalogosok továbbra is használhatják a lépcsőket</li>
        <li>Nincs szükség építési módosításokra*</li>
        <li>Gyors telepítés kevesebb mint két óra alatt</li>
        <li>Különböző lépcsőmagasságokhoz igazítható</li>
        </ul>
        <p>*A standard padlófelület csúszásmentes PVC. Az egyedi padlóburkolatok helyszíni testreszabást igényelnek.</p>

        <div className="">
        <Link
        to="/kapcsolat"
        className="items-center justify-center bg-navy px-7.5 py-3 font-display text-xl font-semibold uppercase tracking-wider text-white duration-300 ease-in-out hover:bg-accent"
        >
        Tudjon meg többet! 
                    </Link>

                  <div className="flex mt-10 flex-wrap gap-5">
                    <img
                      src={"/images/termekek/step/stepsaver1.webp"}
                      width={350}
                      height={200}
                      alt="A StepSaver lépcsőliftről egy alternatív kép" loading="lazy" />
                    <img
                      src={"/images/termekek/step/stepsaver2.webp"}
                      width={350}
                      height={200}
                      alt="Egy másik kép a StepSaver liftről" loading="lazy" />
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
