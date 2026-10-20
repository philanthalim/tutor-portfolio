import ButtonLink from "../atoms/ButtonLink";
import Eyebrow from "../atoms/Eyebrow";

export default function ContactSection() {
  return (
    <section className="contact" id="contact">
      <div className="wrap contact-grid">
        <div>
          <Eyebrow>Let’s talk</Eyebrow>
          <div className="section-head">
            <h2>Help your child take the next step.</h2>
            <p>
              Share your child’s level, subject and learning goals, and we can
              discuss whether the lessons are a good fit.
            </p>
          </div>
          <p>📍 Bukit Panjang, near Senja LRT</p>
        </div>
        <div className="contact-card">
          <div className="smallcaps">Tuition enquiry</div>
          <h3>Start with a conversation</h3>
          <p>
            Tell me your child’s level, subject and learning goals. I’ll be happy
            to discuss whether tuition is a good fit.
          </p>
          <p>
            <strong>Rates</strong>
            <br />
            Secondary 1–2: $60/hour
            <br />
            Secondary 3–4: $65/hour
          </p>
          <div className="contact-actions">
            <ButtonLink
              ariaLabel="Contact Philantha on WhatsApp"
              external
              href="https://wa.me/6588904930?text=Hi%2C%20I%27m%20enquiring%20about%20Mathematics%20tuition."
              variant="whatsapp"
            >
              Contact via WhatsApp ↗
            </ButtonLink>
            <ButtonLink
              href="mailto:philanthalim@outlook.com?subject=Mathematics%20tuition%20enquiry"
              variant="email"
            >
              Email me ↗
            </ButtonLink>
          </div>
          <p className="note">Email: philanthalim@outlook.com</p>
        </div>
      </div>
    </section>
  );
}
