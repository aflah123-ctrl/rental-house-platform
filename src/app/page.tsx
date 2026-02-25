import Hero from "../components/Hero";
import HouseSection from "../components/HouseSection";
import FeaturesBlock from "../components/FeaturesBlock";
import CallToAction from "../components/CallToAction";

export default function Home() {
  return (
    <main>
      <Hero />

      <HouseSection
        title="Featured Properties"
        subtitle="Explore our hand-picked selection of premier real estate opportunities."
      />

      <FeaturesBlock />
      <CallToAction />
    </main>
  );
}