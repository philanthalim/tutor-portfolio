import AboutSection from "./components/organisms/AboutSection";
import ContactSection from "./components/organisms/ContactSection";
import HeroSection from "./components/organisms/HeroSection";
import Highlights from "./components/organisms/Highlights";
import RatesSection from "./components/organisms/RatesSection";
import ResultsSection from "./components/organisms/ResultsSection";
import SiteFooter from "./components/organisms/SiteFooter";
import SiteHeader from "./components/organisms/SiteHeader";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <Highlights />
        <AboutSection />
        <RatesSection />
        <ResultsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
