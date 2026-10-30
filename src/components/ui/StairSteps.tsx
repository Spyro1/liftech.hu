// Logo motif: three tiles stepping diagonally. Styled by `.stair-steps` in index.css,
// colored with the surrounding text color (e.g. `text-navy` or `text-white`).
const StairSteps = ({ className = "" }: { className?: string }) => (
  <span className={`stair-steps ${className}`} aria-hidden="true">
    <span />
  </span>
);

export default StairSteps;
