import RateCard from "../molecules/RateCard";
import SectionHeading from "../molecules/SectionHeading";

export default function RatesSection() {
  return (
    <section className="pricing" id="rates">
      <div className="wrap">
        <SectionHeading eyebrow="Straightforward rates" title="Tuition fees">
          One-to-one home tuition in Bukit Panjang, near Senja LRT.
        </SectionHeading>
        <div className="pricing-grid">
          <RateCard level="Secondary 1–2" rate="$60">
            Mathematics support to strengthen foundations, build confidence and
            develop good problem-solving habits.
          </RateCard>
          <RateCard level="Secondary 3–4" rate="$65">
            Mathematics and Additional Mathematics support, including assessment
            practice and O-Level preparation.
          </RateCard>
        </div>
        <p className="note">
          Please enquire to discuss availability, lesson frequency and your
          child’s learning goals.
        </p>
      </div>
    </section>
  );
}
