import SkipLink from "../atoms/SkipLink";

export default function SiteHeader() {
  return (
    <>
      <SkipLink />
      <header className="wrap nav">
        <a className="brand" href="#top" style={{ textDecoration: "none" }}>
          Maths <span>with Purpose.</span>
        </a>
        <nav aria-label="Main navigation" className="navlinks">
          <a href="#about">About</a>
          <a href="#rates">Rates</a>
          <a href="#results">Student results</a>
          <a className="cta" href="#contact">
            Enquire about tuition
          </a>
        </nav>
      </header>
    </>
  );
}
