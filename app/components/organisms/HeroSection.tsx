import ButtonLink from "../atoms/ButtonLink";
import Eyebrow from "../atoms/Eyebrow";

export default function HeroSection() {
  return (
    <section className="wrap hero" id="top">
      <div>
        <Eyebrow>Mathematics tuition · Bukit Panjang</Eyebrow>
        <h1>
          Build confidence.
          <br />
          <em>Understand the why.</em>
        </h1>
        <p>
          Patient, encouraging Mathematics tuition for Secondary 1 to 4
          students. Lessons focus on clear reasoning, strong foundations and
          the confidence to tackle unfamiliar questions—not just memorising
          steps.
        </p>
        <div className="actions">
          <ButtonLink href="#contact" variant="primary">
            Discuss your child’s goals ↗
          </ButtonLink>
          <ButtonLink href="#results" variant="secondary">
            Explore student results
          </ButtonLink>
        </div>
        <p className="micro">📍 Home tuition in Bukit Panjang, near Senja LRT</p>
      </div>
      <aside className="hero-card">
        <div className="quote-mark">“</div>
        <blockquote>
          When students understand the reasoning behind a method, they can use
          it with confidence—even when the question looks different.
        </blockquote>
        <div className="small">
          A supportive, step-by-step approach to Mathematics
        </div>
      </aside>
    </section>
  );
}
