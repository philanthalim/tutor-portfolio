export default function SiteFooter() {
  return (
    <footer className="wrap footer">
      <div>
        © <span id="yearNow">{new Date().getFullYear()}</span> Maths with
        Purpose.
      </div>
      <span>Patient teaching · Clear reasoning · Steady progress</span>
    </footer>
  );
}
