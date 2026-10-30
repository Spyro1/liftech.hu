import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const MAX_TOTAL_BYTES = 5 * 1024 * 1024;

const Contact = () => {
  const navigate = useNavigate();
  const [sending, setSending] = useState(false);

  const onFileUploadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const total = Array.from(e.target.files ?? []).reduce(
      (sum, f) => sum + f.size,
      0,
    );
    if (total > MAX_TOTAL_BYTES) {
      toast.error("A csatolt képek együttes mérete legfeljebb 5 MB lehet");
      e.target.value = "";
    }
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: new FormData(e.currentTarget),
      });
      navigate(res.ok ? "/confirmation" : "/error");
    } catch {
      navigate("/error");
    }
  };
  return (
    <>
      {/* <!-- ===== Contact Start ===== --> */}
      <section id="support" className="px-4 md:px-8 2xl:px-0">
        <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full bg-mist"></div>
          <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full border border-t-4 border-line border-t-navy bg-white p-7.5 md:w-3/5 lg:w-3/4 xl:p-15"
            >
              <h2 className="mb-15 font-display text-4xl font-bold uppercase text-navy xl:text-sectiontitle2">
                Küldjön üzenetet nekünk!
              </h2>

              <form onSubmit={handleSubmit}>
                <p hidden>
                  <label>
                    Ne töltse ki:{" "}
                    <input name="bot-field" tabIndex={-1} autoComplete="off" />
                  </label>
                </p>
                <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    required
                    placeholder="Teljes név"
                    name="name"
                    className="w-full border-b border-line bg-transparent pb-3.5 text-ink focus:border-navy focus:placeholder:text-ink focus-visible:outline-none lg:w-1/2"
                  />

                  <input
                    type="email"
                    placeholder="Email cím"
                    name="email"
                    required
                    className="w-full border-b border-line bg-transparent pb-3.5 text-ink focus:border-navy focus:placeholder:text-ink focus-visible:outline-none lg:w-1/2"
                  />
                </div>
                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Tárgy"
                    className="w-full border-b border-line bg-transparent pb-3.5 text-ink focus:border-navy focus:placeholder:text-ink focus-visible:outline-none lg:w-1/2"
                  />

                  <input
                    type="text"
                    name="phone"
                    required
                    placeholder="Telefonszám"
                    className="w-full border-b border-line bg-transparent pb-3.5 text-ink focus:border-navy focus:placeholder:text-ink focus-visible:outline-none lg:w-1/2"
                  />
                </div>

                <div className="mb-11.5 flex">
                  <textarea
                    placeholder="Üzenet"
                    required
                    name="message"
                    rows={4}
                    className="w-full border-b border-line bg-transparent text-ink focus:border-navy focus:placeholder:text-ink focus-visible:outline-none"
                    maxLength={300}
                  ></textarea>
                </div>
                <div className="grid-row-2 grid-col-1 mb-6 grid gap-3 ">
                  <label htmlFor="photos">
                    Töltsön föl képeket a lépcsőjéről (PNG, JPG vagy JPEG
                    formátumban, együtt legfeljebb 5 MB):
                  </label>
                  <input
                    multiple
                    type="file"
                    id="photos"
                    name="files"
                    onChange={onFileUploadChange}
                    accept=".png, .jpeg, .jpg, .heic, .heif"
                  />
                </div>
                <div className="flex flex-wrap gap-4 xl:justify-between ">
                  <div className="mb-4 flex md:mb-0">
                    <label
                      htmlFor="default-checkbox"
                      className="flex max-w-[425px] cursor-pointer select-none gap-4 pl-5"
                    >
                      <input
                        required
                        id="default-checkbox"
                        type="checkbox"
                        className="peer sr-only"
                      />
                      <span className="group mt-2 flex h-5 min-w-[20px] items-center justify-center border border-line bg-white peer-checked:border-navy peer-checked:bg-navy peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-accent">
                        <svg
                          className="opacity-0 peer-checked:group-[]:opacity-100"
                          width="10"
                          height="8"
                          viewBox="0 0 10 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.70704 0.792787C9.89451 0.980314 9.99983 1.23462 9.99983 1.49979C9.99983 1.76495 9.89451 2.01926 9.70704 2.20679L4.70704 7.20679C4.51951 7.39426 4.26521 7.49957 4.00004 7.49957C3.73488 7.49957 3.48057 7.39426 3.29304 7.20679L0.293041 4.20679C0.110883 4.01818 0.0100885 3.76558 0.0123669 3.50339C0.0146453 3.24119 0.119814 2.99038 0.305222 2.80497C0.490631 2.61956 0.741443 2.51439 1.00364 2.51211C1.26584 2.50983 1.51844 2.61063 1.70704 2.79279L4.00004 5.08579L8.29304 0.792787C8.48057 0.605316 8.73488 0.5 9.00004 0.5C9.26521 0.5 9.51951 0.605316 9.70704 0.792787Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      <span className="items-center justify-center">
                        {" "}
                        Elfogadom az{" "}
                        <a
                          className="font-medium text-navy underline hover:text-accent"
                          href="/adatvedelem"
                        >
                          adatkezelési feltételeket*
                        </a>
                      </span>
                    </label>
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    aria-label="üzenet küldése"
                    className="inline-flex items-center gap-2.5 bg-navy px-8 py-3 font-display text-xl font-semibold uppercase tracking-wider text-white duration-300 ease-in-out hover:bg-accent disabled:opacity-60"
                  >
                    {" "}
                    Küldés
                    <svg
                      className="fill-white"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                        fill=""
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15"
            >
              <h2 className="mb-12.5 font-display text-4xl font-bold uppercase text-navy xl:text-sectiontitle2">
                Kapcsolat
              </h2>

              <div className="5 mb-7">
                <h3 className="mb-4 text-metatitle font-semibold uppercase tracking-[0.3em] text-navy">
                  Cím
                </h3>
                <p>2040 Budaörs Ébner György utca 4.</p>
              </div>
              <div className="5 mb-7">
                <h3 className="mb-4 text-metatitle font-semibold uppercase tracking-[0.3em] text-navy">
                  Email cím
                </h3>
                <p>
                  <a href="mailto:liftechgroupkft@gmail.com">
                    liftechgroupkft@gmail.com
                  </a>
                </p>
              </div>
              <div>
                <h4 className="mb-4 text-metatitle font-semibold uppercase tracking-[0.3em] text-navy">
                  Telefonszám
                </h4>
                <p>
                  <a href="tel:+36301495552">+36 30 149 5552</a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default Contact;
