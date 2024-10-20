import Hero from "@/layout/Hero";
import Introduction from "@/layout/Introduction";
import QuickFacts from "@/layout/QuickFacts";
import CityTabs from "@/layout/CityTabs";
import Education from "@/layout/Education";
import Culture from "@/layout/Culture";
import Gallery from "@/layout/Gallery";
import CallToAction from "@/layout/CallToAction";
import Footer from "@/layout/Footer";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <Introduction />
        <QuickFacts />
        <CityTabs />
        <Education />
        <Culture />
        <Gallery />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default App;
