import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const MAX_TOTAL_BYTES = 5 * 1024 * 1024;

const fieldClass =
  "w-full min-w-0 border border-line bg-white px-4 py-3.5 text-base text-ink placeholder:text-slate/70 focus:border-navy focus-visible:outline-none";

// showDetails=false hides the address/email/phone column (used on the
// Kapcsolat page, whose header already shows them) and widens the form.
const Contact = ({ showDetails = true }: { showDetails?: boolean }) => {
  const navigate = useNavigate();
  const [sending, setSending] = useState(false);
  const [fileNames, setFileNames] = useState<string[]>([]);

  const onFileUploadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    const total = files.reduce((sum, f) => sum + f.size, 0);
    if (total > MAX_TOTAL_BYTES) {
      toast.error("A csatolt képek együttes mérete legfeljebb 5 MB lehet");
      e.target.value = "";
      setFileNames([]);
      return;
    }
    setFileNames(files.map((f) => f.name));
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
      <section id="support" className="relative isolate px-4 pb-20 md:px-8 lg:pb-25 2xl:px-0">
        {/* Full-width grey band continuing the grey section above (About on
            the home page, the page header on Kapcsolat), so the top of the
            form card sits on it with no white gap in between. With the
            details column it is taller, so the column stays on grey. */}
        <div
          className={`absolute inset-x-0 top-0 -z-1 bg-mist ${
            showDetails ? "h-2/3" : "h-40 md:h-56"
          }`}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-c-1390 sm:px-7.5 lg:px-15 xl:px-20">
          <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
            <div
              className={`animate_top card-top w-full min-w-0 p-5 sm:p-8 xl:p-15 ${
                showDetails ? "md:w-3/5 lg:w-3/4" : "mx-auto max-w-c-1016"
              }`}
            >
              <h2 className="mb-8 font-display text-3xl font-bold uppercase text-navy sm:text-4xl md:mb-12.5 xl:text-sectiontitle2">
                Küldjön üzenetet nekünk!
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <p hidden>
                  <label>
                    Ne töltse ki:{" "}
                    <input name="bot-field" tabIndex={-1} autoComplete="off" />
                  </label>
                </p>
                <div className="grid gap-5 sm:grid-cols-2">
                  <input
                    type="text"
                    required
                    placeholder="Teljes név"
                    name="name"
                    autoComplete="name"
                    className={fieldClass}
                  />
                  <input
                    type="email"
                    placeholder="Email cím"
                    name="email"
                    autoComplete="email"
                    required
                    className={fieldClass}
                  />
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Tárgy"
                    className={fieldClass}
                  />
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Telefonszám"
                    autoComplete="tel"
                    className={fieldClass}
                  />
                </div>

                <textarea
                  placeholder="Üzenet"
                  required
                  name="message"
                  rows={5}
                  className={`${fieldClass} resize-y`}
                  maxLength={300}
                ></textarea>

                <div>
                  <label
                    htmlFor="photos"
                    className="flex cursor-pointer flex-col items-center gap-2 border-2 border-dashed border-line bg-mist px-4 py-6 text-center transition-colors focus-within:border-navy hover:border-navy"
                  >
                    <span className="font-display text-xl font-semibold uppercase tracking-wider text-navy">
                      Képek feltöltése
                    </span>
                    <span className="text-sm">
                      Töltsön fel képeket a lépcsőjéről (PNG, JPG vagy JPEG
                      formátumban, együtt legfeljebb 5 MB)
                    </span>
                    <input
                      multiple
                      type="file"
                      id="photos"
                      name="files"
                      className="sr-only"
                      onChange={onFileUploadChange}
                      accept=".png, .jpeg, .jpg, .heic, .heif"
                    />
                  </label>
                  {fileNames.length > 0 && (
                    <ul className="mt-3 flex flex-col gap-1 text-sm text-ink">
                      {fileNames.map((name, i) => (
                        <li key={`${name}-${i}`} className="break-all">
                          {name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <label
                    htmlFor="default-checkbox"
                    className="flex min-w-0 cursor-pointer select-none gap-3"
                  >
                    <input
                      required
                      id="default-checkbox"
                      type="checkbox"
                      className="peer sr-only"
                    />
                    <span className="group mt-1 flex h-5 w-5 shrink-0 items-center justify-center border border-line bg-white peer-checked:border-navy peer-checked:bg-navy peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-accent">
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
                    <span className="min-w-0">
                      Elfogadom az{" "}
                      <a
                        className="font-medium text-navy underline hover:text-accent"
                        href="/adatvedelem"
                      >
                        adatkezelési feltételeket*
                      </a>
                    </span>
                  </label>
                  <button
                    type="submit"
                    disabled={sending}
                    aria-label="üzenet küldése"
                    className="inline-flex w-full items-center justify-center gap-2.5 bg-navy px-8 py-3.5 font-display text-xl font-semibold uppercase tracking-wider text-white duration-300 ease-in-out hover:bg-accent disabled:opacity-60 sm:w-auto"
                  >
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
            </div>

            {showDetails && (
              <div className="animate_top w-full min-w-0 px-5 pb-2 sm:px-8 md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15">
                <h2 className="mb-8 font-display text-3xl font-bold uppercase text-navy sm:text-4xl md:mb-12.5 xl:text-sectiontitle2">
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
                    <a
                      href="mailto:liftechgroupkft@gmail.com"
                      className="break-all"
                    >
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
              </div>
            )}
          </div>
        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default Contact;
