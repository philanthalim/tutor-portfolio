import StatCard from "../molecules/StatCard";

export default function Highlights() {
  return (
    <div aria-label="Tutor highlights" className="wrap stats">
      <StatCard description="of tutoring experience" value="8 years" />
      <StatCard
        description="Mathematical Science, Statistics"
        value="NTU"
      />
      <StatCard
        description="Mathematics & Additional Mathematics"
        value="Sec 1–4"
      />
    </div>
  );
}
