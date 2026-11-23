import StairSteps from "./StairSteps";

type HeaderInfo = {
  title: string;
  subtitle: string;
  description: string;
};

const SectionHeader = ({ headerInfo }: { headerInfo: HeaderInfo }) => {
  const { title, subtitle, description } = headerInfo;

  return (
    <>
      {/* <!-- Section Title Start --> */}
      <div
        className="animate_top mx-auto text-center"
      >
        <div className="mb-4 inline-flex items-center gap-3">
          <StairSteps className="text-navy" />
          <span className="text-metatitle font-semibold uppercase tracking-[0.3em] text-navy">
            {title}
          </span>
        </div>
        <h2 className="mx-auto mb-4 font-display text-4xl font-bold uppercase leading-none text-navy md:w-4/5 xl:w-1/2 xl:text-sectiontitle3">
          {subtitle}
        </h2>
        <p className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%]">{description}</p>
      </div>
      {/* <!-- Section Title End --> */}
    </>
  );
};

export default SectionHeader;
